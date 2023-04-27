import React, { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import AuthContext from "./../../../Auth/Context";
import apiLogin from "../../../Services/apiLogin";
import AppFormik from "../Formik/AppFormik";
import { toast } from "react-toastify";
import FieldText from "../Fields/FieldText";
import FieldSubmit from "../Fields/FieldSubmit";
import * as Yup from "yup";

const validation = Yup.object().shape({
  userName: Yup.string().required("User Required").min(1).label("UserName"),
  password: Yup.string().required("Password Required").min(1).label("Password"),
  employeeId: Yup.number().required("ID Required").min(1).label("ID"),
});

export default function Register() {
  const { setUser } = useContext(AuthContext);

  const handleSubmit = async (values) => {
    await apiLogin.CreateUser(values).then((res) => {
      if (res.status === 200) {
        setUser(res.data);
      } else {
        toast.warning("Usuario no valido");
      }
    });
  };

  return (
    <>
      <Typography component="h1" variant="h5">
        Register
      </Typography>
      <Box
        sx={{
          mt: 1,
          width: 400,
        }}
      >
        <AppFormik
          initialValues={{ userName: "", password: "", employeeId: 0 }}
          onSubmit={handleSubmit}
          validationSchema={validation}
          width={400}
        >
          <Box component="form" sx={{ mt: 1 }}>
            <FieldText name="userName" label="UserName" required />
            <FieldText
              name="password"
              label="Password"
              required
              type="password"
            />
            <FieldText
              name="employeeId"
              label="Employee ID"
              required
              type="number"
            />
            <FieldSubmit title="Login" />
          </Box>
        </AppFormik>
      </Box>
    </>
  );
}
