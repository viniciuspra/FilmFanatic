import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  width: 100px;
  background: none;
  border: none;

  display: flex;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) => theme.COLORS.GREEN};
`