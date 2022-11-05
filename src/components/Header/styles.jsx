import styled from 'styled-components'

export const StyledHeader = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
  position: sticky;
  top: 0;
  backdrop-filter: blur(16px);
  transition: 0.2s;
  border-bottom: 1px solid transparent;

  &.scroll {
    box-shadow: inset 0 -1px 0 0 ${(props) => props.theme.headerBorderBottom};
  }

  @media screen and (max-width: 600px) {
    padding-top: 20px;
    padding-bottom: 20px;

    ul {
      display: none;
    }
  }
`

export const StyledHeaderFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledButtonTheme = styled.button`
  background-color: unset;
  border: unset;
  color: ${(props) => props.theme.primaryTextColor};
  font-size: 22px;
  cursor: pointer;
`

export const StyledMenu = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;

  li {
    margin-right: 25px;
  }

  a {
    color: ${(props) => props.theme.primaryTextColor};
    text-decoration: none;
    font-size: 15px;
    transition: 0.2s;
    font-weight: 500;
    border-bottom: 1px solid transparent;
  }

  a:hover {
    border-bottom: 1px solid ${(props) => props.theme.primaryTextColor};
  }

  a.active {
    border-bottom: 1px solid ${(props) => props.theme.primaryTextColor};
  }
`
