import { useState } from "react";
import IncidentForm from "./IncidentForm";
import FilterBar from "./FilterBar";
import IncidentTable from "./IncidentTable";
import IncidentCard from "./IncidentCard";
import Footer from "./Footer";

export default function Home() {
  const [incidents, setIncidents] = useState([]);
  const [viewMode, setViewMode] = useState("table");
  const [statusFilter, setStatusFilter] = useState("All");

  const addIncident = (incident) => {
    setIncidents([incident, ...incidents]);
  };

  const filteredIncidents =
    statusFilter === "All"
      ? incidents
      : incidents.filter((i) => i.status === statusFilter);

  const handleDownload = () => {
    const csv = [
      ["Type", "Description", "Date", "Status"],
      ...incidents.map((i) => [i.type, i.description, i.date, i.status]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "incident_logs.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="relative min-h-screen  flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/background-home.jpg')" }} id="Home"
    >
      <div className="relative px-6 z-10 max-w-7xl mx-auto w-full space-y-6">
        <IncidentForm onAdd={addIncident} />

        {/* Export + Filter */}
        <div className="flex flex-wrap justify-between items-center gap-4 my-4">
          <button
            onClick={handleDownload}
            className="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded shadow"
          >
            Download CSV
          </button>

          <FilterBar statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
        </div>

        {/* Toggle Views */}
        <div className="flex justify-end gap-2 mb-4">
          <button
            onClick={() => setViewMode("table")}
            className={`px-3 py-1 rounded ${
              viewMode === "table" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Table
          </button>
          <button
            onClick={() => setViewMode("card")}
            className={`px-3 py-1 rounded ${
              viewMode === "card" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Card
          </button>
        </div>

        {viewMode === "table" ? (
          <IncidentTable incidents={filteredIncidents} />
        ) : (
          <IncidentCard incidents={filteredIncidents} />
        )}
       
      </div>
       <Footer />
    </div>
  );
}
