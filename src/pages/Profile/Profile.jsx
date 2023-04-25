import { useNavigate } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import "./Profile.css"
function Profile() {
    const navigate = useNavigate();
  return (
    <div className='profileScreen'>
        <Nav />
        <div className='profileScreen__body'>
            <h1>Edit Profile</h1>
            <div className='profileScreen__info'>
            <img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRPRgzRWFcBW3g2CXqYdHOiCc50eWtaU_TqmM1azWvB7qa_ZbNz' />
            <div className='profileScreen__details'>
                <h2>user@gmail.com</h2>
                <div className='profileScreen__plans'>
                    <h3>Plans</h3>
                    <button className='profileScreen__signout' onClick={() => navigate('/login')}>Sign Out</button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Profile