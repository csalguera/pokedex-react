import { pascalize } from "../utilities/pascalize"

const PokemonType = (props) => {
  const { type } = props

  const normal = (type.type.name === 'normal')
  const fighting = (type.type.name === 'fighting')
  const flying = (type.type.name === 'flying')
  const poison = (type.type.name === 'poison')
  const ground = (type.type.name === 'ground')
  const rock = (type.type.name === 'rock')
  const bug = (type.type.name === 'bug')
  const ghost = (type.type.name === 'ghost')
  const steel = (type.type.name === 'steel')
  const fire = (type.type.name === 'fire')
  const water = (type.type.name === 'water')
  const grass = (type.type.name === 'grass')
  const electric = type.type.name === 'electric'
  const psychic = (type.type.name === 'psychic')
  const ice = (type.type.name === 'ice')
  const dragon = (type.type.name === 'dragon')
  const dark = (type.type.name === 'dark')
  const fairy = (type.type.name === 'fairy')

  return (
    <div
      style={{
        backgroundColor:
          normal ? '#a8a878 ' :
          fighting ? '#c03028' :
          flying ? '#a98ff0' :
          poison ? '#a040a0' :
          ground ? '#e1c068' :
          rock ? '#b8a038' :
          bug ? '#a8b821' :
          ghost ? '#705898' :
          steel ? '#b7b8d0' :
          fire ? '#f08031' :
          water ? '#6890f0' :
          grass ? '#77c850' :
          electric ? '#f8d030' :
          psychic ? '#f85788 ' :
          ice ? '#98d8d8' :
          dragon ? '#7038f8' :
          dark ? '#705849' :
          fairy ? '#ee99ac' :
          '#67a090',
        color: 'white',
        textShadow: 'black 2px 2px 2px',
        width: '75px',
        textAlign: 'center',
        padding: '2px',
        margin: '2px',
        borderRadius: '100px'
      }}
    >
      {pascalize(type.type.name)}
    </div>
  )
}

export default PokemonType