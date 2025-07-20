export default function FilterBar({ statusFilter, setStatusFilter }) {
  const statuses = ["All", "Resolved", "Investigating", "Unresolved"];

  return (
    <div className="flex flex-wrap gap-2 mb-4" id="Logs">
      {statuses.map((status) => (
        <button
          key={status}
          onClick={() => setStatusFilter(status)}
          className={`px-4 py-1 rounded-full text-sm font-medium transition ${
            statusFilter === status
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          {status}
        </button>
      ))}
    </div>
  );
}
