import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

import { MenuItem, MenuList, Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BrunchDiningIcon from "@mui/icons-material/BrunchDining";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import Logo from "./Logo";
import useMediaSize from "../hooks/useMediaSize";

export default function Sidebar() {
  const currentMedia = useMediaSize();

  const StyledNavLink = styled(NavLink)`
    &:link,
    &:visited {
      display: flex;
      align-items: center;
      gap: ${currentMedia.md ? 1.2 : currentMedia.sm ? 0.6 : 0}rem;

      color: #f8b996;
      font-size: ${currentMedia.md ? 1.2 : currentMedia.sm ? 0 : 1.5}rem;
      font-weight: 400;
      padding: ${currentMedia.md ? 1.2 : currentMedia.sm ? 0 : 1.5}rem
        ${currentMedia.md ? 2.4 : currentMedia.sm ? 0 : 2.4}rem;
      transition: all 0.3s;
    }

    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
      color: var(--color-grey-800);
      background-color: var(--color-grey-50);
      border-radius: var(--border-radius-sm);
    }

    & svg {
      width: ${currentMedia.md ? 2.4 : currentMedia.sm ? 1.4 : 2.4}rem;
      height: 2.4rem;
      color: var(--color-grey-400);
      transition: all 0.3s;
    }

    &:hover svg,
    &:active svg,
    &.active:link svg,
    &.active:visited svg {
      color: var(--color-brand-600);
    }
  `;

  return (
    <Paper
      sx={{
        height: "100vh",
      }}
    >
      <Logo sx={{ paddingTop: 2 }} />

      <MenuList>
        <MenuItem>
          <StyledNavLink to="/dashboard">
            <HomeIcon />
            <span>Trang chủ</span>
          </StyledNavLink>
        </MenuItem>
        <MenuItem>
          <StyledNavLink to="/category">
            <BrunchDiningIcon />
            <span>Danh mục</span>
          </StyledNavLink>
        </MenuItem>
        <MenuItem>
          <StyledNavLink to="/user">
            <AccountCircleIcon />
            <span>Tài khoản</span>
          </StyledNavLink>
        </MenuItem>
        <MenuItem>
          <StyledNavLink to="/order">
            <ShoppingCartIcon />
            <span>Đơn hàng</span>
          </StyledNavLink>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
