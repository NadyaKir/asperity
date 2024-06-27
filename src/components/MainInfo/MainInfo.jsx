import LeavesHistory from "../Leave/LeavesHistory";
import PersonalInfo from "./PersonalInfo";
import Card from "../ui/Card";
import EmploeeUpload from "./EmploeeUpload";

export default function About() {
  return (
    <>
      <div className="col-span-1 md:col-span-2">
        <Card>
          <PersonalInfo />
        </Card>
      </div>
      <div className="col-span-1 md:col-span-1">
        <Card>
          <EmploeeUpload />
        </Card>
      </div>
    </>
  );
}
