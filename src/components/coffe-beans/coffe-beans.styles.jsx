import styled from "styled-components";
import {ReactComponent as BeansImg} from '../../assets/coffee-beans2.svg'

export const CoffeBeansContainerWhite = styled.div`
    width: 200px;
    margin: 0 auto;
    position: relative;

    &::before, &::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 60px;
    height: 1px;
    background-color: #fff;
    }

    &::before {
    left: 0;
    }

    &::after {
    right: 0;
    }
`

export const CoffeeBeansContainerBlack = styled(CoffeBeansContainerWhite)`
    &::before, &::after {
        background-color: #000;
    }
`

export const CoffeebeansImgWhite = styled(BeansImg)`
    display: block;
    width: 30px;
    height: 30px;
    margin: 0 auto;
`

export const CoffeebeansImgBlack = styled(CoffeebeansImgWhite)`
    & path {
        fill: black;
    }
`