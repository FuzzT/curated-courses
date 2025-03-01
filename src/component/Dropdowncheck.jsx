import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const DropdownCheck = ({
    title,
    items,
    selectedFilters,
    setSelectedFilters,
    level = 1,
  }) => {
    const [open, setOpen] = useState(false);
  
    const handleCheckboxChange = (item) => {
      const newFilters = new Set(selectedFilters);
      newFilters.has(item) ? newFilters.delete(item) : newFilters.add(item);
      setSelectedFilters(newFilters);
    };
  
    return (
      <div className="w-full">
        {/* Dropdown Button */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className={`${
            level === 1 && "border border-gray-200"
          } w-full flex items-center justify-between py-2 px-4 mb-2 text-xl font-medium`}
        >
          <span style={{ marginLeft: `${level * 8}px` }}>{title}</span>
          <ChevronUpIcon
            className={`size-6 ${open ? "rotate-180" : ""} transition-all`}
          />
        </button>
  
        {/* Dropdown Items */}
        {open && (
          <div className="pl-6" style={{ paddingLeft: `${level * 8}px` }}>
            {" "}
            {/* Indent on larger screens */}
            {Array.isArray(items)
              ? items.map((item, index) => (
                  <label
                    key={index}
                    className="flex gap-3 my-2 font-medium text-lg"
                    style={{ paddingLeft: `${level * 16}px` }}
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox text-blue-600 size-5"
                      checked={selectedFilters.has(item)}
                      onChange={() => handleCheckboxChange(item)}
                    />
                    {item}
                  </label>
                ))
              : Object.entries(items).map(([key, value], index) => (
                  <DropdownCheck
                    key={index}
                    title={key}
                    items={value}
                    selectedFilters={selectedFilters}
                    setSelectedFilters={setSelectedFilters}
                    level={level + 1} // Increase level for indentation
                  />
                ))}
          </div>
        )}
      </div>
    );
  };

  export default DropdownCheck;