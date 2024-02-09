

function SpreadOperator() {

    const numbers = [1, 2, 3];
    const newNumbers = [...numbers, 4, 5];

    const person = { name: 'Magnus', city: 'Göteborg' };
    const newPerson = { ...person, city: 'Stockholm'};

    return (
        <>
            <p>Nummer: {newNumbers}</p>
            <p>Person: {person.name} Stad: {person.city} </p>
            <p>Person: {newPerson.name} Stad: {newPerson.city} </p>
        </>
    )
  }

  export default SpreadOperator
