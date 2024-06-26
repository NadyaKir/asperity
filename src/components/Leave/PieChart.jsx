import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Legend } from "chart.js";

ChartJS.register(ArcElement, Legend);

const legendData = [
  {
    label: "Доступно сейчас",
    value: 32,
    color: "#25824F",
    hoverColor: "#5CB85C",
  },
  {
    label: "Использовано/недоступно",
    value: 4,
    color: "#DB4546",
    hoverColor: "#FF6347",
  },
  { label: "Запланировано", value: 8, color: "#FFB649", hoverColor: "#FFD700" },
];

const PieChart = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Данные для диаграммы
  const data = {
    labels: legendData.map((item) => item.label),
    datasets: [
      {
        data: legendData.map((item) => item.value),
        backgroundColor: legendData.map((item) => item.color),
        hoverBackgroundColor: legendData.map((item) => item.hoverColor),
        borderWidth: 0,
        hoverOffset: 8, // Отступ при наведении
        hoverRadius: legendData.map(() => 0), // Начальное значение hoverRadius для каждого сегмента
      },
    ],
  };

  // Опции для диаграммы
  const options = {
    plugins: {
      legend: {
        display: false, // Отключаем стандартную легенду
      },
    },
    cutout: "80%", // Размер выреза внутри круга
    events: [
      "mousemove",
      "mouseout",
      "click",
      "touchstart",
      "touchmove",
      "touchend",
    ], // События для взаимодействия
    onHover: (event, elements) => {
      const chartInstance = event.chart; // Получаем экземпляр чарта из события

      if (elements.length) {
        const index = elements[0].index;
        setActiveIndex(index);

        // Устанавливаем hoverRadius для элемента датасета
        const dataset = chartInstance.data.datasets[0];
        dataset.hoverRadius = dataset.data.map((_, i) =>
          i === index ? dataset.hoverOffset : 0
        );
      } else {
        setActiveIndex(null);

        // Сбрасываем hoverRadius для всех элементов датасета
        const dataset = chartInstance.data.datasets[0];
        dataset.hoverRadius = dataset.data.map(() => 0);
      }

      // Обновляем чарт
      chartInstance.update();
    },
  };

  return (
    <div className="relative w-3/4">
      <Doughnut data={data} options={options} />
      <div
        className="flex flex-col"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          width: "100%",
        }}
      >
        <span style={{ fontSize: "20px", fontWeight: "bold" }}>
          {activeIndex !== null ? data.datasets[0].data[activeIndex] : ""}
        </span>
        <span>дня</span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {legendData.map((legend, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              marginRight: "10px",
              alignItems: "center",
              cursor: "pointer",
              opacity: activeIndex === index ? 0.5 : 1,
            }}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: legend.color,
                marginRight: "5px",
              }}
            ></div>
            <span>{legend.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart;
