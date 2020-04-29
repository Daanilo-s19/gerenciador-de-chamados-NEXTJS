import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .create-button {
    background: #03588c;
    border-radius: 14px 0 0 14px;
  }
  .search-button {
    background: #ce1111;
    border-radius: 0 14px 14px 0;
  }

  .content-button {
    width: 50%;
    margin: 40px 0;
    display: grid;
    ${(props) =>
      props.grid
        ? " grid-template-rows:repeat(2, 1fr);justify-items: center; "
        : " grid-template-columns:repeat(2, 1fr);"};
  }

  img {
    width: 200px;
    height: 300px;
  }

  button {
    height: 80px;
    color: #fff;
    font-size: 20px;
    border-radius: 14px;
    cursor: pointer;
    &:hover {
      opacity: 0.6;
      transition: 500ms;
    }
  }
  span {
    margin-top: 10px;
    font-size: 14px;
    color: #20788c;
    &:hover {
      opacity: 0.6;
    }
  }
`;
