export type AddUserType ={
    firstName: string,
    lastName: string,
    date: string,
    email: string,
    password: string
}

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
}

export type showUser = Omit<User, 'id'>