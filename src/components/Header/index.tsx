import { AiFillGithub } from 'react-icons/ai'

import { Container, Content } from '../../styles/components/Header'

const Header = () => (
  <Container>
    <Content>
      <h1>Assinatura de e-mail</h1>

      <a
        href="https://github.com/ediano/email-signature"
        rel="nofollow noopener noreferrer"
        target="_blank"
      >
        <AiFillGithub size={32} color="#fff" />
      </a>
    </Content>
  </Container>
)

export default Header
