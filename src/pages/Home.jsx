// src/pages/Home.jsx
import { Container, Typography, Grid, Button, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" style={{ marginTop: "50px", textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        Trabalho Fácil
      </Typography>
      <hr />
      <Typography variant="h6" color="textSecondary" gutterBottom>
        Conectando empregadores e candidatos de forma simples e eficiente.
      </Typography>

      <Grid container spacing={4} style={{ marginTop: "30px" }}>
        <Grid item xs={12} sm={6}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Sou Empregador
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Cadastre vagas, visualize candidatos e gerencie seus processos seletivos.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: "15px" }}
                onClick={() => navigate("/employer/")}
              >
               Ir para o Painel do empregador
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Sou Candidato
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Encontre vagas compatíveis com o seu perfil e gerencie seu currículo.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                style={{ marginTop: "15px" }}
                onClick={() => navigate("/candidate/resume-form")}
              >
                Cadastrar Currículo
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
