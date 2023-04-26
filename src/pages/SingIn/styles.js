import styled from "styled-components";
import BackgroundImg from "../../assets/background.png"

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 13.4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    font-size: 4.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.GREEN};

    margin-bottom: 1.3rem;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-bottom: 5px;
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin: 4.8rem 0;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.GREEN};
    margin-top: 4.2rem;
    text-align: center;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${BackgroundImg}) no-repeat right center;
  background-size: cover;
`;