import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class AddProject extends Component {
    state = {}
    render() {
        return (
            <>
                <h1>Add Project</h1>
                <Link to="/projects">
                    Projects
                </Link><br />
            </>
        );
    }
}

export default AddProject;