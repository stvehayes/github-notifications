import styled from "styled-components";
import { useRef, useState } from "react";
import { Box, Button, Dialog, Text } from '@primer/react';
import Notifications from "./Notifications";
import Keyboard from "./Keyboard";

const DialogMenu = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const returnFocusRef = useRef(null)

    return(
        <>
            <Box>
                <Button ref={returnFocusRef} onClick={() => setIsOpen(true)}>
                    <Box display="flex">
                        <Keyboard command="/" />
                    </Box>
                </Button>
            </Box>
            <Menu
                returnFocusRef={returnFocusRef}
                isOpen={isOpen}
                onDismiss={() => setIsOpen(false)}
                aria-labelledby="header-id"
            >
                <Notifications />
            </Menu>
        </>
    )
}

export default DialogMenu;

const Menu = styled(Dialog)`
    border-radius: 1rem;
`;