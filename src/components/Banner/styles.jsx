import styled from 'styled-components'

export const StyledBanner = styled.section`
  margin-top: 50px;

  h1 {
    font-size: 50px;
    font-weight: 800;
  }

  span {
    display: inline-block;
    margin-top: 5px;
    margin-bottom: 15px;
    font-size: 25px;
    font-weight: 700;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(
      90deg,
      ${(props) => props.theme.primaryGradientColor},
      ${(props) => props.theme.secondaryGradientColor}
    );
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 36px;
      margin-bottom: 10px;
    }

    span {
      font-size: 20px;
    }

    p {
      font-size: 15px;
    }
  }
`
