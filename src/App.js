import {Button, JokeContainer} from './components/index';
const App = () => {

   const setLoading = () => {
       isLoaded = true 
   }

    return (
        <>
           <h1>Joke App</h1>
           <JokeContainer
           isLoaded={true} />
           <Button title="Next Joke"
           //onClick={setLoading} 
           />
        </>
    );
};

export default App;