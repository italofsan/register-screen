import { Container, Grid, Typography } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import { RegisterForm } from "../../components/Forms/RegisterForm";
import { infoMessage } from "../../components/Messages";

import registerImage from "../../assets/images/register-image.png";

import { useStyles } from "./styles";

export function Register() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div
        className={classes.goBack}
        onClick={() => infoMessage("Necessário implementação")}
      >
        <ArrowBackIcon className={classes.goBackIcon} />
        <Typography className={classes.goBackText}>Retornar</Typography>
      </div>
      <div className={classes.content}>
        <Container maxWidth='lg'>
          <Grid container justify='center' alignItems='center' direction='row'>
            <Grid item lg={6} className={classes.imageWrapper}>
              <div className={classes.imageContainer}>
                <img
                  src={registerImage}
                  alt='Register'
                  className={classes.image}
                />
              </div>
            </Grid>
            <RegisterForm />
          </Grid>
        </Container>
      </div>
    </div>
  );
}
