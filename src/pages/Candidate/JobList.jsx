import { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Card, CardContent, Typography, Grid } from "@mui/material";

const JobList = () => {
  const [open, setOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    { id: 1, title: "Desenvolvedor Front-End", location: "São Paulo, SP", salary: "R$ 5.000 - R$ 7.000", description: "Desenvolvimento de interfaces web utilizando React e outras tecnologias." },
    { id: 2, title: "Designer Gráfico", location: "Rio de Janeiro, RJ", salary: "R$ 4.000 - R$ 6.000", description: "Criação de material visual para campanhas publicitárias e mídias sociais." },
    { id: 3, title: "Gerente de Marketing", location: "Belo Horizonte, MG", salary: "R$ 7.000 - R$ 10.000", description: "Gestão de campanhas de marketing e estratégia de marca." }
  ];

  const handleOpen = (job) => {
    setSelectedJob(job);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedJob(null);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>Lista de Vagas</h1>
      <Grid container spacing={3}>
        {jobs.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.id}>
            <Card sx={{ borderRadius: "12px", boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" style={{ fontWeight: 500, fontSize: "1.2rem" }}>{job.title}</Typography>
                <Typography color="textSecondary" style={{ fontSize: "0.9rem" }}>{job.location}</Typography>
                <Typography variant="body2" color="textSecondary" style={{ fontSize: "0.9rem" }}>{job.salary}</Typography>
                <Button 
                  variant="outlined" 
                  onClick={() => handleOpen(job)} 
                  style={{ marginTop: "15px", borderRadius: "20px", textTransform: "none", fontWeight: "bold", borderColor: "#0073b1", color: "#0073b1" }}
                >
                  Ver Detalhes
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal com os detalhes da vaga */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Detalhes da Vaga</DialogTitle>
        <DialogContent>
          {selectedJob ? (
            <>
              <Typography variant="h5" style={{ fontWeight: 600, marginBottom: "10px" }}>{selectedJob.title}</Typography>
              <Typography variant="body1" style={{ marginBottom: "10px" }}>
                <strong>Localização:</strong> {selectedJob.location}
              </Typography>
              <Typography variant="body1" style={{ marginBottom: "10px" }}>
                <strong>Salário:</strong> {selectedJob.salary}
              </Typography>
              <Typography variant="body1">
                <strong>Descrição:</strong> {selectedJob.description}
              </Typography>
            </>
          ) : (
            <p>Carregando...</p>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default JobList;
