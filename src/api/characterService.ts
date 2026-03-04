export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface ApiResponse {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: Character[];
}

const API_URL = 'https://rickandmortyapi.com/api/character';

export const fetchCharacters = async (page: number = 1): Promise<ApiResponse> => {
    const response = await fetch(`${API_URL}?page=${page}`);
    if (!response.ok) {
        throw new Error('Failed to fetch characters');
    }
    return response.json();
};
