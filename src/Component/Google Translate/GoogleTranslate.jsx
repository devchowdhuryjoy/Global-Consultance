
// import React, { useEffect, useState, useRef } from "react";

// const GoogleTranslate = () => {
//   const [open, setOpen] = useState(false);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     if (!window.googleTranslateElementInit) {
//       window.googleTranslateElementInit = () => {
//         new window.google.translate.TranslateElement(
//           {
//             pageLanguage: "en",
//             layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
//             autoDisplay: false, // Prevent automatic display
//           },
//           "google_translate_element"
//         );

//         // Keep checking until the dropdown exists, then add listener
//         const interval = setInterval(() => {
//           const select = document.querySelector(".goog-te-combo");
//           if (select) {
//             select.addEventListener("change", () => {
//               setOpen(false); // Close dropdown after language selection
//             });
//             clearInterval(interval);
//           }
//         }, 300);
//       };

//       // Load Google Translate script with hl=en to set interface language to English
//       const script = document.createElement("script");
//       script.src =
//         "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit&hl=en";
//       script.async = true;
//       document.body.appendChild(script);
//     }
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (containerRef.current && !containerRef.current.contains(event.target)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <div className="relative inline-block" ref={containerRef}>
//       {/* Button */}
//       <button
//         onClick={() => setOpen((prev) => !prev)}
//         className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 shadow-sm 
//         ${open ? "bg-blue-50 border-blue-300" : "bg-white border-gray-300"} 
//         hover:shadow-md hover:border-blue-400`}
//         aria-haspopup="true"
//         aria-expanded={open}
//       >
//         {/* Globe Icon */}
//         <svg
//           className="w-5 h-5 text-[#4285F4]"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 2.06c1.8.3 3.4 1.06 4.66 2.12a8 8 0 00-7.66-.02A8.03 8.03 0 0113 4.06zM6.7 7.1A8 8 0 003.9 12H6c0-1.63.56-3.13 1.7-4.9zM6 14H3.9a8 8 0 002.8 4.9A8.15 8.15 0 016 14zm7 6.94c-1.8-.3-3.4-1.06-4.66-2.12A8 8 0 0016 19.94 8.05 8.05 0 0013 20.94zM18.3 16.9A8.03 8.03 0 0020.1 12H18c0 1.63-.56 3.13-1.7 4.9z" />
//         </svg>

//         <span className="text-sm font-medium text-gray-700 select-none">
//           Language
//         </span>

//         {/* Arrow */}
//         <svg
//           className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
//             open ? "rotate-180" : ""
//           }`}
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//         </svg>
//       </button>

//       {/* Dropdown */}
//       <div
//         id="google_translate_element"
//         className={`absolute top-full left-0 mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-lg transform transition-all duration-200 origin-top
//           ${open ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}
//         style={{
//           minHeight: "40px",
//           overflow: "visible",
//           zIndex: 9999,
//           padding: "6px",
//         }}
//       />
//     </div>
//   );
// };

// export default GoogleTranslate;


import React, { useState, useEffect, useRef } from "react";

const languages = [
  { code: "en", name: "English" },
  { code: "bn", name: "Bangla" },
  { code: "it", name: "Italian" },
  { code: "fr", name: "French" },
  { code: "hi", name: "Hindi" },
  { code: "ar", name: "Arabic" },
];

const GoogleTranslate = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("English");
  const containerRef = useRef(null);

  useEffect(() => {
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en", autoDisplay: false },
          "google_translate_element"
        );
      };
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit&hl=en";
      script.async = true;
      document.body.appendChild(script);
    }

    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (lang) => {
    setSelected(lang.name);
    setOpen(false);

    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = lang.code;

      
      select.dispatchEvent(new Event("change"));

      
      setTimeout(() => {
        select.dispatchEvent(new Event("change"));
      }, 100);
    }
  };

  return (
    <div className="relative inline-block" ref={containerRef}>
      {/* Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 shadow-sm 
                     bg-[#f16f22] hover:bg-[#252364] text-white"
      >
        <span>{selected}</span>
        <svg
          className={`w-4 h-4 text-white transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      <div
        className={`absolute top-full left-0 mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-lg transform transition-all duration-200 origin-top
                    ${open ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}
        style={{ zIndex: 9999 }}
      >
        {languages.map((lang) => (
          <div
            key={lang.code}
            className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
            onClick={() => handleSelect(lang)}
          >
            {lang.name}
          </div>
        ))}
      </div>

      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" style={{ display: "none" }} />
    </div>
  );
};

export default GoogleTranslate;













