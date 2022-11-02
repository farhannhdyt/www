import { Container } from '../index'
import { StyledFlex, StyledFooter } from './styles'

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <StyledFlex>
          <ul>
            <li>
              <a href="">Github</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">LinkedIn</a>
            </li>
          </ul>

          <span>&copy; 2022 • Farhan Nur Hidayat</span>
        </StyledFlex>
      </Container>
    </StyledFooter>
  )
}

export { Footer }
