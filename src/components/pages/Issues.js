import Command from '../Command'

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

const Issues = (props) => {
    return(
        issues.map((command, index) => {
            return(
                <Command
                    name={command.name}
                    emoji={command.emoji}
                    command={command.command}
                    // onClick={() => setValue(command.value)}
                    delay={index * 0.1}
                />
            )
        })
    )
}

export default Issues;