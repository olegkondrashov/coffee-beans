
import Logo from "../logo/logo.component";
import { NavigationContainer } from "./navigation.styles";

const Navigation = ({type}) => {
  return (
    <NavigationContainer>
        <Logo type={type}/>
        <p>Our coffee</p>
        <p>For your pleasure</p>
    </NavigationContainer>
  );
}

export default Navigation;
