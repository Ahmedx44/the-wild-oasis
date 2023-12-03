import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("cabins could not be loaded");
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startstWith?.(supabaseUrl);

  const imageName = `${newCabin.image.name}`.replaceAll("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabins-images/${imageName}`;

  //1.Create/Edit Cabin
  let query = supabase.from("cabins");

  //A)CREATE
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  //B)EDIT
  if (id) query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("cabins could not be created");
  }

  //2. Upload image

  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("cabins-images")
    .upload(imageName, newCabin.image);

  //3.Delete the cabin IF there was an error uploading image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error("cabins image could be uploaded and cabin was no created");
  }

  return data;
}
export async function deleteCabin(id) {
  const { error, cabins } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("cabins could not be deletes");
  }
  return cabins;
}
