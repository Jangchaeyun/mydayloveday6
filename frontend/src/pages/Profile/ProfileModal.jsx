import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { updateProfileAction } from "../../Redux/Auth/auth.action";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  outline: "none",
  overflow: "scroll-y",
  borderRadius: 3,
};

export default function ProfileModal({ open, handleClose }) {
  const dispatch = useDispatch();

  const handleSumbit = (values) => {
    console.log("values ", values);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    onSubmit: (values) => {
      console.log("values ", values);
      dispatch(updateProfileAction(values));
    },
  });

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <IconButton onClick={handleClose} color="success">
                  <CloseIcon />
                </IconButton>
                <p>프로필 수정</p>
              </div>
              <Button type="submit" color="success">
                저장
              </Button>
            </div>
            <div>
              <div className="h-[15rem]">
                <img
                  className="w-full h-full rounded-t-td"
                  src="https://cdn.mhnse.com/news/photo/202109/84668_62215_1913.jpg"
                  alt=""
                />
              </div>
              <div className="pl-5">
                <Avatar
                  className="transform -translate-y-24"
                  sx={{ width: "10rem", height: "10rem" }}
                  src="https://i.namu.wiki/i/hKHHlJkwxDpxiXC0OuRfDkEgCtZcKaxPSMifZ9aJYbsgboHI9vpfgXp1dHaGTXH8AAF4HXC7TdqBc-tEGzShn3eWMM85BdY_scDe2bFIGP9n5EZyvGLQsGUdTyktqSAEqu0F1-ezIN_6bJxIwbZs2w.webp"
                />
              </div>
            </div>
            <div className="space-y-3">
              <TextField
                fullWidth
                id="firstName"
                name="firstName"
                label="성"
                value={formik.values.firstName}
                onChange={formik.handleChange}
              />
              <TextField
                fullWidth
                id="lastName"
                name="lastName"
                label="이름"
                value={formik.values.lastName}
                onChange={formik.handleChange}
              />
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
