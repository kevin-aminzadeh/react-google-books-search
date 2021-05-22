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

            printType: "books",
          },
        }
      );

      // Format response data to match db Book schema
      const bookData = response.data.items.map((bookRecord) => {
        return {
          _id: bookRecord.id,
          title: bookRecord.volumeInfo.title,
          subtitle: bookRecord.volumeInfo.subtitle,
          authors: bookRecord.volumeInfo.authors,
          description: bookRecord.volumeInfo.description
            ? bookRecord.volumeInfo.description
            : bookRecord.searchInfo
            ? bookRecord.searchInfo.textSnippet
            : "No description available.",
          image: bookRecord.volumeInfo.imageLinks
            ? bookRecord.volumeInfo.imageLinks.thumbnail
            : "http://via.placeholder.com/128x191",
          link: bookRecord.volumeInfo.infoLink,
        };
      });

      return {
        books: bookData,
        totalItems: response.data.totalItems,
        query: searchQuery,
      };
    } catch (err) {
      // Return error object
      throw err;
    }
  },
  // Get All Saved Books
  getSavedBooks: async () => {
    try {
      const response = await axios.get("/api/books");

      return {
        books: [...response.data],
        totalItems: response.data.length,
      };
    } catch (err) {
      throw err;
    }
  },
  // Save Book To Database
  saveBook: (bookData) => {
    return axios.post("/api/books", bookData);
  },
  // Delete Saved Book With Given ID
  deleteSavedBook: (id) => {
    return axios.delete("/api/books/" + id);
  },
};
