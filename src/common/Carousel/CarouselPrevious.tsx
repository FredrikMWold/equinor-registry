import { Button, Icon } from "@equinor/eds-core-react";
import { arrow_back } from "@equinor/eds-icons";
import { ComponentProps, FC } from "react";
import { cn } from "../../utils/cn";
import { useCarouselContext } from "./useCarouselContext";

export const CarouselPrevious: FC<ComponentProps<typeof Button>> = ({
  className,
  ...props
}) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarouselContext();

  return (
    <Button
      className={cn(
        "!absolute !h-8 !w-8",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <Icon className="h-4 w-4" data={arrow_back} />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
};
