import React from "react";
import {
  Dialog,
  DialogContent,
  Button,
  Typography,
  Paper,
} from "@material-ui/core";

import modalImage from "../../assets/images/modal-image.png";

import { hideEmail } from "../../utils/functions";

import { useStyles } from "./styles";

interface ConfirmModalProps {
  email: string;
  confirmModalOpen: boolean;
  handleCloseConfirmModal: () => void;
}

export function ConfirmModal({
  email,
  confirmModalOpen,
  handleCloseConfirmModal,
}: ConfirmModalProps) {
  const classes = useStyles();

  return (
    <Dialog open={confirmModalOpen} onClose={handleCloseConfirmModal}>
      <div>
        <DialogContent className={classes.dialogContent}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={modalImage} alt='Confirmação' />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              margin: "24px 0",
            }}
          >
            <Typography
              style={{
                textAlign: "center",
                marginBottom: 16,
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              Cadastro Realizado com Sucesso!
            </Typography>
            <Typography style={{ textAlign: "center" }}>
              {`O link de confirmação foi enviado para o e-mail ${hideEmail(
                email
              )}`}
            </Typography>
          </div>
          <Button
            size='medium'
            variant='contained'
            onClick={handleCloseConfirmModal}
            className={classes.closeButton}
            fullWidth
          >
            Fechar
          </Button>
        </DialogContent>
      </div>
    </Dialog>
  );
}
