

import React, {Component} from 'react';
class HomePage extends Component {
    render() {
        return (
            <div className="homepage-container">
            <h1>Mi primer proyecto en React</h1>
            <img className="image"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Sasso_lungo_da_passo_pordoi.jpg/270px-Sasso_lungo_da_passo_pordoi.jpg"
                alt="Paisaje"
                />
            </div>
        )
    }
}

export default HomePage;