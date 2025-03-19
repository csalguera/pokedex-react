import { render, screen } from '@testing-library/react';
import NoResults from '../../pages/NoResults';

describe('NoResults', () => {
  it('should render no results when search does not contain a match', () => {
    render(<NoResults search='abc' />)

    const heading = screen.getByRole('heading', { level: 4 })
    const results = screen.getByRole('heading', { level: 5 })
    const message = screen.getByRole('heading', { level: 6 })

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/results/i)
    expect(results).toBeInTheDocument()
    expect(results).toHaveTextContent(/no results found for 'abc'/i)
    expect(message).toBeInTheDocument()
    expect(message).toHaveTextContent(/try a different search/i)
  })
})