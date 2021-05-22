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
            printType: "books",
          },
        }
      );

      // Format response data to match db Book schema
      const bookData = response.data.items.map((bookRecord) => {
        return {
          title: bookRecord.volumeInfo.title,
          subtitle: bookRecord.volumeInfo.subtitle,
          authors: bookRecord.volumeInfo.authors,
          description: bookRecord.volumeInfo.description
            ? bookRecord.volumeInfo.description
            : bookRecord.searchInfo
            ? bookRecord.searchInfo.textSnippet
            : "No description available.",
          image: bookRecord.volumeInfo.imageLinks.thumbnail,
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

      console.log(response.data);
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
    axios.delete("/api/books" + id);
  },
};
