"use client";

import { useState } from "react";
import Card from "../ui/Card";
import UserInfo from "./UserInfo";
import UserTabs from "./Tabs/UserTabs";
import MainInfo from "../MainInfo/MainInfo";
import LeaveInfo from "@/components/Leave/LeaveInfo";
import EquipmentInfo from "../EquipmentInfo/EquipmentInfo";

export default function Profile() {
  const [tabValue, setTabValue] = useState(1);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-3 gap-4 w-full">
      <section className="col-span-3 row-span-3">
        <Card>
          <div className="ml-4 md:ml-10 mt-8 md:mt-10 mb-7 md:mb-5">
            <UserInfo />
            <UserTabs value={tabValue} onTabChange={handleTabChange} />
          </div>
        </Card>
      </section>
      <section className="col-span-3 md:col-span-3 row-span-1 grid grid-cols-1 md:grid-cols-3 gap-4 mb-[92px]">
        {tabValue === 0 && <MainInfo />}
        {tabValue === 1 && <LeaveInfo />}
        {tabValue === 2 && <EquipmentInfo />}
      </section>
    </div>
  );
}
