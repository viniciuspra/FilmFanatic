import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  margin-bottom: 8px;
  border-radius: 1rem;

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

  > input[type="number"]::-webkit-inner-spin-button,
  > input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`