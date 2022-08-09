import { useState } from 'react';
import styled from 'styled-components';
import { Button, Text } from "@primer/react";

const EmojiReact = (props) => {
    const [count, setCount] = useState(1);
    const [vote, setVote] = useState(false);

    const handleClick = () => {
        count === 1 ? setCount(count + 1) : setCount(count - 1);
        setVote(!vote);
    };

    return(
        <EmojiButton voted={vote} onClick={handleClick}>💯<Text ml={2}>{count}</Text></EmojiButton>
    )
}

export default EmojiReact;

const EmojiButton = styled(Button)`
    padding: 0.125rem 0.5rem;
    border-radius: 50px;
    background: transparent;
    font-weight: normal;

    ${props => props.voted && `
        border-color: #0969DA;
        background-color: rgba(9, 105, 218, 0.1);
        color: #0969DA;
    `}
`;