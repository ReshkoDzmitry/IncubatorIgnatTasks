import React from 'react'
import {PATH} from "./Routes";
import s from './Header.module.css'
import { Link , NavLink} from 'react-router-dom';


function Header() {
    return (
        <div className={s.header}>

            <NavLink to={PATH.PRE_JUNIOR} className={s.link} activeClassName={s.active}><div className={s.menu}>Pre-junior</div></NavLink>
            <NavLink to={PATH.JUNIOR} className={s.link} activeClassName={s.active}><div className={s.menu}>Junior</div></NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={s.link} activeClassName={s.active}><div className={s.menu}>Junior+</div></NavLink>

            {/*<Link to={PATH.PRE_JUNIOR} className={s.link} activeClassName={s.active}>pre-junior</Link>*/}
            {/*<Link to={PATH.JUNIOR} className={s.link}>junior</Link>*/}
            {/*<Link to={PATH.JUNIOR_PLUS} className={s.link}>junior+</Link>*/}

            <div className={s.block}/>

        </div>
    )
}

export default Header
