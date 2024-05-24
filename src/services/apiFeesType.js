import supabase from "./supabase";

export async function getFeesType() {
  const { data, error } = await supabase.from("feeType").select("*");

  if (error) {
    console.error(error);
    throw new Error("Fee type could not be loaded");
  }

  return data;
}

export async function createFee(newFeeType) {
  const { data, error } = await supabase.from("feeType").insert([newFeeType]);

  if (error) {
    console.error(error);
    throw new Error("Fee type could not be created");
  }

  return data;
}

export async function deleteFee(id) {
  const { data, error } = await supabase.from("feeType").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Fee type could not be deleted");
  }

  return data;
}
