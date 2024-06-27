import { Tab, Tabs } from "@mui/material";
import { tabs } from "../../../../json";

export default function UserTabs({ value, onTabChange }) {
  return (
    <div className="overflow-x-auto whitespace-nowrap">
      <Tabs
        value={value}
        onChange={onTabChange}
        aria-label="user tabs"
        sx={{
          "& .MuiTabs-flexContainer": {
            display: "flex",
            overflowX: "auto",
            whiteSpace: "nowrap",
            "& .MuiTabs-indicator": {
              backgroundColor: value === -1 ? "transparent" : "#0047BB",
            },
          },
          "& .MuiTab-root": {
            minWidth: "auto",
            maxWidth: "none",
            flexShrink: 0,
            color: "#76787A !important",
            fontWeight: "600",
            padding: "10px 16px",
            borderBottom: "1px solid #363738",
            "&.Mui-selected": {
              color: "#E1E3E6 !important",
              borderBottom: "2px solid transparent",
            },
          },
        }}
      >
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>
    </div>
  );
}
