import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
export const NetworkBtn = () => {
  return (
    <ConnectButton.Custom>
      {({ chain, openChainModal }) => {
        // console.log(chain);
        return (
          <div>
            {(() => {
              if (chain?.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }
              return (
                <div style={{ display: "flex", gap: 12 }}>
                  <button onClick={openChainModal} style={{ display: "flex", alignItems: "center" }} type="button">
                    {chain?.hasIcon && (
                      <div
                        style={{
                          background: chain?.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: "hidden",
                          marginRight: 4
                        }}
                      >
                        {chain.iconUrl && (
                          <Image width={12} height={12} alt={chain.name ?? "Chain icon"} src={chain.iconUrl} />
                        )}
                      </div>
                    )}
                    {chain?.name}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
export default NetworkBtn;
