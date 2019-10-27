import React from 'react';
import './Car.css';

// обычный реакт-компонент
class Car extends React.Component {

    render () {
        console.log('Car render');

        // это будут классы инпута
        const inputClasses = ['input']

        if (this.props.name !=='') {
            inputClasses.push('green');
        } else {
            inputClasses.push('red');
        }

        // если длиннее 4х символов
        if (this.props.name.length > 4) {
            inputClasses.push('bold');
        }

        return (
            <div className="Car">
                <h3>{this.props.name}</h3>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input
                    type="text"
                    className={inputClasses.join(' ')}
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                />
                <button onClick={this.props.onDelete}>Удалить</button>
            </div>
        )
    }
}

export default Car