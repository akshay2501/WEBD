import styled from 'styled-components';
import React, { useState } from "react";
import { Container, Wrapper } from "./style";
import './btn.css'

const S2 = () => {
    const [imageClicked, setImageClicked] = useState({
        zero: false,
        first: false,
        second: false,
        third: false,
    });
    const onClickHandler = (order) => {
      setImageClicked((prevState) => ({
        ...prevState,
        [order]: !prevState[order]
      }));
    };
    return (
        <StyledWrapper>
            <Container >
                <Title>
                    <h4>
                        Solution Here
                    </h4>
                    <p>Dropdown below this.
                    </p><hr></hr>
                    <p>In order to unselect previous image double click the same option.</p><hr></hr>
                </Title>
                     <div class="dd">
                            <input type ="text" class="txtbx" placeholder="  Dropdown"readOnly></input>
                            <div class="Opt">
                                <div class="elm" onClick={() => onClickHandler("zero")}>Mountain</div>
                                <div class="elm" onClick={() => onClickHandler("first")}>Forest</div>
                                <div class="elm" onClick={() => onClickHandler("second")}>Ocean</div>
                                <div class="elm" onClick={() => onClickHandler("third")}>Desert</div>
                            </div>
                        <div className="image"style={{ display: "flex", justifyContent: "space-between"}} >
                           <div>   {imageClicked.zero && <img src="./1.jpg" alt="Mountain" />}</div>
                           <div>   {imageClicked.first && <img src="./2.jpg" alt="Forest" />}</div>
                           <div>   {imageClicked.second && <img src="./3.jpg" alt="Ocean" />}</div>
                           <div>   {imageClicked.third && <img src="./4.jpg" alt="Desert" />}</div>
                        </div>
                    </div>
            </Container>
        </StyledWrapper>
    )
}

export default S2;


const StyledWrapper = styled(Wrapper)`
background:#F6F7F9;
`

const Title = styled.div`
h4{
    font-size: 32px;
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
    font-size: 18px;
font-family: Lexend Regular;
font-style: normal;
font-weight: 400;
line-height: 28px;
}
`
const QuestionsDiv = styled.div`
ul{
    display:flex;
    flex-direction:column;
}
li{
    font-size:20px;
}
`