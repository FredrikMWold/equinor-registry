import { HTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export const CommandShortcut = ({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs text-zinc-400", className)}
      {...props}
    />
  );
};
