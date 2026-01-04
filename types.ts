export interface Service {
    id: string;
    name: string;
    description: string;
    price: string;
    icon: string;
    color: string;
    link?: string;
}

export interface Plan {
    id: string;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    features: {
        text: string;
        included: boolean;
        highlight?: boolean;
    }[];
    recommended?: boolean;
    icon: string;
    color: string;
}

export interface Cleaner {
    name: string;
    rating: number;
    jobs: string;
    image: string;
    specialist: string;
    speed: string;
}

export interface OrderDetails {
    serviceName: string;
    duration: string;
    location: string;
    room: string;
    cleaner: Cleaner;
    price: {
        base: number;
        addon: number;
        platform: number;
        discount: number;
        total: number;
    }
}