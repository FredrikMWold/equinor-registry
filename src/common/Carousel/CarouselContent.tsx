import { FC, HTMLAttributes } from "react";
import { cn } from "../../utils/cn";
import { useCarouselContext } from "./useCarouselContext";

export const CarouselContent: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  const { carouselRef, orientation } = useCarouselContext();

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  );
};
