
function MapFilterReduceFind() {

    const numbers = [1, 2, 3, 4, 5];

    const doubledNumbers = numbers.map((number) => number * 2);

    const filtredNumbers = numbers.filter((number) => number > 2);

    const sum = numbers.reduce((total, number) => total + number, 0);

    const foundNumber = numbers.find((number) => number === 3);

    return (
        <>
            {numbers} <br />
            {doubledNumbers} <br />
            {filtredNumbers} <br />
            {sum} <br />
            {foundNumber} <br />
        </>
    )
  }

  export default MapFilterReduceFind
