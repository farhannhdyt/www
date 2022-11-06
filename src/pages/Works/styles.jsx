import styled from 'styled-components'

export const StyledWorks = styled.section`
  margin: 50px 0;

  h1 {
    font-size: 35px;
  }

  span {
    color: ${(props) => props.theme.secondaryTextColor};
    display: inline-block;
    margin-top: 20px;
    margin-bottom: 50px;
  }

  span a {
    color: ${(props) => props.theme.primaryTextColor};
  }
`
