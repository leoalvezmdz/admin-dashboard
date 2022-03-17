import { ChatBubbleOutline, DarkModeOutlined, FullscreenOutlined, LanguageOutlined, ListOutlined, NotificationsOutlined, SearchOutlined } from '@mui/icons-material'
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import './navbar.scss'

const Navbar = () => {

  const {dispatch} = useContext(DarkModeContext);

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input placeholder='Search...'/>
          <SearchOutlined/>
        </div>
        <div className='items'>
          <div className='item'>
            <LanguageOutlined className='icon'/>
            English
          </div>
          <div className='item'>
            <DarkModeOutlined className='icon' onClick={()=>dispatch({type:"TOGGLE"})}/>
          </div>
          <div className='item'>
            <FullscreenOutlined className='icon'/>
          </div>
          <div className='item'>
            <NotificationsOutlined className='icon'/>
            <div className='counter'>1</div>
          </div>
          <div className='item'>
            <ChatBubbleOutline className='icon'/>
            <div className='counter'>2</div>
          </div>
          <div className='item'>
            <ListOutlined className='icon'/>
          </div>
          <div className='item'>
            <img src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' alt='' className='avatar'/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar;
