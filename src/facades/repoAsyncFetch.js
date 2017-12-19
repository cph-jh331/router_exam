const URL = require('../../package.json').reposURL;
class RepoAsyncFetch {
    constructor() {
        this._repos = null;
    }
    getAll = async cb => {
        if (!this._repos) {
            console.log("fetching repos");
            let response = await fetch(URL);
            let data = await response.json();
            this._repos = data;
            cb(this._repos);
        } else {
            console.log("using stored repos");
            cb(this._repos);
        }
    }

    getSingleRepo = async (name, cb) => {
        if (!this._repos) {
            console.log("fetching repos");
            let response = await fetch(URL);
            let data = await response.json();
            this._repos = data;
            this.filterName(name, cb);
        } else {
            console.log("using stored repos");
            this.filterName(name, cb);
        }
    }

    filterName = (name, cb) => {
        let filterResult = this._repos.filter(repo => {
            return repo.name.startsWith(name);
        });
        console.log(filterResult[0]);
        cb(filterResult[0]);
    }
}

export default new RepoAsyncFetch();