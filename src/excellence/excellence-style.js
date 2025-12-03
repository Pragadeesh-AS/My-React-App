import styled from "styled-components";
export const ExcellenceStyle = styled.div`
    .first{
        display: flex;
        flex-direction: column;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
    }
    .heading{
        font-weight: 600;
        font-size: 48px;
        text-align: center;
        font-family: "Work Sans", sans-serif;   
    }
    .sub_heading{
        max-width: 900px;
        font-size: 20px;
        font-weight: 500;
        line-height: 1.8;
        font-family: "Work Sans", sans-serif;
        text-align: center;
        color: rgb(86, 102, 131);
    }
    .second{
        display: flex;
        gap: 2rem;
        max-width: 1280px;
        width: 95%;
        margin: 0px auto;
        .box1,.box2{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 1rem;
    }
    .divider{
        width: 0.5rem;
        background-color: rgb(221, 221, 221);
    }
    .sub_heading1,.sub_heading2{
        font-size: 32px;
        font-weight: 600;
        font-family: "Work Sans", sans-serif;    
    }
    .sub_heading1{
        color: rgb(243, 176, 79);
        border-left: 4px solid rgb(243, 176, 79);
        padding-left: 0.5rem;
    }
    .sub_heading2{
        color: rgb(0, 189, 235);
        border-left: 4px solid rgb(0, 189, 235);
        padding-left: 0.5rem;
    }
    .para1,.para2{
        font-size: 18px;
        font-weight: 500;
        line-height: 1.8;
        font-family: "Work Sans", sans-serif;
        color: rgb(86, 102, 131);
    }
    
    *{
        box-sizing: border-box;
        list-style-type: none;
        margin: 0;
        padding: 0;
        
    }
`;