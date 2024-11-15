import { useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import JobForm from "../../components/JobForm";
import JobList from "../../components/JobList";

const EmployerPanel = () => {
  const [jobs, setJobs] = useState([]);

  const addJob = (job) => {
    setJobs([...jobs, job]);
  };

  const deleteJob = (index) => {
    const updatedJobs = jobs.filter((_, i) => i !== index);
    setJobs(updatedJobs);
  };

  return (
    <Box sx={{ padding: 3 }}>
            <Typography variant="h4" gutterBottom>
        Painel do Empregador
      </Typography>
      <hr/>
      <Grid container spacing={3}>
        {/* Formulário - coluna à esquerda */}
        <Grid item xs={12} sm={5} md={4}>
          <Typography variant="h5" gutterBottom>
            Cadastrar Vaga
          </Typography>
          <JobForm addJob={addJob} />
        </Grid>

        {/* Lista de Vagas - coluna à direita */}
        <Grid item xs={12} sm={7} md={8}>
          <Typography variant="h5" gutterBottom>
            Lista de Vagas
          </Typography>
          <JobList jobs={jobs} deleteJob={deleteJob} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default EmployerPanel;
