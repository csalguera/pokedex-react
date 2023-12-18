// npm modules
import { useContext } from "react"

// components
import EvolutionMethod from "../EvolutionMethod/EvolutionMethod"
import PokemonSprite from "../common/PokemonSprite"
import LinkWrapper from "../common/LinkWrapper"
import FlexCenterWrapper from "../common/FlexCenterWrapper"
import StageTwoAlt from "../StageTwoAlt/StageTwoAlt"
import StageTwoAltSprite from "../StageTwoAlt/StageTwoAltSprite"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"
import { EvolutionChainContext } from "../../context/EvolutionChainProvider"

const StageTwoChain = () => {
  const {
    pokemonDetails,
    pokemonSpecies,
    genNum,
    genPath,
    currentGen,
  } = useContext(PokemonDetailsContext)

  const {
    stageOne,
    stageOneGen,
    stageTwo,
    stageTwoGen,
    stageTwoDetails,
    stageTwoEvolutionMethod,
    stageTwoAlt1Gen,
    stageTwoAlt1Details,
    stageTwoAlt1EvolutionMethod,
    stageTwoAlt2Gen,
    stageTwoAlt2Details,
    stageTwoAlt2EvolutionMethod,
    stageTwoAlt3Gen,
    stageTwoAlt3Details,
    stageTwoAlt3EvolutionMethod,
    stageTwoAlt4Gen,
    stageTwoAlt4Details,
    stageTwoAlt4EvolutionMethod,
    stageTwoAlt5Gen,
    stageTwoAlt5Details,
    stageTwoAlt5EvolutionMethod,
    stageTwoAlt6Gen,
    stageTwoAlt6Details,
    stageTwoAlt6EvolutionMethod,
    stageThree,
  } = useContext(EvolutionChainContext)

  const alt1 = {
    gen: stageTwoAlt1Gen,
    details: stageTwoAlt1Details,
    method: stageTwoAlt1EvolutionMethod,
  }

  const alt2 = {
    gen: stageTwoAlt2Gen,
    details: stageTwoAlt2Details,
    method: stageTwoAlt2EvolutionMethod,
  }

  const alt3 = {
    gen: stageTwoAlt3Gen,
    details: stageTwoAlt3Details,
    method: stageTwoAlt3EvolutionMethod,
  }

  const alt4 = {
    gen: stageTwoAlt4Gen,
    details: stageTwoAlt4Details,
    method: stageTwoAlt4EvolutionMethod,
  }

  const alt5 = {
    gen: stageTwoAlt5Gen,
    details: stageTwoAlt5Details,
    method: stageTwoAlt5EvolutionMethod,
  }

  const alt6 = {
    gen: stageTwoAlt6Gen,
    details: stageTwoAlt6Details,
    method: stageTwoAlt6EvolutionMethod,
  }

  const alts = [
    alt1,
    alt2,
    alt3,
    alt4,
    alt5,
    alt6,
  ]

  const validAlts = alts.filter(alt => alt.details.name).filter(alt => alt.gen <= currentGen)

  return (
    <>
      {stageTwo && stageTwoGen <= currentGen ? (
        <>
          {stageOne && stageOneGen <= currentGen ? (
            <FlexCenterWrapper
              additionalStyles={{
                flexDirection: 'column',
                justifyContent: 'space-around',
              }}
            >
              <EvolutionMethod
                evolutionMethod={stageTwoEvolutionMethod}
              />
              {validAlts.map(alt => (
                <StageTwoAlt
                  key={alt.details.name}
                  altDetails={alt.details}
                  altGen={alt.gen}
                  altMethod={alt.method}
                />
              ))}
            </FlexCenterWrapper>
          ) : (
            <></>
          )}
          <FlexCenterWrapper
            additionalStyles={{
              flexDirection: 'column',
            }}
          >
            {(stageOneGen > currentGen) &&
            (pokemonSpecies?.name === stageThree?.name) ? (
              <>
                <LinkWrapper
                  to={`/${genPath}/${pokemonDetails.name}`}
                  state={{ ...pokemonDetails, genNum, genPath }}
                >
                  <PokemonSprite
                    pokemonDetails={pokemonDetails}
                  />
                </LinkWrapper>
              </>
            ) : (
              <>
                <LinkWrapper
                  to={`/${genPath}/${stageTwoDetails.name}`}
                  state={{ ...stageTwoDetails, genNum: stageTwoGen, genPath }}
                >
                  <PokemonSprite
                    pokemonDetails={stageTwoDetails}
                  />
                </LinkWrapper>
                {validAlts.map(alt => (
                  <StageTwoAltSprite
                    key={alt.details.name}
                    altDetails={alt.details}
                    altGen={alt.gen}
                  />
                ))}
              </>
            )}
          </FlexCenterWrapper>
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default StageTwoChain