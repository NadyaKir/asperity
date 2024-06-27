"use client";

import { useState } from "react";
import Card from "../ui/Card";
import UserInfo from "./UserInfo";
import UserTabs from "./Tabs/UserTabs";
import MainInfo from "../MainInfo/MainInfo";
import LeaveInfo from "@/components/Leave/LeaveInfo";
import EquipmentInfo from "../EquipmentInfo/EquipmentInfo";

export default function Profile() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  // flex flex-col w-full
  return (
    <div className="grid grid-rows-2 grid-cols-3 gap-4 w-full">
      <section className="col-span-3 row-span-3">
        <Card>
          <div className="ml-10 mt-10">
            <UserInfo />
            <UserTabs value={tabValue} onTabChange={handleTabChange} />
          </div>
        </Card>
      </section>
      <section className="col-span-3 row-span-1 grid grid-cols-3 gap-4 mb-[92px]">
        {tabValue === 0 && <MainInfo />}
        {tabValue === 1 && <LeaveInfo />}
        {tabValue === 2 && <EquipmentInfo />}
      </section>
    </div>
  );
}
