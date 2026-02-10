import { useEffect } from "react";

export default function Success() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://thefusionclub.in/";
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="success-page">
      <div className="success-card">
        <div className="success-icon">🎉</div>
        <div className="success-title">Application Submitted</div>
        <p className="success-text">
          Thank you for applying to Fusion Club.
          <br />
          We'll get back to you soon!
        </p>
        <div className="success-redirect">
          Redirecting to homepage...
        </div>
      </div>
    </div>
  );
}
