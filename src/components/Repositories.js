import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import repoStore from '../facades/repoStore';
import repoAsyncFetch from '../facades/repoAsyncFetch';
const repourl = "/repo/"

export default class Repositories extends Component {
    constructor(props) {
        super(props);
        this.state = { repos: [] }
    }

    componentWillMount() {
        repoAsyncFetch.getAll((repos => {
            this.setState({
                repos
            });
        }));
    }

    render() {
        return (
            <div>
                <h2>Repositories</h2>
                <p>Complete this example to fecth the git-repositories (via link provided in the exercise),
              and populate the ul below with the name for each repository.
            </p>
                <ul>
                    {this.state.repos.map(repo => {
                        return <li key={repo.name}>{repo.name} - <Link to={repourl + repo.name}>Details</Link></li>
                    })}
                </ul>
            </div>
        )
    }
}

