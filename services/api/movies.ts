import axios from "axios";

const options = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODY2ZjkyNGMzM2VkNjcwODk0Mjk3NjVjYWExYTFiMiIsIm5iZiI6MTYyMzk0OTU4OC40OTUwMDAxLCJzdWIiOiI2MGNiODExNDg3ZTYzZTAwMjg1YjcxZWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.QKmfs1G9qck7uv918an9zIMfoz9IRyLq43fS2L7qOEA",
  },
};

export const getMovies = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  const responseFromServer = await axios.get(url, options);
  //console.log(responseFromServer.data.results);
  return responseFromServer.data.results;
};
