import PropTypes from 'prop-types'
import { StyledContainer } from './styles'

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

Container.propTypes = {
  children: PropTypes.node
}

export { Container }
