import supabase from "./supabase";

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
