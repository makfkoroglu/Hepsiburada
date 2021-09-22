import { render, screen } from "@testing-library/react"
import ProductList from "../ProductList"

test("renders learn react link", () => {
  render(<ProductList />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
