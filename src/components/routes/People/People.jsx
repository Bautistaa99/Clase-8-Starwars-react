import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Similar a nuestro ItemListContainer
const People = () => {
  const [people, setPeople] = useState({});

  useEffect(() => {
    fetch('https://swapi.dev/api/people')
      .then((res) => res.json())
      .then((res) => setPeople(res));
  }, []);
  return (
    <div>
      {typeof people.results === 'undefined' ? (
        <div>Cargando</div>
      ) : (
        <ul>
          {people.results.map((character) => {
            // .split saca la barra y divide cada elemento en un objeto, luego el [5] busca el elemento numero 5(que es el id de la url);
            const id = character.url.split('/')[5];
            return (
              <li>
                <Link to={'/people/1'}>{character.name}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default People;
