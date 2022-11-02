import styled from 'styled-components'

export const StyledDotWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1em;

  div {
    background-color: ${(props) => props.theme.primaryTextColor};
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
`
