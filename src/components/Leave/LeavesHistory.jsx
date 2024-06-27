import { getColor } from "@/utils/getColor";
import Heading from "../ui/Heading";
import { ArrowRight } from "lucide-react";

const data = [
  {
    type: "Отгул",
    dateStart: "03 марта 2023",
    dateEnd: "23 марта 2023",
    days: 20,
  },
  {
    type: "Отпуск",
    dateStart: "03 марта 2023",
    dateEnd: "07 марта 2023",
    days: 4,
  },
  {
    type: "Отпуск",
    dateStart: "03 марта 2023",
    dateEnd: "07 марта 2023",
    days: 4,
  },
  {
    type: "Отпуск",
    dateStart: "03 марта 2023",
    dateEnd: "07 марта 2023",
    days: 4,
  },
  {
    type: "Отпуск",
    dateStart: "03 марта 2023",
    dateEnd: "07 марта 2023",
    days: 4,
  },
];

export default function LeavesHistory() {
  return (
    <div className="col-span-2 p-[30px]">
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
        {data.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-2 py-4 last:pb-0 border-b last:border-b-0 border-iconPrimary text-textPrimary"
          >
            <div className="md:hidden font-bold">Тип</div>
            <div>{item.type}</div>
            <div className="md:hidden font-bold">Даты отпуска</div>
            <div className="flex">
              <span>{item.dateStart}</span>
              <ArrowRight className="mx-2" color={`${getColor(item.type)}`} />
              <span> {item.dateEnd}</span>
            </div>
            <div className="md:hidden font-bold">Количество дней</div>
            <div className="text-right">{item.days}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
