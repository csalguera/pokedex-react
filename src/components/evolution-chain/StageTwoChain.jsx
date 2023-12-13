// npm modules
import { Link } from "react-router-dom"

// components
import EvolutionMethod from "./EvolutionMethod"
import PokemonSprite from "../PokemonSprite"

const StageTwoChain = (props) => {
  const {
    pokemonDetails,
    pokemonSpecies,
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
    genNum,
    genPath,
    currentGen,
    spriteGen1,
    spriteGen2,
    spriteGen3,
    spriteGen4,
  } = props

  console.log(pokemonSpecies?.name !== stageThree?.name);

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
                <Link
                  to={`/${genPath}/${pokemonDetails.name}`}
                  state={{ ...pokemonDetails, genNum, genPath }}
                >
                  <PokemonSprite
                    pokemonDetails={pokemonDetails}
                    spriteGen1={spriteGen1}
                    spriteGen2={spriteGen2}
                    spriteGen3={spriteGen3}
                    spriteGen4={spriteGen4}
                    genPath={genPath}
                  />
                </Link>
              </>
            ) : (
              <>
                <Link
                  to={`/${genPath}/${stageTwoDetails.name}`}
                  state={{ ...stageTwoDetails, genNum: stageTwoGen, genPath }}
                >
                  <PokemonSprite
                    pokemonDetails={stageTwoDetails}
                    spriteGen1={spriteGen1}
                    spriteGen2={spriteGen2}
                    spriteGen3={spriteGen3}
                    spriteGen4={spriteGen4}
                    genPath={genPath}
                  />
                </Link>
                <Link
                  to={`/${genPath}/${stageTwoAlt1Details.name}`}
                  state={{ ...stageTwoAlt1Details, genNum: stageTwoAlt1Gen, genPath }}
                >
                  <PokemonSprite
                    pokemonDetails={stageTwoAlt1Details}
                    spriteGen1={spriteGen1}
                    spriteGen2={spriteGen2}
                    spriteGen3={spriteGen3}
                    spriteGen4={spriteGen4}
                    genPath={genPath}
                  />
                </Link>
                <Link
                  to={`/${genPath}/${stageTwoAlt2Details.name}`}
                  state={{ ...stageTwoAlt2Details, genNum: stageTwoAlt2Gen, genPath }}
                >
                  <PokemonSprite
                    pokemonDetails={stageTwoAlt2Details}
                    spriteGen1={spriteGen1}
                    spriteGen2={spriteGen2}
                    spriteGen3={spriteGen3}
                    spriteGen4={spriteGen4}
                    genPath={genPath}
                  />
                </Link>
                <Link
                  to={`/${genPath}/${stageTwoAlt3Details.name}`}
                  state={{ ...stageTwoAlt3Details, genNum: stageTwoAlt3Gen, genPath }}
                >
                  <PokemonSprite
                    pokemonDetails={stageTwoAlt3Details}
                    spriteGen1={spriteGen1}
                    spriteGen2={spriteGen2}
                    spriteGen3={spriteGen3}
                    spriteGen4={spriteGen4}
                    genPath={genPath}
                  />
                </Link>
                <Link
                  to={`/${genPath}/${stageTwoAlt4Details.name}`}
                  state={{ ...stageTwoAlt4Details, genNum: stageTwoAlt4Gen, genPath }}
                >
                  <PokemonSprite
                    pokemonDetails={stageTwoAlt4Details}
                    spriteGen1={spriteGen1}
                    spriteGen2={spriteGen2}
                    spriteGen3={spriteGen3}
                    spriteGen4={spriteGen4}
                    genPath={genPath}
                  />
                </Link>
                <Link
                  to={`/${genPath}/${stageTwoAlt5Details.name}`}
                  state={{ ...stageTwoAlt5Details, genNum: stageTwoAlt5Gen, genPath }}
                >
                  <PokemonSprite
                    pokemonDetails={stageTwoAlt5Details}
                    spriteGen1={spriteGen1}
                    spriteGen2={spriteGen2}
                    spriteGen3={spriteGen3}
                    spriteGen4={spriteGen4}
                    genPath={genPath}
                  />
                </Link>
                <Link
                  to={`/${genPath}/${stageTwoAlt6Details.name}`}
                  state={{ ...stageTwoAlt6Details, genNum: stageTwoAlt6Gen, genPath }}
                >
                  <PokemonSprite
                    pokemonDetails={stageTwoAlt6Details}
                    spriteGen1={spriteGen1}
                    spriteGen2={spriteGen2}
                    spriteGen3={spriteGen3}
                    spriteGen4={spriteGen4}
                    genPath={genPath}
                  />
                </Link>
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