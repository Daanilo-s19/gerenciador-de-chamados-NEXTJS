import { useState } from "react";
import Link from "next/link";
import SearchCalled from "../../components/SearchCalled";
import { Transition } from "semantic-ui-react";
import { Container } from "./styles";
import CreateCalled from "../../components/CreateCalled";

export default function Home() {
  const [clickButton, setClickButton] = useState("");
  return (
    <>
      <Container grid={clickButton === "search" ? true : false}>
        <img src="/assets/logo.png" alt="logo" />

        <div className="content-button">
          {clickButton !== "search" && (
            <>
              <button
                className="create-button"
                onClick={() => setClickButton("create")}
              >
                Criar Chamado
              </button>
              <button
                className="search-button"
                onClick={() => setClickButton("search")}
              >
                Acompanhar Chamado
              </button>
            </>
          )}
          {clickButton === "search" && (
            <>
              <SearchCalled />
              <span onClick={() => setClickButton("")}>Retornar</span>
            </>
          )}
          {clickButton === "create" && (
            <CreateCalled
              openModal={clickButton === "create" ? true : false}
              closeModal={() => setClickButton("")}
            />
          )}
        </div>
      </Container>
    </>
  );
}
