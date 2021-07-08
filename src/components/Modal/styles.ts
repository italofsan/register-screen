import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dialogContent: {
      padding: 72,
      [theme.breakpoints.down("xs")]: {
        padding: 16,
      },
    },
    imageContainer: {
      display: "flex",
      justifyContent: "center",
    },
    dialogTitle: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      margin: "24px 0",
    },
    dialogSubtitle: {
      textAlign: "center",
      marginBottom: 16,
      fontSize: 18,
      fontWeight: 500,
    },
    closeButton: {
      backgroundColor: "#1071E6",
      color: "#FFFFFF",
      "&:hover": {
        backgroundColor: "#1071E6F0",
      },
    },
  })
);
