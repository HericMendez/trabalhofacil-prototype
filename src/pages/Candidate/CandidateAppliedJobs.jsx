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

const CandidateAppliedJobs = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  // Lista de vagas aplicadas (simulando dados)
  const appliedJobs = [
    {
      id: 1,
      jobTitle: "Desenvolvedor Frontend",
      companyName: "Tech Company",
      applicationDate: "2024-11-10",
      status: "Em Análise",
      jobDescription:
        "Responsável por desenvolver interfaces web, trabalhar com React e melhorar a experiência do usuário.",
      location: "São Paulo, SP",
    },
    {
      id: 2,
      jobTitle: "Analista de Dados",
      companyName: "Data Solutions",
      applicationDate: "2024-11-12",
      status: "Aceito",
      jobDescription:
        "Responsável por analisar grandes volumes de dados e gerar relatórios de insights utilizando ferramentas como Python, SQL e Tableau.",
      location: "Remoto",
    },
  ];


  const handleOpenModal = (job) => {
    setSelectedJob(job);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedJob(null);
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom>
        Vagas Aplicadas
      </Typography>
      
      <hr />
      <Grid container spacing={3}>
        {appliedJobs.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.id}>
            <Paper elevation={3} style={{ padding: "20px" }}>
              <Typography variant="h6">{job.jobTitle}</Typography>
              <Typography variant="body2" color="textSecondary">
                Empresa: {job.companyName}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Data de Aplicação: {job.applicationDate}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Status: {job.status}
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginTop: "10px" }}
                onClick={() => handleOpenModal(job)}
              >
                Ver Detalhes
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Modal para visualizar detalhes da vaga */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="job-modal-title"
        aria-describedby="job-modal-description"
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
          {selectedJob && (
            <>
              <Typography variant="h5" id="job-modal-title" gutterBottom>
                {selectedJob.jobTitle}
              </Typography>
              <Divider style={{ marginBottom: "20px" }} />

              <Typography variant="body1" gutterBottom>
                <strong>Empresa:</strong> {selectedJob.companyName}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Data de Aplicação:</strong> {selectedJob.applicationDate}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Status:</strong> {selectedJob.status}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Localização:</strong> {selectedJob.location}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Descrição da Vaga:</strong> {selectedJob.jobDescription}
              </Typography>

              <Divider style={{ margin: "20px 0" }} />


            </>
          )}
        </Box>
      </Modal>
    </Container>
  );
};

export default CandidateAppliedJobs;
