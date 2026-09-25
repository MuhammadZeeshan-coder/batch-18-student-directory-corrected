import { useMemo, useState } from "react";
import { Search, Users } from "lucide-react";
import StudentCard from "./components/StudentCard";
import { students } from "./data/students";

export default function App() {
  const [search, setSearch] = useState("");

  const filteredStudents = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return students;

    return students.filter((student) =>
      [student.name, student.role]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(query))
    );
  }, [search]);

  return (
    <main className="page">
      <section className="directory-shell">
        <header className="topbar">
          <div className="batch-badge">Batch 18</div>

          <div className="search-wrap">
            <Search size={20} />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search students..."
              aria-label="Search students"
            />
            {search && (
              <button
                className="clear-btn"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>

          <div className="student-count">
            <Users size={18} />
            <span>{filteredStudents.length}</span>
          </div>
        </header>

        <div className="result-info">
          {search ? (
            <>
              Showing <strong>{filteredStudents.length}</strong> result
              {filteredStudents.length !== 1 ? "s" : ""} for{" "}
              <strong>“{search}”</strong>
            </>
          ) : (
            <>
              <strong>{students.length}</strong> students in Batch 18
            </>
          )}
        </div>

        {filteredStudents.length > 0 ? (
          <section className="student-grid">
            {filteredStudents.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))}
          </section>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">
              <Search size={28} />
            </div>
            <h2>No student found</h2>
            <p>Try another name or skill.</p>
            <button onClick={() => setSearch("")}>Show all students</button>
          </div>
        )}
      </section>
    </main>
  );
}