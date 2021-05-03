const API_Key='667c26fbb52c2a7f8326443276553c41';
const requests={
   fetchAllWeekTrending:`/trending/all/week?api_key=${API_Key}`,
   fetchTopRated:`/movie/top_rated?api_key=${API_Key}&language=en-US`,
   fetchOriginal:`/discover/tv?api_key=${API_Key}&language=en-US`

}
export default requests;