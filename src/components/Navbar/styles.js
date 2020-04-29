import styled from "styled-components";

export const Nav = styled.nav`
  background: #011826;
  width: 100%;
  height: auto;
  padding: 10px 36px;

  display: flex;
  justify-content: flex-end;

  form {
    display: grid;
    grid-template-columns: repeat(2, 2fr) 1fr auto;
    gap: 10px;
  }

  input {
    max-width: 124px;
    height: 40px;
  }

  strong {
    color: #fff;
    font-size: 11px;
    display: flex;
    align-items: center;
    &:hover {
      opacity: 0.6;
      cursor: pointer;
    }
  }
`;
