

function Destruct() {

    const person = { name: 'Magnus', age: 39};
    const { name, age } = person;

    const colors = ['red', 'green', 'blue'];
    const [firstColor, secondColor] = colors;


    return (
        <>
            <p>{name}</p>
            <p>{age}</p>
            <p>{firstColor}</p>
            <p>{secondColor}</p>
        </>
    )
  }

  export default Destruct
