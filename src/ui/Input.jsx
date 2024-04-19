const inputStyle = "border px-5 py-3 text-gray-700 text-sm";

export default function Input({ type, placeholder }) {
  return <input className={inputStyle} type={type} placeholder={placeholder} />;
}
