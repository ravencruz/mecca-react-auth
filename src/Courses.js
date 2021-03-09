
import React, { Component } from 'react';

class Courses extends Component {

    state = {
        courses: []
    }

    componentDidMount() {

        console.log('accessToken', this.props.auth.getAccessToken())

        fetch('/course', {
            headers: {
                Authorization: `Bearer ${this.props.auth.getAccessToken()}`
            }
        })
        .then(response => {
            //console.log('private1', response.json())
            if (response.ok) return response.json();
            throw new Error('Network response was not ok.')

        })
        .then(res => {
            console.log('res', res)
            this.setState( {courses: res.courses} )
        }
            )
        .catch(error => this.setState({message: error.message}))
    }

    render() {
        console.log('1')
        return (
            <ul>
                {this.state.courses.map(course => {
                    return <li key={course.id}> {course.title} </li>
                })}
            </ul>
        );
    }
}

export default Courses;