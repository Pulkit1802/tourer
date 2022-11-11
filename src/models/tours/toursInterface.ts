type Location = {
    id: string;
    address: string;
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
    endLocation: Location;
    tripLocations: string[];
    price: number;
    startDates: Date[];
    description: string;
    summary: string;
    imageCover: string;
}
