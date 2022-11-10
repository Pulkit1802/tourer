type Location = {
    lat: number;
    long: number;
}

export interface UserInterface {
    name: string;
    email: string;
    phoneNumber: string;
    location: Location;
    age: number;
    createdOn?: Date;
    password?: string;
}