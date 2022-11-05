import PropTypes from 'react'
import { StyledGrid } from './styles'

const Grid = ({ children }) => {
  return <StyledGrid>{children}</StyledGrid>
}

Grid.propTypes = {
  children: PropTypes.node
}

export { Grid }
