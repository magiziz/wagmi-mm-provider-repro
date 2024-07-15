import { useConnectors } from "wagmi";

const Connectors = () => {
  const connectors = useConnectors();

  return connectors.map(({ id, name, connect }) => (
    <button key={id} id={id} onClick={() => connect()}>
      {name}
    </button>
  ));
};

export default Connectors;
