import React from "react";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { loginActionAsync } from "../../redux/actions/userAction";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./SingIn.scss";

const schema = yup.object({
  email: yup
    .string()
    .email("Debe ingresar un email")
    .required("Este campo es obligatorio"),
  password: yup.string().required("Este campo es obligatorio"),
});

const SingIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const logIn = (dataForm) => {
    console.log(dataForm);
    dispatch(loginActionAsync(dataForm.email, dataForm.password));
  };

  const handleNext = () => {
    navigate("/home");
  };

  return (
    <div className="singIn">
      <Link to="/">
        <figure className="singIn__figure">
          <img
            src="https://res.cloudinary.com/dgdogxycl/image/upload/v1687843557/Logo_lloydg.svg"
            alt="Logo restomix"
          />
        </figure>
      </Link>
      <Form className="p-5 formSingIn" onSubmit={handleSubmit(logIn)}>
        <Form.Group className="mb-3 formSingIn__email">
          <Form.Label className="formSingIn__labels">Email address</Form.Label>
          <Form.Control
            className="formSingIn__text"
            type="email"
            placeholder="Ingrese su email"
            {...register("email")}
          />
          <Form.Text className="text-muted">{errors.email?.message}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 formSingIn__password">
          <Form.Label className="formSingIn__labels">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese una contraseña"
            {...register("password")}
            className="formSingIn__text"
          />
          <Form.Text className="text-muted">
            {errors.password?.message}
          </Form.Text>
        </Form.Group>

        <button
          variant="primary"
          type="submit"
          className="formSingIn__submit"
          onClick={() => handleNext()}
        >
          Iniciar Sesión
        </button>
        <p>
          ¿No tines una cuenta? <Link to="/register">Haz click aquí!</Link>
        </p>
      </Form>
    </div>
  );
};

export default SingIn;
