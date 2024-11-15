import { List, ListItem, ListItemText, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const SideBar = () => {
  return (
    <List style={{ padding: "10px" }}>
      {/* Área do Candidato */}
      <div>
        <ListItem button component={Link} to="/home">
          <HomeIcon style={{ marginRight: "10px" }} />
          <ListItemText primary="Página Inicial" />
        </ListItem>
        <h3 style={{ paddingLeft: "10px", fontSize: "16px", color: "#333" }}>
          <HomeIcon style={{ marginRight: "8px" }} /> Área do Candidato
        </h3>
        <ListItem button component={Link} to="/candidate/profile">
          <AssignmentIcon style={{ marginRight: "10px" }} />
          <ListItemText primary="Meu Currículo" />
        </ListItem>

        <ListItem button component={Link} to="/candidate">
          <SearchIcon style={{ marginRight: "10px" }} />
          <ListItemText primary="Buscar Vagas" />
        </ListItem>

        <ListItem button component={Link} to="/candidate/appliedjobs">
          <SearchIcon style={{ marginRight: "10px" }} />
          <ListItemText primary="Ver vagas aplicadas" />
        </ListItem>
      </div>

      <Divider style={{ margin: "10px 0" }} />

      {/* Área do Empregador */}
      <div>
        <h3 style={{ paddingLeft: "10px", fontSize: "16px", color: "#333" }}>
          <BusinessCenterIcon style={{ marginRight: "8px" }} /> Área do
          Empregador
        </h3>
        <ListItem button component={Link} to="/employer">
          <BusinessCenterIcon style={{ marginRight: "10px" }} />
          <ListItemText primary="Painel do Empregador" />
        </ListItem>
        <ListItem button component={Link} to="/employer/candidatelist">
          <BusinessCenterIcon style={{ marginRight: "10px" }} />
          <ListItemText primary="Ver Candidatos" />
        </ListItem>
      </div>
    </List>
  );
};

export default SideBar;
