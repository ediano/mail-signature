import { render, fireEvent } from '@testing-library/react'
import Input from './index'
import { FaGithub } from 'react-icons/fa'

describe('Test Input.tsx', () => {
  it('Returned input without icon', () => {
    const { container } = render(
      <Input name="input-name" label="Input label" />
    )

    const label = container.querySelector('label')
    const input = container.querySelector('input')
    const ico = container.querySelector('svg')

    expect(!!label).toBe(true)
    expect(!!input).toBe(true)
    expect(!!ico).toBe(false)
  })

  it('Return icon with input', () => {
    const { container } = render(
      <Input name="input-name" label="Input label" ico={FaGithub} />
    )

    const label = container.querySelector('label')
    const input = container.querySelector('input')
    const ico = container.querySelector('svg')

    expect(!!label).toBe(true)
    expect(!!input).toBe(true)
    expect(!!ico).toBe(true)
  })

  it('Inserting values into the input', () => {
    const { container } = render(
      <Input name="input-name" label="Input label" ico={FaGithub} />
    )

    const input = container.querySelector('input')

    fireEvent.change(input, { target: { value: 'Ediano' } })

    expect(input.value).toEqual('Ediano')
  })
})
