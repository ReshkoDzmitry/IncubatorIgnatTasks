import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div className={s.affair}>
            <div className={s.itemName}>{props.affair.name}</div>
            <div className={s.itemPriority}>{props.affair.priority}</div>

            <div className={s.buttonAffairWrapper}>
                <button className={s.buttonAffair} onClick={deleteCallback}>x</button>
            </div>

        </div>
    )
}

export default Affair
