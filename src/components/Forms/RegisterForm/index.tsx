import { useState, useContext } from "react";
import {
  Button,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import CheckIcon from "@material-ui/icons/Check";
import { Formik, Form as FormikForm } from "formik";

import logoImage from "../../../assets/images/logo-image.png";

import { RegisterContext } from "../../../contexts/RegisterContext";

import { infoMessage, errorMessage } from "../../Messages";
import { CustomInputMask } from "../../CustomInputMask";
import { ConfirmModal } from "../../Modal";

import { registerValidation } from "../../../utils/validations";
import { FormData } from "../../../types";

import { useStyles } from "./styles";

export function RegisterForm() {
  const classes = useStyles();
  const { addRegister } = useContext(RegisterContext);

  const formData = {
    cpf: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [showPassword, setShowPassword] = useState(false);

  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  function handleOpenConfirmModal() {
    setConfirmModalOpen(true);
  }
  function handleCloseConfirmModal() {
    setConfirmModalOpen(false);
  }

  return (
    <Grid item xs={12} md={12} lg={6} className={classes.loginWrapper}>
      <div className={classes.loginContainer}>
        <div className={classes.loginTitleContainer}>
          <div>
            <Typography className={classes.loginTitle}>
              Cadastrar Candidato
            </Typography>
            <Typography className={classes.loginSubtitle}>
              Cadastre-se e encontre a oportunidade que deseja
            </Typography>
          </div>
          <div>
            <img src={logoImage} alt='Logo' />
          </div>
        </div>

        <Formik
          initialValues={formData}
          onSubmit={(values) => {
            addRegister(values);
            handleOpenConfirmModal();
            values.cpf = "";
            values.email = "";
            values.password = "";
            values.confirmPassword = "";
          }}
          validationSchema={registerValidation}
        >
          {({ handleBlur, values, handleChange, isValid, errors }) => (
            <FormikForm>
              <TextField
                name='cpf'
                value={values.cpf}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='CPF'
                label='CPF'
                className={classes.inputForm}
                variant='filled'
                size='medium'
                InputProps={{
                  inputComponent: CustomInputMask as any,
                  endAdornment: values.cpf.length === 14 && (
                    <CheckIcon className={classes.iconCheck} />
                  ),
                }}
                helperText={errors.cpf}
                fullWidth
              />

              <TextField
                name='email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='E-mail'
                label='E-mail'
                className={classes.inputForm}
                InputProps={{
                  endAdornment: values.email && (
                    <CheckIcon className={classes.iconCheck} />
                  ),
                }}
                helperText={errors.email}
                variant='filled'
                size='medium'
                fullWidth
              />
              <TextField
                name='password'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Senha'
                label='Senha'
                className={classes.inputForm}
                variant='filled'
                size='medium'
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge='end'
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                helperText={errors.password}
                fullWidth
              />
              <TextField
                name='confirmPassword'
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Confirmar Senha'
                label='Confirmar Senha'
                className={classes.inputForm}
                variant='filled'
                size='medium'
                type='password'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge='end'
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                helperText={errors.confirmPassword}
                fullWidth
              />
              <Button
                type='submit'
                size='medium'
                variant='contained'
                className={classes.registerButton}
                disabled={!isValid}
                fullWidth
              >
                Cadastrar
              </Button>
              <Button
                size='medium'
                variant='outlined'
                onClick={() => infoMessage("Necessário implementação")}
                className={classes.loginOutlinedButton}
                fullWidth
              >
                Já Possui Cadastro? Faça o Login Aqui
              </Button>
              <Button
                size='medium'
                variant='text'
                onClick={() => infoMessage("Necessário implementação")}
                className={classes.loginTextButton}
                fullWidth
              >
                Já Possui Cadastro? Faça o Login Aqui
              </Button>

              <ConfirmModal
                email={values.email}
                confirmModalOpen={confirmModalOpen}
                handleCloseConfirmModal={handleCloseConfirmModal}
              />
            </FormikForm>
          )}
        </Formik>
      </div>
    </Grid>
  );
}
