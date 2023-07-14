export default class UserService {
    constructor(repo) {
        this.repo = repo;
    }

    login(user) {
        let exists = this.repo.retrieveUser(user);
        if(exists) {
            return {
                username: user.username
            };
        }
        
        return {
            username: ""
        };
    }
}