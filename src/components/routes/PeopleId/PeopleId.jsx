import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//Similar a nuestro ItemDetailContainer
const PeopleId = () => {
  const { id } = useParams();
  const [people, setPeople] = useState({});

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}`)
      .then((res) => res.json())
      .then(setPeople);
  }, [id]);

  console.log(people);

  return (
    <div>
      <p>Name:{people.name}</p>
      <p>Height:{people.height}</p>
    </div>
  );
};

export default PeopleId;
