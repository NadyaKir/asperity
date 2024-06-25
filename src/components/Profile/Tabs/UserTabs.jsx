import { useState } from "react";

import { Tab, Tabs } from "@mui/material";
import { tabs } from "../../../../json";

import TabPanel from "./TabPanel";
import LeaveBlock from "@/components/Leave/LeaveBlock";

export default function UserTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="inline-block">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="user tabs"
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: "#0047BB",
          },
        }}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            sx={{
              color:
                index === value ? "#E1E3E6 !important" : "#76787A !important", // Примените !important, если необходимо
              fontWeight: index === value ? "bold" : "normal",
              border: "#0047BB",
            }}
          />
        ))}
      </Tabs>
      {tabs.map((tab, index) => (
        <TabPanel key={index} value={value} index={index}>
          {tab.label === "Основная информация" ? (
            "Content for Tab 1"
          ) : tab.label === "Отпуск" ? (
            <LeaveBlock />
          ) : tab.label === "Оборудование" ? (
            "Content for Tab 3"
          ) : null}
        </TabPanel>
      ))}
    </div>
  );
}
