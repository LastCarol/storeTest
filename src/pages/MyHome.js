import React from 'react';
import styled from 'styled-components';
import PangImg from "../assets/다운로드.jpg";
import Button from 'react-bootstrap/Button';

const MyHome = () => {
    return (
        <Wrapper>
            <Header>편bti</Header>
            <Contents>
                <Title>나에게 맞는 편의점 음식은?</Title>
                <LogoImage>
                    <img src={PangImg} className="rounded-circle" width={350} height = {350}/>
                </LogoImage>
                <Desc>PBTI를 기반으로하는 나랑 잘맞는 상품 찾기</Desc>
                <Button>테스트 시작</Button>
            </Contents>
        </Wrapper>
    );
};

export default MyHome;

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;    
`
const Header = styled.div `
    font-size: 40pt;
    display:flex;
    justify-content: center;
    align-items: center;
`
const Title = styled.div`
    font-size: 30pt;
    margin-top: 40px;
`

const Contents = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const LogoImage = styled.div`
    margin-top: 10px;
`
const Desc = styled.div`
    font-size: 20pt;
    margin-top: 20px;
`
