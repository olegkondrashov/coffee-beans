import { COFFEE_BEANS_TYPES } from "../coffe-beans/coffe-beans.types";
import Button from "../button/button.component";
import Coffeebeans from "../coffe-beans/coffe-beans.component";

import { Title, TitleH3 } from "../../utils/typography/typography";
import { MainTitleContainer } from "./main-title.styles";


const MainTitle = () => {
    return (
        <MainTitleContainer>
            <Title>Everything You Love About Coffee</Title>
            <Coffeebeans type={COFFEE_BEANS_TYPES.WHITE}/>
            <TitleH3>We makes every day full of energy and taste <br /> Want to try our beans?</TitleH3>
            <Button content='More' />
        </MainTitleContainer>
    )

}

export default MainTitle;