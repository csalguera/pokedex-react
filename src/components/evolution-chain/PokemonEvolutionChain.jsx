// components
import StageOneChain from "./StageOneChain";
import StageTwoChain from "./StageTwoChain";
import StageThreeChain from "./StageThreeChain";

// context
import PokemonEvolutionChainProvider from "../../context/PokemonEvolutionChainProvider";

const PokemonEvolutionChain = () => {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <PokemonEvolutionChainProvider>
        <StageOneChain />
        <StageTwoChain />
        <StageThreeChain />
      </PokemonEvolutionChainProvider>
    </div>
  )
}

export default PokemonEvolutionChain