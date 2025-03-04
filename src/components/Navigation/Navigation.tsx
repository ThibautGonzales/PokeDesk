import './Navigation.css';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CatchingPokemonTwoToneIcon from '@mui/icons-material/CatchingPokemonTwoTone';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import BookRoundedIcon from '@mui/icons-material/BookRounded';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { useState } from 'react';


export default function Navigation(){
    
    // État pour savoir si la classe doit être ajoutée
    const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
      
    // Fonction pour gérer le clic sur le bouton
    const handleMenuClick = () => {
      setIsCollapsed(false);
    };


    return <div className={isCollapsed ? 'navigation-container' : 'navigation-container extended'}>
        
        <MenuRoundedIcon className={isCollapsed ? 'menu' : 'inactive'} onClick={handleMenuClick}/>
        
        <span className='nav-icons'>
            <CatchingPokemonTwoToneIcon className='nav-icon'/>
            <ShoppingBagIcon className='nav-icon'/>
            <BookRoundedIcon className='nav-icon active'/>
            <ShoppingCartIcon className='nav-icon'/>
            <PersonIcon className='nav-icon'/>
        </span>

        <FavoriteIcon className='like'/>

    </div>;
}