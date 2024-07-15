import { useConnectors, WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { http, createConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import Connectors from "./Connectors";

const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Connectors />
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
