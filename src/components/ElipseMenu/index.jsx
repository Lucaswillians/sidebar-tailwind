import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AlertDialog from "../AlertDialog/index";
import { GoHeart } from "react-icons/go";
import { useFavoriteContext } from "../../contexts/Favorite";
import { GoHeartFill } from "react-icons/go";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function ElipseMenu({ id }) {
  const { favorite, addFavorite } = useFavoriteContext();
  const isFavorite = favorite.some((fav) => fav.id === id);
  const Icon = isFavorite ? GoHeartFill : GoHeart;

  const [anchorEl, setAnchorEl] = useState(null);
  const [openAlertDialog, setOpenAlertDialog] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="mr-3 mt-3">
      <KeyboardArrowDownIcon onClick={handleClick} />
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          sx={{
            fontFamily: "Inter",
            color: "rgb(55, 65, 81)",
            fontWeight: "none",
          }}
          onClick={handleClose}
          disableRipple
        >
          <EditIcon />
          Editar
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem sx={{ padding: "4px", paddingLeft: "1rem" }} disableRipple>
          <AlertDialog
            id={id}
            open={openAlertDialog}
            handleClose={() => setOpenAlertDialog(false)}
          />
        </MenuItem>
      </StyledMenu>
      <div
        className="text-black"
        style={{ marginLeft:"2px", fontSize: "20px" }}
        onClick={() => {
          addFavorite({ id });
        }}
      >
        <Icon />
      </div>
    </div>
  );
}
