import { labelDiv } from "../../ui/AddStudentStyle";
import Label from "../../ui/Label";

function FormRow({ label, error, children }) {
  return (
    <div className={labelDiv}>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <p>{error}</p>}
    </div>
  );
}

export default FormRow;
