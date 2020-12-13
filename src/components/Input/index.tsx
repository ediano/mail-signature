import { InputHTMLAttributes, ComponentType } from 'react'
import { IconBaseProps } from 'react-icons'

import { Container } from '../../styles/components/Input'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  ico?: ComponentType<IconBaseProps>
}

const Input = ({ name, label, ico: Ico, ...rest }: Props) => {
  return (
    <Container className="input-block">
      {Ico && <Ico size="3rem" color="#fff" />}

      <div>
        <label htmlFor={name}>{label}</label>
        <input type="text" {...rest} />
      </div>
    </Container>
  )
}

export default Input
