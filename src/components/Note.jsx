import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Note = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white/30 backdrop-blur-md border border-white/10 rounded-lg shadow-lg md:max-w-lg max-w-[330px] mx-auto p-5 mt-8 mb-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left font-semibold md:text-lg text-base text-gray-950 dark:text-gray-100"
      >
        How to Find Battery Capacities on Windows
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-[1000px] opacity-100"
            : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        
        {/* <ol className="list-decimal list-inside text-sm text-gray-900 dark:text-gray-100 space-y-2 mt-4">
          <li>
            Press <span className="font-medium">Windows + X</span> and select{" "}
            <span className="font-medium">Windows PowerShell (Admin)</span> or{" "}
            <span className="font-medium">Command Prompt (Admin)</span>.
          </li>
          <li>
            Run the command:{" "}
            <br />
            <code className="bg-white/30 dark:bg-gray-700 px-1 py-0.5 rounded">
              powercfg /batteryreport
            </code>
          </li>
          <li>
            Open the generated file (usually in{" "}
            <span className="italic">
              C:\Users\YourUsername\battery-report.html
            </span>
            ).
          </li>
          <li>
            Scroll to <strong>Battery Information</strong>.
          </li>
          <li>
            You'll find:
            <ul className="list-disc list-inside ml-4 mt-1">
              <li>
                <strong>Designed Capacity</strong> – original battery capacity.
              </li>
              <li>
                <strong>Full Charge Capacity</strong> – current max capacity.
              </li>
            </ul>
          </li>
        </ol> */}

        <ol className="list-decimal pl-6 space-y-2 mt-5 text-sm text-gray-900 dark:text-gray-100">
          <li>
            Press <span className="font-medium">Windows + X</span> and select{" "}
            <span className="font-medium">Windows PowerShell (Admin)</span> or{" "}
            <span className="font-medium">Command Prompt (Admin)</span>.
          </li>
          <li>
            Run the command:{" "}
            <code className="bg-white/30 dark:bg-gray-700 px-1 py-0.5 rounded">
              powercfg /batteryreport
            </code>
          </li>
          <li>
            Open the generated file (usually in{" "}
            <span className="italic">
              C:\Users\YourUsername\battery-report.html
            </span>
            ).
          </li>
          <li>
            Scroll to <strong>Battery Information</strong>.
          </li>
          <li>
            You’ll find:
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li>
                <strong>Designed Capacity</strong> – original battery capacity.
              </li>
              <li>
                <strong>Full Charge Capacity</strong> – current max capacity.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Note;
