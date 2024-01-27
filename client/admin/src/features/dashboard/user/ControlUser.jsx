import { Button, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import React from "react";

export default function ControlUser({ user }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          minWidth: "unset",
          padding: 0,
        }}
      >
        <MoreVertIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {user.role === "admin" ? (
          <MenuItem disabled>Không thể sửa</MenuItem>
        ) : (
          <MenuItem
            onClick={() => {
              handleClose();
            }}
          >
            Sửa
          </MenuItem>
        )}
        <MenuItem
          onClick={() => {
            handleClose();
          }}
        >
          Xoá
        </MenuItem>
      </Menu>
    </>
  );
}
