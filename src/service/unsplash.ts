import axios from "axios";

// Move your API keys to environment variables
const UNSPLASH_ACCESS_KEY = "KlF3VsgMBNXPrZcJe8DZMPX3kMKAxH1Q1W63nRvJbLE";

export const getRandomPhotos = async (count: number): Promise<string[]> => {
  try {
    const response = await axios.get("https://api.unsplash.com/photos/random", {
      params: { count },
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    });
    return response.data.map((photo: any) => photo.urls.small);
  } catch (error) {
    console.error("Error fetching photos:", error);
    return [];
  }
};

// KlF3VsgMBNXPrZcJe8DZMPX3kMKAxH1Q1W63nRvJbLE access key

// uUDSdAx7CzRLAQahuZ5xdWW_HqS4OJNyi4Cns4JjXjc secret key
