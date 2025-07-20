import { useState } from "react";

export default function IncidentForm({ onAdd }) {
  const [formData, setFormData] = useState({
    type: "",
    description: "",
    date: "",
    status: "Unresolved",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.type && formData.description && formData.date) {
      onAdd(formData);
      setFormData({ type: "", description: "", date: "", status: "Unresolved" });
    }
  };

  return (
<div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
  <form
    onSubmit={handleSubmit}
    className="bg-gray-100 shadow-md rounded-2xl p-6 sm:p-8 space-y-6"
  >
    <h2 className="text-xl font-semibold text-gray-800">Log New Incident</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <input
        type="text"
        name="type"
        value={formData.type}
        onChange={handleChange}
        placeholder="Incident Type"
        className="w-full border border-gray-500 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="w-full border border-gray-500 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="w-full border border-gray-500 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="Unresolved">Unresolved</option>
        <option value="Investigating">Investigating</option>
        <option value="Resolved">Resolved</option>
      </select>
    </div>

    <div>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Incident Description"
        className="w-full border border-gray-500 rounded-md px-3 py-2 min-h-[6rem] resize-none overflow-y-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div className="flex justify-end">
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl transition"
      >
        Add Incident
      </button>
    </div>
  </form>
</div>

  );
}
