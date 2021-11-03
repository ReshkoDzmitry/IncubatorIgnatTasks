import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperCheckbox.module.css'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperCheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
}

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeChecked,
        className, spanClassName,
        children, // в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeChecked && onChangeChecked(e.currentTarget.checked)
        // сделайте так чтоб работал onChange и onChangeChecked
    }

    const finalInputClassName = `${s.checkbox} ${className ? className : ''}`

    return (
        <div>
            <label className={'wrapperBox'}>
                <div>
                    <input
                        type={'checkbox'}
                        onChange={onChangeCallback}
                        className={finalInputClassName}
                        {...restProps}
                    />
                </div>

                <div>
                    {children && <span className={s.spanClassName}>{children}</span>}
                </div>
            </label>
        </div>
    )
}

export default SuperCheckbox
