import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import MenuIcon from '@mui/icons-material/Menu'
import { FaPython } from 'react-icons/fa'
import SearchIcon from '@mui/icons-material/Search'
import { DiJava } from 'react-icons/di'
import { HiCode } from 'react-icons/hi'
import { AiFillHtml5 } from 'react-icons/ai'
import { CssBaseline } from '@mui/material'
import { BiCodeCurly } from 'react-icons/bi'
import { DiJavascript1 } from 'react-icons/di'
import { FiDatabase } from 'react-icons/fi'
import { FaRegObjectGroup } from 'react-icons/fa'
import { IoIosGitNetwork } from 'react-icons/io'
import { GrSystem } from 'react-icons/gr'
import { AiOutlineCloudServer } from 'react-icons/ai'
import { AiOutlineHome } from 'react-icons/ai'
import { FaHandsHelping } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  margin: 'auto',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 'auto',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

export default function Header(props) {
  const [state, setState] = React.useState({
    left: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor, category) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <NavLink to='/'>
          <ListItem button key='Home'>
            <ListItemIcon>
              <AiOutlineHome size='1.5em' />{' '}
            </ListItemIcon>
            <ListItemText primary='Home' />
          </ListItem>
        </NavLink>
      </List>
      <Divider />
      <List>
        {[
          {
            text: 'Python',
            url: '/python',
            icon: <FaPython size='1.5em' />,
          },
          {
            text: 'Java',
            url: '/java',
            icon: <DiJava size='2em' />,
          },
          {
            text: 'C/C++',
            url: '/cpp',
            icon: <HiCode size='1.5em' />,
          },
          {
            text: 'HTML/CSS',
            url: '/html',
            icon: <AiFillHtml5 size='1.5em' />,
          },
          {
            text: 'Data Structures',
            url: '/dsa',
            category: 'dsa',
            icon: <BiCodeCurly size='1.5rem' />,
          },
          {
            text: 'JavaScript',
            url: '/js',
            icon: <DiJavascript1 size='1.5rem' />,
          },
        ].map((item, index) => (
          <NavLink to={item.url}>
            <ListItem button key={item.text} defaultValue='dsa'>
              <ListItemIcon>{item.icon} </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          </NavLink>
        ))}
      </List>
      <Divider />

      <List>
        {[
          {
            text: 'DBMS',
            url: '/dbms',
            icon: <FiDatabase size='1.5em' />,
          },
          {
            text: 'OOPS',
            url: '/oops',
            icon: <FaRegObjectGroup size='1.5em' />,
          },
          {
            text: 'Computer Networks',
            url: '/network',
            icon: <IoIosGitNetwork size='1.5em' />,
          },
          {
            text: 'Operating Systems',
            url: '/system',
            icon: <GrSystem size='1.5em' />,
          },
          {
            text: 'Cloud Computing',
            url: '/cloud',
            icon: <AiOutlineCloudServer size='1.5rem' />,
          },
        ].map((item, index) => (
          <NavLink to={item.url}>
            <ListItem button key={item.text}>
              <ListItemIcon>{item.icon} </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          </NavLink>
        ))}
      </List>
      <Divider />
      <List>
        <NavLink to='/contribute'>
          <ListItem button key='contribute'>
            <ListItemIcon>
              <FaHandsHelping size='1.5em' />{' '}
            </ListItemIcon>
            <ListItemText primary='Contribute' />
          </ListItem>
        </NavLink>
      </List>
    </Box>
  )

  return (
    <Box sx={{ flexGrow: 1 }} style={{ marginBottom: 15 }}>
      <CssBaseline />
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{ mr: 2 }}
          >
            {[''].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button
                  onClick={toggleDrawer(anchor, true)}
                  style={{ size: 'large', edge: 'start', color: 'inherit' }}
                >
                  <MenuIcon />
                </Button>
                <SwipeableDrawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  onOpen={toggleDrawer(anchor, true)}
                >
                  {list(anchor)}
                </SwipeableDrawer>
              </React.Fragment>
            ))}
          </IconButton>

          <Typography
            variant='h5'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            style={{ color: 'white' }}
          >
            <NavLink
              to='/'
              style={{
                color: 'white',
                fontFamily: 'Oswald',
                letterSpacing: '3px',
                fontWeight: 'bold',
              }}
            >
              E-LIBRARY
            </NavLink>
          </Typography>

          <Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Search…'
                inputProps={{ 'aria-label': 'search' }}
                onChange={props.handleChange}
                // value={input}
              />
            </Search>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
