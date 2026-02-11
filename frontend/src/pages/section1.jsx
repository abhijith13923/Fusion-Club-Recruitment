import { useContext } from "react";
import { FormContext } from "../Formcontext";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";

export default function Section1() {
  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate();

const errors = {
    name:
        /\d/.test(formData.name)
        ? "Name should not contain numbers"
        : "",

    regId:
        formData.regId &&
        !/^(24|25)[A-Z]{2,}[0-9]+$/i.test(formData.regId)
        ? formData.regId.startsWith("23") || formData.regId.startsWith("22")
            ? "Sorry, we are only hiring for 24 & 25 batch"
            : "Invalid Register ID format"
        : "",

    email:
        formData.email &&
        !formData.email.endsWith("@vitbhopal.ac.in")
        ? "Email must end with @vitbhopal.ac.in"
        : "",

    contact:
        formData.contact &&
        !/^\d{10}$/.test(formData.contact)
        ? "Contact number must be 10 digits"
        : ""
    };


  const timeOptions = ["Low", "Medium", "High"];
  const workingStyles = ["Team-based", "Independent", "Hybrid"];
  const genres = ["Pop", "Rock", "EDM", "Hip-Hop", "Folk", "Soul"];

  const isValid =
    formData.name &&
    formData.regId &&
    formData.email &&
    formData.contact &&
    formData.timeCommitment &&
    formData.workingStyle &&
    formData.genres.length > 0 &&
    !errors.name &&
    !errors.regId &&
    !errors.email &&
    !errors.contact;


  const toggleGenre = (genre) => {
    const updated = formData.genres.includes(genre)
      ? formData.genres.filter((g) => g !== genre)
      : [...formData.genres, genre];

    setFormData({ ...formData, genres: updated });
  };

  return (
    <div className="page-wrapper">
    <h1>Recruitment Form</h1>
      <div className="container">
        <ProgressBar step={1} />

        <div className="section-header">Personal Details</div>

        <div className="card-grid">
          {/* BASIC DETAILS */}
          <div className="form-card">
            <div className="card-title">Personal Information</div>

            <input
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            {errors.name && <p className="error-text">{errors.name}</p>}

            <input
              placeholder="Register ID"
              value={formData.regId}
              onChange={(e) =>
                setFormData({ ...formData, regId: e.target.value })
              }
            />
            {errors.regId && <p className="error-text">{errors.regId}</p>}

            <input
              placeholder="College Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && <p className="error-text">{errors.email}</p>}

            <input
              placeholder="Contact Number"
              value={formData.contact}
              onChange={(e) =>
                setFormData({ ...formData, contact: e.target.value })
              }
            />
            {errors.contact && <p className="error-text">{errors.contact}</p>}

            <input
              placeholder="Part of any other club? (if Yes specify)"
              value={formData.otherClub}
              onChange={(e) =>
                setFormData({ ...formData, otherClub: e.target.value })
              }
            />
          </div>

          {/* TIME COMMITMENT */}
          <div className="form-card">
            <div className="card-title">Time Commitment</div>
            <div className="option-group">
              {timeOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  className={`option-btn ${
                    formData.timeCommitment === opt ? "active" : ""
                  }`}
                  onClick={() =>
                    setFormData({ ...formData, timeCommitment: opt })
                  }
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* WORKING STYLE */}
          <div className="form-card">
            <div className="card-title">Working Style</div>
            <div className="option-group">
              {workingStyles.map((style) => (
                <button
                  key={style}
                  type="button"
                  className={`option-btn ${
                    formData.workingStyle === style ? "active" : ""
                  }`}
                  onClick={() =>
                    setFormData({ ...formData, workingStyle: style })
                  }
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          {/* FAV GENRE */}
          <div className="form-card">
            <div className="card-title">Favourite Genre</div>
            <div className="option-group">
              {genres.map((g) => (
                <button
                  key={g}
                  type="button"
                  className={`option-btn ${
                    formData.genres.includes(g) ? "active" : ""
                  }`}
                  onClick={() => toggleGenre(g)}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* NAV BUTTONS */}
        <div className="form-actions">
          <div />
          <button
            className="primary"
            disabled={!isValid}
            onClick={() => navigate("/section2")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
