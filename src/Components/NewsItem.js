
const NewsItem= (props)=> {
  
    let {title, description ,imageUrl, newsUrl, author, date, source}= props; 
    return (
      <div className='my-5 ' >
        <div className="card " style={{width: "21rem", border: "0.01px solid yellow " }}  >
        <img src={imageUrl?imageUrl:"https://images.hindustantimes.com/tech/img/2022/06/28/1600x900/apple-smarter-911_f9b521b6-73ac-11e8-ad22-53d0ea2909b4_1656428241019.jpg"} className="card-img-top" alt="..."/>
              <span className="position-absolute top-0 start-100 translate-middle badge  bg-warning">
                <span className="visually-hidden">{" " +source}</span>
              </span>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text "><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-danger">Read more...</a>
        </div>
        </div>
      </div>
    )
  
}

export default NewsItem