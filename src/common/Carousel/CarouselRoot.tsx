import { FC, HTMLAttributes } from "react";
import { CarouselProvider } from "./context";
import { useCarousel } from "./useCarousel";
import { CarouselProps } from "./types";
import { cn } from "../../utils/cn";

export const CarouselRoot: FC<
  HTMLAttributes<HTMLDivElement> & CarouselProps
> = ({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}) => {
  const {
    api,
    carouselRef,
    scrollNext,
    scrollPrev,
    canScrollNext,
    canScrollPrev,
    handleKeyDown,
  } = useCarousel({ opts, plugins, setApi, orientation });

  return (
    <CarouselProvider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselProvider>
  );
};
