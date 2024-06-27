import { Info } from "lucide-react";
import { Tooltip } from "@mui/material";
import Heading from "../ui/Heading";
import DoughnutChart from "./DoughnutChart";

export default function Statistics() {
  return (
    <div className="px-4 py-[30px] md:p-[30px]">
      <div className="flex items-center">
        <Heading extra="mr-2">Статистика</Heading>
        <Tooltip
          title="1 раб. месяц = 3 дня отпуска"
          placement="right"
          slotProps={{
            popper: {
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [0, -7],
                  },
                },
              ],
            },
          }}
          PopperProps={{
            sx: {
              "& .MuiTooltip-tooltip": {
                backgroundColor: "#303030",
                color: "#E1E3E6",
                padding: "6px 10px",
                fontWeight: "500",
              },
            },
          }}
        >
          <span>
            <Info />
          </span>
        </Tooltip>
      </div>
      <DoughnutChart />
    </div>
  );
}
