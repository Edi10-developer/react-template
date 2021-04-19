import styled from 'styled-components';
// Assets
import Item from '../assets/img/item1.jpg';
import Item2 from '../assets/img/item2.jpg';
import '../assets/fonts/Jost/static/Jost-Regular.ttf';
import '../assets/fonts/CharterOne/CarterOne-Regular.ttf';

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
        width: 13rem;
    }
`;
const BtnLink = styled.button`
    display: block;
    width: 10rem;
    height: 1.5rem;
    padding: 1rem;
    text-align: center;
    line-height: .3rem;
    color: white;
    background-color: #d12727;
    margin: -3rem auto;
    border-radius: 7px;

    :hover{
        background-color: #FF0000;
    }
`;

const DivStyled = styled.div`
    min-height: 24rem;
    color: rgba(0, 0, 0, .85);
    font-weight: 600;
    width: 60%;
    padding: 2rem;
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 5rem auto;
    background: white;
    border-radius: 15px;
    box-shadow: 5px #ccc;
    box-shadow: 5px 8px 24px 0px rgba(0,0,0,0.49);
    -webkit-box-shadow: 5px 8px 24px 0px rgba(0,0,0,0.49);
    -moz-box-shadow: 5px 8px 24px 0px rgba(0,0,0,0.49);
    `;

const HeaderStyled = styled.h1`
    font-family: Jost;
    color: #1d37b7;

    @media(max-width: 546px){
        font-size: 26px;
    }
`;

const JokeStyled = styled.div`
    font-family: CharterOne;
    font-size: 22px;
    overflow: hidden;

    @media(max-width: 546px){
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem .5rem;;
    }
`;

const WelcomeStyled = styled.div`
.container{
    background-image: linear-gradient(to right, black , #2b234c);
    padding: 2rem;
    z-index: -3;
}

.main-div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 85vh;
    background-image: url(${Item2});
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover;
}
`;

const JokesStyled = styled.div`
.container{
    background-image: linear-gradient(to right, black , #2b234c);
    padding: 2rem;
}

.main-div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${Item});
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover;
}
`;

const LoadingStyled = styled.div`
    text-align: center;

    h3{
        font-family: Jost;
        color: #1d37b7;
    }
    `;


export { Btn, BtnLink, DivStyled, HeaderStyled, JokeStyled, WelcomeStyled, JokesStyled, LoadingStyled };