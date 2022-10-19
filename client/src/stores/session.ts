import type { StringifyOptions } from "querystring";
import { reactive } from "vue";

const session = reactive( {
    users: [] as User[] | any,
    user:  null as User | any,
});

export function login(firstName: string, lastName: string, friends: string[]) {
    session.user = {
        firstName,
        lastName,
        friends,
    };
}

export function logout() {
    session.user = null;
}

export class User {
    firstName?: string;
    lastName?: string;
    friends?: string[];
    
}

export default session;