import React from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const MenuButton: React.FC = () => (
  <IconButton edge="start" color="inherit" aria-label="menu">
    <MenuIcon />
  </IconButton>
);

export default MenuButton;
