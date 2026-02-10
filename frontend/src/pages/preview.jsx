import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FormContext } from "../Formcontext";
import ProgressBar from "../components/ProgressBar";

export default function Preview() {
  const { formData } = useContext(FormContext);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/submit/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Submission failed");
      }

      navigate("/success");
    } catch (err) {
      alert("Submission failed. Try again.");
    }
  };

  const PreviewRow = ({ label, value }) => (
    <div className="preview-item">
      <span className="preview-label">{label}:</span>
      <span>{value || "-"}</span>
    </div>
  );

  return (
    <div className="page-wrapper">
      <div className="container">
        <ProgressBar step={4} />

        <div className="section-header">Review Your Application</div>

        {/* PERSONAL DETAILS */}
        <div className="preview-section form-card">
          <h3>Personal Details</h3>
          <PreviewRow label="Full Name" value={formData.name} />
          <PreviewRow label="Register ID" value={formData.regId} />
          <PreviewRow label="Email" value={formData.email} />
          <PreviewRow label="Contact Number" value={formData.contact} />
          <PreviewRow label="Other Clubs" value={formData.otherClub || "None"} />
          <PreviewRow label="Time Commitment" value={formData.timeCommitment} />
          <PreviewRow label="Working Style" value={formData.workingStyle} />
          <PreviewRow
            label="Favourite Genres"
            value={formData.genres?.join(", ")}
          />
        </div>

        {/* TEAMS & EXPERIENCE */}
        <div className="preview-section form-card">
          <h3>Teams & Experience</h3>
          <PreviewRow
            label="Preferred Teams"
            value={formData.teams?.join(", ")}
          />
          <PreviewRow
            label="Experience"
            value={formData.experience || "Not provided"}
          />
        </div>

        {/* SOCIAL LINKS */}
        <div className="preview-section form-card">
          <h3>Social Links</h3>
          <PreviewRow label="Instagram" value={formData.instagram} />
          <PreviewRow label="LinkedIn" value={formData.linkedin} />
          <PreviewRow label="GitHub" value={formData.github || "Not provided"} />
        </div>

        {/* FINAL QUESTIONS */}
        <div className="preview-section form-card">
          <h3>Final Questions</h3>
          <PreviewRow
            label="Why you are a good fit"
            value={formData.fitReason}
          />
          <PreviewRow
            label="Expectations from the club"
            value={formData.expectations}
          />
          <PreviewRow
            label="How you heard about us"
            value={formData.source || "Not specified"}
          />
        </div>

        {/* ACTIONS */}
        <div className="form-actions">
          <button className="secondary" onClick={() => navigate("/section3")}>
            Back
          </button>

          <button className="primary" onClick={handleSubmit}>
            Submit Application
          </button>
        </div>
      </div>
    </div>
  );
}
