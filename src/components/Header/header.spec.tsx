import { render } from '@testing-library/react'
import Header from './index'

describe('Test Header.tsx', () => {
  it('Return true', () => {
    const { getByTestId } = render(<Header />)

    const header = getByTestId('header-container')

    expect(header)
  })
})
