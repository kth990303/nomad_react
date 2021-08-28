import React from 'react';
import {Link} from 'react-router-dom';

function Navigator(){
    return <div>
        <Link to="/">Movie List</Link><br></br>
        <Link to="/about">About this site</Link>
    </div>
}
export default Navigator;