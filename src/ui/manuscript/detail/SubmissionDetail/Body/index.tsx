"use client";

import { useState, Suspense } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Overview from "./Overview";
import TabPanel from "@/components/TabPanel";

interface Props {
  overviewSlot: React.ReactElement;
  activitySlot: React.ReactElement;
}

type TabValue = "overview" | "activity";
export default function Body({ overviewSlot, activitySlot }: Props) {
  const [activeTab, setActiveTab] = useState<TabValue>("overview");

  const handleChange = (event: React.SyntheticEvent, newValue: TabValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box>
      <Tabs value={activeTab} onChange={handleChange}>
        <Tab label="Overview" value="overview" />
        <Tab label="Activity" value="activity" />
      </Tabs>

      <TabPanel value={"overview"} current={activeTab}>
        {overviewSlot}
      </TabPanel>
      <TabPanel value={"activity"} current={activeTab}>
        {/* <Activity /> */}
        {activitySlot}
      </TabPanel>
    </Box>
  );
}
