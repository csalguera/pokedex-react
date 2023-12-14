// npm modules
import { createContext } from "react";

// context
export const PokemonEvolutionChainContext = createContext()

const PokemonEvolutionChainProvider = ({ children }) => {
  const contextValues = {}
  return (
    <PokemonEvolutionChainContext.Provider
      value={contextValues}
    >
      {children}
    </PokemonEvolutionChainContext.Provider>
  )
}

export default PokemonEvolutionChainProvider