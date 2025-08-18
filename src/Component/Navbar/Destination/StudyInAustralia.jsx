import React, { useState } from "react";
import SuccessStories from "../../SuccessStories/SuccessStories";
import MultipleCountryUniversityModal from "../../../Modal/MultipleCountryUniversityModal";

const data = {
  Sweden: [
    {
      name: "Karolinska Institute",
      details: "World-class medical university in Sweden.",
    },
    {
      name: "Lund University",
      details: "Known for strong research and international collaboration.",
    },
    {
      name: "McGill University",
      details:
        "A globally respected research university known for its high academic standards, located in a bilingual city with strong cultural heritage.",
    },
    {
      name: "University of Toronto (U of T)",
      details:
        "Canada's top-ranked university, globally recognized for research, innovation, and academic excellence. It has three campuses: St. George (downtown Toronto), Mississauga, and Scarborough.",
    },
    {
      name: "University of British Columbia (UBC)",
      details:
        "One of Canada's most prestigious universities, UBC is known for strong sustainability and environmental research, as well as a diverse international student population.",
    },
  ],
  Denmark: [
    {
      name: "University of Copenhagen",
      country: "Denmark",
      historicalPrestige: "Founded in 1479, it is Denmark’s oldest university and a major knowledge and culture-bearing institution, providing a framework for critical thinking, insights, and research-based education.",
      academicExcellence: "Consistently ranks as the top university in Denmark. QS ranking 101. Has 37,000 students and over 5,000 researchers.",
      nobelLegacy: "10 Nobel Prizes have been awarded to researchers at the University.",
      distance: "Located in Copenhagen (Capital)",
      preferredSubjects: "",
      tuitionFees: "Approximately €10,000–€16,000 per year"
    },
    {
      name: "Aarhus University",
      country: "Denmark",
      historicalPrestige: "Founded on September 11, 1928, it is Denmark’s second-oldest and second-largest university with strong national and international research contributions.",
      academicExcellence: "Renowned for high-quality research, strong international focus, research-based teaching, and English-taught programs.",
      nobelLegacy: "",
      distance: "192 km from Copenhagen",
      preferredSubjects: "",
      tuitionFees: "€8,000–€16,300 per year"
    },
    {
      name: "Technical University of Denmark (DTU)",
      country: "Denmark",
      historicalPrestige: "Founded in 1829 by Hans Christian Ørsted as Denmark's first polytechnic. Today a leading engineering institution in Europe.",
      academicExcellence: "Strong focus on engineering, technology, and innovation, close collaboration with industry and international research partners. QS ranking 107.",
      nobelLegacy: "",
      distance: "13.6 km from Copenhagen",
      preferredSubjects: "Engineering, Technology",
      tuitionFees: "Approximately €15,000 per year"
    },
    {
      name: "University of Southern Denmark (SDU)",
      country: "Denmark",
      historicalPrestige: "Known for excellent research forming the foundation for societally relevant education, with interdisciplinary collaboration across faculties.",
      academicExcellence: "Leading public university in Denmark, ranked #303 in QS World University Rankings 2025.",
      nobelLegacy: "",
      distance: "Odense, 161.1 km from Copenhagen",
      preferredSubjects: "",
      tuitionFees: "€6,000–€15,000 per year"
    },
    {
      name: "Roskilde University",
      country: "Denmark",
      historicalPrestige: "Founded in 1972, a Danish public university awarding bachelor's, master's, and PhD degrees.",
      academicExcellence: "Known for unique project-oriented education and emphasis on student involvement in knowledge creation.",
      nobelLegacy: "",
      distance: "Roskilde, 31.2 km from Copenhagen",
      preferredSubjects: "",
      tuitionFees: "€8,000–€14,000 per year"
    },
    {
      name: "Aalborg University",
      country: "Denmark",
      historicalPrestige: "Founded in 1974, an international public university with campuses in Aalborg, Esbjerg, and Copenhagen.",
      academicExcellence: "Focus on interdisciplinary, inter-faculty studies. QS ranking 306.",
      nobelLegacy: "",
      distance: "Odense, 306.9 km from Copenhagen",
      preferredSubjects: "",
      tuitionFees: "€7,000–€15,000 per year"
    },
    {
      name: "Copenhagen Business School (CBS)",
      country: "Denmark",
      historicalPrestige: "Established in 1917, integrated into Danish higher education in 1965.",
      academicExcellence: "Famous for business-related subjects. QS Business and Management Studies ranking 15th.",
      nobelLegacy: "",
      distance: "Very close to Copenhagen, 3 km",
      preferredSubjects: "Business, Management",
      tuitionFees: "€16,000 per year"
    },
    {
      name: "Niels Brock Copenhagen Business College",
      country: "Denmark",
      historicalPrestige: "Established in 1981, Denmark's oldest business college providing degrees in collaboration with De Montfort University, UK.",
      academicExcellence: "",
      nobelLegacy: "",
      distance: "Copenhagen (Capital)",
      preferredSubjects: "Business",
      tuitionFees: "Approximately €13,500 per year"
    },
    {
      name: "International Business Academy (IBA)",
      country: "Denmark",
      historicalPrestige: "Located in Kolding, offers AP, Bachelor, Master, and MBA-level programs in business, marketing, and finance.",
      academicExcellence: "Known for practical, applied business education with global perspective, English-taught programs, and industry connections.",
      nobelLegacy: "",
      distance: "Kolding, 232 km from Copenhagen",
      preferredSubjects: "Business, Marketing, Finance",
      tuitionFees: "€10,000–€13,000 per year"
    }
  ],

  Finland: [
    {
      name: "University of Helsinki",
      country: "Finland",
      historicalPrestige: "Founded in Turku in 1640 under the Swedish Empire, moved to Helsinki in 1828. Oldest and largest university in Finland with 11 faculties and 11 research institutes.",
      academicExcellence: "Ranked 116th in QS World University Rankings 2026. Offers a wide range of disciplines and strong research programs.",
      nobelLegacy: "",
      distance: "Located in Helsinki (Capital)",
      preferredSubjects: "",
      tuitionFees: "€13,000–€18,000 per year. Scholarships 0–100%"
    },
    {
      name: "Tampere University",
      country: "Finland",
      historicalPrestige: "Established January 1, 2019, as a merger of the former University of Tampere and Tampere University of Technology. Second largest university in Finland by student enrollment.",
      academicExcellence: "Ranked 423rd in QS World University Rankings. Known for technology, business, and health sciences.",
      nobelLegacy: "",
      distance: "178 km from Helsinki",
      preferredSubjects: "Technology, Business, Health Sciences",
      tuitionFees: "€10,000–€12,000 per year. Scholarships 0–100%"
    },
    {
      name: "LUT University",
      country: "Finland",
      historicalPrestige: "Lappeenranta-Lahti University of Technology LUT, established in 1969 as a Finnish public research university.",
      academicExcellence: "Ranked 397th in QS World University Rankings 2026. Overall score 4.6 stars based on student reviews.",
      nobelLegacy: "",
      distance: "223.2 km from Helsinki",
      preferredSubjects: "Engineering, Technology",
      tuitionFees: "€12,000–€15,000 per year. Scholarships 0–100%"
    },
    {
      name: "University of Vaasa",
      country: "Finland",
      historicalPrestige: "Multidisciplinary, business-oriented university in Vaasa, Finland.",
      academicExcellence: "Ranked between 401–500 in QS World University Rankings 2025.",
      nobelLegacy: "",
      distance: "424.4 km from Helsinki",
      preferredSubjects: "Business, Economics",
      tuitionFees: "€10,000–€14,000 per year"
    }
  ],

  Hungary: [
    {
      name: "Eötvös Loránd University (ELTE), Budapest",
      country: "Hungary",
      historicalPrestige:
        "Founded in 1635 by Cardinal Péter Pázmány, originally in Nagyszombat (now Trnava, Slovakia), before relocating to Buda and Pest over the centuries.",
      academicExcellence:
        "One of Hungary’s most prestigious public research universities, home to approximately 28,000 students across nine faculties.",
      nobelLegacy:
        "Connections to five Nobel laureates, including János Harsányi (Economic Sciences), György Békésy (Physiology/Medicine), György Hevesy (Chemistry), and Albert Szent-Györgyi (Physiology/Medicine).",
      distance: "0 km (located in the capital)",
      preferredSubjects: "Archaeology, Psychology, Linguistics",
      tuitionFees: "Approximately €4,000–€8,000 per year",
    },
    {
      name: "University of Szeged (SZTE), Szeged",
      country: "Hungary",
      historicalPrestige:
        "Origins date back to the Jesuit Academy of Kolozsvár in 1581; re-established in 1872 and moved to Szeged in 1921.",
      academicExcellence:
        "Celebrated as Hungary’s strongest university in QS rankings, with Nobel laureates like Albert Szent-Györgyi and Katalin Karikó among its alumni and faculty.",
      nobelLegacy:
        "Home to Nobel Prize winner Albert Szent-Györgyi and scientist Katalin Karikó, contributing greatly to research and medicine.",
      distance: "~162 km (101 miles) by air; driving ~174 km",
      preferredSubjects: "Medicine, Pharmacy, Chemistry",
      tuitionFees: "Around €3,500–€16,000 per year",
    },
    {
      name: "Semmelweis University, Budapest",
      country: "Hungary",
      historicalPrestige:
        "Established in 1769, Hungary’s oldest continuously operating medical school and a leading biomedical research center.",
      academicExcellence:
        "Ranked between 251–300 in THE World University Rankings 2025, with strong standings in medicine and life sciences.",
      nobelLegacy:
        "Internationally recognized for pioneering medical research and education.",
      distance: "0 km (spread across Budapest)",
      preferredSubjects: "Medicine, Pharmacy",
      tuitionFees: "Between USD 8,000–18,000 per year",
    },
    {
      name: "Budapest University of Technology and Economics (BME), Budapest",
      country: "Hungary",
      historicalPrestige:
        "Regarded as Hungary’s top institution for engineering and sciences.",
      academicExcellence:
        "Recognized for high-quality programs in engineering, mathematics, and architecture, often ranked top in the country.",
      nobelLegacy:
        "Contributed to advancements in engineering and applied sciences with global recognition.",
      distance: "0 km (in Budapest)",
      preferredSubjects: "Engineering, Mathematics, Architecture",
      tuitionFees: "non-EU: €4,400–€8,000 per year",
    },
    {
      name: "University of Pécs (PTE), Pécs",
      country: "Hungary",
      historicalPrestige:
        "One of Hungary’s oldest universities, with origins in the 1360s, notable for its medical faculty.",
      academicExcellence:
        "Known for its strong programs in medicine and international student community.",
      nobelLegacy:
        "Produced significant research in medicine and other disciplines.",
      distance: "~162–169 km (101–105 miles) air; driving ~209 km",
      preferredSubjects: "Medicine",
      tuitionFees: "non-EU: €4,500–€8,000 per year",
    },
    {
      name: "Corvinus University of Budapest",
      country: "Hungary",
      historicalPrestige:
        "Founded in 1920 as Hungary’s top institution for business, economics, and social sciences.",
      academicExcellence:
        "Known for rigorous academic programs, strong ties to industry, and international accreditations (EQUIS, AMBA).",
      nobelLegacy:
        "Acknowledged for producing influential economists and business leaders.",
      distance: "0 km (in Budapest)",
      preferredSubjects: "Business Administration, Economics, Social Sciences",
      tuitionFees: "non-EU: €5,000–€11,000 per year",
    },
    {
      name: "Pannonia University, Veszprém",
      country: "Hungary",
      historicalPrestige:
        "Renowned for interdisciplinary, practice-oriented education with a strong focus on sustainability, AI, and bio- and nanotechnology.",
      academicExcellence:
        "High research and development output, AACSB-accredited business programs, and partnerships with major companies.",
      nobelLegacy:
        "Recognized for innovative contributions to emerging technologies and applied sciences.",
      distance:
        "Main campus in Veszprém, approximately 110 km from Budapest; other campuses in Nagykanizsa, Kőszeg, Zalaegerszeg, and Ajka.",
      preferredSubjects: "Interdisciplinary studies, AI, Bio- and Nanotech",
      tuitionFees: "Varies by program",
    },
  ],

  Italy: [
    {
      name: "Sapienza University of Rome",
      country: "Italy",
      historicalPrestige:
        "Italy’s largest university, with ~140,000 students across eleven faculties in engineering, natural sciences, biomedical sciences, humanities, and more.",
      academicExcellence:
        "Central location, massive scale, strong research programs, notably in physics and humanities.",
      nobelLegacy: "",
      distance: "0 km (located within Rome)",
      preferredSubjects: "",
      tuitionFees: "Typically between €1,000–€2,500/year",
    },
    {
      name: "University of Bologna",
      country: "Italy",
      historicalPrestige:
        "Founded in 1088, the oldest university in continuous operation and one of Europe’s largest, with over 90,000 students.",
      academicExcellence:
        "Known as the ‘Alma Mater Studiorum’, with a groundbreaking role in medieval and Renaissance learning; strong academic reputation domestically and in humanities.",
      nobelLegacy: "",
      distance:
        "~352 km from Rome by road; about 2 hours 3 minutes by high-speed train",
      preferredSubjects: "",
      tuitionFees: "Approximately €1,000–€2,500/year",
    },
    {
      name: "University of Pisa",
      country: "Italy",
      historicalPrestige:
        "Dating to 1343, renowned public research university and part of the Pisa University System.",
      academicExcellence:
        "Strengths in computer science, physics, mathematics, and humanities; high global rankings in Computer Science, Physics & Astronomy, Mathematics, and Classics.",
      nobelLegacy: "",
      distance: "~331 km from Rome; around 2 hours 56 minutes by train",
      preferredSubjects: "",
      tuitionFees: "Around €1,000–€2,600/year",
    },
    {
      name: "University of Milan",
      country: "Italy",
      historicalPrestige:
        "Established in 1924, Milan’s largest public university (~60,000 students).",
      academicExcellence:
        "Top-ranked in medicine and highly regarded in humanities, law, and political science; QS ranks it #1 in Italy and #80 globally in medicine (2025).",
      nobelLegacy: "",
      distance: "~570 km from Rome; train travel takes ~3h 29m",
      preferredSubjects: "",
      tuitionFees: "Generally €1,000–€3,500/year",
    },
    {
      name: "Politecnico di Milano",
      country: "Italy",
      historicalPrestige:
        "Premier technical university founded in 1863, Italy’s largest in engineering, architecture, and design.",
      academicExcellence:
        "Deeply integrated with corporate research networks (IDEA League); top global rankings in engineering, design, architecture, and civil/structural engineering.",
      nobelLegacy:
        "Notable alumni include Nobel laureate Giulio Natta and Pritzker Prize-winning architects Renzo Piano and Aldo Rossi.",
      distance: "Approximately 573 km from Rome; ~6-hour drive",
      preferredSubjects:
        "Engineering disciplines (Mechanical, Civil, Aerospace, Computer, Industrial, Biomedical), Architecture, Design, Artificial Intelligence, Management Engineering",
      tuitionFees:
        "€3,900–€4,000/year for non-EU undergraduate & master's students",
    },
    {
      name: "University of Padua",
      country: "Italy",
      historicalPrestige:
        "Founded in 1222, the second-oldest university in Italy and among the oldest in the world; historic hub of Renaissance learning.",
      academicExcellence:
        "Ranked #1 in Italy by U.S. News, top 4 in ARWU and QS; strengths in Earth & Sea Sciences, Biological Sciences, Psychology, Medicine.",
      nobelLegacy:
        "Educated figures like Nicolaus Copernicus; excelled in Aristotelian science.",
      distance:
        "Around 499 km from Rome; ~5–6 hours drive or ~3.5 hours by high-speed train",
      preferredSubjects:
        "Biological Sciences, Computer Science, Engineering, Physics, Statistics, Environmental Sciences, Medicine, Psychology, Geology",
      tuitionFees: "Most bachelor's & master's programs: €423–€2,756/year",
    },
    {
      name: "University of Florence",
      country: "Italy",
      historicalPrestige:
        "Comprehensive public university with programs across humanities, arts, sciences, engineering, health, economics, and interdisciplinary studies.",
      academicExcellence:
        "Rich cultural heritage; notable alumni include Matteo Renzi and scientist Margherita Hack.",
      nobelLegacy: "",
      distance:
        "234 km as the crow flies; 279–295 km driving (~3 hours by car or train)",
      preferredSubjects:
        "History, Philosophy, Linguistics, Literature, Psychology, Social Sciences, Biology, Chemistry, Computer Science, Engineering, Environmental Science, Medicine, Business, Art History, Cultural Heritage",
      tuitionFees: "€156–€2,600/year based on ISEE (family income)",
    },
  ],

  France: [
  {
    name: "Paris Sciences & Lettres – PSL Research University (PSL)",
    country: "France",
    historicalPrestige: "",
    academicExcellence: "A collegiate university comprising 25+ prestigious institutions, known for excellence in humanities, sciences, economics, physics, biology, and research prestige",
    nobelLegacy: "",
    distance: "0 km (within the city)",
    preferredSubjects: "Physics, Chemistry, Economics, History, Biology",
    tuitionFees: "About €200–€400/year for public universities (approximate)"
  },
  {
    name: "Sorbonne University",
    country: "France",
    historicalPrestige: "",
    academicExcellence: "Legacy of the historic University of Paris—prestigious in humanities, social sciences, physics, biology, computer science",
    nobelLegacy: "",
    distance: "0 km (city center)",
    preferredSubjects: "Humanities, Social Sciences, Physics, Biology, Computer Science",
    tuitionFees: "Around €200–€400/year"
  },
  {
    name: "École Polytechnique",
    country: "France",
    historicalPrestige: "",
    academicExcellence: "Elite engineering grande école, highly selective; excellence in engineering, computer science, physics, economics, chemistry",
    nobelLegacy: "",
    distance: "0–10 km within greater Paris",
    preferredSubjects: "Engineering, Computer Science, Physics, Economics, Chemistry",
    tuitionFees: "Around €12,000/year"
  },
  {
    name: "Université Paris-Saclay",
    country: "France",
    historicalPrestige: "",
    academicExcellence: "STEM research power, cluster of top science and engineering schools (e.g., CentraleSupélec, ENS)",
    nobelLegacy: "",
    distance: "~20 km south of Paris",
    preferredSubjects: "Sciences, Engineering, Pharmacy, Chemistry, Physics",
    tuitionFees: "Approx. €170 (Bachelor), €243 (Master)"
  },
  {
    name: "Université Grenoble Alpes",
    country: "France",
    historicalPrestige: "",
    academicExcellence: "Large-scale research university in sciences, engineering, humanities, management; strong in technology, AI, micro-nano research",
    nobelLegacy: "",
    distance: "~457 km (air); driving ~587 km",
    preferredSubjects: "Sciences, Engineering, Computer Science, AI, Humanities, Medicine, Architecture, Social Sciences",
    tuitionFees: "€170 (Bachelor), €243 (Master)"
  },
  {
    name: "Université de Montpellier",
    country: "France",
    historicalPrestige: "",
    academicExcellence: "One of the world’s oldest (est. 1220); robust in research across disciplines and noted for excellence",
    nobelLegacy: "",
    distance: "~595 km (air) from Paris",
    preferredSubjects: "Sciences, Medicine, Humanities, Social Sciences",
    tuitionFees: "€170 (Bachelor), €243 (Master)"
  },
  {
    name: "Aix-Marseille Université",
    country: "France",
    historicalPrestige: "",
    academicExcellence: "Oldest Francophone institution (origins 1409), largest in France by student body and budget, notable alumni including Nobel laureates",
    nobelLegacy: "",
    distance: "~660 km from Paris",
    preferredSubjects: "Law, Political Science, Economics, Literature, Science, Management, Health, Technology",
    tuitionFees: "€170 (Bachelor), €243 (Master)"
  }
],


  Romania: [
    {
      name: "University of Bucharest",
      country: "Romania",
      historicalPrestige:
        "Established in 1864; one of Romania's oldest and most prestigious institutions, offering a wide range of programs in English.",
      academicExcellence: "",
      nobelLegacy: "",
      distance: "0 km (Located within Bucharest, the capital city)",
      preferredSubjects:
        "Physics, Philosophy, Political Science, Psychology, Biology",
      tuitionFees:
        "Approximately €2,000–€5,000 per year for international students",
    },
    {
      name: "Babeș-Bolyai University (UBB)",
      country: "Romania",
      historicalPrestige:
        "The largest university in Romania, offering courses in multiple languages and with high international student enrollment.",
      academicExcellence: "",
      nobelLegacy: "",
      distance: "Approximately 450 km from Bucharest",
      preferredSubjects:
        "Mathematics, Computer Science, International Relations, Linguistics",
      tuitionFees: "Around €2,000–€5,000 per year for international students",
    },
    {
      name: "Alexandru Ioan Cuza University (UAIC)",
      country: "Romania",
      historicalPrestige:
        "Founded in 1860; the oldest university in Romania, known for its research output and academic rigor.",
      academicExcellence: "",
      nobelLegacy: "",
      distance: "Approximately 400 km from Bucharest",
      preferredSubjects: "Law, Economics, History, Sociology",
      tuitionFees:
        "Approximately €2,000–€4,000 per year for international students",
    },
    {
      name: "Bucharest University of Economic Studies (ASE)",
      country: "Romania",
      historicalPrestige:
        "The leading institution in Romania for economics and business studies, with strong emphasis on research and international partnerships.",
      academicExcellence: "",
      nobelLegacy: "",
      distance: "0 km (Located within Bucharest, the capital city)",
      preferredSubjects:
        "Economics, Business Administration, Finance, Marketing",
      tuitionFees:
        "Approximately €2,000–€4,000 per year for international students",
    },
    {
      name: "Technical University of Cluj-Napoca (UTCN)",
      country: "Romania",
      historicalPrestige:
        "Renowned for its engineering programs and strong industry connections, providing students with practical skills and opportunities.",
      academicExcellence: "",
      nobelLegacy: "",
      distance: "Approximately 450 km from Bucharest",
      preferredSubjects: "Engineering, Computer Science, Architecture",
      tuitionFees:
        "Approximately €2,500–€4,500 per year for international students",
    },
  ],

  Austria: [
    {
      name: "University of Vienna",
      country: "Austria",
      historicalPrestige:
        "Established in 1365, the oldest university in the German-speaking world and one of Europe's largest.",
      academicExcellence:
        "Approximately 89,000 students, 17 Nobel laureates, strong reputation in humanities, sciences, and law.",
      nobelLegacy: "17 Nobel Prize winners associated with the institution.",
      distance: "0 km (located in Vienna)",
      preferredSubjects:
        "Humanities, Law, Natural Sciences, Social Sciences, Psychology",
      tuitionFees: "",
    },
    {
      name: "Vienna University of Technology (TU Wien)",
      country: "Austria",
      historicalPrestige:
        "Founded in 1815, one of Europe’s leading technical universities.",
      academicExcellence:
        "Strong programs in engineering, computer science, and natural sciences.",
      nobelLegacy: "",
      distance: "0 km (located in Vienna)",
      preferredSubjects: "Engineering, Technical Mathematics, Statistics",
      tuitionFees: "",
    },
    {
      name: "Johannes Kepler University Linz (JKU Linz)",
      country: "Austria",
      historicalPrestige:
        "Public university with a park-style campus and early adoption of electronic student ID.",
      academicExcellence:
        "Strong in business, engineering, law, science, social sciences, and medicine.",
      nobelLegacy: "",
      distance: "Straight-line ~155 km from Vienna; driving ~185 km",
      preferredSubjects: "Business, Law, Engineering, Science, Social Sciences",
      tuitionFees: "",
    },
    {
      name: "University of Graz",
      country: "Austria",
      historicalPrestige:
        "Founded in 1585, Austria’s second-oldest and second-largest university (~30,000 students).",
      academicExcellence:
        "Associated with multiple Nobel laureates; offers broad academic programs.",
      nobelLegacy: "Several Nobel Prize winners in sciences and humanities.",
      distance: "Air ~145 km from Vienna; driving ~196 km",
      preferredSubjects: "Arts, Social Sciences, Natural Sciences, Law",
      tuitionFees: "",
    },
    {
      name: "University of Klagenfurt (Alpen-Adria-Universität)",
      country: "Austria",
      historicalPrestige: "Founded in the 1970s, reestablished in 1993.",
      academicExcellence:
        "Excels in social ecology, autonomous systems, optimization, and cybersecurity; ranked globally.",
      nobelLegacy: "",
      distance: "Approximately 319 km from Vienna",
      preferredSubjects:
        "Arts, Humanities, Education, Management, Economics, Law, Social and Technical Sciences",
      tuitionFees: "",
    },
    {
      name: "University of Innsbruck",
      country: "Austria",
      historicalPrestige: "",
      academicExcellence:
        "Highly international, ranks around 309 globally, notable for mountain research.",
      nobelLegacy: "",
      distance: "Air ~387 km from Vienna; Driving ~477 km",
      preferredSubjects:
        "Natural Sciences, Environmental Studies, Mountain/Environmental Research",
      tuitionFees: "",
    },
    {
      name: "University of Salzburg (Paris Lodron University)",
      country: "Austria",
      historicalPrestige: "",
      academicExcellence:
        "Ranked among QS top 500; located in culturally rich, UNESCO-listed Salzburg.",
      nobelLegacy: "",
      distance: "~298 km from Vienna",
      preferredSubjects: "Arts, Humanities, Social Sciences, Law",
      tuitionFees: "",
    },
  ],
};

