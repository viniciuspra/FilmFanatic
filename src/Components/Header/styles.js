import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;

  height: 10.5rem;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 8rem;

  > h1 {
    color: ${({ theme }) => theme.COLORS.GREEN};
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;

  text-align: end;
  font-size: 1.4rem;

  img {
    width: 5.6rem;
    border-radius: 50%;
  }    

  > span {
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    margin-right: 1rem;

    > button {
      font-weight: normal;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      background-color: transparent;
      border: none;
    }
  }

`

export const Search = styled.div`
  width: 64rem;
  padding: 0 6rem;
`;