import { Skeleton } from "@/components/ui/skeleton";

export const TodosSkeleton = () => {
  return (
    <>
      {"abcdefg".split("").map((i) => {
        return <Skeleton key={i} className="w-full h-[60px]" />;
      })}
    </>
  );
};
