import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dialogContent: {
      padding: 72,
      [theme.breakpoints.down("xs")]: {
        padding: 16,
      },
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
