'use client';

import React, { useState } from 'react';
import { Drawer, List, ListItemText, ListItemIcon, IconButton, Collapse, ListItemButton, Box, Tooltip } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LogoutIcon from '@mui/icons-material/Logout';
import ComputerIcon from '@mui/icons-material/Computer';
import PeopleIcon from '@mui/icons-material/People';
import PublicIcon from '@mui/icons-material/Public';
import { useRouter } from 'next/navigation';

const NavBar = () => {
  const router = useRouter();
  const [playOpen, setPlayOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = (path: string) => {
    router.push(path);
  };

  const handlePlayClick = () => {
    setPlayOpen(!playOpen);
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const playList = () => (
    <Collapse in={playOpen} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <Tooltip title="Play Online" placement="right" followCursor arrow disableHoverListener={expanded}>
          <ListItemButton sx={{ pl: 4 }} onClick={() => handleNavClick('/play-online')}>
            <ListItemIcon>
              <PublicIcon />
            </ListItemIcon>
            {expanded && <ListItemText primary="Play Online" />}
          </ListItemButton>
        </Tooltip>
        <Tooltip title="Play with Friend" placement="right" followCursor arrow disableHoverListener={expanded}>
          <ListItemButton sx={{ pl: 4 }} onClick={() => handleNavClick('/play-with-friend')}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            {expanded && <ListItemText primary="Play with Friend" />}
          </ListItemButton>
        </Tooltip>
        <Tooltip title="Play with Computer" placement="right" followCursor arrow disableHoverListener={expanded}>
          <ListItemButton sx={{ pl: 4 }} onClick={() => handleNavClick('/play-with-computer')}>
            <ListItemIcon>
              <ComputerIcon />
            </ListItemIcon>
            {expanded && <ListItemText primary="Play with Computer" />}
          </ListItemButton>
        </Tooltip>
      </List>
    </Collapse>
  );

  const HowToPlay = () => (
    <Tooltip title="How to Play" placement="right" followCursor arrow disableHoverListener={expanded}>
      <ListItemButton onClick={() => handleNavClick('/how-to-play')}>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        {expanded && <ListItemText primary="How to Play" />}
      </ListItemButton>
    </Tooltip>
  );

  const list = () => (
    <List>
      <Tooltip title="Play" placement="right" followCursor arrow disableHoverListener={expanded}>
        <ListItemButton onClick={handlePlayClick}>
          <ListItemIcon>
            <PlayArrowIcon />
          </ListItemIcon>
          {expanded && <ListItemText primary="Play" />}
          {playOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </Tooltip>
      {playList()}
      <HowToPlay />
    </List>
  );

  const bottomList = () => (
    <List>
      <Tooltip title="Log In" placement="right" followCursor arrow disableHoverListener={expanded}>
        <ListItemButton onClick={() => handleNavClick('/login')}>
          <ListItemIcon>
            <LoginIcon />
          </ListItemIcon>
          {expanded && <ListItemText primary="Log In" />}
        </ListItemButton>
      </Tooltip>
      <Tooltip title="Sign Up" placement="right" followCursor arrow disableHoverListener={expanded}>
        <ListItemButton onClick={() => handleNavClick('/sign-up')}>
          <ListItemIcon>
            <PersonAddIcon />
          </ListItemIcon>
          {expanded && <ListItemText primary="Sign Up" />}
        </ListItemButton>
      </Tooltip>
      <Tooltip title="Settings" placement="right" followCursor arrow disableHoverListener={expanded}>
        <ListItemButton onClick={() => handleNavClick('/settings')}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          {expanded && <ListItemText primary="Settings" />}
        </ListItemButton>
      </Tooltip>
      <Tooltip title="Log Out" placement="right" followCursor arrow disableHoverListener={expanded}>
        <ListItemButton onClick={() => handleNavClick('/logout')}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          {expanded && <ListItemText primary="Log Out" />}
        </ListItemButton>
      </Tooltip>
    </List>
  );

  return (
    <div>
      <Drawer variant="permanent" anchor="left" open>
        <Box
          display="flex"
          flexDirection="column"
          height="100%"
          style={{ width: expanded ? 240 : 60, transition: 'width 0.3s', position: 'relative' }}
        >
          <IconButton
            onClick={toggleExpand}
            style={{
              position: 'absolute',
              top: 10,
              left: expanded ? 180 : 10,
              transition: 'left 0.3s',
              border: '1px solid #ccc',
              borderRadius: '50%',
              backgroundColor: '#fff',
            }}
          >
            <ChevronRightIcon style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
          </IconButton>
          <Box mt={8} flexGrow={1} display="flex" flexDirection="column">
            {list()}
          </Box>
          <Box mb={2}>
            {bottomList()}
          </Box>
        </Box>
      </Drawer>
    </div>
  );
};

export default NavBar;
