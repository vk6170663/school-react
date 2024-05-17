import supabase, { supabaseUrl } from "./supabase";

export async function getFeesType() {
  const { data, error } = await supabase.from("fee_type").select("*");

  if (error) {
    console.error(error);
    throw new Error("Fee type could not be loaded");
  }

  return data;
}

export async function createFee(newFee) {
  const { data, error } = await supabase.from("fee_type").insert([newFee]);

  if (error) {
    console.error(error);
    throw new Error("Fee type could not be created");
  }

  return data;
}
