import './App.css'
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Items from './components/Items'
import ItemDetail from './components/ItemDetail'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {

  return (
    <>
    <BrowserRouter>
        <AppBar position="static" color="primary">
          <Toolbar variant="dense">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="inherit">
              <Link to="/">Home</Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="inherit">
              <Link to="/items" >Items</Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Items/>} />
          <Route path="/items/:itemId" element={<ItemDetail/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
