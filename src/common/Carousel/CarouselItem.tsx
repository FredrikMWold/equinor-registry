import { FC, HTMLAttributes } from "react";
import { cn } from "../../utils/cn";
import { useCarouselContext } from "./useCarouselContext";

export const CarouselItem: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  const { orientation } = useCarouselContext();

  return (
    <div
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  );
};
CarouselItem.displayName = "CarouselItem";
