"use client";
import { useState } from "react";

import WidgetSelector from "./components/WidgetSelector";
import TestWidget1 from "./components/test_widgets/TestWidget1";
import DailyQuote from "./components/widgets/DailyQuote";


const widgetComponents: { [key: string]: React.ComponentType } = {
  "Test Widget 1": TestWidget1,
  "Daily Quote": DailyQuote
};

const widgetNames = Object.keys(widgetComponents);

export default function Home() {
  const [selectedWidgets, setSelectedWidgets] = useState<string[]>([]);

  const handleWidgetSelection = (widgets: string[]) => {
    setSelectedWidgets(widgets);
  };

  return (
    <main className="flex min-h-screen flex-col items-center space-y-2 p-2">
      {selectedWidgets.map((widgetName) => {
        const WidgetComponent: React.ComponentType =
        widgetComponents[widgetName];
        return WidgetComponent ? <WidgetComponent key={widgetName} /> : null;
      })}
      <WidgetSelector
        onSelectionSubmission={handleWidgetSelection}
        widgets={widgetNames}
        selectedWidgets = {selectedWidgets}
      />
    </main>
  );
}
