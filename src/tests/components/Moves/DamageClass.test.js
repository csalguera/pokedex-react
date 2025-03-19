import { render, screen } from "@testing-library/react";
import DamageClass from "../../../components/Moves/DamageClass";
import { PokemonDetailsContext } from "../../../context/PokemonDetailsProvider";

describe("DamageClass", () => {
  const renderComponent = (props = {}, contextValue = {}) => {
    const defaultProps = {
      category: 'physical',
      power: 30,
      type: { name: 'fire' },
      versionGroup: 'v1',
      ...props
    }
  
    const defaultContextValue = {
      currentGen: 1,
      genPath: "/gen-i",
      sprites: "sprite-path",
      ...contextValue
    }
  
    return render(
      <PokemonDetailsContext.Provider value={defaultContextValue}>
        <DamageClass {...defaultProps} />
      </PokemonDetailsContext.Provider>
    )
  }

  it("renders the correct category label of a move for gens 1, 2, and 3", () => {
    renderComponent()

    const categoryLabel = screen.getByText(/special/i)
    expect(categoryLabel).toBeInTheDocument()

    const categoryImage = screen.queryByRole('img');
    expect(categoryImage).not.toBeInTheDocument()
  })

  it("renders the correct category image of a move for gen 4 and above", () => {
    renderComponent({ versionGroup: 'v4' }, { currentGen: 4, genPath: 'gen-iv' })

    const categoryImage = screen.getByRole('img');
    expect(categoryImage).toBeInTheDocument()
    
    const imageRoute = '/assets/icons/gen-iv-physical.png'
    expect(categoryImage).toHaveAttribute('src', imageRoute)
  })

  it('renders the category label when power is undefined', () => {
    renderComponent({ power: null })

    const categoryLabel = screen.getByText(/physical/i)
    expect(categoryLabel).toBeInTheDocument()
  })
})
