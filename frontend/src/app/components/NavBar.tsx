'use client';

import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, IconButton, Collapse } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import { useRouter } from 'next/navigation';

const NavBar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [playOpen, setPlayOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const handlePlayClick = () => {
    setPlayOpen(!playOpen);
  };

  const handleNavClick = (path: string) => {
    router.push(path);
    setOpen(false);
  };

  const list = () => (
    <div onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        <ListItem button onClick={handlePlayClick}>
          <ListItemIcon>
            <PlayArrowIcon />
          </ListItemIcon>
          <ListItemText primary="Play" />
          {playOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={playOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button onClick={() => handleNavClick('/play-online')}>
              <ListItemText inset primary="Play Online" />
            </ListItem>
            <ListItem button onClick={() => handleNavClick('/play-with-friend')}>
              <ListItemText inset primary="Play with Friend" />
            </ListItem>
            <ListItem button onClick={() => handleNavClick('/play-with-computer')}>
              <ListItemText inset primary="Play with Computer" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => handleNavClick('/how-to-play')}>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="How to Play" />
        </ListItem>
        <ListItem button onClick={() => handleNavClick('/login')}>
          <ListItemIcon>
            <LoginIcon />
          </ListItemIcon>
          <ListItemText primary="Log In" />
        </ListItem>
        <ListItem button onClick={() => handleNavClick('/sign-up')}>
          <ListItemIcon>
            <PersonAddIcon />
          </ListItemIcon>
          <ListItemText primary="Sign Up" />
        </ListItem>
        <ListItem button onClick={() => handleNavClick('/settings')}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        style={{ position: 'fixed', top: 10, left: 10 }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
};

export default NavBar;
