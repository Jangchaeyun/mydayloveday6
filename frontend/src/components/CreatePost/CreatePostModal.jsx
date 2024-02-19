import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ImageIcon from "@mui/icons-material/Image";
import Modal from "@mui/material/Modal";
import { useFormik } from "formik";
import { Avatar, Card, IconButton } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: ".6rem",
  outline: "none",
};

const CreatePostModal = ({ handleClose, open }) => {
  const formik = useFormik();
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <div className="flex space-x-4 items-center">
              <Avatar />
              <div>
                <p className="font-bold text-lg">cherrymyday</p>
                <p className="text-sm">@cherry_myday</p>
              </div>
            </div>
            <textarea
              placeholder="캡션 쓰기...."
              name="caption"
              id="caption"
              onChange={formik.handleChange}
              value={formik.values.caption}
              rows="4"
            ></textarea>

            <div className="flex space-x-5 items-center mt-5">
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleSelectImage}
                  style={{ display: "none" }}
                  id="image-input"
                />
                <label htmlFor="image-input">
                  <IconButton>
                    <ImageIcon />
                  </IconButton>
                </label>
                <span>이미지</span>
              </div>
            </div>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default CreatePostModal;
