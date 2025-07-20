export default function IncidentCard({ incidents }) {
  if (incidents.length === 0) {
  return (
    <div className="bg-yellow-100 text-yellow-800 text-sm font-medium px-6 py-3 rounded-full text-center w-full max-w-md mx-auto shadow">
      No incidents logged.
    </div>
  );
}


  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {incidents.map((incident, index) => (
        <div
          key={index}
          className="bg-white border shadow rounded-lg p-4 hover:shadow-md transition"
        >
          <h3 className="font-semibold text-gray-800">{incident.type}</h3>
          <p className="text-sm text-gray-600 mt-1">{incident.description}</p>
          <p className="text-xs text-gray-400 mt-2">Date: {incident.date}</p>
          <span
            className={`inline-block mt-3 px-2 py-1 rounded text-xs font-medium ${
              incident.status === "Resolved"
                ? "bg-green-100 text-green-700"
                : incident.status === "Investigating"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {incident.status}
          </span>
        </div>
      ))}
    </div>
  );
}
