import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

import { MenuItem, MenuList } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BrunchDiningIcon from "@mui/icons-material/BrunchDining";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import Logo from "./Logo";

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: #f8b996;
    font-size: 1.2rem;
    font-weight: 400;
    padding: 1.2rem 2.4rem;
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
    width: 2.4rem;
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

export default function Sidebar() {
  return (
    <div>
      <Logo sx={{ marginTop: 1 }} />

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
    </div>
  );
}
