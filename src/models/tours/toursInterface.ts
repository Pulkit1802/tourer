type Location = {
    lat: number;
    long: number;
}

type Visitations = {
    date: Date;
    time: string;
    day: number;
    place: string;
    coords: Location;
}

export interface ITours {
    name: string;
    duration: number;
    maxGroupSize: number;
    activities: string[];
    startLocation: string;
    startCords: Location;
    endLocation: string;
    endCords: Location;
    tripLocations: Visitations[];
    price: number;
    startDates: Date[];
    description: string;
}