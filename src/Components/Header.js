import * as React from 'react';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';
import './Header.css';
import { MarginRounded } from '@mui/icons-material';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const pages1 = ['Home',, 'Greenlight', 'Request', 'Chat', 'Favorites', 'My materials', 'Rejects'];
const pages2 = ['Login', 'Become a member'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const languages = ['Russian', 'English', 'Kazakh'];
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const toggleForm = (showForm, hideForm) => {
    setShowLoginForm(showForm === 'loginForm');
    setShowRegistrationForm(showForm === 'registrationForm');
  };

  const closeForms = () => {
    setShowLoginForm(false);
    setShowRegistrationForm(false);
  };
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  const handleOverlayClick = (e) => {
    // Check if the click target is not part of the form
    if (!e.target.closest('.form-container')) {
      closeForms();
    }
  };

  const login = () => {
    if (username !== '' && password !== '') {
      alert('Login successful!');
    } else {
      alert('Please enter username and password.');
    }
  };

  const register = () => {
    if (username !== '' && password !== '' && password === confirmPassword) {
      alert('Registration successful!');
    } else {
      alert('Please enter valid information.');
    }

  };



  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  const AppBarStyle = {
    backgroundColor: "white",
    boxShadow: "none"

  };

  const handlePageClick = (page) => {
    
    const pageUrls = {
      Home: '/',
      Greenlight: '/greenlight',
      Request: '/request',
      Chat: '/chat',
      Favorites: '/favorites', 
      'My materials': '/mymaterials',
      Rejects: '/rejects',
      Login: '/login',
      'Become a member': '/register',

     
    };

    // Navigate to the URL when a page button is clicked
    window.location.href = pageUrls[page];
  };

  return (
    <AppBar position="static" style={{boxShadow: "none", backgroundColor: 'white', width: '100%', height: '100%', paddingTop: 16, paddingBottom: 16, paddingLeft: 195, paddingRight: 202, display: 'inline-flex'}}>
      <Container maxWidth="xl">
        <Toolbar>
          <div style={{ width: '100%', paddingTop: 13, paddingBottom: 13, paddingRight: 27, justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
          <div
            style={{color: '#252B42', fontSize: 24, fontFamily: 'Montserrat', fontWeight: '700', letterSpacing: 0.10, whiteSpace:'nowrap'}}
          >
            <a href='/' style={{textDecoration:'none', color:'#252B42'}}>Bilim Source</a>
          </div>
          </div>

          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#252B42"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages1.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Monteseratt',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#252B42',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'spaceBetween'}}>
          <Box style={{alignSelf: 'stretch', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            {pages1.map((page) => (
              <Button
                key={page}
                onClick={() => handlePageClick(page)}
                sx={{  marginRight:'10px', textTransform: "none", color: '#737373', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '600', whiteSpace:'nowrap'}}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box style={{width: '100%',alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex'}}>
           
              <Button
              
                
                onClick={() => toggleForm('loginForm', 'registrationForm')}
                style={{textTransform: "none", width:'100%',color: '#23A6F0', fontSize: 16, fontFamily: 'Montserrat', fontWeight: '700', letterSpacing: 0.20, wordWrap: 'break-word'}}
              >
                Login
              </Button>
              <Button
  variant="outlined"
  onClick={() => toggleForm('registrationForm', 'loginForm')}
  sx={{
    textTransform: 'none',
    whiteSpace: 'nowrap',
    color: '#23A6F0',
    fontSize: 16,
    fontFamily: 'Montserrat',
    fontWeight: 700,
    letterSpacing: 0.2,
    padding: '10px 50px', // Adjust the padding to make the button bigger
    '&:hover': {
      backgroundColor: '#23A6F0',
      color: '#fff',
    },
  }}
>
  Register
</Button>

              
      <Select
        autoWidth = "true"
        id="language-select"
        value={selectedLanguage}
        onChange={handleLanguageChange}

        size="small"
        sx={{
         
          whiteSpace: 'nowrap',
          color: '#23A6F0',
          fontSize: 16,
          fontFamily: 'Montserrat',
          
          letterSpacing: 0.2,
          padding: '5px', // Adjust the padding to make the button bigger
          
        }}
      >
        <MenuItem value="kazakh">KZ</MenuItem>
        <MenuItem value="russian">RU</MenuItem>
        <MenuItem value="english">EN</MenuItem>
      </Select>
  </Box>
    
  
   
  
           
          </div>
          


        </Toolbar>
      </Container>
      {showLoginForm && (
        <div className="overlay" onClick={handleOverlayClick}>
        <div className="form-container">
          <h2>Login</h2>
          <form>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <button type="button" onClick={login}>
              Login
            </button>
          </form>
        </div>
        </div>
      )}

      {showRegistrationForm && (
        <div className="overlay" onClick={handleOverlayClick}>
        <div className="form-container">
          <h2>Registration</h2>
          <form>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <br />
            <button type="button" onClick={register}>
              Register
            </button>
          </form>
        </div>
        </div>
      )}

     
    </AppBar>
  );
};
export default Header;