// components
import StageOneChain from "./StageOneChain";
import StageTwoChain from "./StageTwoChain";
import StageThreeChain from "./StageThreeChain";

// context
import EvolutionChainProvider from "../../context/EvolutionChainProvider";

const EvolutionChain = () => {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <EvolutionChainProvider>
        <StageOneChain />
        <StageTwoChain />
        <StageThreeChain />
      </EvolutionChainProvider>
    </div>
  )
}

export default EvolutionChain