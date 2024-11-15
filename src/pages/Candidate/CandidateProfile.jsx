/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
  Button,
  Avatar,
  Typography,
  Container,
  Box,
  Paper,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const CandidateProfile = () => {
  const [candidate, setCandidate] = useState({
    name: "João Silva",
    email: "joao.silva@example.com",
    skills: "JavaScript, React, Node.js",
    experience: "3 anos como Desenvolvedor Frontend",
    position: "Desenvolvedor Frontend",
    education: "Bacharelado em Ciência da Computação",
  });

  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Paper elevation={3} style={{ padding: "20px", borderRadius: "10px" }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          {/* Avatar e nome do candidato */}
          <Avatar
            alt={candidate.name}
            src="https://via.placeholder.com/150" // Aqui você pode colocar a imagem do avatar
            style={{ width: 100, height: 100, marginBottom: "10px" }}
          />
          <Typography variant="h5" gutterBottom>
            {candidate.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            {candidate.email}
          </Typography>

          <Divider style={{ width: "100%", margin: "20px 0" }} />

          {/* Informações adicionais do perfil */}
          <Box width="100%" display="flex" flexDirection="column" gap="10px">
            <Typography variant="body1">
              <strong>Posição:</strong> {candidate.position}
            </Typography>
            <Typography variant="body1">
              <strong>Escolaridade:</strong> {candidate.education}
            </Typography>
            <Typography variant="body1">
              <strong>Habilidades:</strong> {candidate.skills}
            </Typography>
            <Typography variant="body1">
              <strong>Experiência:</strong> {candidate.experience}
            </Typography>
          </Box>

          <Divider style={{ width: "100%", margin: "20px 0" }} />

          {/* Botão para editar currículo */}
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate("/candidate/resume-form")}
            style={{ width: "100%" }}
          >
            Editar Currículo
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default CandidateProfile;
