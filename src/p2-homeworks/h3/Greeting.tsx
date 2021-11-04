import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnter} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput : s.input // need to fix with (?:)

    return (
        <div className={s.greeting}>
            <div>
                <input
                    value={name}
                    onChange={setNameCallback}
                    className={inputClass}
                    onKeyDown={(event) => onEnter(event)}
                    onBlur={setNameCallback}
                    placeholder={'Enter name'}
                />
                <span className={s.requiredToFill}>*</span>
                <span>
                    <button className={s.button} onClick={addUser} disabled={!name}>Add</button>
                </span>
            </div>


            <div className={s.error}>
                {error}
            </div>

            <div className={s.countWrapper}>
                <span className={s.count}>Count - {totalUsers}</span>
            </div>

        </div>
    )
}

export default Greeting
