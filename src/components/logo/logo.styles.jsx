import styled from "styled-components"
import {ReactComponent as logoImg} from '../../assets/coffee-beans.svg'

export const LogoContainer = styled.div`
    display: flex;
    font-size: 12px;
    align-items: end;
`

export const LogoImg = styled(logoImg)`
    display: block;
    margin-right: -5px;
`

export const LogoText = styled.div`
    margin-bottom: -2px;
`