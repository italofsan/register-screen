import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      height: "100vh",
      backgroundColor: "#E5E5E5",
      [theme.breakpoints.down("xs")]: {
        backgroundColor: "#F5F0FD",
        width: "100%",
        padding: 0,
      },
    },
    goBack: {
      position: "absolute",
      top: 32,
      left: 32,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      cursor: "pointer",
    },
    goBackIcon: {
      color: "#9B51E0",
      marginRight: 8,
    },
    goBackText: {
      color: "#9B51E0",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    imageWrapper: {
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    imageContainer: {
      display: "flex",
      width: "100%",
      height: "100%",
      padding: "24px 0",
    },
    image: {
      width: "60%",
      maxHeight: 550,
    },
    loginWrapper: {
      display: "flex",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    loginContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      maxHeight: 665,
      maxWidth: 555,
      padding: 48,
      backgroundColor: "#F5F0FD",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        padding: 0,
      },
    },
    loginTitleContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        paddingBottom: 16,
      },
    },
    loginTitle: {
      fontSize: 16,
      fontWeight: 700,
      color: "#5914DF",
    },
    loginSubtitle: {
      fontSize: 16,
      color: "#757171",
    },
    inputForm: {
      marginBottom: theme.spacing(3),
    },
    iconCheck: {
      color: "#27AE60 ",
    },
    registerButton: {
      backgroundColor: "#1071E6",
      color: "#FFFFFF",
      "&:hover": {
        backgroundColor: "#1071E6F0",
      },
    },
    loginOutlinedButton: {
      marginTop: theme.spacing(3),
      color: "#5850EC",
      display: "flex",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    loginTextButton: {
      marginTop: theme.spacing(3),
      color: "#5850EC",
      fontSize: 12,
      display: "flex",
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
  })
);
