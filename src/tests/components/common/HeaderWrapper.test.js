import { render, screen } from '@testing-library/react'
import HeaderWrapper from '../../../components/common/HeaderWrapper'

describe('HeaderWrapper', () => {
  it('should render a heading with the correct vairant and color', () => {
    render(<HeaderWrapper otherVariant='h6' color ='blue' >Test Heading</HeaderWrapper>)

    const header = screen.getByRole('heading', { name: /test heading/i })

    expect(header).toHaveStyle('font-weight: 600')
    expect(header).toHaveStyle('color: blue')
  })
  
  it('should use the h4 vairant by default', () => {
    render(<HeaderWrapper>Default Heading</HeaderWrapper>)

    const header = screen.getByRole('heading', { name: /default heading/i })

    expect(header.tagName).toBe('H4')
  })

  it('should apply the correct variant when provided', () => {
    render(<HeaderWrapper otherVariant='h6'>Small Heading</HeaderWrapper>)

    const header = screen.getByRole('heading', { name: /small heading/i })

    expect(header.tagName).toBe('H6')
  })
})