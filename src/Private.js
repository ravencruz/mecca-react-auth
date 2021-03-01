import React, { Component } from 'react';

class Private extends Component {

    state = {
        message: ""
    }

    componentDidMount() {

        console.log('accessToken', this.props.auth.getAccessToken())

        fetch('/private', {
            headers: {
                Authorization: `Bearer ${this.props.auth.getAccessToken()}`
            }
        })
        .then(response => {
            console.log('private', response)
            if (response.ok) return response.json();
            throw new Error('Network response was not ok.')

        })
        .then(res => this.setState( {message: res} ))
        .catch(error => this.setState({message: error.message}))
    }

    render() {
        console.log('1')
        return (
            <p>
                {/* {this.state.message} */}
                Jonas y la ballena rosada


                <pre>
                    { JSON.stringify(this.state.message, null, 2) }
                </pre>
            </p>
        );
    }
}

export default Private;