import React, { useState } from "react"
import { Link } from 'react-router-dom';
function Menu(){
    
        return(
                <nav className="menu"> 
                    <ul>
                       <li><Link to="/">Головна</Link></li>
                       <li><Link to="/ship">Космічний корабель</Link></li>
                       <li><Link to="/missions">Експедиції</Link></li>
                       <li><Link to="/journeys">Мої подорожі</Link></li>
                    </ul>
                </nav> 
        )
    }

export default Menu