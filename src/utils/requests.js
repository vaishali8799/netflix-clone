export const API_Key='667c26fbb52c2a7f8326443276553c41';
const requests={

   fetchTopRated:`/movie/top_rated?api_key=${API_Key}&language=en-US`,
   fetchTrending: `/trending/all/week?api_key=${API_Key}&language=en-US`,
   fetchNetflixOriginals: `/discover/tv?api_key=${API_Key}&with_networks=213`,
   fetchActionMovies: `/discover/movie?api_key=${API_Key}&with_genres=28`,
   fetchComedyMovies: `/discover/movie?api_key=${API_Key}&with_genres=35`,
   fetchHorrorMovies: `/discover/movie?api_key=${API_Key}&with_genres=27`,
   fetchRomanceMovies: `/discover/movie?api_key=${API_Key}&with_genres=10749`,
   fetchSciFiMovies:`/discover/movie?api_key=${API_Key}&with_genres=878`,
   fetchDocumentaries: `/discover/movie?api_key=${API_Key}&with_genres=36`,

}
export default requests;