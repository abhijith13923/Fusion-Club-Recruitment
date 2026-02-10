export default function ProgressBar({ step }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <p>Step {step} / 4</p>
      <div style={{
        height: "6px",
        background: "#ddd",
        borderRadius: "4px"
      }}>
        <div style={{
          height: "6px",
          width: `${(step / 3) * 100}%`,
          background: "#000",
          borderRadius: "4px"
        }} />
      </div>
    </div>
  );
}
