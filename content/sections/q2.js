import React from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";

const QuestionsHeading = () => {
    return (<section id="qq2">
        <StyledWrapper>
            <StyledContainer >
                <Title>
                    <h3>
                        Lets Begin
                    </h3>
                    <p>
                        Hi! We appreciate your interest in joining our web development team. Thank you for applying. Please follow the instructions below to complete the assignment. Scroll down for further instructions.
                    </p>
                    <p><h2>Self Details</h2></p>
                    <p>
                    I'm Akshay Singh Kushwaha, I belong to Kanpur. Currently, I am pursuing my graduation in Bachelor of Technology from Madan Mohan Malviya University Of Technology, Gorakhpur in stream of Information Technology. I have a command on basic computer languages. I have used different OS like Linux and Windows.</p>
                    <p>
I am diligent, driven, and dedicated to maximizing my potential. In the short term, my objective is to secure employment within a reputable company and contribute to its growth through my determination and abilities. Looking ahead, my long-term aspiration is to continuously expand my knowledge and enhance my skills, ultimately cultivating a strong and well-rounded  
personality.</p>
<p>
Python, C, C++, Java, HTML, CSS, Javascript, PHP, MySQL. Beginner to intermediate in C,CPP and JAVA, and would love to learn more and create useful applications with it. I have also created small windows tools and window based games as well.</p>
<p>
As far as my skills and strengths are concerned, I am adaptive, curious to learn new things, have a positive attitude, and I'm a disciplined person. I do cope well under pressure and I am able to work alone or with a team.
                    </p>
                </Title>
            </StyledContainer>
        </StyledWrapper>
        </section>
    )
}

export default QuestionsHeading

const StyledWrapper = styled(Wrapper)`
background:#F6F7F9;
`
const Title = styled.div`
text-align:center;
max-width:900px;
margin:auto;
margin-bottom:40px;
h3{
    text-align: center;
font-size: 32px;
font-family: Lexend Medium;
font-style: normal;
font-weight: 500;
line-height: 40px;
letter-spacing: -0.4px;
}
p{
    text-align: center;
font-size: 18px;
font-family: Lexend Regular;
font-style: normal;
font-weight: 400;
line-height: 28px;
}
`
const StyledContainer = styled(Container)`
margin-top:0;
`