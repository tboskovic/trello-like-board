import { users } from '../data/users';

export class User {
    constructor(id, firstName, lastName) {
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
    }

    static findUser = (id) => {
        try {
            const user = users.find(user => user.id === id);
            return user;
        } catch (e) {
            throw new Error(e);
        }
    }
}