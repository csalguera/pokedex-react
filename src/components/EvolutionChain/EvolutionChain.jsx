// components
import HeaderWrapper from "../common/HeaderWrapper";
import StageOneChain from "./StageOneChain";
import StageTwoChain from "./StageTwoChain";
import StageThreeChain from "./StageThreeChain";

// mui components
import Box from "@mui/material/Box";

// context
import EvolutionChainProvider from "../../context/EvolutionChainProvider";
import FlexCenterWrapper from "../common/FlexCenterWrapper";

const EvolutionChain = () => {
  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <EvolutionChainProvider>
        <FlexCenterWrapper
          additionalStyles={{
            flexDirection: 'column',
          }}
        >
          <HeaderWrapper
            otherVariant='h5'
          >
            Evolution Line
          </HeaderWrapper>
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <StageOneChain />
            <StageTwoChain />
            <StageThreeChain />
          </Box>
        </FlexCenterWrapper>
      </EvolutionChainProvider>
    </Box>
  )
}

export default EvolutionChain