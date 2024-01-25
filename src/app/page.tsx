"use client";
import { useState } from "react";

import WidgetSelector from "./components/WidgetSelector";
import TestWidget1 from "./components/test_widgets/TestWidget1";
import TestWidget2 from "./components/test_widgets/TestWidget2";
import TestWidget3 from "./components/test_widgets/TestWidget3";
import TestWidget4 from "./components/test_widgets/TestWidget4";
import TestWidget5 from "./components/test_widgets/TestWidget5";

const widgetComponents: { [key: string]: React.ComponentType } = {
  "Test Widget 1": TestWidget1,
  "Test Widget 2": TestWidget2,
  "Test Widget 3": TestWidget3,
  "Test Widget 4": TestWidget4,
  "Test Widget 5": TestWidget5,
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
