import {
    useContext,
    useEffect,
    useState
} from 'react'
import { motion } from 'framer-motion'
import {
    Avatar,
    Box,
    Breadcrumbs,
    Button,
    StyledOcticon,
    Text,
    Textarea,
    TextInput,
} from '@primer/react'
import styled from 'styled-components'
import {
    MarkGithubIcon,
    SearchIcon,
    BellIcon,
    IssueOpenedIcon,
    GitPullRequestIcon
} from '@primer/octicons-react'
import Command from './Command'
import Notification from './Notification'
import IssueHeader from './IssueHeader'
import EmojiReact from './EmojiReact'

const commands = [
    {
        name: "Notifications dashboard",
        icon: BellIcon,
        command: "⌘N",
        value: "home"
    },
    {
        name: "Issues",
        icon: IssueOpenedIcon,
        command: "⌘I",
        value: "issues"
    },
    {
        name: "Pull requests",
        icon: GitPullRequestIcon,
        command: "⌘P",
        value: "prs"
    },
];

const issues = [
    {
        name: "Assigned",
        emoji: "🎯",
        command: "⌘A",
        value: "issues"
    },
    {
        name: "Participating",
        emoji: "💬",
        command: "⌘P",
        value: "issues"
    },
    {
        name: "Mentioned",
        emoji: "✋",
        command: "⌘M",
        value: "issues"
    },
    {
        name: "Team mentioned",
        emoji: "🙌",
        command: "⌘T",
        value: "issues"
    },
    {
        name: "Review requested",
        emoji: "👀",
        command: "⌘R",
        value: "issues"
    },
];

const mentions = [
    {
        repo: "primer/primer",
        title: "Add a new section to the Primer",
        time: "1 hour ago",
        new: true
    },
    {
        repo: "primer/primer",
        title: "Add a new section to the Primer",
        time: "1 hour ago",
    },
    {
        repo: "primer/primer",
        title: "Add a new section to the Primer",
        time: "1 hour ago",
    },
]

const Notifications = (props) => {
    const [ page, setPage ] = useState("home");
    const [ key, setKey ] = useState("");

    const handleKeyDown = (event) => {
        setKey(event.keyCode)
        
        if(event.keyCode === 73) {
            setPage("issues");
            
        };

        if(event.keyCode === 77) {
            setPage("mentioned")
        }

        if(event.keyCode === 27) {
            setPage("home")
        };

        if(event.keyCode === 49) {
            setPage("issue")
        };
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const spacing = 4;

    return(
        <Box height="max-content" width="100%" boxShadow="shadow.large" bg="canvas.default" border="1px solid" borderRadius={12} borderColor="border.muted" maxWidth={"500px"}>
            <Box position="absolute" bottom="1rem" left="1rem" display="flex">
                <Box mr="2rem">
                    <Text color="fg.muted">Key</Text>
                    <Text as="h1">{key}</Text>
                </Box>

                <Box>
                    <Text color="fg.muted">Location</Text>
                    <Text as="h1">{page}</Text>
                </Box>
            </Box>
            <Box display="flex" borderColor="border.muted" px={4} py={3}>
                <Box mr={3}>
                    <MarkGithubIcon size={24} />
                </Box>
                <h4>Notifications</h4>
            </Box>

            <Box height="44px" p={spacing} display="flex" borderBottom="1px solid" borderTop="1px solid" borderColor="border.muted" alignItems="center" backgroundColor="canvas.inset" justifyItems="center" py={1}>
                {page === "home" ?
                    <>
                        <SearchIcon />
                        <SearchBar placeholder="Search" backgroundColor="transparent" />
                    </>
                    :
                    <Breadcrumbs>
                        <Breadcrumbs.Item href="/">
                            <StyledOcticon color="fg.muted" icon={IssueOpenedIcon} />
                            <Text color="fg.muted" ml={'12px'}>
                                Issues
                            </Text>
                        </Breadcrumbs.Item>
                        <Breadcrumbs.Item href="/" selected={page === "mentioned"}>
                            <Text color={page === "mentioned" ? "fg.default" : "fg.muted"}>{page === "issues" ? "" : "Mentioned"}</Text>
                        </Breadcrumbs.Item>
                        {page === "issue" &&
                            <Breadcrumbs.Item href="/" selected>
                                <Text color={page === "issue" ? "fg.default" : "fg.muted"}>Add a new section to...</Text>
                            </Breadcrumbs.Item>
                        }   
                    </Breadcrumbs>
                }
            </Box>
            <Box px={spacing - 2} py={2}>
                {page === "home" &&
                    commands.map((command, index) => {
                        return(
                                <Command
                                    name={command.name}
                                    icon={command.icon}
                                    command={command.command}
                                    onClick={() => setPage(command.value)}
                                    delay={index * 0.1}
                                />
                        )
                    })
                }
                {page === "issues" &&
                    issues.map((command, index) => {
                        return(
                            <Command
                                name={command.name}
                                emoji={command.emoji}
                                command={command.command}
                                onClick={() => setPage("mentioned")}
                                delay={index * 0.1}
                            />
                        )
                    })
                }
                {page === "mentioned" &&
                    mentions.map((mention, index) => {
                        return(
                            <Notification
                                repo={mention.repo}
                                title={mention.title}
                                delay={index * 0.1}
                                last={index === mentions.length - 1}
                                new={mention.new}
                                onClick={() => setPage("issue")}
                                command={index + 1}
                            />
                        )
                    })
                }

                {page === "issue" &&
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
                    <Box p={spacing}>
                        <Box pb={3} mb={3} borderBottom="1px solid" borderColor="border.muted">
                            <IssueHeader title={"Add a new section to Primer"} noCommand noAvatar new={true} />
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <Box display="flex" alignItems="center">
                                <Avatar size={24} src="https://avatars.githubusercontent.com/mona" />
                                <Text fontSize="12px" style={{ cursor: "pointer" }} ml={2} fontWeight="bold">ghmona</Text>
                                <Text fontSize="12px" ml = {1} color="fg.muted">commented 1 hour ago</Text>
                            </Box>
                            <Button size="small">View issue</Button>
                        </Box>
                        <Box my={3}>
                            <Text>
                                Since we are adopting this new pattern - should be consistent and use it on mobile too?
                            </Text>
                        </Box>
                        <Box>
                            <EmojiReact />
                        </Box>
                        
                    </Box>
                    </motion.div>
                }
            </Box>
        </Box>
    )
}

export default Notifications;

const SearchBar = styled(TextInput)`
    background-color: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    width: 100%;

    &:focus-within {
        border: none;
        outline: none;
        box-shadow: none;
    }
`;