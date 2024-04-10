
 // eslint-disable-next-line @typescript-eslint/no-unused-vars
 type movies={
        adult: boolean,
        backdrop_path : string;
        genre_ids:number;
        id:number;
        original_language:string;
        original_title:string;
        overview:string;
        popularity:number;
        poster_path:string;
        title:string;
        video:boolean;
        vote_average:number;
        vote_count:number;
 
 }
interface movieCard{
    movieObj:string;
    poster_path:string
    name:string
 }