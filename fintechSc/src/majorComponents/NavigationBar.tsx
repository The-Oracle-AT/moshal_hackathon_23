import { Link, Outlet } from 'react-router-dom';

import { faEnvelope, faHome, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ProfileNavigationBar= () => {
     return(
        <>
            <nav id= "navbar" className = 'navbar'>
                <div className='navbar-links'>
                    <Link to = "/" ><FontAwesomeIcon icon = { faHome }/>Home</Link>
                    <Link to = "contact" ><FontAwesomeIcon icon = { faEnvelope }/> Contact</Link>
                    <Link to = "authenticationPage"><FontAwesomeIcon icon = { faUserPlus }/> Sign in</Link> 
                </div>
            </nav> 
            <main>
                <Outlet/>
            </main>
            
        </>
     );
};

//Create a function to handle tabs when the user clicks on the Home, About and contact links*/



export default ProfileNavigationBar;