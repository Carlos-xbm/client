import { characters } from "../mocks/characters.jsx";
import "./Characters_list.css";

function CharacterList() {
  return (
    <div className="CharacterList">
      {characters.map((character, index) => (
        <div className="CharacterListItem" key={`CharacterListItem-${index}`}>
          <img className="CharacterListItem_image" src={character.img} alt={`character ${character.name}`} />
          <div>
            <div className="CharacterListItem_name">{character.name}</div>
            <div className="CharacterListItem_about">{character.about}</div>
            <div className="CharacterListItem_action action">
              <button className="Action_add Action_add-fill">Adicionar</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CharacterList;
