"use client";

import clsx from "clsx";

import { Input } from "@/components/ui/input";

interface Props {
  containerClassName?: string;
  className?: string;
  type?: string;
  placeholder: string;
  startIcon?: React.ReactNode;
  onClick?: () => void;
  value?: string;
  onChange?: (value: string) => void;
}

export default function InputExt(props: Props) {
  const {
    containerClassName,
    className,
    type = "text",
    placeholder,
    startIcon,
    onClick,
    value,
    onChange
  } = props;

  const handleInputClick = () => {
    if (onClick) {
      onClick();
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={clsx("relative w-full", containerClassName)}>
      <Input
        className={clsx(
          className ?? "",
          "rounded-[34px]",
          startIcon ? "pl-[36px]" : ""
        )}
        type={type}
        placeholder={placeholder}
        onClick={handleInputClick}
        value={value}
        onChange={handleInputChange}
      />

      {startIcon && (
        <div className="absolute left-[12px] top-[50%] translate-y-[-50%]">
          {startIcon}
        </div>
      )}
    </div>
  );
}
