import {
    Avatar,
    Box,
    Text
} from '@primer/react';
import Keyboard from './Keyboard';

const IssueHeader = (props) => {
    return(
        <Box>
            <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
                <Box display="flex">
                    {!props.noAvatar &&
                        <Box position="relative">
                            <Avatar src="https://avatars.githubusercontent.com/mona" />
                            {props.new && <Box bg="accent.emphasis" height="0.75rem" width="0.75rem" borderRadius="50%" position="absolute" top="-4px" left="-4px" border="2px solid" borderColor="canvas.default"></Box>}
                        </Box>
                    }
                    <Text ml={props.noAvatar ? 0 : 2} color="fg.muted" fontSize="12px" as="p">{props.repo || 'github/repo #375'}</Text>
                </Box>
                <Box display="flex">
                    <Text color="fg.muted" fontSize="12px" mr={props.noCommand ? 0 : 2}>{props.time || "1 hour ago"}</Text>
                    {!props.noCommand && <Keyboard command={props.command} />}
                </Box>
            </Box>
            <Box display="flex" width="100%">
                <Text mt={2} fontWeight={props.new ? "bold" : "normal"} as="p">{props.title || "Introduce new notifications"}</Text>
            </Box>
        </Box>
    )
}

export default IssueHeader;