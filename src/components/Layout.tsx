import React, {ReactNode} from 'react';
import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';

interface MyProps {
  children?: ReactNode;
}

const Layout: React.FC<MyProps> = ({ children }) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container>
        {children}
      </Container>
    </div>
  );
};

export default Layout;
