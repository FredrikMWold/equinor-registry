import { useContext } from "react";
import { CarouselContext } from "./context";

export function useCarouselContext() {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarouselContext must be used within a <Carousel />");
  }

  return context;
}
