import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Box = () => {
    const theme = useContext(ThemeContext);
    return (
        <>
            <div style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}>Here is the Primary Theme Context</div>
            <div style={{ backgroundColor: theme.secondary.main, color: theme.secondary.text }}>Here is the Secondary Theme Context</div>
        </>)
}

export default Box