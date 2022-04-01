export type AddUserType = Omit<User, 'idDB' |'role' |'sessionToken'>;

export type LogUserType={
    email: string,
    password: string
}
export type User = {
    firstName: string,
    lastName: string,
    date: string,
    email: string,
    password: string,
    role: string,
    sessionToken: string
    idDB: string,
}

export type showUser = Omit<User, 'idDB'>

export type Filter ={
    page:number,
    search: string | undefined
}

export type Items = {
    poster_path?: string;
    adult?: boolean;
    overview?: string;
    release_date?: string;
    genre_ids?: number[];
    id: number;
    idDB: string;
    original_title?: string;
    original_language?: string;
    title: string;
    backdrop_path?: string | null;
    popularity?: number;
    vote_count?: number;
    video?: boolean;
    vote_average: number;
}


export type ApiResponse ={
    page: number,
    results: Items[],
    total_results: number,
    total_pages: number,
}