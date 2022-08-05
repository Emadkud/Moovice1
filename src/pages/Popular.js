import { useEffect , useState} from "react"
import Card from "../Components/Card"

const Popular = () => {
    const [movies , setMoviece] = useState ([])

    useEffect (() => {
        fetchMovies()
    }, [])
      
        const fetchMovies = async () => {
        const request = await fetch ('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7184b36e53516f4993d21cbb150daad1')
        const response = await request.json()

        setMoviece(response.results)
    }

    return (
      <section className="row">
        {movies.map(movie => (
          <Card key={movie.title}  movie={movie}/>

        ))}
      </section>
    )
  }
   

export default Popular  