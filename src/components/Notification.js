import styled from "styled-components";
import { motion } from "framer-motion";
import {
    Avatar,
    Button,
    Box,
    Text,
} from "@primer/react"
import Keyboard from "./Keyboard";
import IssueHeader from "./IssueHeader";

const spacing = 4;

const Notification = (props) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 20
            }}
            animate={{
                opacity: 1,
                y: 0
            }}
            transition={{
                type: 'spring',
                duration: 0.75,
                delay: props.delay,
            }}
        >
            <Box display="flex" flexDirection="column" mx={3} borderBottom={props.last ? "" : "1px solid"} borderColor="border.muted">
                <NotificationButton onClick={props.onClick}>
                    <IssueHeader title={props.title} new={props.new} command={props.command} />
                </NotificationButton>
            </Box>
        </motion.div>
    )
}

export default Notification;

const NotificationButton = styled(Button)`
    display: block;
    width: 100%;
    border: none;
    background-color: transparent;
    padding: 12px;
    border-radius: 6px;
    box-shadow: none;
    font-weight: normal;
    margin: 8px 0;
    position: relative;

    &:focus {
        outline: none;
        outline: none !important;
        background: #f6f8fa;
        border-radius: 0 6px 6px 0;

        &:after {
            content: "";
            height: calc(100% - 0px);
            position: absolute;
            left: -3px;
            background: #24292F;
            width: 3px;
            top: 50%;
            transform: translateY(-50%);
            border-radius: 2px 0 0 2px;
        }
    }
`;
