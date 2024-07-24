/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-array-index-key */

"use client";

import { forwardRef, useCallback, useState } from "react";

import { useDropzone } from "react-dropzone";
import { LuUploadCloud } from "react-icons/lu";

import { Button } from "@/components/ui/button";

interface Props {
  name?: string;
  value?: File[];
  onChange?: Function;
}

function FileDnD({ name, value, onChange }: Props, ref: any) {
  const [files, setFiles] = useState<File[]>(value ?? []);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (typeof onChange === "function") {
        onChange([...files, ...acceptedFiles].slice(-5));
      }

      setFiles((prev: File[]) => [...prev, ...acceptedFiles].slice(-5));
    },
    [files, onChange]
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": []
    },
    maxSize: 5 * 1024 * 1024,
    maxFiles: 5,
    onDrop
  });

  return (
    <div
      className="flex w-full flex-col items-center gap-[12px] rounded-[4px] border-2 border-dashed border-[#DDDDDD] p-[24px]"
      {...getRootProps()}
    >
      <input {...getInputProps()} />

      <LuUploadCloud className="text-[20px] text-[#FD9074]" />

      <div className="text-center text-[14px] font-[400] text-[#01303A]">
        Upload captivating images of your property. Maximum file size: 5MB per
        image.
      </div>

      <Button
        type="button"
        className="font-hg rounded-[34px] border border-[#FA5B32] bg-transparent text-[16px] font-[500] text-[#FA5B32] hover:bg-[#000000]/20"
      >
        Upload
      </Button>

      {!!files.length && (
        <div className="w-full columns-5 gap-[8px]">
          {files.map((file, index) => (
            <img
              className="h-[80px] w-full object-cover"
              key={index}
              src={URL.createObjectURL(file)}
              alt="Holder"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default forwardRef(FileDnD);
