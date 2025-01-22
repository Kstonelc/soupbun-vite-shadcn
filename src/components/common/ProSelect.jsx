import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  FormControl,
} from "@/components/ui";

const ProSelect = ({
  placeHolder = "请选择",
  value,
  options = [],
  onChange,
}) => {
  return (
    <Select onValueChange={onChange} defaultValue={value}>
      <FormControl>
        <SelectTrigger>
          <SelectValue placeholder={placeHolder} />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        {options.map((option) => {
          return (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default ProSelect;
