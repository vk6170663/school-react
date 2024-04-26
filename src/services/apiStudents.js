import supabase from "./supabase";

export async function getStudents() {
  const { data, error } = await supabase.from("student").select("*");

  if (error) {
    console.error(error);
    throw new Error("Students could not be loaded");
  }

  return data;
}

export async function deleteStudent(id) {
  const { data, error } = await supabase.from("student").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Student could not be deleted");
  }

  return data;
}
