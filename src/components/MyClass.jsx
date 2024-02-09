

function MyClass() {

    class MyClass {
      constructor(name) {
          this.name = name;
      }

      sayHello() {
         return <h1><i>Hej {this.name}</i></h1>
      }
    }

    const myObject = new MyClass('Magnus');

    return (
        <>
                {myObject.sayHello()}
        </>
    )
  }

  export default MyClass
