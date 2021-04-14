import { JokeStyled } from './styles';

const Joke = props => {
    return (
        <JokeStyled>
            <h3>{props.setup}</h3>
            <h3>{props.delivery}</h3>
        </JokeStyled>
    )
}
export default Joke;