/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const CandidateScreen = () => {
  const [open, setOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const navigate = useNavigate();

  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Desenvolvedor Frontend",
      company: "Tech Corp",
      description:
        "Desenvolver interfaces para aplicações web utilizando React e Material-UI.",
      requirements: "Experiência com React, JavaScript e CSS.",
      benefits: "Vale Refeição, Home Office, Plano de Saúde.",
    },
    {
      id: 2,
      title: "Analista de Dados",
      company: "Data Inc.",
      description:
        "Analisar dados e criar relatórios para orientar decisões estratégicas.",
      requirements: "Conhecimentos em SQL, Python e ferramentas de BI.",
      benefits: "Plano de Saúde, Gympass, Horário Flexível.",
    },
  ]);

  const handleOpenModal = (job) => {
    setSelectedJob(job);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setSelectedJob(null);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Painel do Candidato
      </Typography>
      <hr />

      {/* Botões */}
      <Box sx={{ marginBottom: 3 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/candidate/profile")}
          sx={{ marginRight: 2 }}
        >
          Editar Currículo
        </Button>
      </Box>

      {/* Lista de Vagas */}
      <Grid container spacing={3}>
        {jobs.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.id}>
            <Card sx={{ boxShadow: 6, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" color="primary">
                  {job.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {job.company}
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ marginTop: 2 }}
                  onClick={() => handleOpenModal(job)}
                >
                  Ver Detalhes
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Diálogo de Detalhes da Vaga */}
      {selectedJob && (
        <Dialog open={open} onClose={handleCloseModal}>
          <DialogTitle>Detalhes da Vaga</DialogTitle>
          <DialogContent>
            <Typography variant="h6" gutterBottom>
              {selectedJob.title}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Empresa: {selectedJob.company}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {selectedJob.description}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Requisitos:
            </Typography>
            <Typography variant="body2" gutterBottom>
              {selectedJob.requirements}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Benefícios:
            </Typography>
            <Typography variant="body2">{selectedJob.benefits}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal} color="secondary">
              Fechar
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default CandidateScreen;
