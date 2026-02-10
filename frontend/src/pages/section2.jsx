import { useContext } from "react";
import { FormContext } from "../Formcontext";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";

export default function Section2() {
  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate();


  const teams = ["Tech", "Design", "Content", "Management"];

  const toggleTeam = (team) => {
    if (formData.teams.includes(team)) {
      setFormData({
        ...formData,
        teams: formData.teams.filter((t) => t !== team),
      });
    } else if (formData.teams.length < 2) {
      setFormData({
        ...formData,
        teams: [...formData.teams, team],
      });
    }
  };

  const isValid =
    formData.teams.length > 0 &&
    formData.instagram.trim() !== "" &&
    formData.linkedin.trim() !== "";




  return (
    <div className="page-wrapper">
      <div className="container">
        <ProgressBar step={2} />

        <div className="section-header">Teams & Social Links</div>

        <div className="card-grid">
          {/* TEAM SELECTION */}
          <div className="form-card">
            <div className="card-title">
              Teams you want to be part of (Max 2)
            </div>

            <div className="option-group">
              {teams.map((team) => (
                <button
                  key={team}
                  type="button"
                  className={`option-btn ${
                    formData.teams.includes(team) ? "active" : ""
                  }`}
                  onClick={() => toggleTeam(team)}
                >
                  {team}
                </button>
              ))}
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="form-card">
            <div className="card-title">Experience (if any)</div>

            <textarea
              placeholder="Tell us about your experience or past work"
              value={formData.experience}
              onChange={(e) =>
                setFormData({ ...formData, experience: e.target.value })
              }
            />
          </div>

          {/* SOCIAL LINKS */}
          <div className="form-card">
            <div className="card-title">Social Links</div>

            <input
              placeholder="Instagram (mandatory)"
              value={formData.instagram}
              onChange={(e) =>
                setFormData({ ...formData, instagram: e.target.value })
              }
            />
            

            <input
              placeholder="LinkedIn (mandatory)"
              value={formData.linkedin}
              onChange={(e) =>
                setFormData({ ...formData, linkedin: e.target.value })
              }
            />
            

            <input
              placeholder="GitHub (only for Tech team)"
              value={formData.github}
              onChange={(e) =>
                setFormData({ ...formData, github: e.target.value })
              }
            />
            
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="form-actions">
          <button className="secondary" onClick={() => navigate("/")}>
            Back
          </button>

          <button
            className="primary"
            disabled={!isValid}
            onClick={() => navigate("/section3")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
