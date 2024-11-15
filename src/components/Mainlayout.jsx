import { useState } from "react";
import { Box, Drawer, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Outlet } from "react-router-dom"; // Renders nested routes
import Sidebar from "./SidebarComponent";
const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar começa escondida no modo mobile

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* Barra superior */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Trabalho Fácil
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Barra lateral (sidebar) - Modo Desktop (Persistent) */}
      <Drawer
        sx={{
            display: { xs: "none", sm: "block" },
          width: 240,
          flexShrink: 0,
          zIndex: (theme) => theme.zIndex.drawer - 1, // Definir um zIndex menor para a Drawer
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            paddingTop: 8, // Ajuste para alinhar corretamente abaixo da AppBar
            backgroundColor: "#ADD8E6",
            opacity: 0.8, // Cor de fundo azul claro
            height: "100%", // Ocupa 100% da altura da página
          },
        }}
        variant="permanent" // No modo desktop, a sidebar será persistente
        anchor="left"
        open={isSidebarOpen} // Controla a visibilidade da sidebar
        onClose={toggleSidebar} // Fecha ao clicar fora
        ModalProps={{
          keepMounted: true, // Para melhorar performance no mobile
        }}
  
      >
        <Sidebar /> {/* Sidebar com links de navegação */}
      </Drawer>

      {/* Barra lateral temporária para Mobile (sobrepondo conteúdo) */}
      <Drawer
        sx={{
            display: { xs: "block", sm: "none" }, // Exibe o Drawer apenas no mobile
          width: 240,
          flexShrink: 0,
          zIndex: (theme) => theme.zIndex.drawer + 1, // Z-Index maior para sobrepor conteúdo
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            paddingTop: 8, // Ajuste para alinhar corretamente abaixo da AppBar
            backgroundColor: "#ADD8E6", 
            opacity: 0.8, // Cor de fundo azul claro
            height: "100%", // Ocupa 100% da altura da página
          },
        }}
        variant="temporary" // Drawer temporário no mobile
        anchor="left"
        open={isSidebarOpen} // Controla a visibilidade da sidebar
        onClose={toggleSidebar} // Fecha ao clicar fora
        ModalProps={{
          keepMounted: true, // Para melhorar performance no mobile
        }}

      >
        <Sidebar /> {/* Sidebar com links de navegação */}
      </Drawer>

      {/* Conteúdo da página */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          paddingTop: 8,

        }}
      >
        <Outlet /> {/* Renders the matching route's component */}
      </Box>
    </Box>
  );
};

export default MainLayout;
