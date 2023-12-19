// components
import StageOneChain from "./StageOneChain";
import StageTwoChain from "./StageTwoChain";
import StageThreeChain from "./StageThreeChain";

import Box from "@mui/material/Box";

// context
import EvolutionChainProvider from "../../context/EvolutionChainProvider";

const EvolutionChain = () => {
  return (
    <Box
      sx={{
        display: 'flex'
      }}
    >
      <EvolutionChainProvider>
        <StageOneChain />
        <StageTwoChain />
        <StageThreeChain />
      </EvolutionChainProvider>
    </Box>
  )
}

export default EvolutionChain