import React, { Component } from 'react';

class Public extends Component {

    state = {
        message: ""
    }

    componentDidMount() {
        fetch('/public').then(response => {
            console.log('public', response)
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

export default Public;