import React, { Component } from 'react';
import repoStore from '../facades/repoStore';

export default class Repository extends Component {
    constructor(props) {
        super(props);
        this.state = { repo: {} }
    }

    componentWillMount() {
        let params = this.props.match.params.id
        repoStore.getSingleRepo(params, repo => {
            this.setState({
                repo
            });
        });
    }
    render() {

        return (<div>
            <h2>Repository</h2>
            <h3>Full name: {this.state.repo.full_name}</h3>
            <h3>Size: {this.state.repo.size}</h3>
        </div>
        )
    }
}