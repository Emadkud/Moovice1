const Card = (props) => {
    console.log(props)
  return (
    
    <article className="p-2 col-4">
        <div className="card h-100 ">
            <img src={`https://image.tmdb.org/t/p/w300/${props.movie.poster_path}`} className="card-img-top" alt={props.movie.title}/>
                <div className="card-body">
                    <h5 className="card-title">{props.movie.title}</h5>
                    <p className="card-text">Release date :{props.movie.release_date}</p>
                    <p className="card-text">{props.movie.overview}</p>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                  <button  className="btn btn-primary m-4">Add to favorite</button>
            </div>
    </article>
 
  )
}

export default Card