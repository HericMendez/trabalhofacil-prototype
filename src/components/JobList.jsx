/* eslint-disable react/prop-types */
import { Box, Card, CardContent, Button, Typography } from "@mui/material";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import CandidateDetails from "./CandidateDetails"; // Componente para mostrar detalhes dos candidatos

const JobList = ({ jobs, deleteJob }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleOpenModal = (job) => {
    setSelectedJob(job);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {jobs.map((job, index) => (
        <Card key={index} sx={{ display: "flex", justifyContent: "space-between" }}>
          <CardContent>
            <Typography variant="h6">{job.jobName}</Typography>
            <Typography variant="body2">{job.area}</Typography>
            <Typography variant="body2">{job.companyName}</Typography>
            <Button variant="outlined" onClick={() => handleOpenModal(job)}>
              Visualizar Candidatos
            </Button>
            <Button
              variant="outlined"
              color="error"
              sx={{ marginLeft: 1 }}
              onClick={() => deleteJob(index)}
            >
              Excluir
            </Button>
          </CardContent>
        </Card>
      ))}

      {/* Modal para visualizar candidatos */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={{ padding: 4, backgroundColor: "white", margin: "auto", marginTop: "10%" }}>
          {selectedJob && (
            <>
              <Typography variant="h5" sx={{ marginBottom: 2 }}>
                Candidatos para {selectedJob.jobName}
              </Typography>
              <CandidateDetails job={selectedJob} />
            </>
          )}
          <Button variant="contained" onClick={handleCloseModal}>
            Fechar
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default JobList;
