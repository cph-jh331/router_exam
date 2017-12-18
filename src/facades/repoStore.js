const URL = require('../../package.json').reposURL;

class repoStore {
    constructor() {
        this._repos = "";
    }

    getAll = cb => {
        if (this._repos === "") {
            console.log("fetching repos");
            fetch(URL)
                .then(res => res.json())
                .then(repos => {
                    this._repos = repos;
                    cb(repos);
                });
        } else {
            console.log("using stored repos");
            cb(this._repos);
        }
    }

    getSingleRepo = (param, cb) => {
        if (this._repos === "") {
            console.log("fetching repos");
            fetch(URL)
                .then(res => res.json())
                .then(repos => {
                    this._repos = repos;
                    this.filterName(cb, param);
                });
        } else {
            console.log("using stored repos");
            this.filterName(cb, param);
        }
    }

    filterName = (cb, param) => {
        let filterResult = this._repos.filter(repo => {
            return repo.name.startsWith(param);
        });
        cb(filterResult[0]);
    }
}

let fisk = new repoStore();
export default fisk;