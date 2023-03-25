import { DescriptionsText, TitleH2 } from "../../utils/typography/typography";
import Coffeebeans from "../coffe-beans/coffe-beans.component";
import { COFFEE_BEANS_TYPES } from "../coffe-beans/coffe-beans.types";
import { AboutContainer } from "./about.styles";

const About = () => {
    return (
        <AboutContainer>
            <TitleH2>About us</TitleH2>
            <Coffeebeans type={COFFEE_BEANS_TYPES.BLACK} />
            <DescriptionsText>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                Afraid at highly months do things on at. Situation recommend objection do intention
                so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face. 
                <br/>
                <br/>
                Now residence dashwoods she excellent you. Shade being under his bed her, Much
                read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                horrible but confined day end marriage. Eagerness furniture set preserved far
                recommend. Did even but nor are most gave hope. Secure active living depend son
                repair day ladies now.
            </DescriptionsText>
        </AboutContainer>
    )
}

export default About;