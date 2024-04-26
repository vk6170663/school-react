let style = "";

export default function Input({ type, placeholder, id }) {
  switch (type) {
    case "file":
      style = "border border-gray-400 px-5 py-2.5 text-gray-700  text-sm";
      break;

    default:
      style = "border border-gray-400 px-5 py-3 text-gray-700  text-sm";
      break;
  }
  return (
    <input className={style} type={type} placeholder={placeholder} id={id} />
  );
}
