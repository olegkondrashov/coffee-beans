
import { Fragment } from "react";
import { CoffeBeansContainerWhite, CoffeeBeansContainerBlack, CoffeebeansImgBlack, CoffeebeansImgWhite } from "./coffe-beans.styles";


const Coffeebeans = ({type}) => {
    return (
        <Fragment>
            {
                type === 'white' && 
                    <CoffeBeansContainerWhite>
                        <CoffeebeansImgWhite/>
                    </CoffeBeansContainerWhite>
            }
            {
                type === 'black' && 
                    <CoffeeBeansContainerBlack>
                        <CoffeebeansImgBlack/>
                    </CoffeeBeansContainerBlack>
            }
        </Fragment>
        
    )
}

export default Coffeebeans;