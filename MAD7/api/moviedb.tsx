/*import axios from 'axios';
import { apiKey } from '../constants';

const apiBaseUrl = 'https://api.themoviedb.org/3'
const trendingMoviesEndpoint =`${apiBaseUrl}/movie/popular?language=en-US&page=1?api_key=${apiKey}`
const upcomingMoviesEndpoint =`${apiBaseUrl}/movie/upcoming?language=en-US&page=1?api_key=${apiKey}`
const topRatedMoviesEndpoint =`${apiBaseUrl}/movie/top_rated?language=en-US&page=1?api_key=${apiKey}`

const apiCall =async (endpoint, params)=>{
    const options ={
        method: 'GET',
        url: endpoint,
        params: params? params: {}
    }

    try{
        const response = await axios.request(options);
        return response.data;
    }catch(error){
        console.log('error',error);
        return {}
    }
}

export const fetchTrendingMovies = ()=>{
    return apiCall(trendingMoviesEndpoint);
}

export const fetchUpcominggMovies = ()=>{
    return apiCall(upcomingMoviesEndpoint);
}

export const fetchTopRatedMovies = ()=>{
    return apiCall(topRatedMoviesEndpoint);
}*/