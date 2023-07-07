import React from "react";
import styled from 'styled-components';
import { Container } from "./style";

const S5 = () => {
    return (
        <Container >
            <Title>
                <h4>
                    Solution Here
                </h4>
                <p>Put the created component below this.</p>
            </Title>
            <PricingTable  highlightColor='#1976D2'>
    <PricingSlot  onClick={this.submit} buttonText='TRY IT FREE' title='FREE' priceText='$0/month'>
        <PricingDetail> <b>15</b> projects</PricingDetail>
        <PricingDetail> <b>5 GB</b> storage</PricingDetail>
        <PricingDetail> <b>5</b> users</PricingDetail>
        <PricingDetail strikethrough> <b>Time tracking</b></PricingDetail>
    </PricingSlot>
    <PricingSlot highlighted onClick={this.submit} buttonText='SIGN UP' title='BASIC' priceText='$24/month'>
        <PricingDetail> <b>35</b> projects</PricingDetail>
        <PricingDetail> <b>15 GB</b> storage</PricingDetail>
        <PricingDetail> <b>Unlimited</b> users</PricingDetail>
        <PricingDetail> <b>Time tracking</b></PricingDetail>
    </PricingSlot>
    <PricingSlot  onClick={this.submit} buttonText='SIGN UP' title='PROFESSIONAL' priceText='$99/month'>
        <PricingDetail> <b>100</b> projects</PricingDetail>
        <PricingDetail> <b>30 GB</b> storage</PricingDetail>
        <PricingDetail> <b>Unlimited</b> users</PricingDetail>
        <PricingDetail> <b>Time tracking</b></PricingDetail>
    </PricingSlot>
    <PricingSlot  onClick={this.submit} buttonText='SIGN UP' title='ENTERPRISE' priceText='$200/month'>
        <PricingDetail> <b>Unlimited</b> projects</PricingDetail>
        <PricingDetail> <b>75 GB</b> storage</PricingDetail>
        <PricingDetail> <b>Unlimited</b> users</PricingDetail>
        <PricingDetail> <b>Time tracking</b></PricingDetail>
    </PricingSlot>
</PricingTable>
        </Container>
    )
}

export default S5

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
const QuestionsDiv= styled.div`
ul{
    display:flex;
    flex-direction:column;
}
li{
    font-size:20px;
}
`