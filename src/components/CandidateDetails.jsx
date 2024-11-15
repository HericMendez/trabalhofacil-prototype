/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
const CandidateDetails = ({ job }) => {
    // Mockando uma lista de candidatos
    const candidates = [
      { name: "João Silva", location: "São Paulo", position: "Desenvolvedor Frontend" },
      { name: "Maria Oliveira", location: "Rio de Janeiro", position: "Analista de Dados" },
    ];
  
    return (
      <div>
        {candidates.map((candidate, index) => (
          <div key={index} style={{ marginBottom: "1rem", padding: "1rem", border: "1px solid #ddd" }}>
            <h4>{candidate.name}</h4>
            <p>{candidate.position}</p>
            <p>{candidate.location}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default CandidateDetails;

  