import { Grid, Modal, Paper } from "@material-ui/core";
import React from "react";

export default function Login(props:{ open: boolean; handleCloseLoginModal: any; } ) {
  const { open, handleCloseLoginModal  } = props;
  console.log("open", open);
  console.log("handleCloseLoginModal", handleCloseLoginModal);
  return (
    <>
      <Modal
        open={open}
        onClose={handleCloseLoginModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <>
        <div className="flex justify-center align-center height100">
          <Paper className="width400px">
            <Grid>
              LOGIN
            </Grid>
          </Paper>
          </div>
        </>
      </Modal>
    </>
  );
}
