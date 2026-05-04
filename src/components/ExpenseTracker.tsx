import { useState } from "react";

export default function ModernForm() {
  const [value, setValue] = useState(""); // ✅ FIX HERE

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <form>
        <div className="mb-4">
          <label htmlFor="Item" className="form-label text-muted">
            Item
          </label>
          <input
            id="Item"
            type="text"
            className="form-control underline-input input"
            placeholder="Enter the Item"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Amount" className="form-label text-muted small">
            Amount
          </label>
          <input
            id="Amount"
            type="number"
            className="form-control underline-input input"
            placeholder="Enter The Amount"
          />
        </div>

        <select
          className="form-select form-select-lg shadow-sm catagory"
          style={{
            borderRadius: "12px",
            padding: "12px",
            cursor: "pointer",
          }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <option value="" disabled>
            Select Category
          </option>
          <option value="technology">Technology</option>
          <option value="education">Education</option>
          <option value="business">Business</option>
          <option value="design">Design</option>
        </select>

        <button className="btn btn-dark buttons">Submit</button>
      </form>
    </div>
  );
}
