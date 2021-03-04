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
    html {
        height: 100%;
        height: -moz-available;          /* WebKit-based browsers will ignore this. */
        height: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */
        height: fill-available;

        background-color: black;
        background-image: radial-gradient(
            rgba(0, 150, 0, 0.75), black 120%
        );
        background-repeat: no-repeat;
        background-attachment: fixed;
    }

    body {
        margin: 0;
        width: 100vw;
        height: 100%;

        color: white;
        font: 1.3vw Inconsolata, monospace;
        text-shadow: 0 0 5px #C8C8C8;
    }

    div[tabindex], #___gatsby {
        height: 100%;
    }



    html::after {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        min-height: -webkit-fill-available;
        background: repeating-linear-gradient(0deg, #00000020, #00000020, transparent .3vh, transparent .6vh);
        background-attachment: fixed;
        pointer-events: none
}
`

const Page = styled.div`
    margin: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const Content = styled.div`
    flex: 1 0 auto;
`

const StyledAscii = styled.div`
    padding: 30px 0px;
    display: flex;
`

const StyledFooter = styled.footer`
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 3.5rem;

    span {
        font-size: .7vh;
        padding-top: 1.3rem;
        text-shadow: none;
        color: #acacac;
    }
`

const StyledAsciiPre = styled.pre`
    font-size: .9vw;
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
    max-width: 90%;
    font-size: 100%;

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
            <Content>
            <Global />
            <Ascii></Ascii>
            </Content>
            <StyledFooter>
                <span>&copy; Roman Sajzew, Hopper Game Studios</span>
            </StyledFooter>
        </Page>
    )
}

export default IndexPage
