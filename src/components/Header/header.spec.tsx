import { render } from '@testing-library/react'
import Header from './index'

describe('Test Header.tsx', () => {
  it('Renderizando header', () => {
    const { container } = render(<Header />)

    const header = container.querySelector('header')

    expect(!!header).toBe(true)
  })
})
