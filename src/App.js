import {  BaseStyles, Box, ThemeProvider } from '@primer/react'
import ColorModeSwitcher from './ColorModeSwitcher'
import Notifications from './components/Notifications'
// import DialogMenu from './components/DialogMenu'

function App() {
    return (
        <ThemeProvider colorMode="auto">
            <BaseStyles>
                <Box
                    bg="canvas.default"
                    width="100%"
                    minHeight="100vh"
                    p={4}
                    display="flex"
                    justifyContent="center"
                >
                    <Notifications />
                    {/* <DialogMenu /> */}
                    <ColorModeSwitcher />
                </Box>
            </BaseStyles>
        </ThemeProvider>
    )
}

export default App
