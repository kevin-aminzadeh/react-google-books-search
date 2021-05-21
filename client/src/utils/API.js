import axios from "axios";

export default {
  // Search Google Books
  searchGoogleBooks: async (searchQuery, startIndex = 0, maxSize = 40) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes`,
        {
          params: {
            q: searchQuery,
            startIndex: startIndex,
            maxSize: maxSize,
            projection: "lite",
          },
        }
      );

      // Format response data to match db Book schema
      const bookData = response.data.items.map((bookRecord) => {
        return {
          title: bookRecord.volumeInfo.title,
          subtitle: bookRecord.searchInfo.textSnippet,
          authors: bookRecord.volumeInfo.authors,
          description: bookRecord.volumeInfo.description,
          image: bookRecord.volumeInfo.imageLinks.thumbnail,
          link: bookRecord.volumeInfo.infoLink,
        };
      });

      return response.data.items;
    } catch (err) {
      // Return error object
      throw err;
    }
  },
  // Get All Saved Books
  getSavedBooks: () => {
    return axios.get("/api/books");
  },
  // Save Book To Database
  saveBook: (bookData) => {
    return axios.post("/api/books", bookData);
  },
  // Delete Saved Book With Given ID
  deleteSavedBook: (id) => {
    axios.delete("/api/books" + id);
  },
};
