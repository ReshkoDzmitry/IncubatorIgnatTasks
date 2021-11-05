import React from 'react'
import s from './Error404.module.css'

function Error404() {
    return (
        <div className={s.wrapper}>
            <div className={s.errorNumber}>404</div>
            <div className={s.errorName}>Page not found!</div>
            <div className={s.badge}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    )
}

export default Error404
