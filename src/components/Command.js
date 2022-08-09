import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Box, Text, StyledOcticon, Button } from '@primer/react'
import Keyboard from './Keyboard'
import keydown from 'react-keydown'

const Command = (props) => {
    return(
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
            <CommandButton onClick={props.onClick}>
                <Box py={2} display="flex" alignItems="center" alignContent="center" justifyContent="space-between">
                    <Box display="inline-flex" alignItems="center">
                        {props.icon ? <StyledOcticon icon={props.icon || 'IssueOpenedIcon'} color="neutral.emphasis" /> : <Box width="16px" justifyContent="center" display="block">{props.emoji}</Box>}
                        <Text color="fg.default" ml={'12px'}>{props.name || "Command name"}</Text>
                    </Box>
                    <Keyboard command={props.command} />
                </Box>
            </CommandButton>
        </motion.div>

    )
}

export default Command;

const CommandButton = styled(Button)`
    display: block;
    width: 100%;
    border: none;
    background-color: transparent;
    padding: 0.125rem 1rem;
    border-radius: 6px;
    box-shadow: none;
    font-weight: normal;
    position: relative;
    margin-left: 0.125rem;

    &:focus-visible {
        outline: none;
        outline: none !important;
        background: #f6f8fa;

        &:after {
            content: "";
            font-family: "SF Mono", "Roboto Mono", monospace;
            height: 50%;
            position: absolute;
            left: -14px;
            background: #24292F;
            width: 4px;
            top: 50%;
            transform: translateY(-50%);
            border-radius: 6px 0 0 6px;
        }
    }
`;