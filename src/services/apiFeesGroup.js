import supabase from "./supabase";

export async function getFeesGroup() {
  const { data, error } = await supabase
    .from("fee group")
    .select("*", "feeType");

  if (error) {
    console.error(error);
    throw new Error("Fee group could not be loaded");
  }

  return data;
}

export async function createFeeGroup(newFeeGroup) {
  const { data, error } = await supabase.from("feeGroup").insert([newFeeGroup]);

  if (error) {
    console.error(error);
    throw new Error("Fee group could not be created");
  }

  return data;
}
