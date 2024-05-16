import supabase, { supabaseUrl } from "./supabase";

export async function getAllFeesType() {
  const { data, error } = await supabase.from("fee_type").select("*");

  if (error) {
    console.error(error);
    throw new Error("Fee type could not be loaded");
  }

  return data;
}

export async function createFee() {
  const { data, error } = await supabase
    .from("fee_type")
    .insert([{ some_column: "someValue", other_column: "otherValue" }])
    .select();
}
