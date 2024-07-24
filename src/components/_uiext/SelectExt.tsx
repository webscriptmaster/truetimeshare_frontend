"use client";

import * as React from "react";

import * as SelectPrimitive from "@radix-ui/react-select";
import clsx from "clsx";

import { cn } from "@/lib/utils";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";

/**
 * Override the default
 */
const SelectContentExt = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cn(
          "p-2",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContentExt.displayName = SelectPrimitive.Content.displayName;

const SelectItemExt = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "rounded-[34px] border border-[#D0D5DD] px-[16px] py-[12px]",
      className
    )}
    {...props}
  >
    <SelectPrimitive.ItemText className="text-[14px] font-[500] text-[#667085]">
      {children}
    </SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItemExt.displayName = SelectPrimitive.Item.displayName;

/**
 * Define component
 */
interface Props {
  open?: boolean;
  placeholder: string;
  startIcon?: React.ReactNode;
  options: {
    value: string;
    label: string;
  }[];
}

export default function SelectExt({
  open,
  placeholder,
  startIcon,
  options
}: Props) {
  const [value, setValue] = React.useState("");

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <Select open={open} value={value} onValueChange={handleValueChange}>
      <SelectTrigger
        className={clsx(
          "rounded-[34px]",
          startIcon ? "relative pl-[36px]" : ""
        )}
      >
        <SelectValue placeholder={placeholder} />

        {startIcon && <div className="absolute left-[8px]">{startIcon}</div>}
      </SelectTrigger>

      <SelectContentExt className="rounded-[17px]">
        <div className="flex flex-col gap-[8px]">
          {options.map((o) => (
            <SelectItemExt
              key={o.value}
              value={o.value}
              className={clsx(value === o.value ? "border-[#FA5B32]" : "")}
            >
              {o.label}
            </SelectItemExt>
          ))}
        </div>
      </SelectContentExt>
    </Select>
  );
}
