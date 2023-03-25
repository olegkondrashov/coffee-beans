import styled from "styled-components";
import bg from '../../assets/top-products-bg.png';

export const TopProductsContainer = styled.div`
    margin: 0 auto;
    padding: 80px 0 110px;
    text-align: center;
    background: no-repeat center/cover  url(${bg});
`

export const ProdContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 70px;
`

export const Product = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    box-sizing: border-box;
    width: 220px;
    padding: 21px;
    background: rgba(255, 255, 255, 0.65);
    border-radius: 8px;
    cursor: pointer;
`

export const ProdImg = styled.img`
    display: block;
    margin: 0 auto;
`