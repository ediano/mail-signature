import { Container } from '../../styles/components/Footer'

const Footer = () => (
  <Container>
    <div>
      <div>
        By{' '}
        <a href="https://github.com/ediano" target="_blank" rel="noreferrer">
          Ediano Silva Santos
        </a>
      </div>

      <div>Todos os direitos reservados | {new Date().getFullYear()}</div>
    </div>
  </Container>
)

export default Footer
