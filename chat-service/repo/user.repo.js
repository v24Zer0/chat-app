import mockUsers from "../mock/mock_users.js";

export default class UserRepo {
    constructor() {
        this.users = mockUsers;
    }

    retrieveUser(user) {
        for(const u of this.users) {
            if(u.username == user.username) {
                return true;
            }
        }

        return false;
    }
}