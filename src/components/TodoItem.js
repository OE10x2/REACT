import React from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends React.Component{
    getStyle = () => {
        const yeet = Math.floor(Math.random() * 100) + "%";
        const yeet2 = Math.floor(Math.random() * 100) + "%";
        console.log(yeet);
        return{
            background: '#f4f4f4',
            padding: '12px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            position: 'absolute',
            top: yeet,
            left: yeet2
        };
    };
    render(){
        const {id, title} = this.props.todo;
        return(
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {'   '}
                    {title}
                    <button onClick={this.props.deleteTD.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        );
    };
}

//Prop Types
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTD: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
};

export default TodoItem;
