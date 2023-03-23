import styled from "styled-components";
import mainBg from '../../assets/main-bg.png';

export const MainContent = styled.div`
    color: #fff;
    height: 640px;
    width: 100%;
    background: no-repeat center/cover  url(${mainBg});
`

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 auto;
`