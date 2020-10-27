import React from 'react';

import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Styles = styled.div`
    h3{
        color: #bbb;
    }
    nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 10vh;
    background: rgb(55, 69, 70);
    color: aliceblue;
    }
    .link{
        color: #bbb;

        &:hover{
            color: white;
            underline: false;
        }
    }
`



function Nav(){
    return (
    <Styles>
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link to="about" className="link"><li>About</li></Link>
                <Link to="contact" className="link"><li>Contact</li></Link>
                
            </ul>
        </nav>
    </Styles>
    )
}

export default Nav