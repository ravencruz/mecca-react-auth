import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

    

    render() {
        const {isAuthenticated, login} = this.props.auth
        return (
            <div>
                <h1>HOme</h1>
                { isAuthenticated()? 
                    (
                        <Link to="/profile">View profile</Link>
                    ) 
                    :
                    (
                        <button onClick={this.props.auth.login}>Log In</button>
                    )
                }
                
            </div>
        );
    }
}

export default Home;