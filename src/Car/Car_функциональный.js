import React from 'react';
import './Car.css';

export default props => {
    // это будут классы инпута
    const inputClasses = ['input']

    if (props.name !== '') {
        inputClasses.push('green');
    } else {
        inputClasses.push('red');
    }

    // если длиннее 4х символов
    if (props.name.length > 4) {
        inputClasses.push('bold');
    }

    return (
        <div className="Car">
            <h3>{props.name}</h3>
            <p>Year: <strong>{props.year}</strong></p>
            <input
                type = "text"
                className={inputClasses.join(' ')}
                onChange = {props.onChangeName}
                value= {props.name}
            />
            <button onClick = {props.onDelete}>Удалить</button>
        </div>
    )
}