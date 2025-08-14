// import React, { useState } from "react";
// import Swal from "sweetalert2";
// import BASE_URL from "../Api BaseUrl/BaseUrl"; // adjust if needed

// const ScholarshipModal = ({ show, onClose }) => {
//   if (!show) return null;

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     scholarshipCountry: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const payload = {
//         fullName: formData.fullName,
//         email: formData.email,
//         phone: formData.phone.startsWith("+880")
//           ? formData.phone
//           : "+880" + formData.phone,
//         scholarshipCountry: formData.scholarshipCountry,
//       };

//       const response = await fetch(`${BASE_URL}scholarship-register`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const data = await response.json();

//       if (!response.ok) throw new Error(data.message || "Submission failed");

//       Swal.fire({
//         title: "Success!",
//         text: data.message,
//         icon: "success",
//         confirmButtonColor: "#f16f22",
//       });

//       setFormData({
//         fullName: "",
//         email: "",
//         phone: "",
//         scholarshipCountry: "",
//       });

//       onClose();
//     } catch (error) {
//       Swal.fire({
//         title: "Error!",
//         text: error.message || "Something went wrong.",
//         icon: "error",
//         confirmButtonColor: "#f16f22",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-60 px-4">
//       <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-2xl relative overflow-y-auto max-h-[90vh]">
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl font-bold"
//         >
//           &times;
//         </button>
//         <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">
//           Scholarship Registration
//         </h3>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="fullName"
//             placeholder="Full Name"
//             className="border border-black rounded-lg px-4 py-2 w-full"
//             value={formData.fullName}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             className="border border-black rounded-lg px-4 py-2 w-full"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />

//           <div className="grid grid-cols-[80px_1fr] gap-2">
//             <input
//               type="text"
//               value="+880"
//               readOnly
//               className="border border-black rounded-lg px-4 py-2 w-full bg-gray-100"
//             />
//             <input
//               type="number"
//               name="phone"
//               placeholder="Mobile Number"
//               className="border border-black rounded-lg px-4 py-2 w-full"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <select
//             name="scholarshipCountry"
//             className="border border-black rounded-lg px-4 py-2 w-full"
//             value={formData.scholarshipCountry}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select Scholarship Country</option>
//             <option value="UK">UK</option>
//             <option value="USA">USA</option>
//             <option value="Canada">Canada</option>
//             <option value="Australia">Sweden</option>
//             <option value="Europe">Denmark</option>
//             <option value="Europe">Finland</option>
//             <option value="Europe">Hungary</option>
//             <option value="Europe">Italy</option>
//             <option value="Europe">France</option>
//             <option value="Europe">Dubai</option>
//             <option value="Europe">Malaysia</option>
//             <option value="Europe">Europe</option>
//           </select>

//           <div className="flex justify-center">
//             <button
//               type="submit"
//               disabled={loading}
//               className={`mt-4 bg-[#f16f22] hover:bg-[#252364] text-white font-semibold px-6 py-2 rounded-full transition duration-300 ${
//                 loading ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//             >
//               {loading ? "Submitting..." : "Submit"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ScholarshipModal;



import React, { useState } from "react";
import Swal from "sweetalert2";
import BASE_URL from "../Api BaseUrl/BaseUrl"; // adjust if needed

const ScholarshipModal = ({ show, onClose }) => {
  if (!show) return null;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    scholarshipCountry: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone.startsWith("+880")
          ? formData.phone
          : "+880" + formData.phone,
        scholarshipCountry: formData.scholarshipCountry,
      };

      const response = await fetch(`${BASE_URL}scholarship-register`, {
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
        fullName: "",
        email: "",
        phone: "",
        scholarshipCountry: "",
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
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-2xl relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl font-bold"
        >
          &times;
        </button>
        <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">
          Scholarship Registration
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="border border-black rounded-lg px-4 py-2 w-full"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

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
            name="scholarshipCountry"
            className="border border-black rounded-lg px-4 py-2 w-full"
            value={formData.scholarshipCountry}
            onChange={handleChange}
            required
          >
            <option value="">Select Scholarship Country</option>
            <option value="UK">UK</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="Sweden">Sweden</option>
            <option value="Denmark">Denmark</option>
            <option value="Finland">Finland</option>
            <option value="Hungary">Hungary</option>
            <option value="Italy">Italy</option>
            <option value="France">France</option>
            <option value="Dubai">Dubai</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Australia">Australia</option>
            <option value="Europe">Europe</option>
          </select>

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

export default ScholarshipModal;
