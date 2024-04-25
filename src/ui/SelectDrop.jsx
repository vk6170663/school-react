import { selectBorder } from "./AddStudentStyle";

export default function SelectDrop() {
  return (
    <select className={selectBorder}>
      <option value="">Academic year</option>
      <option value="">2024 [Jan-Dec]</option>
    </select>
  );
}
