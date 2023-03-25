import Coffeebeans from "../coffe-beans/coffe-beans.component";
import { COFFEE_BEANS_TYPES } from "../coffe-beans/coffe-beans.types";
import { LOGO_TYPES } from "../logo/logo.types";
import Navigation from "../navigation/navigation.component"
import { FooterContainer } from "./footer.styles";


const Footer = () => {
    return (
        <FooterContainer>
            <Navigation type={LOGO_TYPES.BLACK}/>
            <Coffeebeans type={COFFEE_BEANS_TYPES.BLACK}/>
        </FooterContainer>
    )
}

export default Footer;