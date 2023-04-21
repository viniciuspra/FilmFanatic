import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  margin-bottom: 8px;
  border-radius: 1rem;

  > svg {
    margin-left: 1.6rem;
  }

  > input {
    width: 100%;
    height: 5.6rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;
    padding: 0 1.6rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`