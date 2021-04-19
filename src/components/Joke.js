import { JokeStyled } from './styles';
import { Loading } from './index';

const Joke = props => {
    return (
        <JokeStyled>
            { props.setup ?
                <h3>{props.setup}</h3>
                : <Loading /> }
            { props.delivery ?
                <h3>{props.delivery}</h3>
                : null }
        </JokeStyled>
    )
}
export default Joke;