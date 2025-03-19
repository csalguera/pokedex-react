import { render, screen } from '@testing-library/react';
import { useState } from 'react';
import Landing from '../../pages/Landing';
import { PokemonThemeContext, blueTheme, yellowTheme, redTheme } from '../../context/PokemonThemeProvider';
import { ThemeProvider, CssBaseline } from '@mui/material'
import userEvent from '@testing-library/user-event';

describe('Landing', () => {
  const Wrapper = ({ initialTheme, children }) => {
    const [currentTheme, setCurrentTheme] = useState(
      initialTheme === 'blue' ? blueTheme : initialTheme === 'yellow' ? yellowTheme : redTheme
    )

    const changeTheme = (color) => {
      setCurrentTheme(color === 'blue' ? blueTheme : color === 'yellow' ? yellowTheme : redTheme)
    }

    return (
      <PokemonThemeContext.Provider value={{ theme: currentTheme, blueTheme, yellowTheme, redTheme, changeTheme }}>
          <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </PokemonThemeContext.Provider>
    )
  }
  const renderWithTheme = (ui, { theme = 'blue' } = {}) => {
    return render(<Wrapper initialTheme={theme}>{ui}</Wrapper>)
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

  it.each([
    ['blue', 'articuno-blue-theme'],
    ['yellow', 'zapdos-yellow-theme'],
    ['red', 'moltres-red-theme']
  ])('should render the %s image in color when %s is active', (theme, altText) => {
    renderWithTheme(<Landing />, { theme })
    const blue = 'articuno-blue-theme'
    const yellow = 'zapdos-yellow-theme'
    const red = 'moltres-red-theme'

    const blueImage = screen.getByAltText(blue)
    const yellowImage = screen.getByAltText(yellow)
    const redImage = screen.getByAltText(red)

    expect(blueImage).toHaveStyle(`filter: grayscale(${altText === blue ? 0 : 1})`)
    expect(yellowImage).toHaveStyle(`filter: grayscale(${altText === yellow ? 0 : 1})`)
    expect(redImage).toHaveStyle(`filter: grayscale(${altText === red ? 0 : 1})`)
  })

  it('should change the theme when a different color image is clicked', async () => {
    const user = userEvent.setup()
    renderWithTheme(<Landing />, { theme: 'blue' })

    const blueImage = screen.getByAltText('articuno-blue-theme')
    const yellowImage = screen.getByAltText('zapdos-yellow-theme')
    const redImage = screen.getByAltText('moltres-red-theme')

    await user.click(yellowImage)

    expect(blueImage).toHaveStyle('filter: grayscale(1)')
    expect(yellowImage).toHaveStyle('filter: grayscale(0)')
    expect(redImage).toHaveStyle('filter: grayscale(1)')
    
    await user.click(redImage)

    expect(blueImage).toHaveStyle('filter: grayscale(1)')
    expect(yellowImage).toHaveStyle('filter: grayscale(1)')
    expect(redImage).toHaveStyle('filter: grayscale(0)')
  })
})