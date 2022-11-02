import styled from 'styled-components'

export const StyledNotFound = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  h1 {
    font-size: 8em;
    font-weight: 800;
  }

  span {
    font-size: 1.5em;
    color: ${(props) => props.theme.primaryTextColor};
  }

  a {
    display: inline-block;
    margin-top: 20px;
    background-color: ${(props) => props.theme.backgroundHoverColor};
    color: ${(props) => props.theme.foregroundHoverColor};
    padding: 12px 30px;
    text-decoration: none;
    border-radius: 4px;
    font-weight: 500;
  }
`
