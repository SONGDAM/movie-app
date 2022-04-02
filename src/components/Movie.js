import { Link } from 'react-router-dom';

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h1>
        <Link to={`/movie/${id}`}> {title}</Link>
      </h1>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
