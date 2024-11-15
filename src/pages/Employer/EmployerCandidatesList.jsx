/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
  Button,
  Typography,
  Container,
  Paper,
  Grid,
  Modal,
  Box,

  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const EmployerCandidatesList = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  
  const candidates = [
    {
      id: 1,
      name: "João Silva",
      jobTitle: "Desenvolvedor Frontend",
      applicationDate: "2024-11-10",
      skills: "JavaScript, React, Node.js",
      experience: "3 anos como Desenvolvedor Frontend",
      position: "Desenvolvedor Frontend",
      education: "Bacharelado em Ciência da Computação",
      email: "joao.silva@example.com",
    },
    {
      id: 2,
      name: "Maria Oliveira",
      jobTitle: "Analista de Dados",
      applicationDate: "2024-11-12",
      skills: "Python, SQL, Tableau",
      experience: "5 anos como Analista de Dados",
      position: "Analista de Dados",
      education: "Mestrado em Estatística",
      email: "maria.oliveira@example.com",
    },
  ];

  const navigate = useNavigate();

  const handleOpenModal = (candidate) => {
    setSelectedCandidate(candidate);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedCandidate(null);
  };

  const handleAcceptCandidate = () => {
    console.log(`Candidato ${selectedCandidate.name} aceito!`);
    handleCloseModal();
  };

  const handleRejectCandidate = () => {
    console.log(`Candidato ${selectedCandidate.name} recusado!`);
    handleCloseModal();
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom>
        Lista de Candidatos
      </Typography>
      <hr />
      <Grid container spacing={3}>
        {candidates.map((candidate) => (
          <Grid item xs={12} sm={6} md={4} key={candidate.id}>
            <Paper elevation={3} style={{ padding: "20px" }}>
              <Typography variant="h6">{candidate.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                Vaga Aplicada: {candidate.jobTitle}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Data de Aplicação: {candidate.applicationDate}
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginTop: "10px" }}
                onClick={() => handleOpenModal(candidate)}
              >
                Visualizar Perfil
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Modal para visualizar perfil do candidato */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="candidate-modal-title"
        aria-describedby="candidate-modal-description"
      >
        <Box
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            width: "80%",
            maxWidth: "600px",
            boxShadow: 24,
            borderRadius: "10px",
          }}
        >
          {selectedCandidate && (
            <>
              <Typography variant="h5" id="candidate-modal-title" gutterBottom>
                {selectedCandidate.name}
              </Typography>
              <Divider style={{ marginBottom: "20px" }} />

              <Typography variant="body1" gutterBottom>
                <strong>Email:</strong> {selectedCandidate.email}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Vaga:</strong> {selectedCandidate.jobTitle}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Posição:</strong> {selectedCandidate.position}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Escolaridade:</strong> {selectedCandidate.education}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Habilidades:</strong> {selectedCandidate.skills}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Experiência:</strong> {selectedCandidate.experience}
              </Typography>

              <Divider style={{ margin: "20px 0" }} />

              <Box display="flex" justifyContent="space-between">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAcceptCandidate}
                >
                  Aceitar
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleRejectCandidate}
                >
                  Recusar
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Container>
  );
};

export default EmployerCandidatesList;
