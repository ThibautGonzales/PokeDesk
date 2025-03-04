import './App.css';
import Home from './components/Home/Home';
import './components/constants/color.css';

//Icons
import PaidIcon from '@mui/icons-material/Paid';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';




import Navigation from './components/Navigation/Navigation';




export default function App() {
  return <div className='app-container'>
    <Navigation/>
    Hello world
  </div>;
}