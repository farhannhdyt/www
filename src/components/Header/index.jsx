import { Container } from '../Container'
import { StyledButtonTheme, StyledHeader, StyledHeaderFlex, StyledMenu } from './styles'
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5'

// react-router-dom
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledHeaderFlex>
          <StyledMenu>
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/works" end>
                Works
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" end>
                About Me
              </NavLink>
            </li>
          </StyledMenu>

          <StyledButtonTheme>
            <IoSunnyOutline />
          </StyledButtonTheme>
        </StyledHeaderFlex>
      </Container>
    </StyledHeader>
  )
}

export { Header }
