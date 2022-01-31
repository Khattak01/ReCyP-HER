import React,{memo} from 'react'
import classes from './Input.module.css'

const Input = (props) => {

    const style = {
        borderColor: "#FF9900"
    }

    return (
        <div className={[classes.input__box, props?.className].join(' ')}>
            <label htmlFor={props?.label}>{(props.label)}</label>
            <input
                style={props?.value?.length > 0 ? { ...style } : {}}
                onChange={props?.onChange}
                placeholder={props.placeholder}
                id={props?.label}
                name={props?.name}
                value={props?.value}
                {...props}
            />
        </div>
    )
}

export default  memo(Input)


export const InputInline = (props) => {

    return (
        <div className={[classes.input_inline__box, props?.className].join(' ')}>
            <label htmlFor={props?.label}>{(props.label)}</label>
            <input
                // style={props?.value?.length > 0 ? { ...style } : {}}
                accept={props?.accept}
                onChange={props?.onChange}
                placeholder={props.placeholder}
                id={props?.label}
                name={props?.name}
                value={props?.value}
                {...props}
            />
        </div>
    )
}

export const TextAreaInline = (props) => {

    return (
        <div className={[classes.input_inline__box, props?.className].join(' ')}>
            <label htmlFor={props?.label}>{(props.label)}</label>
            <textarea
                onChange={props?.onChange}
                placeholder={props.placeholder}
                id={props?.label}
                name={props?.name}
                value={props?.value || ""}
                {...props}
            />
        </div>
    )
}




