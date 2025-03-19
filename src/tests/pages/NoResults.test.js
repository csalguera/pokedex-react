import { render, screen } from '@testing-library/react';
import NoResults from '../../pages/NoResults';

describe('NoResults', () => {
  it('should render no results when search does not contain a match', () => {
    render(<NoResults search='abc' />)

    const heading = screen.getByRole('heading', { level: 4 })
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/results/i)

    const results = screen.getByRole('heading', { level: 5 })
    expect(results).toBeInTheDocument()
    expect(results).toHaveTextContent(/no results found for 'abc'/i)

    const message = screen.getByRole('heading', { level: 6 })
    expect(message).toBeInTheDocument()
    expect(message).toHaveTextContent(/try a different search/i)
  })
})