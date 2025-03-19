import { render, screen } from "@testing-library/react";
import Loading from "../../../components/common/Loading";

describe('Loading', () => {
  it('should render with an h5 heading', () => {
    render(<Loading />)

    const heading = screen.getByRole('heading', { level: 5 })

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/loading/i)
  })
})