import { Tab, Tabs } from "@mui/material";
import { tabs } from "../../../../json";

export default function UserTabs({ value, onTabChange }) {
  return (
    <div className="inline-block mb-5 font-">
      <Tabs
        value={value}
        onChange={onTabChange}
        aria-label="user tabs"
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: value === -1 ? "transparent" : "#0047BB",
          },
        }}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            sx={{
              color:
                index === value ? "#E1E3E6 !important" : "#76787A !important",
              fontWeight: "600",
              padding: "10px 16px",
              borderBottom:
                index !== value ? "1px solid #363738" : "2px solid transparent",
            }}
          />
        ))}
      </Tabs>
    </div>
  );
}
