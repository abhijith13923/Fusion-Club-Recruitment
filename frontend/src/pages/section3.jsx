import { useContext } from "react";
import { FormContext } from "../Formcontext";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";

export default function Section3() {
  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate();

  const isValid =
    formData.fitReason.trim() !== "" &&
    formData.expectations.trim() !== "";

  return (
    <div className="page-wrapper">
      <div className="container">
        <ProgressBar step={3} />

        <div className="section-header">Final Questions</div>

        <div className="card-grid">
          {/* WHY FIT */}
          <div className="form-card">
            <div className="card-title">
              Why do you feel you are a good fit for the club?
            </div>

            <textarea
              placeholder="Tell us why you'd be a great addition"
              value={formData.fitReason}
              onChange={(e) =>
                setFormData({ ...formData, fitReason: e.target.value })
              }
            />
          </div>

          {/* EXPECTATIONS */}
          <div className="form-card">
            <div className="card-title">
              What are your expectations from the club?
            </div>

            <textarea
              placeholder="What do you expect to gain or contribute?"
              value={formData.expectations}
              onChange={(e) =>
                setFormData({ ...formData, expectations: e.target.value })
              }
            />
          </div>

          {/* SOURCE */}
          <div className="form-card">
            <div className="card-title">
              Where did you hear about us?
            </div>

            <input
              placeholder="Instagram, friends, website, etc."
              value={formData.source}
              onChange={(e) =>
                setFormData({ ...formData, source: e.target.value })
              }
            />
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="form-actions">
          <button className="secondary" onClick={() => navigate("/section2")}>
            Back
          </button>

          <button
            className="primary"
            disabled={!isValid}
            onClick={() => navigate("/preview")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
