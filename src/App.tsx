import React from 'react';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Game } from './Game';

type AppProps = {
};

class App extends React.Component<AppProps> {
  state: {
    settings: boolean,
  };

  constructor(props: AppProps) {
    super(props);
    this.state = {
      settings: false,
    };
  }

  toggleDrawer(open: boolean) {
    return (event: React.KeyboardEvent | React.MouseEvent) => {
      if (event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
           (event as React.KeyboardEvent).key === 'Shift')) {
        return;
      }

      this.setState({
        settings: open,
      });
    };
  }

  render() {
    return (
      <div>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={this.toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Tic-Tac-Toe
            </Typography>
            <IconButton
              size="large"
              aria-label="display more actions"
              edge="end"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <Drawer
          anchor={'left'}
          open={this.state.settings}
          onClose={this.toggleDrawer(false)}
        >
          <Typography>
            This drawer is still empty (^_^)/
          </Typography>
        </Drawer>
        <Game />
      </div>
    );
  }
}

export { App };
