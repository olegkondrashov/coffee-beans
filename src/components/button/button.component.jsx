import { MainButton } from "./button.styles";


const Button = (props) => {
    return (
        <MainButton>{props.content}</MainButton>
    )
}

export default Button;