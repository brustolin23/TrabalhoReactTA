import { Avatar, Box, Divider, Drawer, Icon, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material"
import { useMatch, useResolvedPath } from "react-router-dom";
import { useAppThemContext, useDrawerContext } from "../../contexts";

interface IListItemLink{
    label: string,
    icon: string,
    route: string,
    onClick: (() => void) | undefined
}

const ListItemLink: React.FC<IListItemLink> = ({label, icon, route, onClick}) =>{

    const resolvedPath = useResolvedPath(route);
    const match = useMatch({path: resolvedPath.pathname, end: false});

    return(
        
            <ListItemButton onClick={onClick} selected={!!match}>
                <ListItemIcon>
                    <Icon>{icon}</Icon>
                </ListItemIcon>
                <ListItemText primary={label}></ListItemText>
            </ListItemButton>
    );
}

export const MenuLateral: React.FC<{children: React.ReactNode}> = ({children}) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const {isDrawerOpen, toggleDrawerOpen, drawerOptions} = useDrawerContext();
    const {toggleTheme} = useAppThemContext()
    return(
        <>
            <Drawer variant={!smDown ? "permanent" : "temporary"} open={isDrawerOpen} onClose={toggleDrawerOpen}>
                <Box width={theme.spacing(28)} height='100%' display='flex' flexDirection='column'>
                    <Box width='100%' height={theme.spacing(20)} display="flex" alignItems='center' justifyContent='center'>
                        <Avatar sx={{height: theme.spacing(12), width: theme.spacing(12)}} src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSJFm-qOkJ41qs-DyFP-HwwECeQjJTWa-NaectpLY1nM3gHvW53"></Avatar>
                    </Box>
                    <Divider/>
                    <Box flex={1}>
                    {drawerOptions.map(drawerOption=>(
                        <ListItemLink 
                        key={drawerOption.route}
                        onClick={smDown ? toggleDrawerOpen : undefined} 
                        icon={drawerOption.icon} 
                        route={drawerOption.route} 
                        label={drawerOption.label}
                        />
                    ))}
                    </Box>
                    <Box>
                    <ListItemButton onClick={toggleTheme}>
                        <ListItemIcon>
                            <Icon>dark_mode</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Mudar tema"></ListItemText>
                        </ListItemButton>
                    </Box>
                </Box>
            </Drawer>
            <Box height='100vh' marginLeft={!smDown ? theme.spacing(28): 0} >
            {children}
            </Box>
        </>
    );
}