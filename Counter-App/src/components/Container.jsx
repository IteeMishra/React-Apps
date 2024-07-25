export default function Container({ children }) {
  return (
    <div className="card" style={{ width: "80%", margin: "10rem" }}>
      <div className="card-body">{children}</div>
    </div>
  );
}
