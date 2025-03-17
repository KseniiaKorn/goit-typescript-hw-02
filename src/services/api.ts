import axios from 'axios';

interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

interface FetchGalleryResponse {
  results: Image[];
};

export const fetchGallery = async (
    searchImages: string,
    API_KEY: string,
    page: number
): Promise<FetchGalleryResponse> => {
    const response = await axios.get<FetchGalleryResponse>(`https://api.unsplash.com/search/photos?per_page=20&page=${page}&query=${searchImages}&client_id=${API_KEY}`
    );
    return response.data;
};