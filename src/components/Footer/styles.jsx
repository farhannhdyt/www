import styled from 'styled-components'

export const StyledFooter = styled.footer`
  padding-top: 50px;
  padding-bottom: 50px;
  margin-top: 50px;
`

export const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    list-style: none;
    padding-left: 0;
  }

  li {
    margin-right: 20px;
  }

  a {
    color: ${(props) => props.theme.secondaryTextColor};
    font-size: 15px;
    text-decoration: none;
    transition: 0.2s;
  }

  a:hover {
    color: ${(props) => props.theme.primaryTextColor};
  }

  span {
    color: ${(props) => props.theme.secondaryTextColor};
    font-size: 15px;
  }
`
