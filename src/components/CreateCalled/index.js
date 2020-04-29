import PropTypes from "prop-types";
import * as Yup from "yup";
import {
  Button,
  Header,
  Modal,
  Input,
  Select,
  TextArea,
} from "semantic-ui-react";
import { useFormik } from "formik";
import { Form } from "./styles";

export default function CreateCalled(props) {
  const { openModal, closeModal } = props;
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      cpf: "",
      Tel: "",
      email: "",
      sector: "",
      problem: "",
      image: "",
      description: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(15, " máximod e 15").required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      cpf: Yup.string().required("Required"),
      Tel: Yup.string().required("Required"),
      sector: Yup.string().required("Required"),
      problem: Yup.string().required("Required"),
      image: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Modal open={openModal} onClose={closeModal}>
      <Form onSubmit={formik.handleSubmit}>
        <div className="content-user">
          <Header>Dados Pessoais</Header>
          <div className="content-input">
            <label htmlFor="firstName">Nome </label>
            <label htmlFor="lastName">Sobrenome </label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            <Input
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <span>{formik.errors.firstName}</span>
            ) : null}
            {formik.touched.lastName && formik.errors.lastName ? (
              <span>{formik.errors.lastName}</span>
            ) : null}
          </div>
          <label htmlFor="cpf">CPF</label>
          <Input
            id="cpf"
            name="cpf"
            type="cpf"
            onChange={formik.handleChange}
            value={formik.values.cpf}
          />
          {formik.touched.cpf && formik.errors.cpf ? (
            <span>{formik.errors.cpf}</span>
          ) : null}
          <label htmlFor="Tel">Tel</label>
          <Input
            id="Tel"
            name="Tel"
            type="Tel"
            onChange={formik.handleChange}
            value={formik.values.Tel}
          />
          {formik.touched.Tel && formik.errors.Tel ? (
            <span>{formik.errors.Tel}</span>
          ) : null}
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <span>{formik.errors.email}</span>
          ) : null}
        </div>
        <div className="space"></div>
        <div className="content-problem">
          <Header>Descrição do problema</Header>
          <label htmlFor="sector">Setor</label>
          <Select
            id="sector"
            name="sector"
            onChange={formik.handleChange}
            value={formik.values.sector}
          />
          {formik.touched.sector && formik.errors.sector ? (
            <span>{formik.errors.sector}</span>
          ) : null}
          <label htmlFor="problem">Problema</label>
          <Select
            id="problem"
            name="problem"
            onChange={formik.handleChange}
            value={formik.values.problem}
          />
          {formik.touched.problem && formik.errors.problem ? (
            <span>{formik.errors.problem}</span>
          ) : null}
          <label htmlFor="image">Imagem</label>
          <Input
            id="image"
            name="image"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.image}
          />
          {formik.touched.image && formik.errors.image ? (
            <span>{formik.errors.image}</span>
          ) : null}
          <label htmlFor="description">Descrição</label>
          <TextArea
            id="description"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <span>{formik.errors.description}</span>
          ) : null}
          <div className="content-input">
            <Button type="submit" primary>
              Abrir Chamado
            </Button>
            <Button type="button" secondary>
              Cancelar
            </Button>
          </div>
        </div>
      </Form>
    </Modal>
  );
}
CreateCalled.propTypes = {
  closeModal: PropTypes.func.isRequired,
  openModal: PropTypes.boolean,
};
