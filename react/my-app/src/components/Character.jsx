import React, { Component } from 'react';

class Character extends Component {

    render() {
        return (
            <div className="box" >
                <img src={this.props.data.image} alt="imagenes"/>
                <p>ID: {this.props.data.id}</p>
                <p>NOMBRE: {this.props.data.name}</p>

            </div>
        )
    }

}
export default Character;