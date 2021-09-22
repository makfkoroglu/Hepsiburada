import { render, screen } from "@testing-library/react"
import ProductItem from "../ProductItem"

test("renders learn react link", () => {
  render(<ProductItem />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
