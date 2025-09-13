import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import type { DropDownProps } from "../../types/input";

const DropDown = <T extends string | number>({ options, onChange, value }: DropDownProps<T>) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value);
  return (
    <div
      tabIndex={0}
      onBlur={(e) => {
        const nextFocus = e.relatedTarget as HTMLElement | null;
        if (nextFocus?.closest(".option-container")) {
          return;
        }
        setShowOptions(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setShowOptions(!showOptions);
        }
      }}
      onClick={() => {
        setShowOptions(!showOptions);
      }}
      className="border p-2 min-w-20 relative rounded"
    >
      <div className="flex justify-between">
        <div className="text-black">{selectedOption}</div>
        <div>
          <FontAwesomeIcon icon={faChevronDown} className={`text-[11px] duration-150 ${showOptions ? "rotate-180 " : ""}`} />
        </div>
      </div>
      <ul className={`absolute top-12 left-0 option-container border rounded bg-white z-20 w-full ${showOptions ? "block" : "hidden"}`}>
        {options.map((option) => (
          <li
            className="py-2 hover:bg-gold-100 min-w-20 pl-2 cursor-pointer text-black"
            key={option}
            onClick={() => {
              setSelectedOption(option);
              onChange(option);
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
