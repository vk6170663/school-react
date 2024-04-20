import AcademicInfo from "./AcademicInfo";
import ContactInfo from "./ContactInfo";
import MedicalInfo from "./MedicalInfo";
import PersonalInfo from "./PersonalInfo";

export default function PersonalInfoTab() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <AcademicInfo />
      <PersonalInfo />
      <ContactInfo />
      <MedicalInfo />
    </div>
  );
}
