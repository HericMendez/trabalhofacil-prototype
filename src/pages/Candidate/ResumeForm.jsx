import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,

  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const ResumeForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    dob: "",
    position: "",
    education: "",
    skills: "",
    experience: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Novo currículo cadastrado:", form);
    // Aqui você pode enviar os dados para uma API
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Cadastro de Currículo
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" gap={3}>
          <TextField
            label="Nome Completo"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            variant="outlined"
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            variant="outlined"
          />
          <TextField
            label="Data de Nascimento"
            name="dob"
            type="date"
            value={form.dob}
            onChange={handleChange}
            required
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          <TextField
            label="Posição"
            name="position"
            value={form.position}
            onChange={handleChange}
            required
            variant="outlined"
          />
          <FormControl variant="outlined" required>
            <InputLabel>Escolaridade</InputLabel>
            <Select
              label="Escolaridade"
              name="education"
              value={form.education}
              onChange={handleChange}
              variant="outlined"
            >
              <MenuItem value="Ensino Médio">Ensino Médio</MenuItem>
              <MenuItem value="Graduação">Graduação</MenuItem>
              <MenuItem value="Pós-graduação">Pós-graduação</MenuItem>
              <MenuItem value="Mestrado">Mestrado</MenuItem>
              <MenuItem value="Doutorado">Doutorado</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Habilidades"
            name="skills"
            value={form.skills}
            onChange={handleChange}
            multiline
            rows={4}
            required
            variant="outlined"
          />
          <TextField
            label="Experiência Profissional"
            name="experience"
            value={form.experience}
            onChange={handleChange}
            multiline
            rows={4}
            required
            variant="outlined"
          />
          <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
            Cadastrar Currículo
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default ResumeForm;
