import { Box, ListItemIcon, ListItemText, MenuItem, MenuList, Paper } from "@mui/material";
import dashboard from '../assets/dashboard.png';
import calendar from '../assets/calendar.png';
import insurance from '../assets/insurance.png';
import labservices from '../assets/labservices.png';
import notifications from '../assets/notifications.png';
import profile from '../assets/profile.png';
import information from '../assets/information.png';
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList>
        <MenuItem component={NavLink} to={'/dashboard'}>
          <ListItemIcon>
            <img width='30px' src={dashboard} className="dashboard" alt="Dashboard icon" />
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </MenuItem>
        <MenuItem component={NavLink} to={'/appointment'}>
          <ListItemIcon>
            <img width='30px' src={calendar} className="calendar" alt="Book appointment icon" />
          </ListItemIcon>
          <ListItemText>Appointment</ListItemText>
        </MenuItem>
        <MenuItem component={NavLink} to={'/insurance'}>
          <ListItemIcon>
            <img width='30px' src={insurance} className="insurance" alt="Insurance icon" />
          </ListItemIcon>
          <ListItemText>Insurance</ListItemText>
        </MenuItem>
        <MenuItem component={NavLink} to={'/labservices'}>
          <ListItemIcon>
            <img width='30px' src={labservices} className="labservices" alt="Lab services icon" />
          </ListItemIcon>
          <ListItemText>Lab Services</ListItemText>
        </MenuItem>
        <MenuItem component={NavLink} to={'/notifications'}>
          <ListItemIcon>
            <img width='30px' src={notifications} className="notifications" alt="Notifications icon" />
          </ListItemIcon>
          <ListItemText>Notifications</ListItemText>
        </MenuItem>
        <MenuItem component={NavLink} to={'/profile'}>
          <ListItemIcon>
            <img width='30px' src={profile} className="profile" alt="Profile icon" />
          </ListItemIcon>
          <ListItemText>Profile</ListItemText>
        </MenuItem>
        <MenuItem component={NavLink} to={'/help'}>
          <ListItemIcon>
            <img width='30px' src={information} className="help" alt="Help icon" />
          </ListItemIcon>
          <ListItemText>Need help?</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}

export default Sidebar;