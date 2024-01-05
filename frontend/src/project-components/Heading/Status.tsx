import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HeadingProps } from "./Heading";
import { Filter } from "@/App";
export const Status = ({ setFilter }: HeadingProps) => {
  return (
    <>
      <Select
        onValueChange={(value) =>
          setFilter(value as React.SetStateAction<Filter>)
        }
      >
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};
