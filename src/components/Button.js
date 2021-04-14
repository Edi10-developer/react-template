import { Btn } from './styles.js';

const Button = props => {
    return (
        <Btn
            value={props.value}
            onClick={props.onClick}
            ddd='red'
        >
            {props.title}
        </Btn>
    )
}

export default Button;