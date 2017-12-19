import React, { Component } from 'react';
import repoStore from '../facades/repoStore';
import repoAsyncFetch from '../facades/repoAsyncFetch';

export default class Repository extends Component {
    constructor(props) {
        super(props);
        this.state = { repo: {} }
    }

    componentWillMount() {
        let params = this.props.match.params.id
        repoAsyncFetch.getSingleRepo(params, repo => {
            this.setState({
                repo
            });
        });
    }
    render() {

        return (<div>
            <h2>Repository</h2>
            {this.state.repo && (
                <div>
                <h3>Full name: {this.state.repo.full_name}</h3>
                <h3>Size: {this.state.repo.size}</h3>
                </div>
            )}
            {!this.state.repo && (
                <div>
                    <h3>Repo does not exist</h3>
                </div>
            )}
        </div>
        )
    }
}