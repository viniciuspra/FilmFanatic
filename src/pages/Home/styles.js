import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas: 
  "header"
  "content";
`;

export const Content = styled.div`
  grid-area: content;
  padding: 6rem 10rem;
  overflow: auto;

  > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const NewFilm = styled.button `
  background-color: ${({ theme }) => theme.COLORS.GREEN};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  
  width: 20rem;
  height: 4.9rem;

  border-radius: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;