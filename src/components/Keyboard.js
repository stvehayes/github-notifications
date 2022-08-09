import styled from "styled-components";
import {
    Box,
    Text
} from "@primer/react";

const Keyboard = (props) => {
    return(
        <KeyCommand bg={"bg.default"} border="1px solid" borderColor="border.muted" boxShadow="shadow.small">
            <Text color="fg.muted">{props.command || 'None'}</Text>
        </KeyCommand>
    )
}

export default Keyboard;

const KeyCommand = styled(Box)`
    letter-spacing: 2px;
    font-family: "SF Mono", "Roboto Mono", "Fira Mono", Menlo, monospace;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 4px 0 6px;
    text-align: center;
    border-radius: 6px;
    font-size: 10px;
    align-content: center;
    height: max-content;
`;