import Link from "next/link";
import { Nav } from "./styles";
import { Button, Input } from "semantic-ui-react";

export default function Navbar() {
  return (
    <Nav>
      <form>
        <Input placeholder="Login" icon="user" />
        <Input type="password" placeholder="Senha" icon="lock" />
        <Button content="Entrar" primary />
        <Link href="/">
          <strong>Esqueceu a senha?</strong>
        </Link>
      </form>
    </Nav>
  );
}
