import { getColor } from "@/utils/getColor";
import Heading from "../ui/Heading";
import { ArrowRight } from "lucide-react";
import { historyData } from "../../../json";

export default function LeavesHistory() {
  return (
    <div className="col-span-2 px-4 py-[30px] md:p-[30px]">
      <div className="flex justify-between w-full mb-4">
        <Heading>История отпусков</Heading>
        <button className="text-textTertiary font-poppins font-medium">
          Посмотреть все
        </button>
      </div>
      <div className=" font-normal text-base">
        <div className="text-textSecondary hidden md:grid md:grid-cols-3 md:gap-4 pl-2 py-4 border-b border-iconPrimary">
          <div>Тип</div>
          <div>Даты отпуска</div>
          <div className="text-right">Количество дней</div>
        </div>
        {historyData.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-2 py-4 last:pb-0 border-b last:border-b-0 border-iconPrimary text-textPrimary"
          >
            <div className="text-textTertiary md:hidden">Тип</div>
            <div>{item.type}</div>
            <div className="text-textTertiary md:hidden">Даты отпуска</div>
            <div className="flex text-textSecondary md:text-textPrimary">
              <span>{item.dateStart}</span>
              <ArrowRight className="mx-2" color={`${getColor(item.type)}`} />
              <span> {item.dateEnd}</span>
            </div>
            <div className="text-textTertiary md:hidden">Количество дней</div>
            <div className="text-left md:text-right">{item.days}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
