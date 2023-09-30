import { Link, Outlet } from 'react-router-dom';

import { faEnvelope, faHome, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavigationBar: React.FC = () => {
     return (
        <>
            <nav id= "navbar" className = 'navbar'>
                <main>
                    <Outlet/>
                </main>
                <div className='navbar-links'>
                    <Link to = "/" ><FontAwesomeIcon icon = { faHome }/>Dashboard</Link>
                    <Link to = "contact" ><FontAwesomeIcon icon = { faEnvelope }/> Wallet</Link>
                    <Link to = "authenticationPage"><FontAwesomeIcon icon = { faUserPlus }/> Sign Out</Link> 
                </div>
            </nav> 
            
            
        </>
     );
};

//Create a function to handle tabs when the user clicks on the Home, About and contact links*/



export default NavigationBar;