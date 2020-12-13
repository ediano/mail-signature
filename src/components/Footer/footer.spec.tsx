import { render } from '@testing-library/react'
import Footer from './index'

describe('Test Footer.tsx', () => {
  it('Return true', () => {
    const { container } = render(<Footer />)

    const footer = container.querySelector('footer')

    expect(!!footer).toBe(true)
  })
})
