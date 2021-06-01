import React from 'react'
import {
    makeStyles,
    Drawer,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@material-ui/core"
import {
    AccountBox,
    CreditCard,
    Dashboard,
    ViewList
} from "@material-ui/icons"
import {Link} from "react-router-dom"
import PropTypes from "prop-types"

const list = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        icon: <Dashboard />
    },
    {
        name: 'Products',
        path: '/products',
        icon: <ViewList />

    },
    {
        name: 'Orders',
        path: '/orders',
        icon: <CreditCard />
    },
    {
        name: 'Clients',
        path: '/clients',
        icon: <AccountBox />
    }
]

const useStyles = makeStyles({
    link: {
        color: '#707070'
    }
})

const Sidebar = ({ sidebarState, toggleDrawer }) => {
    const classes = useStyles()

    return (
        <Drawer anchor="left" open={sidebarState} onClose={toggleDrawer(sidebarState, false)}>
            <div
                className="list left"
                role="presentation"
                onClick={toggleDrawer(sidebarState, false)}
                onKeyDown={toggleDrawer(sidebarState, false)}
            >
                <List>
                    { list.map(item => (
                        <Link
                            to={item.path}
                            className={classes.link}
                            key={item.name}
                        >
                            <ListItem button>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.name} />
                            </ListItem>
                        </Link>
                    )) }
                </List>
                <Divider />
            </div>
        </Drawer>
    );
};

Sidebar.propTypes = {
    sidebarState: PropTypes.bool,
    toggleDrawer: PropTypes.func
}

export default Sidebar