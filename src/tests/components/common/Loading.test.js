import { render, screen } from "@testing-library/react";
import Loading from "../../../components/common/Loading";

describe('Loading', () => {
  it('should render feedback while content is loading', () => {
    render(<Loading />)

    const heading = screen.getByRole('heading')

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/loading/i)
  })
})