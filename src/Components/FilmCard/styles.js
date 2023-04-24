import styled from "styled-components"

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_GREEN};

  border: none;
  border-radius: 1.6rem;

  padding: 3rem;
  margin: 4rem 0 1.6rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > h1 {
    margin-bottom: 0.8rem;
    font-weight: 700;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > div {
    display: flex;
    align-items: center;
    margin-bottom: 0.8rem;
  }

  > p {
    margin: 1rem 0 2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: left;
  }

  > footer {
    display: flex;
    gap: 8px;
  }
`
