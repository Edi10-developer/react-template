import styled from 'styled-components';

const Btn = styled.button`
    width: 17rem;
    height: 4.9rem;
    background-color: #3ED3DE;
    border-radius: 10px;
    border: none;
    color: white;
    font-weight: 500;
    font-size: 23px;
    text-align: center;
    line-height: 4.9rem;
    transition: all 300ms;
    outline:none;

    :hover{
        background-color: #2968f2;
    }

    @media(max-width: 546px){
        width: 14rem;
    }
`;

const DivStyled = styled.div`
    height: 24rem;
    width: 60%;
    padding: 2rem;
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 5rem auto;
    border-radius: 15px;
    box-shadow: 5px #ccc;
    box-shadow: 5px 8px 24px 0px rgba(0,0,0,0.49);
    -webkit-box-shadow: 5px 8px 24px 0px rgba(0,0,0,0.49);
    -moz-box-shadow: 5px 8px 24px 0px rgba(0,0,0,0.49);
    `;

const HeaderStyled = styled.h1`
    font-family: Arial;

    @media(max-width: 546px){
        font-size: 26px;
    }
`;

const JokeStyled = styled.div`
    font-family: Georgia;
    padding: 2rem;
    overflow: hidden;

    @media(max-width: 546px){
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem .5rem;;
    }
`;

export { Btn, DivStyled, HeaderStyled, JokeStyled };