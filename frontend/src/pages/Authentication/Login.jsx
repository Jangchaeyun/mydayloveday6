import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../../Redux/Auth/auth.action";

const initialValues = { email: "", password: "" };
const validationSchema = {
  email: Yup.string().email("잘못된 이메일").required("이메일은 필수입니다."),
  password: Yup.string()
    .min(6, "비밀번호는 6자 이상이어야 합니다.")
    .required("비밀번호는 필수입니다."),
};
const Login = () => {
  const [formValue, setFormValue] = useState();
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    console.log("handle submit", values);
    dispatch(loginUserAction({ data: values }));
  };
  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        // validationSchema={validationSchema}
        initialValues={initialValues}
      >
        <Form className="space-y-5">
          <div className="space-y-5">
            <div>
              <Field
                as={TextField}
                name="email"
                placeholder="이메일"
                type="email"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <Field
                as={TextField}
                name="password"
                placeholder="비밀번호"
                type="password"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>
          <Button
            sx={{ padding: ".8rem 0rem" }}
            fullWidth
            type="submit"
            variant="contained"
            color="success"
          >
            로그인
          </Button>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
