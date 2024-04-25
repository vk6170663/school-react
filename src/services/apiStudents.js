import supabase from "./supabase";

export async function getStudents() {
  const { data, error } = await supabase.from("student").select("*");

  if (error) {
    console.error(error);
    throw new Error("Students could not be loaded");
  }

  return data;
}
