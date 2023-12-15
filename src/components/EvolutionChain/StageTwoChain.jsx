// npm modules
import { useContext } from "react"

// components
import EvolutionMethod from "../EvolutionMethod/EvolutionMethod"
import PokemonSprite from "../common/PokemonSprite"
import LinkWrapper from "../common/LinkWrapper"

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

  return (
    <>
      {stageTwo && stageTwoGen <= currentGen ? (
        <>
          {stageOne && stageOneGen <= currentGen ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
              }}
            >
              <EvolutionMethod
                evolutionMethod={stageTwoEvolutionMethod}
              />
              {stageTwoAlt1Details.name && stageTwoAlt1Gen <= currentGen ? (
                <EvolutionMethod
                  evolutionMethod={stageTwoAlt1EvolutionMethod}
                />
              ) : (
                <></>
              )}
              {stageTwoAlt2Details.name && stageTwoAlt2Gen <= currentGen ? (
                <EvolutionMethod
                  evolutionMethod={stageTwoAlt2EvolutionMethod}
                />
              ) : (
                <></>
              )}
              {stageTwoAlt3Details.name && stageTwoAlt3Gen <= currentGen ? (
                <EvolutionMethod
                  evolutionMethod={stageTwoAlt3EvolutionMethod}
                />
              ) : (
                <></>
              )}
              {stageTwoAlt4Details.name && stageTwoAlt4Gen <= currentGen ? (
                <EvolutionMethod
                  evolutionMethod={stageTwoAlt4EvolutionMethod}
                />
              ) : (
                <></>
              )}
              {stageTwoAlt5Details.name && stageTwoAlt5Gen <= currentGen ? (
                <EvolutionMethod
                  evolutionMethod={stageTwoAlt5EvolutionMethod}
                />
              ) : (
                <></>
              )}
              {stageTwoAlt6Details.name && stageTwoAlt6Gen <= currentGen ? (
                <EvolutionMethod
                  evolutionMethod={stageTwoAlt6EvolutionMethod}
                />
              ) : (
                <></>
              )}
            </div>
          ) : (
            <></>
          )}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
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
                <LinkWrapper
                  to={`/${genPath}/${stageTwoAlt1Details.name}`}
                  state={{ ...stageTwoAlt1Details, genNum: stageTwoAlt1Gen, genPath }}
                >
                  <PokemonSprite
                    pokemonDetails={stageTwoAlt1Details}
                  />
                </LinkWrapper>
                <LinkWrapper
                  to={`/${genPath}/${stageTwoAlt2Details.name}`}
                  state={{ ...stageTwoAlt2Details, genNum: stageTwoAlt2Gen, genPath }}
                >
                  <PokemonSprite
                    pokemonDetails={stageTwoAlt2Details}
                  />
                </LinkWrapper>
                <LinkWrapper
                  to={`/${genPath}/${stageTwoAlt3Details.name}`}
                  state={{ ...stageTwoAlt3Details, genNum: stageTwoAlt3Gen, genPath }}
                >
                  <PokemonSprite
                    pokemonDetails={stageTwoAlt3Details}
                  />
                </LinkWrapper>
                <LinkWrapper
                  to={`/${genPath}/${stageTwoAlt4Details.name}`}
                  state={{ ...stageTwoAlt4Details, genNum: stageTwoAlt4Gen, genPath }}
                >
                  <PokemonSprite
                    pokemonDetails={stageTwoAlt4Details}
                  />
                </LinkWrapper>
                <LinkWrapper
                  to={`/${genPath}/${stageTwoAlt5Details.name}`}
                  state={{ ...stageTwoAlt5Details, genNum: stageTwoAlt5Gen, genPath }}
                >
                  <PokemonSprite
                    pokemonDetails={stageTwoAlt5Details}
                  />
                </LinkWrapper>
                <LinkWrapper
                  to={`/${genPath}/${stageTwoAlt6Details.name}`}
                  state={{ ...stageTwoAlt6Details, genNum: stageTwoAlt6Gen, genPath }}
                >
                  <PokemonSprite
                    pokemonDetails={stageTwoAlt6Details}
                  />
                </LinkWrapper>
              </>
            )}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default StageTwoChain