import React from 'react';

const List = ({ people, setPeople }) => {
  const handleRemove = (id) => {
    setPeople((prevValue) => {
      const newVal = prevValue.filter((man) => man.id !== id);
      return newVal;
    });
  };

  return (
    <>
      {people.map((person) => {
        const { named, id, image, age } = person;
        return (
          <article className="person" key={id}>
            <img src={image} alt={named} />
            <div>
              <h4>{named}</h4>
              <p>{age}</p>
              <button
                style={{
                  backgroundColor: 'purple',
                  marginBlock: '1rem',
                }}
                onClick={() => handleRemove(id)}
              >
                Remove from List
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
