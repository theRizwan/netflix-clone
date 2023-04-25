import { useState, useEffect } from 'react';
import './Nav.css'
import { useNavigate } from 'react-router-dom';
function Nav() {
    const [show, handleShow] = useState(false)
    const navigate = useNavigate();
    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

        useEffect(() => {
            window.addEventListener('scroll', transitionNavBar)

            return () => 
                window.removeEventListener('scroll', transitionNavBar);
        }, [])
  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <div className='nav__content'>
            <img onClick={() => navigate('/')} className='nav__logo' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' />
            <img onClick={() => navigate('/profile')} className='nav__avatar' src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRPRgzRWFcBW3g2CXqYdHOiCc50eWtaU_TqmM1azWvB7qa_ZbNz' />
        </div>
    </div>
  )
}

export default Nav