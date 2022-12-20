import { AppBar, Box, Toolbar, InputBase, Divider, Paper } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useContext, useState } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { useNavigate } from 'react-router-dom';


const msgInputSerach = 'Nunca dejes de buscar'

const NavBar = () => {

  const [search, setSearch] = useState('')
  const navigate = useNavigate();

  const handleSumbit = (e) => {

    e.preventDefault()
    if (search.trim().length > 4) {
      navigate({
        pathname: '/items',
        search: '?search='+search,
      });
    }
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor: '#FFE600'}}>
        <Toolbar>
          <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ width: '10%' }}
              style={{ marginLeft: '0px',
                paddingLeft: '0px',
                paddingRight: '2%',
                justifyContent: 'flex-end'
              }}
            >
             <img
                src='/Logo_ML@2x.png'
                loading="lazy"
                width={50}
                alt='Logo Mercado Libre'
              />
          </IconButton>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '80%' }}
            onSubmit={handleSumbit}
          >
            <InputBase
              sx={{ ml: 2, flex: 1, fontSize: '18px' }}
              placeholder={msgInputSerach}
              inputProps={{ 'aria-label': msgInputSerach }}
              onChange={({target}) => setSearch(target.value)}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSumbit}>
              <SearchIcon />
            </IconButton>
          </Paper>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar