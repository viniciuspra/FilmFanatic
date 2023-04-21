import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    padding: 4rem 14rem 15rem;

    > div {
      margin-bottom: 2.4rem;
    }

    > p {
      font-size: 1.6rem;
      text-align: justify;
      font-weight: normal;
    }

  }


`

export const InfoBox = styled.div`
  width: 100%;

  > div {
    display: flex;
    align-items: baseline;
    gap: 1rem;
    margin: 2.4rem 0;
  }

  > span {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 2.4rem 0;

    > img {
      width: 1.6rem;
      border-radius: 50%;
    }

    > svg {
      color: ${({ theme }) => theme.COLORS.GREEN};
    }
  }
`