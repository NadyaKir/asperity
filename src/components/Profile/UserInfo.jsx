import { Avatar } from "@mui/material";
import { Dot } from "lucide-react";

export default function UserInfo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] sm:auto-rows-auto justify-start">
      <div className="flex flex-wrap sm:flex justify-center items-center">
        <Avatar
          src="/assets/avatars/avatar.png"
          sx={{ width: 150, height: 150 }}
        />
      </div>
      <div className="flex flex-wrap items-center justify-center sm:justify-start mt-4 sm:mt-0">
        <div className="ml-0 sm:ml-12 text-center sm:text-left font-bold text-2xl sm:text-5xl">
          <p>Иванов</p>
          <p>Иван Иванович</p>
        </div>
      </div>
      <div className="col-start-1 sm:col-start-2 mt-6 sm:mt-0 ml-0 sm:ml-12">
        <p className="text-center sm:text-left mb-4">Junior UI/UX designer</p>
        <div className="flex mb-[52px] text-center justify-center sm:justify-start ">
          <p>Россия, Красноярск</p>
          <Dot color="#76787A" className="mx-2" />
          <p className="text-textTertiary">14:03</p>
        </div>
      </div>
    </div>
  );
}
