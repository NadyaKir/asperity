import React, { useState } from "react";
import { Dot } from "lucide-react";
import { getDayWord } from "@/utils/getDayWord";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Legend } from "chart.js";

ChartJS.register(ArcElement, Legend);

const legendData = [
  {
    label: "Доступно сейчас",
    value: 32,
    color: "#25824F",
    hoverColor: "#25824F",
  },
  { label: "Запланировано", value: 8, color: "#FFB649", hoverColor: "#FFB649" },
  {
    label: "Использовано/недоступно",
    value: 4,
    color: "#DB4546",
    hoverColor: "#DB4546",
  },
];

const DoughnutChart = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = {
    labels: legendData.map((item) => item.label),
    datasets: [
      {
        data: legendData.map((item) => item.value),
        backgroundColor: legendData.map((item) => item.color),
        hoverBackgroundColor: legendData.map((item) => item.hoverColor),
        borderWidth: 0,
        hoverBorderColor: legendData.map((item) => item.hoverColor),
        hoverBorderWidth: 10,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: "85%",
    events: [
      "mousemove",
      "mouseout",
      "click",
      "touchstart",
      "touchmove",
      "touchend",
    ],
    onHover: (event, elements) => {
      const chartInstance = event.chart;

      if (elements.length) {
        const index = elements[0].index;
        setActiveIndex(index);

        const dataset = chartInstance.data.datasets[0];
        dataset.hoverRadius = dataset.data.map((_, i) =>
          i === index ? dataset.hoverOffset : 0
        );
      } else {
        setActiveIndex(null);

        const dataset = chartInstance.data.datasets[0];
        dataset.hoverRadius = dataset.data.map(() => 0);
      }

      chartInstance.update();
    },
  };

  return (
    <div className="relative w-full mt-4">
      <div className="flex justify-center items-center">
        <div className="w-[140px] h-[140px]">
          <Doughnut data={data} options={options} />
        </div>
      </div>
      <div className="absolute top-[23%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
        <span className="text-[34px] leading-10">
          {activeIndex !== null
            ? data.datasets[0].data[activeIndex]
            : data.datasets[0].data[0]}
        </span>
        <span>
          {activeIndex !== null
            ? getDayWord(data.datasets[0].data[activeIndex])
            : getDayWord(data.datasets[0].data[0])}
        </span>
      </div>
      <div className="flex flex-col items-start mt-4">
        {legendData.map((legend, index) => (
          <div
            key={index}
            className={`legend-item ${activeIndex === index ? "hover" : ""}`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="flex justify-between w-full mx-[10px] my-3">
              <div className="flex">
                <span className="mr-2">
                  <Dot color={`${legend.color}`} />
                </span>
                <span>{legend.label}</span>
              </div>
              <div>
                <span>
                  {legend.value} {getDayWord(legend.value)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoughnutChart;
