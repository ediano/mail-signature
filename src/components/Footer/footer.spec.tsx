import { render } from '@testing-library/react'
import Footer from './index'

describe('Test Footer.tsx', () => {
  it('Return true', () => {
    const { getByTestId } = render(<Footer />)

    const footer = getByTestId('footer-container')

    expect(footer)
  })
})
