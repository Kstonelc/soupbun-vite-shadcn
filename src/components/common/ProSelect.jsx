import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select.tsx";

const ProSelect = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (value) => {
    setSelectedItems((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  return (
    <Select>
      <SelectTrigger>
        {selectedItems.length > 0 ? selectedItems.join(", ") : "Select items"}
      </SelectTrigger>
      <SelectContent>
        {["Option 1", "Option 2", "Option 3"].map((option) => (
          <SelectItem
            key={option}
            value={option}
            onClick={() => handleSelect(option)}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={selectedItems.includes(option)}
                readOnly
                style={{ marginRight: "8px" }}
              />
              {option}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ProSelect;
