export type AddUserType = Omit<User, 'id'| 'role' |'sessionToken'>;

export type LogUserType={
    email: string,
    password: string
}
export type User = {
    id: string,
    firstName: string,
    lastName: string,
    date: string,
    email: string,
    password: string,
    role: string,
    sessionToken: string
}

export type showUser = Omit<User, 'id'>