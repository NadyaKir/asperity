"use client";

import Card from "../ui/Card";
import UserInfo from "./UserInfo";
import UserTabs from "./Tabs/UserTabs";

export default function Profile() {
  return (
    <section className="flex w-full">
      <Card>
        <div className="ml-10 mt-10">
          <UserInfo />
          <UserTabs />
        </div>
      </Card>
    </section>
  );
}
