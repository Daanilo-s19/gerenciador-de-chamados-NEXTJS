import { useState } from "react";
import { Input, Button, Header, Image, Modal } from "semantic-ui-react";
import { Form } from "./styles";

export default function SearchCalled() {
  const [called, setCalled] = useState("");
  const [visible, setVisible] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setCalled("");
    setVisible(true);
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          style={{ width: "100%" }}
          icon="search"
          placeholder="Insira seu CPF ou o número do chamado"
          onChange={(search) => setCalled(search.target.value)}
          value={called}
        />
      </Form>
      <Modal open={visible} onClose={() => setVisible(false)}>
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image
            wrapped
            size="medium"
            src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
          />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>
              We've found the following gravatar image associated with your
              e-mail address.
            </p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </>
  );
}
