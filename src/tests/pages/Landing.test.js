import { render, screen } from '@testing-library/react';
import Landing from '../../pages/Landing';
import { PokemonThemeContext, blueTheme, yellowTheme, redTheme } from '../../context/PokemonThemeProvider';
import { ThemeProvider, CssBaseline } from '@mui/material'

describe('Landing', () => {
  const renderWithTheme = (ui, { theme = 'blue' } = {}) => {
    const currentTheme = theme === 'blue' ? blueTheme : theme === 'yellow' ? yellowTheme : redTheme

    return render(
      <PokemonThemeContext.Provider value={{ theme: currentTheme, blueTheme, yellowTheme, redTheme, changeTheme: jest.fn() }}>
        <ThemeProvider theme={currentTheme}>
          <CssBaseline />
          {ui}
        </ThemeProvider>
      </PokemonThemeContext.Provider>
    )
  }

  it('should render three headers', () => {
    renderWithTheme(<Landing />, { theme: 'blue' })

    const title = screen.getByRole('heading', { level: 4, name: /pokédex/i })
    expect(title).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 6, name: /welcome/i })
    expect(heading).toBeInTheDocument()

    const prompt = screen.getByRole('heading', { level: 6, name: /choose a color/i })
    expect(prompt).toBeInTheDocument()
  })

  it('should render the three available color themes', () => {
    renderWithTheme(<Landing />, { theme: 'blue' })

    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
  })
  
  it('should render the blue image in color when blue theme is active', () => {
    renderWithTheme(<Landing />, { theme: 'blue' })

    const blueImage = screen.getByAltText('articuno-blue-theme');
    const yellowImage = screen.getByAltText('zapdos-yellow-theme');
    const redImage = screen.getByAltText('moltres-red-theme');

    expect(blueImage).toHaveStyle('filter: grayscale(0)')
    expect(yellowImage).toHaveStyle('filter: grayscale(1)')
    expect(redImage).toHaveStyle('filter: grayscale(1)')
  })

  it('should render the yellow image in color when yellow theme is active', () => {
    renderWithTheme(<Landing />, { theme: 'yellow' })

    const blueImage = screen.getByAltText('articuno-blue-theme');
    const yellowImage = screen.getByAltText('zapdos-yellow-theme');
    const redImage = screen.getByAltText('moltres-red-theme');

    expect(blueImage).toHaveStyle('filter: grayscale(1)')
    expect(yellowImage).toHaveStyle('filter: grayscale(0)')
    expect(redImage).toHaveStyle('filter: grayscale(1)')
  })

  it('should render the red image in color when red theme is active', () => {
    renderWithTheme(<Landing />, { theme: 'red' })

    const blueImage = screen.getByAltText('articuno-blue-theme');
    const yellowImage = screen.getByAltText('zapdos-yellow-theme');
    const redImage = screen.getByAltText('moltres-red-theme');

    expect(blueImage).toHaveStyle('filter: grayscale(1)')
    expect(yellowImage).toHaveStyle('filter: grayscale(1)')
    expect(redImage).toHaveStyle('filter: grayscale(0)')
  })
})