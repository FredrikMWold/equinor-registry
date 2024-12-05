import { Command as CommandPrimitive } from "cmdk";
import { ComponentPropsWithoutRef, FC, MutableRefObject } from "react";
import { cn } from "../../utils/cn";

export const CommandRoot: FC<
  ComponentPropsWithoutRef<typeof CommandPrimitive> & {
    rootRef?: MutableRefObject<HTMLDivElement>;
  }
> = ({ className, rootRef, ...props }) => {
  return (
    <CommandPrimitive
      className={cn("flex w-full flex-col overflow-auto rounded-md", className)}
      ref={rootRef}
      {...props}
    />
  );
};
