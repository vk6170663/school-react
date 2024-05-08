let style;

export default function Label({ children, htmlFor, type }) {
  switch (type) {
    case "addField":
      style = "text-gray-700 font-bold text-sm";
      break;

    default:
      style = "text-gray-700 font-bold text-sm pb-3";
      break;
  }

  return (
    <label htmlFor={htmlFor} className={style} type={type}>
      {children}
    </label>
  );
}
