import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useContext } from 'react'
import {ThemeContext} from "../../styles/ThemeContext"

const routes = [
  {path: "/", name: "Home"},
  {path: "/post", name: "Post"},
  {path: "/event", name: "Event"}
];

const Appbar = () => {
  const {mode, toggleMode}=useContext(ThemeContext)
  return (
    <AppBar enableColorOnDark position='sticky'>
      <Toolbar>
        <Typography>App</Typography>
        {routes.map(route=>(
        <Button
          color='secondary'
          LinkComponent={Link}
          to={route.path}
          variant='text'>{route.name}
        </Button>
        ))}

        <Button 
          color='secondary' 
          variant="contained"
          onClick={toggleMode}>
          Toggle theme
          </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Appbar
