import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = ({ type }) => {
  return (
    <div className="main">
      {/* Item List Artistas */}
      {type === "artists" || type === undefined ? (
        <ItemList
          title="Artistas"
          items={6}
          itemsArray={artistArray}
          path="/artists"
          idPath="/artist"
        />
      ) : (
        <></>
      )}

      {/* Item List Musicas */}
      {type === "songs" || type === undefined ? (
        <ItemList
          title="Músicas"
          items={12}
          itemsArray={songsArray}
          path="/songs"
          idPath="/song"
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Main;
