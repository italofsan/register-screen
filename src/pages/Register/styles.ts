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
  })
);
