import { CalendarCheck } from "lucide-react";
import { Status } from "./Status";
import { Filter } from "../../App";
export type HeadingProps = {
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
};
export const Heading = ({ setFilter }: HeadingProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <CalendarCheck />
        <h1 className="text-2xl font-semibold">Today</h1>
      </div>
      <Status setFilter={setFilter} />
    </div>
  );
};
