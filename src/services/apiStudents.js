import supabase, { supabaseUrl } from "./supabase";

export async function getStudents() {
  const { data, error } = await supabase.from("student").select("*");

  if (error) {
    console.error(error);
    throw new Error("Students could not be loaded");
  }
  return data;
}

export async function createEditStudent(newStudent, id) {
  const hasImagePath = newStudent.studentPhoto?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${
    newStudent.studentPhoto.name
  }`.replaceAll("/", "");
  const imagePath = hasImagePath
    ? newStudent.studentPhoto
    : `${supabaseUrl}/storage/v1/object/public/student-images/${imageName}`;

  // 1. Create/edit cabin
  let query = supabase.from("student");

  // A) CREATE
  if (!id) query = query.insert([{ ...newStudent, image: imagePath }]);

  // B) EDIT
  if (id)
    query = query.update({ ...newStudent, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Student could not be created");
  }

  // 2. Upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("student-images")
    .upload(imageName, newStudent.studentPhoto);

  // 3. Delete the cabin IF there was an error uplaoding image
  if (storageError) {
    await supabase.from("student").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Student image could not be uploaded and the student was not created"
    );
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
