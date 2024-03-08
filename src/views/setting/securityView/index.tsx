import React, { useState, useRef } from "react";
import { Flex, GradientText } from "@/components";

const SecurityView: React.FC = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const otpInputRef = useRef<HTMLInputElement>(null);

  const handleUpdate = async () => {
    try {
      const response = await fetch("/api/verify/verify_email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, reason: "send_otp", domain: "hello" })
      });

      if (!response.ok) {
        throw new Error("Failed to send OTP");
      }

      const data = await response.json();
      console.log("OTP sent successfully:", data);
      // Handle success response here
      setShowOtpInput(true); // Show OTP input field after successful API call
    } catch (error) {
      console.error("Error sending OTP:", error);
      // Handle error here
    }
  };

  const handleVerifyOtp = () => {
    // Implement OTP verification logic here
    console.log("Verifying OTP:", otp);
  };

  return (
    <div className="w-full">
      <div className="uppercase text-[36px] font-500 font-space_grotesk border-b-2 border-primary/30 pb-3 small:text-center">
        <GradientText>security</GradientText>
      </div>
      <Flex direction="flex-col" className="pt-5 space-y-3 w-[578px] laptop:w-full">
        <Flex direction="flex-col" className="w-full space-y-[10px]">
          <p className="text-[16px] font-500 text-main-900 ">Verification code</p>
          <input
            ref={emailInputRef}
            placeholder="Enter your email"
            className="placeholder:text-[14px] w-full h-[54px] rounded-xl px-4 placeholder:text-white-500 border border-main-300 outline-none bg-black/40"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Flex>

        {showOtpInput && (
          <Flex direction="flex-col" className="w-full space-y-[10px]">
            <p className="text-[16px] font-500 text-main-900 ">OTP</p>
            <input
              ref={otpInputRef}
              placeholder="Enter OTP"
              className="placeholder:text-[14px] w-full h-[54px] rounded-xl px-4 placeholder:text-white-500 border border-main-300 outline-none bg-black/40"
              onChange={(e) => setOtp(e.target.value)}
            />
          </Flex>
        )}

        <div className="pt-5  w-[141px] tablet:w-full">
          {!showOtpInput ? (
            <button
              onClick={handleUpdate}
              className="w-full bg-primary text-[16px] font-500 px-[38px] py-[11px] rounded-3xl text-black "
            >
              Update
            </button>
          ) : (
            <button
              onClick={handleVerifyOtp}
              className="w-full bg-primary text-[16px] font-500 px-[38px] py-[11px] rounded-3xl text-black "
            >
              Verify OTP
            </button>
          )}
        </div>
      </Flex>
    </div>
  );
};

export default SecurityView;
