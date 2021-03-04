import * as React from "react"
import styled, { createGlobalStyle } from "styled-components/macro"


const asciiText = `
█     █░ ▒█████   ██▀███   ██▓    ▓█████▄     ██░ ██  ▒█████   ██▓███   ██▓███  ▓█████  ██▀███
▓█░ █ ░█░▒██▒  ██▒▓██ ▒ ██▒▓██▒    ▒██▀ ██▌   ▓██░ ██▒▒██▒  ██▒▓██░  ██▒▓██░  ██▒▓█   ▀ ▓██ ▒ ██▒
▒█░ █ ░█ ▒██░  ██▒▓██ ░▄█ ▒▒██░    ░██   █▌   ▒██▀▀██░▒██░  ██▒▓██░ ██▓▒▓██░ ██▓▒▒███   ▓██ ░▄█ ▒
░█░ █ ░█ ▒██   ██░▒██▀▀█▄  ▒██░    ░▓█▄   ▌   ░▓█ ░██ ▒██   ██░▒██▄█▓▒ ▒▒██▄█▓▒ ▒▒▓█  ▄ ▒██▀▀█▄  
░░██▒██▓ ░ ████▓▒░░██▓ ▒██▒░██████▒░▒████▓    ░▓█▒░██▓░ ████▓▒░▒██▒ ░  ░▒██▒ ░  ░░▒████▒░██▓ ▒██▒
░ ▓░▒ ▒  ░ ▒░▒░▒░ ░ ▒▓ ░▒▓░░ ▒░▓  ░ ▒▒▓  ▒     ▒ ░░▒░▒░ ▒░▒░▒░ ▒▓▒░ ░  ░▒▓▒░ ░  ░░░ ▒░ ░░ ▒▓ ░▒▓░
  ▒ ░ ░    ░ ▒ ▒░   ░▒ ░ ▒░░ ░ ▒  ░ ░ ▒  ▒     ▒ ░▒░ ░  ░ ▒ ▒░ ░▒ ░     ░▒ ░      ░ ░  ░  ░▒ ░ ▒░
  ░   ░  ░ ░ ░ ▒    ░░   ░   ░ ░    ░ ░  ░     ░  ░░ ░░ ░ ░ ▒  ░░       ░░          ░     ░░   ░ 
    ░        ░ ░     ░         ░  ░   ░        ░  ░  ░    ░ ░                       ░  ░   ░     
                                    ░                                                            
`


const Global = createGlobalStyle`
    body{
        margin: 0;
        background-color: black;
        background-image: radial-gradient(
            rgba(0, 150, 0, 0.75), black 120%
        );
        width: 100vw;
        height: 100vh;

        color: white;
        font: 1.3vw Inconsolata, monospace;
        text-shadow: 0 0 5px #C8C8C8;
    }

    body::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: repeating-linear-gradient(0deg, #00000020, #00000020, transparent 1px, transparent 2px);
    pointer-events: none
}
`

const Page = styled.div`
margin: 0;
`

const StyledAscii = styled.div`
padding: 30px 0px;
display: flex;
`

const StyledAsciiPre = styled.pre`
display: inline-block;
margin: 20px 0 50px 0;
`

const AsciiRandomText = styled.ul`
padding: 0;
margin: 0 0 ${props => props.mb || "60px"} 0;

display: flex;
justify-content: flex-start;
flex-direction: column;
gap: 15%;

font-size: 1.5vw;

li {
    padding: 0;
    margin: 10px 0;
    text-indent: 0;
    list-style: none;
}

li::before {
    content: "> ";
}
`

const StyledTerminal = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: inline-block;
    justify-content: center;
`

const StyledFooter = styled.footer`
    position: absolute;
    display: flex;
    justify-content: center;
    bottom: 0;
    width: 100%;
    height: 3.5rem;
    background-color: rgba(0, 0, 0, 0.2);

    span {
        font-size: .7vh;
        padding-top: 1.3rem;
        text-shadow: none;
        color: #acacac;
    }
`

const AsciiTextWrapper = () => {
    return (
        <StyledAsciiPre>
            {asciiText}
        </StyledAsciiPre>
    )
}

const RandomConsoleText = () => {
    return (
        <AsciiRandomText>
            <li>loading...</li>
            <li>failed</li>
            <li>Error: why did you try to acces this page? It doesn't even exist</li>
            <li>Warning: try to be smarter next time...</li>
            <li>Warning: this is a 404-page, by the way</li>
        </AsciiRandomText>
    )
}

const Ascii = () => {
    return (
        <StyledAscii>
            <StyledTerminal>
                <AsciiTextWrapper />
                <RandomConsoleText />
            </StyledTerminal>
        </StyledAscii>
    )
}

const IndexPage = () => {
    return(
        <Page>
            <Global />
            <Ascii></Ascii>
            <StyledFooter>
                <span>&copy; Roman Sajzew, Hopper Game Studios</span>
            </StyledFooter>
        </Page>
    )
}

export default IndexPage
