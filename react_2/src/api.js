import axios from 'axios';

const api = axios.create({
    baseURL:"https://api.themoviedb.org/3/";
    params:{
        api_key:"7403f10c6dd116240fcc1ef3cd93f73c",
        language:"ko-KR"
    }
});

export const movieApi = {
    nowPlaying: () => api.get( url:"movie/now_playing"),
    upComing: () => api.get( url:"movie/upcoming"),
    popular:() => api.get( url:"movie/popular")
    movieDetail: id => api.get( url:`movie/${id}`, config:{
        parms:{
            append_to_response:"videos"
        }
    }),
    search:term => api.get( url:"search/movie", config:{
        parms:{
            query:encodeURIComponent(term)
        }
    })
};