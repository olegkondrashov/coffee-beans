
import MainTitle from "../main-title/main-title.component";
import Navigation from "../navigation/navigation.component";
import { MainContainer, MainContent } from "./main.styles";

const Main = () => {
  return (
    <MainContent>
        <MainContainer>
            <Navigation/>
            <MainTitle/>
        </MainContainer>
    </MainContent>
  );
}

export default Main;
