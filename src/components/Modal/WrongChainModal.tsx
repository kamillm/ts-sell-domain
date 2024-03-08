// import { useSwitchChain } from "wagmi";
import { useChainModal } from "@rainbow-me/rainbowkit";

export default function WrongChainModal() {
  //   const { switchChain } = useSwitchChain();
  const { openChainModal } = useChainModal();

  return (
    <dialog id="incorrect_chain_modal" className="modal modal-bottom sm:modal-middle">
      <form method="dialog" className="modal-box">
        <h3 className="text-lg font-bold">Incorrect Chain</h3>
        <p className="py-4">Seems like you are connected to an unsupported chain.</p>

        <div className="modal-action">
          <button className="btn btn-primary" onClick={openChainModal}>
            Switch Chain
          </button>
        </div>
      </form>
    </dialog>
  );
}
