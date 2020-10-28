import React from 'react';
import {Link} from 'react-router-dom'

function Nav() {
    return(
        <nav>
            <h3>Logo</h3>
            <ul>
                <Link to = '/'><li>Home</li></Link>
                <Link to = '/gradepointaverage'><li>GPA</li></Link>
                <Link to = '/downloads'><li>Downloads</li></Link>
                <Link to = '/about'><li>About</li></Link>
                <Link to = '/profile'><li>Profile</li></Link>
            </ul>
        </nav>
    );
}

export default Nav;