type Location = {
    name: string;
    coordinates: [number, number];
    address: string;
    day?: number;
};

export interface ITours {
    name: string;
    duration: number;
    maxGroupSize: number;
    activities: string[];
    startLocation: Location;
    ratingsAverage: number;
    ratingsQuantity: number;
    images: string[];
    guides: string[];
    tripLocations?: Location[];
    price: number;
    startDates: Date[];
    description: string;
    summary: string;
    imageCover: string;
}
