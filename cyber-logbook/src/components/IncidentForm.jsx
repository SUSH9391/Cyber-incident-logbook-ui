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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-4 mb-6 space-y-4"
    >
      <h2 className="text-lg font-semibold text-gray-700">Log New Incident</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          name="type"
          value={formData.type}
          onChange={handleChange}
          placeholder="Incident Type"
          className="input"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="input"
        />
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="input"
        >
          <option value="Unresolved">Unresolved</option>
          <option value="Investigating">Investigating</option>
          <option value="Resolved">Resolved</option>
        </select>
      </div>

      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Incident Description"
        rows="3"
        className="input w-full"
      />

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Add Incident
      </button>
    </form>
    </div>
  );
}
