
import MovieCard from './MovieCard'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Pagination from './Pagination'



function Movies():movies {

    const [movies , setMovies] = useState<movies[]>([])
    const [pageNo , setPageNo] = useState<number>(1)


    const handlePrev = ()=>{
        if(pageNo===1){
            setPageNo(pageNo)
        }
        else{
            setPageNo(pageNo-1)
        }
   
    }


    const handleNext = ()=>{
        setPageNo(pageNo+1)
    }



    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${pageNo}`).then(function(res){
            console.log(res.data.results)
            setMovies(res.data.results)            
        })
    } ,[pageNo])

   
    // useEffect(()=>{
    //     axios.get(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=f1abfd77dd4b2f4f92e3214ebe9be3a2`).then(function(res){
    //         console.log(res.data.results)
    //         setMovies(res.data.results)
    //     })
    // } , [search])

  return (
    <div className='p-5'>
       <div className='text-2xl m-5 font-bold text-center '>
          {/* <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search' value={search} /> */}
          <h1>Trending Movies</h1>
       </div>

       <div className='flex flex-row flex-wrap justify-around gap-8'>
          
           {movies.map((movieObj)=>{
              return <MovieCard key={movieObj.id} movieObj={movieObj} name={movieObj.title} poster_path={movieObj.poster_path}  />
           })}
       </div>

       <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev}  />
        
    
    </div>
  )
}

export default Movies


// https://api.themoviedb.org/3/movie/popular?api_key=f1abfd77dd4b2f4f92e3214ebe9be3a2&language=en-US&page=2