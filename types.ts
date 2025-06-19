
export type Transport = {
    title: string;
    category: 'auto' | 'bici' | 'monopattini' | 'moto';
    models: string;
    YearofRegistration: number;
    condition: 'nuovo' | 'usato';
    price: number;
    dayOfPublication: string;
    mileage: number;
    images: string[];
    description?: string;
    eletric?: boolean;
};