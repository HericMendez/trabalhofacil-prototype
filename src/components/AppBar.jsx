/* eslint-disable react/prop-types */
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Ícone para abrir a barra lateral

const AppBarComponent = ({ onToggleSidebar }) => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#fff", boxShadow: "none", padding: "10px 20px" }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={onToggleSidebar}>
          <MenuIcon />
        </IconButton>
        <img src="https://via.placeholder.com/150" alt="Logo" style={{ height: "30px", marginRight: "20px" }} />
        <Typography variant="h6" sx={{ flexGrow: 1, color: "#0073b1", fontWeight: "bold" }}>
          Plataforma de Recrutamento
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
