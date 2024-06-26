import { Avatar } from "@mui/material";
import { Dot } from "lucide-react";

export default function UserInfo() {
  return (
    <div className="grid grid-cols-[auto,auto]grid-rows-2 auto-rows-auto justify-start">
      <div className="flex justify-center items-center">
        <Avatar
          className="mr-12"
          src="/assets/avatars/avatar.png"
          sx={{ width: 150, height: 150 }}
        />
      </div>
      <div className="flex items-center">
        <div className="font-bold text-5xl leading-[56px] ">
          <p>Иванов</p>
          <p>Иван Иванович</p>
        </div>
      </div>
      <div className="col-start-2">
        <p className="mb-4">Junior UI/UX designer</p>
        <div className="flex mb-[52px]">
          <p>Россия, Красноярск</p>
          <Dot color="#76787A" className="mx-2" />
          <p className="text-textTertiary">14:03</p>
        </div>
      </div>
    </div>
  );
}
