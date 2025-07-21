import React, { useState } from "react";
import Swal from "sweetalert2";
import BASE_URL from "../Api BaseUrl/BaseUrl"; // adjust this path

const ConsultationModal = ({ show, onClose }) => {
  if (!show) return null;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nearestOffice: "",
    studyDestination: "",
    englishTestStatus: "",
    fundingPlan: "",
    agreeTerms: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone.startsWith("+880")
          ? formData.phone
          : "+880" + formData.phone,
        nearestOffice: formData.nearestOffice,
        preferredDestination: formData.studyDestination,
        testStatus: formData.englishTestStatus,
        fundingPlan: formData.fundingPlan,
      };

      const response = await fetch(`${BASE_URL}register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Submission failed");

      Swal.fire({
        title: "Success!",
        text: data.message,
        icon: "success",
        confirmButtonColor: "#f16f22",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        nearestOffice: "",
        studyDestination: "",
        englishTestStatus: "",
        fundingPlan: "",
        agreeTerms: false,
      });

      onClose();
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
          Register with Us to Take the Next Step
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="border border-black rounded-lg px-4 py-2 w-full"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="border border-black rounded-lg px-4 py-2 w-full"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border border-black rounded-lg px-4 py-2 w-full"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <div className="grid grid-cols-[80px_1fr] gap-2">
            <input
              type="text"
              value="+880"
              readOnly
              className="border border-black rounded-lg px-4 py-2 w-full bg-gray-100"
            />
            <input
              type="number"
              name="phone"
              placeholder="Mobile Number"
              className="border border-black rounded-lg px-4 py-2 w-full"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <select
            name="nearestOffice"
            className="border border-black rounded-lg px-4 py-2 w-full"
            value={formData.nearestOffice}
            onChange={handleChange}
            required
          >
            <option value="">Your Nearest Global Routways Office</option>
            <option value="Mohammadpur">Mohammadpur</option>
          </select>

          <select
            name="studyDestination"
            className="border border-black rounded-lg px-4 py-2 w-full"
            value={formData.studyDestination}
            onChange={handleChange}
            required
          >
            <option value="">Your Preferred Study Destination</option>
            <option value="UK">UK</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="Hungary">Hungary</option>
            <option value="Denmark">Denmark</option>
            <option value="Finland">Finland</option>
            <option value="Sweden">Sweden</option>
            <option value="Dubai">Dubai</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Europe">Europe</option>
          </select>

          <select
            name="englishTestStatus"
            className="border border-black rounded-lg px-4 py-2 w-full"
            value={formData.englishTestStatus}
            onChange={handleChange}
            required
          >
            <option value="">English Language Test Status</option>
            <option value="I have the Scores available">
              I have the Scores available
            </option>
            <option value="My exams are scheduled">
              My exams are scheduled
            </option>
            <option value="I have not appeared for any exams">
              I have not appeared for any exams
            </option>
            <option value="I am planning to reappear soon">
              I am planning to reappear soon
            </option>
          </select>

          <select
            name="fundingPlan"
            className="border border-black rounded-lg px-4 py-2 w-full"
            value={formData.fundingPlan}
            onChange={handleChange}
            required
          >
            <option value="">How do you plan to fund your studies</option>
            <option value="I have my own funds">I have my own funds</option>
            <option value="I am looking for education loans">
              I am looking for education loans
            </option>
            <option value="My parents or siblings will fund my studies">
              My parents or siblings will fund my studies
            </option>
            <option value="I don't have Source of funds">
              I don't have Source of funds
            </option>
          </select>

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
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsultationModal;
