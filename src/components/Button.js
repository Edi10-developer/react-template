import { Btn } from './styles.js';

const Button = props => {
    return (
        <Btn
            value={props.value}
            onClick={props.onClick}
        >
            {props.title}
        </Btn>
    )
}

export default Button;