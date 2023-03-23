
import { Fragment } from "react";
import { CoffeBeansContainerWhite, CoffeeBeansContainerBlack, CoffeebeansImgBlack, CoffeebeansImgWhite } from "./coffe-beans.styles";


const Coffeebeans = (props) => {
    return (
        <Fragment>
            {
                props.type === 'white' && 
                    <CoffeBeansContainerWhite>
                        <CoffeebeansImgWhite/>
                    </CoffeBeansContainerWhite>
            }
            {
                props.type === 'black' && 
                    <CoffeeBeansContainerBlack>
                        <CoffeebeansImgBlack/>
                    </CoffeeBeansContainerBlack>
            }
        </Fragment>
        
    )
}

export default Coffeebeans;