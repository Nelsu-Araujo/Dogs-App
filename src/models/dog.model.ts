export interface Dog {
    weight: Eight;
    height: Eight;
    id: number;
    name: string;
    countryCode: string;
    bred_for: string;
    breed_group: string;
    life_span: string;
    temperament: string;
    origin: string;
    reference_image_id: string;
    imageUrl: string;
}

export interface Eight {
    imperial: string;
    metric: string;
}

export interface Image {
    id: string;
    url: string;
}