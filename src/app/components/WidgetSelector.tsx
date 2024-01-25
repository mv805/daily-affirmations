"use client";
import { useState } from "react";
import { PlusCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";

import WidgetFrame from "./ui/WidgetFrame";
import SmallButton from "./ui/SmallButton";

interface WidgetSelectorProps {
  onSelectionSubmission: (selectedWidgets: string[]) => void;
  widgets: string[];
  selectedWidgets: string[];
}

const WidgetSelector: React.FC<WidgetSelectorProps> = ({
  onSelectionSubmission,
  widgets,
}) => {
  const [selectedWidgets, setSelectedWidgets] = useState<string[]>([]);
  const [showChoices, setShowChoices] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;
    setSelectedWidgets((prev) =>
      checked ? [...prev, value] : prev.filter((widget) => widget !== value)
    );
  };

  const handleSubmit = () => {
    onSelectionSubmission(selectedWidgets);
    setShowChoices(false);
  };

  return (
    <WidgetFrame>
      <div className="min-h-40 flex justify-center items-center">
        {!showChoices && (
          <button
            className="w-20 h-20 flex justify-center items-center rounded-md border-white border-4 hover:bg-slate-600 active:bg-blue-950"
            onClick={() => setShowChoices(true)}
          >
            <PlusCircleIcon className="h-14 w-14" />
          </button>
        )}
        {showChoices && (
          <div className="flex flex-col items-center">
            <h1 className="text-lg font-bold m-2">Please Select Your Widgets:</h1>
            {widgets.map((widget) => (
              <div key={widget}>
                <label>
                  <input
                    type="checkbox"
                    value={widget}
                    checked={selectedWidgets.includes(widget)}
                    onChange={handleCheckboxChange}
                  />
                  {widget}
                </label>
              </div>
            ))}
            <SmallButton onClick={handleSubmit}>Submit</SmallButton>
            <SmallButton onClick={() => setShowChoices(false)}>
              <XMarkIcon className="h-6 w-6" />
            </SmallButton>
          </div>
        )}
      </div>
    </WidgetFrame>
  );
};

export default WidgetSelector;
