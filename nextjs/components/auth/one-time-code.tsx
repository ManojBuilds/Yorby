"use client";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { cn } from "@/lib/utils";

interface OneTimeCodeProps {
  onComplete?: (value: string) => void;
  className?: string;
  length?: number;
  pattern?: string;
  id?: string;
  name?: string;
}

const OneTimeCode = ({ onComplete, className, length = 6, pattern = "[0-9]", id = "token", name = "token" }: OneTimeCodeProps) => {
  return (
    <div className={cn("flex flex-col", className)}>
      <InputOTP
        maxLength={length}
        autoFocus
        pattern={pattern}
        id={id}
        name={name}
        onComplete={onComplete}
      >
        <InputOTPGroup>
          {
            new Array(length).fill(0).map((_, index) => (<InputOTPSlot index={index} />))
          }
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
};

export default OneTimeCode;
