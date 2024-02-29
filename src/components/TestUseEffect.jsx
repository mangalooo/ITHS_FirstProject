import { useEffect, useState } from "react";

function TestUseEffect() {

    const [update, setUpdate] = useState(false);
    const [joke, setJoke] = useState();

    useEffect(() => {
        document.title = 'Test useEffect'
    });

    useEffect(() => {
        console.log('Jag är använd!');
    }, [update]);

    useEffect(() => {
        let didCancel = false;

        async function fetchJoke() {
            if (!didCancel) {
                let response = await fetch('https://api.chucknorris.io/joke/random');
                let data = await response.json();
                setJoke(data);
            }
        }

        fetchJoke();

        return () => {
            didCancel = true;
        }

    }, [update]);


    return (
        <>
            <div className="TestUseEffect">
                {joke && (
                    <>
                        <img src={joke.icon_url} alt={joke.id} />
                        <h1>{joke.value}</h1>
                    </>
                )}
                <button onClick={setUpdate((prevState) => !prevState)}> New joke </button>
            </div>
        </>
    )
  }

  export default TestUseEffect