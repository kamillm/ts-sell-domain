import { useSwitchChain } from "wagmi";
// import { useChainModal } from "@rainbow-me/rainbowkit";
import { Flex } from "@/components";

export default function WrongChainModal() {
  const { switchChain } = useSwitchChain();
  return (
    <div
      className={
        "fixed h-full w-full transition-all duration-300 z-[500] left-0 top-0 bg-black/60 flex justify-center items-center visible opacity-100 backdrop-blur-2xl"
      }
    >
      <div className="absolute bg-main-100 p-8 rounded-xl w-[450px] small:w-[80%]">
        <Flex direction="flex-col" justifyContent="justify-between" className="space-y-5">
          <div className="text-left">
            In Our Testing Phase We Only Support <br />
            <span className="text-sky-400">Base Sepolia </span>
            Network
          </div>
          <div className="text-left">
            It Looks Like You Are Connected To An <div className="text-danger">Unsupported Network</div>
          </div>
          <button
            onClick={() => switchChain({ chainId: 84532 })}
            className="w-full bg-primary text-black rounded-3xl p-2 text-[20px] small:text-[16px] font-400"
          >
            Switch To Base Sepolia
          </button>
        </Flex>
      </div>
    </div>
  );
}
