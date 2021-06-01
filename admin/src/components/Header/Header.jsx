import React from 'react'
import {
    makeStyles,
    AppBar,
    IconButton,
    Toolbar,
    Typography,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Sidebar from "./components/Sidebar/Sidebar.jsx"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = () => {
    const classes = useStyles()
    const [sidebarState, setSidebarState] = React.useState(false)

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return
        }

        setSidebarState(open)
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer(sidebarState, true)}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    News
                </Typography>
            </Toolbar>
            <Sidebar sidebarState={sidebarState} toggleDrawer={toggleDrawer} />
        </AppBar>
    );
};

export default Header