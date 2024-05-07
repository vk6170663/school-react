const labelStyle = "text-gray-700 font-bold text-sm pb-3";

export default function Label({ children, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className={labelStyle}>
      {children}
    </label>
  );
}
