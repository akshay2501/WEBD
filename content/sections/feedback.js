import React from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";

const Feedback = () => {
    return (
        <StyledWrapper>
        <Container >
            <Title><hr></hr>
                <h4>
                    Thanks for taking up this assignment.
                </h4>
                <p>Anything you would like to add over here?</p>
            </Title>

            <FeedbackDiv>
                <p>
                Happy to say that I have successsfully completed all the tasks.</p>
                <p>
                Thank you so much for providing me with this incredible opportunity
                to further develop my skills through working on an assigned project 
                and gain practical experience in a field that I am passionate about. 
                </p>
            </FeedbackDiv>
            
        </Container>
        </StyledWrapper>
    )
}

export default Feedback

const StyledWrapper=styled(Wrapper)`
background:#FFFFFF;
`

const Title = styled.div`
h4{
    font-size: 24px;
font-family: Lexend Medium;
font-style: normal;
font-weight: 500;
line-height: 40px;
letter-spacing: -0.4px;
    span{
        background:#FAE090;
    }
}
p{
    font-size: 16px;
font-family: Lexend Regular;
font-style: normal;
font-weight: 400;
line-height: 28px;
}
`
const FeedbackDiv= styled.div`
p{
    font-size:24px;
    color:#000000;
    font-family: Lexend Regular;
    font-style: normal;
    font-weight: 400;
    
}
`