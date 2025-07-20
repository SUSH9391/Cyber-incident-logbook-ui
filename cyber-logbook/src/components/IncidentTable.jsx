export default function IncidentTable({ incidents }) {
  if (incidents.length === 0) return <p className="text-black">No incidents logged.</p>;

  return (
    <div className="overflow-x-auto shadow border rounded-lg">
      <table className="w-full table-auto text-sm text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {incidents.map((incident, index) => (
            <tr key={index} className="border-t bg-white hover:bg-gray-50">
              <td className="px-4 py-2">{incident.type}</td>
              <td className="px-4 py-2">{incident.description}</td>
              <td className="px-4 py-2">{incident.date}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    incident.status === "Resolved"
                      ? "bg-green-100 text-green-700"
                      : incident.status === "Investigating"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {incident.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
