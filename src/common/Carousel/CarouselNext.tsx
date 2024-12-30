import { Button, Icon } from "@equinor/eds-core-react";
import { arrow_forward } from "@equinor/eds-icons";
import { ComponentProps, FC } from "react";
import { cn } from "../../utils/cn";
import { useCarouselContext } from "./useCarouselContext";

export const CarouselNext: FC<ComponentProps<typeof Button>> = ({
  className,
  ...props
}) => {
  const { orientation, scrollNext, canScrollNext } = useCarouselContext();
  return (
    <Button
      className={cn(
        "!absolute !h-8 !w-8",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <Icon className="h-4 w-4" data={arrow_forward} />
      <span className="sr-only">Next slide</span>
    </Button>
  );
};
CarouselNext.displayName = "CarouselNext";
