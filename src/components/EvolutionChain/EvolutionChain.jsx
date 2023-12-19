// components
import StageOneChain from "./StageOneChain";
import StageTwoChain from "./StageTwoChain";
import StageThreeChain from "./StageThreeChain";
import FlexCenterWrapper from "../common/FlexCenterWrapper";

// context
import EvolutionChainProvider from "../../context/EvolutionChainProvider";

const EvolutionChain = () => {
  return (
    <FlexCenterWrapper>
      <EvolutionChainProvider>
        <StageOneChain />
        <StageTwoChain />
        <StageThreeChain />
      </EvolutionChainProvider>
    </FlexCenterWrapper>
  )
}

export default EvolutionChain