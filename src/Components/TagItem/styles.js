import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

  border-radius: 1rem;

  > button {
    display: flex;
    align-items: center;

    margin-right: 5px;

    border: none;
    background: none;

    svg {
      color: ${({ theme }) => theme.COLORS.GREEN};
      font-size: 2.4rem;
      border-radius: 50%;
      transition: all 0.3s;
      &:hover {
        background-color: ${({ theme }) => theme.COLORS.GRAY_300};
      }
    }
  }

  > input {
    height: 5rem;

    padding: 1.6rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`