import styles from "../components/Body.css";
export default function Body() {
  return (
    <section className="section">
      <div>
        <p>
          Node.js® is an open-source, cross-platform JavaScript runtime
          environment.
        </p>
        <h3>Download for Windows (x64)</h3>
      </div>

      <div className="block">
        <div className="card">
          <a>
            18.17.1 LTS <small>Recommended For Most Users</small>
          </a>
          
        </div>

        <div className="card">
          <a>
            20.6.1 Current <small>Latest Features</small>
          </a>
        </div>
      </div>
      <p>
        For information about supported releases,see the <a>release schedule.</a>
      </p>
    </section>
  );
}
