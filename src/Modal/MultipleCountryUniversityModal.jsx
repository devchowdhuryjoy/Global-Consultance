import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import BASE_URL from "../Api BaseUrl/BaseUrl";

const MultipleCountryUniversityModal = ({
  show,
  onClose,
  selectedCountry = [],   // CHANGED: plural `countries` renamed to `selectedCountry` as per prop
  selectedUniversities = [],
}) => {
  if (!show) return null;

  // Sync prop changes to local state on open
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countries: Array.isArray(selectedCountry) ? selectedCountry : [selectedCountry], // CHANGED
    universities: selectedUniversities || [],
    agreeTerms: false,
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      countries: Array.isArray(selectedCountry) ? selectedCountry : [selectedCountry],
      universities: selectedUniversities || [],
    }));
  }, [selectedCountry, selectedUniversities]);

  const [loading, setLoading] = useState(false);

  // Handle normal inputs (name, email, agreeTerms)
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle multiple select countries in form (optional if you want user to change in modal)
  const handleCountryChange = (e) => {
    const selectedCountries = Array.from(e.target.selectedOptions, (option) => option.value);
    setFormData((prev) => ({
      ...prev,
      countries: selectedCountries,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      Swal.fire("Error!", "Please enter your full name.", "error");
      return;
    }

    if (!formData.email.trim()) {
      Swal.fire("Error!", "Please enter your email.", "error");
      return;
    }

    if (formData.countries.length === 0) {
      Swal.fire("Error!", "Please select at least one country.", "error");
      return;
    }

    if (formData.universities.length === 0) {
      Swal.fire("Error!", "Please select at least one university.", "error");
      return;
    }

    if (!formData.agreeTerms) {
      Swal.fire("Error!", "You must agree to our terms.", "error");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        countries: formData.countries, // CHANGED: sending as array
        universities: formData.universities,
      };

      const response = await fetch(`${BASE_URL}/countryregister`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Submission failed");

      Swal.fire({
        title: "Success!",
        text: data.message || "Your university selections have been submitted successfully",
        icon: "success",
        confirmButtonColor: "#f16f22",
      });

      setFormData({
        name: "",
        email: "",
        countries: [],
        universities: [],
        agreeTerms: false,
      });

      onClose();
      window.location.reload();
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message || "Something went wrong.",
        icon: "error",
        confirmButtonColor: "#f16f22",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-60 px-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-3xl relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl font-bold"
          aria-label="Close form"
        >
          &times;
        </button>
        <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">
          Apply to Selected Universities
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            className="border border-black rounded-lg px-4 py-2 w-full"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="border border-black rounded-lg px-4 py-2 w-full"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* Multiple select countries in modal */}
          <div className="border border-black rounded-lg px-4 py-2">
            <label htmlFor="countries" className="block text-gray-700 mb-1">
              Select Countries
            </label>
            <select
              id="countries"
              name="countries"
              multiple
              value={formData.countries}
              onChange={handleCountryChange}
              className="w-full rounded border px-3 py-2"
              required
            >
              <option value="Sweden">Sweden</option>
              <option value="Denmark">Denmark</option>
              <option value="Finland">Finland</option>
              <option value="Hungary">Hungary</option>
              <option value="Italy">Italy</option>
              <option value="France">France</option>
              <option value="Dubai">Dubai</option>
              <option value="Malaysia">Malaysia</option>
              {/* Add more if needed */}
            </select>
          </div>

          {/* Selected Countries Display */}
          <div className="border border-black rounded-lg px-4 py-2 mt-2">
            <label className="block text-gray-700 mb-1">Selected Countries</label>
            <ul className="list-disc pl-5">
              {formData.countries.length === 0 && (
                <li className="font-medium text-gray-500">No country selected</li>
              )}
              {formData.countries.map((country, index) => (
                <li key={index} className="font-medium">
                  {country}
                </li>
              ))}
            </ul>
          </div>

          {/* Selected Universities Display */}
          <div className="border border-black rounded-lg px-4 py-2 mt-2">
            <label className="block text-gray-700 mb-1">Selected Universities</label>
            <ul className="list-disc pl-5">
              {formData.universities.length === 0 && (
                <li className="font-medium text-gray-500">No university selected</li>
              )}
              {formData.universities.map((uni, index) => (
                <li key={index} className="font-medium">
                  {uni}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              required
              className="mt-1"
            />
            <p>
              By clicking, you agree to our{" "}
              <a href="#" className="text-blue-600 underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 underline">
                Terms & Conditions
              </a>
              .
            </p>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className={`mt-4 bg-[#f16f22] hover:bg-[#252364] text-white font-semibold px-6 py-2 rounded-full transition duration-300 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MultipleCountryUniversityModal;
