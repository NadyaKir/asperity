import Statistics from "./Statistics";
import Card from "../ui/Card";
import LeavesHistory from "./LeavesHistory";

export default function LeaveInfo() {
  return (
    <>
      <div className="col-span-1 md:col-span-1">
        <Card>
          <Statistics />
        </Card>
      </div>
      <div className="col-span-1 md:col-span-2">
        <Card>
          <LeavesHistory />
        </Card>
      </div>
    </>
  );
}
