import Player from "../Components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
  const { id } = useParams();

  const { image, name, duration, artist, audio, index } = songsArray.filter(
    (currSongObj) => currSongObj._id === id
  )[0];

  const artistObj = artistArray.filter(
    (currArtistObj) => currArtistObj.name === artist
  )[0];

  // const songsArrayFromArtist = songsArray.filter(
  //   (currSongObj) => currSongObj.artist === artist
  // );

  const randomIndexRwd = Math.floor(Math.random() * (songsArray.length - 1));
  const randomIndexFwd = Math.floor(Math.random() * (songsArray.length - 1));
  const backwardIdFromArtist = songsArray[randomIndexRwd]._id;
  const forwardIdFromArtist = songsArray[randomIndexFwd]._id;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`Imagem da música ${name}`} />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src={artistObj.image}
            alt={`Imagem do artista ${artistObj.name}`}
          />
        </Link>
        <Player
          duration={duration}
          backwardIdFromArtist={backwardIdFromArtist}
          forwardIdFromArtist={forwardIdFromArtist}
          audio={audio}
        />
        <div>
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
