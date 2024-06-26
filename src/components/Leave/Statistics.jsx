import { Info } from "lucide-react";
import { Tooltip } from "@mui/material";
import Heading from "../ui/Heading";
import DoughnutChart from "./DoughnutChart";

export default function Statistics() {
  return (
    <div className="p-[30px]">
      <div className="flex items-center">
        <Heading extra="mr-2">Статистика</Heading>
        <Tooltip title="1 раб. месяц = 3 дня отпуска" placement="right">
          <span>
            <Info />
          </span>
        </Tooltip>
      </div>
      <DoughnutChart />
    </div>
  );
}
