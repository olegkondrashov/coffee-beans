import solimo from '../../assets/prod.png';
import presto from '../../assets/presto.png';
import aromistico from '../../assets/aromistico.png';
import { DescriptionsText, Price, TitleH2 } from "../../utils/typography/typography"
import {  ProdContainer, ProdImg, Product, TopProductsContainer } from "./top-products.styles";

const TopProducts = () => {
    return (
        <TopProductsContainer>
            <TitleH2>Our best</TitleH2>
            <ProdContainer>
                <Product>
                    <ProdImg src={solimo} alt='solimo coffee beans'/>
                    <DescriptionsText>
                        Solimo Coffee Beans 2 kg
                    </DescriptionsText>
                    <Price>
                        $ 10.73
                    </Price>
                </Product>
                <Product>
                    <ProdImg src={presto} alt='solimo coffee beans'/>
                    <DescriptionsText>
                        Presto Coffee Beans 1 kg
                    </DescriptionsText>
                    <Price>
                        $ 15.99
                    </Price>
                </Product>
                <Product>
                    <ProdImg src={aromistico} alt='solimo coffee beans'/>
                    <DescriptionsText>
                        AROMISTICO Coffee 1 kg
                    </DescriptionsText>
                    <Price>
                        $ 6.99
                    </Price>
                </Product>
            </ProdContainer>
        </TopProductsContainer>
    )
}

export default TopProducts;