import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/Mainlayout";
import CandidateScreen from "../pages/Candidate/CandidateScreen";
import JobList from "../pages/Candidate/JobList";
import ResumeForm from "../pages/Candidate/ResumeForm";
import EmployerPanel from "../pages/Employer/EmployerPanel";
import  Home  from "../pages/Home";
import CandidateProfile from "../pages/Candidate/CandidateProfile";
import EmployerCandidatesList from "../pages/Employer/EmployerCandidatesList";
import CandidateAppliedJobs from "../pages/Candidate/CandidateAppliedJobs";
const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Rotas do candidato */}
        <Route path="/home" element={<Home />} />

        <Route path="candidate" element={<CandidateScreen />} />
        <Route path="candidate/job-list" element={<JobList />} />
        <Route path="candidate/profile" element={<CandidateProfile />} />
        <Route path="candidate/appliedjobs" element={<CandidateAppliedJobs />} />

        <Route path="candidate/resume-form" element={<ResumeForm />} />
        {/* Rotas do empregador */}
        <Route path="employer" element={<EmployerPanel />} />
        <Route path="employer/candidatelist" element={<EmployerCandidatesList />} />

      </Route>
    </Routes>
  );
};

export default RoutesComponent;
