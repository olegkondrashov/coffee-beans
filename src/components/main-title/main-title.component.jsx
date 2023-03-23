
import Button from "../button/button.component";
import Coffeebeans from "../coffe-beans/coffe-beans.component";
import { COFFE_BEANS_TYPES } from "../coffe-beans/coffe-beans.types";
import { MainTitleContainer, SubTitle, Title } from "./main-title.styles";


const MainTitle = () => {
    return (
        <MainTitleContainer>
            <Title>Everything You Love About Coffee</Title>
            <Coffeebeans type={COFFE_BEANS_TYPES.WHITE}/>
            <SubTitle>We makes every day full of energy and taste <br /> Want to try our beans?</SubTitle>
            <Button content='More' />
        </MainTitleContainer>
    )

}

export default MainTitle;