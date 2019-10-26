import React from 'react';
import './Car.css';

// обычный реакт-компонент
class Car extends React.Component {
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log('Car UNSAFE_componentWillReceiveProps', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Car shouldComponentUpdate', nextProps, nextState);
        return nextProps.name.trim() !== this.props.name.trim();
    }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log('Car UNSAFE_ComponentWillUpdate', nextProps, nextState);
    }

    // вместо componentWillUpdate
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('Car getDerivedStateFromProps', nextProps, prevState);

        // возвращаем обновленный (или нет) State
        return prevState
    }

    componentDidUpdate() {
        console.log('Car ComponentDidUpdate');
    }

    componentWillUnmount() {
        console.log('Car componentWillUnmount');
    }

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