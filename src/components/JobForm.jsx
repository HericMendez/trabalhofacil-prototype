/* eslint-disable react/prop-types */
import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const JobForm = ({ addJob }) => {
  const [jobName, setJobName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [area, setArea] = useState("");
  const [salary, setSalary] = useState("");
  const [requirements, setRequirements] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob({
      jobName,
      companyName,
      area,
      salary,
      requirements,
      description,
    });
    setJobName("");
    setCompanyName("");
    setArea("");
    setSalary("");
    setRequirements("");
    setDescription("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: 2,
        maxWidth: 400,
      }}
    >
      <TextField
        label="Nome da Vaga"
        variant="outlined"
        value={jobName}
        onChange={(e) => setJobName(e.target.value)}
      />
      <TextField
        label="Nome da Empresa"
        variant="outlined"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <TextField
        label="Área"
        variant="outlined"
        value={area}
        onChange={(e) => setArea(e.target.value)}
      />
      <TextField
        label="Salário"
        variant="outlined"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />
      <TextField
        label="Requisitos"
        variant="outlined"
        value={requirements}
        onChange={(e) => setRequirements(e.target.value)}
      />
      <TextField
        label="Descrição"
        variant="outlined"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button variant="contained" color="primary" type="submit">
        Criar Vaga
      </Button>
    </Box>
  );
};

export default JobForm;
