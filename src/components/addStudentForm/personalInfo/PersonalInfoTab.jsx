import AcademicInfo from "./AcademicInfo";
import ContactInfo from "./ContactInfo";
import MedicalInfo from "./MedicalInfo";
import PersonalInfo from "./PersonalInfo";

export default function PersonalInfoTab({ register }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <AcademicInfo register={register} />
      <PersonalInfo register />
      <ContactInfo register />
      <MedicalInfo register />
    </div>
  );
}
