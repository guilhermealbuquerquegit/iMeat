export class User {
    constructor(public email: string, public name: string, private password: string) {}

    matches(another: User): boolean {
        return another !== undefined && another.email === this.email && another.password === this.password
    }
}

export const users: {[key:string]:User} = {
    "guilherme@gmail.com": new User('guilherme@gmail.com','guilherme','gads'),
    "laryssa@gmail.com": new User('laryssa@gmail.com','laryssa','laryssa03')
}