export default class UserController {
    constructor(service) {
        this.service = service;
    }

    // Body: username, password
    login = (req, res) => {
        const user = req.body;

        console.log(user);
        const response = this.service.login(user);

        console.log(`Username: ${user.username}`);
        res.json(response);
    }
}