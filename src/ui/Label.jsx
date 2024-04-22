import { Children } from "react";

const labelStyle = "text-gray-700 font-bold text-sm pb-3";

export default function Label({ children }) {
  return <label className={labelStyle}>{children}</label>;
}
