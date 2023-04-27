import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    width: 80vw;
    margin: 38px auto;
    overflow-y: auto;
    
    > header {
      display: flex;
      flex-direction: column;
      justify-content: left;
      gap: 2.4rem;

      margin-bottom: 4rem;
    }
  }
`

export const Form = styled.form`
  width: 100%;

  > h1 {
    font-size: 2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    margin: 4rem 0 2.4rem;
  }

  .Mark {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    gap: 1.6rem;
    
    background-color: ${({ theme }) => theme.COLORS.BLACK};

    padding: 1.6rem;

    border-radius: 1rem;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    margin: 4rem 0 5rem;
  }

`

export const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem;
`