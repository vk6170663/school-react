const labelStyle = "text-gray-700 font-bold text-sm pb-3";

export default function Label({ labelText }) {
  return <label className={labelStyle}>{labelText}</label>;
}