const StudyInAustralia = () => {
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedUniversities, setSelectedUniversities] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleCountryChange = (e) => {
    const country = e.target.value;
    const isChecked = e.target.checked;

    setSelectedCountries((prev) =>
      isChecked ? [...prev, country] : prev.filter((c) => c !== country)
    );

    setSelectedUniversities([]); // reset universities when countries change
  };

  const handleUniversityChange = (e) => {
    const universityName = e.target.value;
    const isChecked = e.target.checked;

    setSelectedUniversities((prev) =>
      isChecked
        ? [...prev, universityName]
        : prev.filter((name) => name !== universityName)
    );
  };

  // Create an array of universities with their country info for selected countries
  const universitiesWithCountry = selectedCountries.flatMap((country) =>
    data[country] ? data[country].map((uni) => ({ ...uni, country })) : []
  );

  const selectedUniversityDetails = universitiesWithCountry.filter((u) =>
    selectedUniversities.includes(u.name)
  );

  return (
    <>
      <div className="px-4 py-10 max-w-5xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#f16f22] mb-4">
          Study Abroad-(Europe)
        </h1>
        <p className="text-black mb-8">
          Select countries and explore top universities with their descriptions.
        </p>

        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-6">
          <div className="flex-1">
            <label className="block text-black font-medium mb-2">
              Select Countries
            </label>
            <div className="w-full border rounded px-4 py-2 max-h-60 overflow-y-auto focus:ring-2 focus:ring-[#f16f22]">
              {Object.keys(data).map((country) => (
                <div key={country} className="mb-2 last:mb-0">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      value={country}
                      checked={selectedCountries.includes(country)}
                      onChange={handleCountryChange}
                      className="text-[#f16f22] focus:ring-[#f16f22] rounded"
                    />
                    <span>{country}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <label className="block text-black font-medium mb-2">
              Select Universities
            </label>
            <div
              className={`w-full border rounded px-4 py-2 max-h-60 overflow-y-auto ${
                selectedCountries.length > 0
                  ? "focus:ring-[#f16f22]"
                  : "bg-gray-100 text-gray-400"
              } focus:outline-none focus:ring-2`}
            >
              {selectedCountries.length > 0 ? (
                universitiesWithCountry.map((uni) => (
                  <div
                    key={`${uni.country}-${uni.name}`}
                    className="mb-2 last:mb-0"
                  >
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        value={uni.name}
                        checked={selectedUniversities.includes(uni.name)}
                        onChange={handleUniversityChange}
                        className="text-[#f16f22] focus:ring-[#f16f22] rounded"
                      />
                      <span>
                        {uni.name}{" "}
                        <span className="text-sm text-gray-500">
                          ({uni.country})
                        </span>
                      </span>
                    </label>
                  </div>
                ))
              ) : (
                <div className="text-gray-400">
                  -- Select countries first --
                </div>
              )}
            </div>
          </div>
        </div>

        {/* {selectedUniversities.length > 0 && (
          <div className="space-y-4 mb-6">
            {selectedUniversityDetails.map((uni) => (
              <div
                key={`${uni.country}-${uni.name}`}
                className="bg-white shadow rounded p-6 border border-gray-100"
              >
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-semibold text-[#f16f22] mb-2">
                    {uni.name}
                  </h2>
                  <span className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-600">
                    {uni.country}
                  </span>
                </div>
                <p className="text-black-800">{uni.details}</p>
                
              </div>
            ))}

            

          </div>
        )} */}

        {selectedUniversities.length > 0 && (
          <div className="space-y-4 mb-6">
            {selectedUniversityDetails.map((uni) => (
              <div
                key={`${uni.country}-${uni.name}`}
                className="bg-white shadow rounded p-6 border border-gray-100"
              >
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-semibold text-[#f16f22] mb-2">
                    {uni.name}
                  </h2>
                  <span className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-600">
                    {uni.country}
                  </span>
                </div>

                {/* Image er moto design */}
                <ul className="space-y-3 text-black mb-4 text-justify break-words hyphens-auto">
                  <li>
                    <strong>Historical Prestige:</strong>{" "}
                    {uni.historicalPrestige}
                  </li>
                  <li>
                    <strong>Academic Excellence:</strong>{" "}
                    {uni.academicExcellence}
                  </li>
                  <li>
                    <strong>Nobel Legacy:</strong> {uni.nobelLegacy}
                  </li>
                </ul>

                <p className="mb-1 text-justify break-words hyphens-auto">
                  <strong>Distance:</strong> {uni.distance}
                </p>
                <p
                  className="mb-1">
                  <strong>Preferred Subjects:</strong> {uni.preferredSubjects}
                </p>
                <p className="mb-1 text-justify break-words hyphens-auto">
                  <strong>Tuition Fees:</strong> {uni.tuitionFees}
                </p>
              </div>
            ))}
          </div>
        )}

        {selectedUniversities.length > 0 && (
          <div className="w-full flex justify-start">
            <button
              onClick={handleOpenModal}
              className="bg-[#f16f22] hover:bg-[#252364] text-white font-medium py-2 px-4 text-sm rounded transition w-full sm:w-auto"
            >
              Apply Now ({selectedUniversities.length} selected)
            </button>
          </div>
        )}
      </div>

      <MultipleCountryUniversityModal
        show={showModal}
        onClose={handleCloseModal}
        selectedCountry={selectedCountries} // CHANGED: prop name matches modal
        selectedUniversities={selectedUniversities}
      />

      <SuccessStories />
    </>
  );
};

export default StudyInAustralia;
