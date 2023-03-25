import { LogoContainer, LogoImg, LogoImgBlack, LogoText } from "./logo.styles"
import { LOGO_TYPES } from "./logo.types";


const Logo = ({type}) => {
    return (
        <LogoContainer>
            {type === LOGO_TYPES.BLACK ? <LogoImgBlack/> : <LogoImg/>}
            <LogoText>Coffee house</LogoText>
        </LogoContainer>
    )
}

export default Logo;