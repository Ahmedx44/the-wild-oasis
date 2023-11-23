import supabase {supabaseUrl} from "./supabase";

export async function getCabin() {
  let { data: cabins, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("cabins could not be loaded");
  }
  return cabins;
}

export async function deleteCabin(id) {
  const { error, cabins } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("cabins could not be deletes");
  }
  return cabins;
}

export async function createCabin(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabins-images/${imageName}`;
  //https://ddvfwkqlzcbisndbewya.supabase.co/storage/v1/object/public/cabins-images/cabin-001.jpg

  //1.Create a cabin
  const { data, error } = await supabase.from("cabins").insert({...newCabin,image:imagePath});

  if (error) {
    console.error(error);
    throw new Error("cabins could not be created");
  }

  return data;
}
