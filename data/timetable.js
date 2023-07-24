 const data = [
  {
    id: 0,
    code: "CEC510",
    name: "Term Project",
    department: "Civil Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "10:00-10:50",
        "CEPG2"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "CEPG2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEC510.pdf",
    credits: "0-0-2"
  },
  {
    id: 1,
    code: "CSO507",
    name: "Deep Learning",
    department: "Computer Science & Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "04:00-04:50",
        "CSE CR1"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "CSE CR1"
      ],
      [
        "Friday",
        "04:00-04:50",
        "CSE CR1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSO507.pdf",
    credits: "3-0-0"
  },
  {
    id: 2,
    code: "CSD516",
    name: "Optimization Techniques",
    department: "Computer Science & Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "CSE CR2"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "CSE CR2"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "CSE CR2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSD516.pdf",
    credits: "3-0-0"
  },
  {
    id: 3,
    code: "CEC509",
    name: "Advanced Testing Laboratory",
    department: "Civil Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "CEPG1"
      ],
      [
        "Monday",
        "11:00-11:50",
        "CEPG1"
      ],
      [
        "Monday",
        "12:00-12:50",
        "CEPG1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEC509.pdf",
    credits: "0-0-3"
  },
  {
    id: 4,
    code: "CED528",
    name: "Structural Dynamics",
    department: "Civil Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "CECR1"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "CECR1"
      ],
      [
        "Friday",
        "02:00-02:50",
        "CECR1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CED528.pdf",
    credits: "3-0-0"
  },
  {
    id: 5,
    code: "CSO501",
    name: "Principles of Artificial Intelligence",
    department: "Computer Science & Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "CSE CR1"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "CSE CR1"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "CSE CR1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSO501.pdf",
    credits: "3-0-0"
  },
  {
    id: 6,
    code: "CSD515",
    name: "Multimedia Systems and Security",
    department: "Computer Science & Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "CSE CR1"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "CSE CR1"
      ],
      [
        "Friday",
        "03:00-03:50",
        "CSE CR1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSD515.pdf",
    credits: "3-0-0"
  },
  {
    id: 7,
    code: "CED530",
    name: "Hydrogeology and Well Hydraulics",
    department: "Civil Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "LC-II-C1"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "LC-II-C1"
      ],
      [
        "Friday",
        "02:00-02:50",
        "LC-II-C1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CED530.pdf",
    credits: "3-0-0"
  },
  {
    id: 8,
    code: "CED529",
    name: "Advanced Foundation Engineering",
    department: "Civil Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "CECR2"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "CECR2"
      ],
      [
        "Friday",
        "02:00-02:50",
        "CECR2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CED529.pdf",
    credits: "3-0-0"
  },
  {
    id: 9,
    code: "CED532",
    name: "Slope and Retaining Structure",
    department: "Civil Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "CECR2"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "CECR2"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "CECR2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CED532.pdf",
    credits: "3-0-0"
  },
  {
    id: 10,
    code: "CED533",
    name: "Hydroclimatology",
    department: "Civil Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "CECR3"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "CECR3"
      ],
      [
        "Friday",
        "03:00-03:50",
        "CECR3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CED533.pdf",
    credits: "3-0-0"
  },
  {
    id: 11,
    code: "CED534",
    name: "Theory of Elastic Stability",
    department: "Civil Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "CECR1"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "CECR1"
      ],
      [
        "Friday",
        "03:00-03:50",
        "CECR1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CED534.pdf",
    credits: "3-0-0"
  },
  {
    id: 12,
    code: "CED535",
    name: "Soil Dynamics",
    department: "Civil Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "CECR2"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "CECR2"
      ],
      [
        "Friday",
        "03:00-03:50",
        "CECR2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CED535.pdf",
    credits: "3-0-0"
  },
  {
    id: 13,
    code: "CED542",
    name: "Prestressed Concrete Structures",
    department: "Civil Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "CECR1"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "CECR1"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "CECR1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CED542.pdf",
    credits: "3-0-0"
  },
  {
    id: 14,
    code: "ECC507",
    name: "Electronics Engineering - I Lab",
    department: "Electronics Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "Computer Simulation Lab (637)"
      ],
      [
        "Monday",
        "12:00-12:50",
        "Computer Simulation Lab (637)"
      ],
      [
        "Monday",
        "11:00-11:50",
        "Computer Simulation Lab (637)"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECC507.pdf",
    credits: "0-0-3"
  },
  {
    id: 15,
    code: "CEO531",
    name: "Railway Geotechnics",
    department: "Civil Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "04:00-04:50",
        "CECR3"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "CECR3"
      ],
      [
        "Friday",
        "04:00-04:50",
        "CECR3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEO531.pdf",
    credits: "3-0-0"
  },
  {
    id: 16,
    code: "ECC508",
    name: "Electronics Engineering - II Lab",
    department: "Electronics Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "12:00-12:50",
        "Digital Signal Processing Lab (216)"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "Digital Signal Processing Lab (216)"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "Digital Signal Processing Lab (216)"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECC508.pdf",
    credits: "0-0-3"
  },
  {
    id: 17,
    code: "CEO524",
    name: "Finite Element Method",
    department: "Civil Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "CECR3"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "CECR3"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "CECR3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEO524.pdf",
    credits: "3-0-0"
  },
  {
    id: 18,
    code: "ECD503",
    name: "Wireless Communication Systems",
    department: "Electronics Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "LC-II-C16"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "LC-II-C16"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "LC-II-C16"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECD503.pdf",
    credits: "3-0-0"
  },
  {
    id: 19,
    code: "ECD500",
    name: "Advanced Signal Processing",
    department: "Electronics Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "LC-I-C4"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "LC-I-C4"
      ],
      [
        "Friday",
        "03:00-03:50",
        "LC-I-C4"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECD500.pdf",
    credits: "3-0-0"
  },
  {
    id: 20,
    code: "ECD541",
    name: "Microwave Measurements",
    department: "Electronics Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "LC-I-C7"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "LC-I-C7"
      ],
      [
        "Friday",
        "02:00-02:50",
        "LC-I-C7"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECD541.pdf",
    credits: "3-0-0"
  },
  {
    id: 21,
    code: "ECD504",
    name: "Computer Communication Networks",
    department: "Electronics Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "LC-II-G13"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "LC-II-G13"
      ],
      [
        "Friday",
        "02:00-02:50",
        "LC-II-G13"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECD504.pdf",
    credits: "3-0-0"
  },
  {
    id: 22,
    code: "ECD520",
    name: "Optoelectronic and Photonics Devices",
    department: "Electronics Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "LC-I-C4"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "LC-I-C4"
      ],
      [
        "Friday",
        "02:00-02:50",
        "LC-I-C4"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECD520.pdf",
    credits: "3-0-0"
  },
  {
    id: 23,
    code: "ECD514",
    name: "Photonic Sensors",
    department: "Electronics Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "LC-I-C7"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "LC-I-C7"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "LC-I-C7"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECD514.pdf",
    credits: "3-0-0"
  },
  {
    id: 24,
    code: "ECD505",
    name: "CAD for VLSI",
    department: "Electronics Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "LC-II-C16"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "LC-II-C16"
      ],
      [
        "Friday",
        "03:00-03:50",
        "LC-II-C16"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECD505.pdf",
    credits: "3-0-0"
  },
  {
    id: 25,
    code: "ECD560",
    name: "Analog IC Design",
    department: "Electronics Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "LC-II-G13"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "LC-II-G13"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "LC-II-G13"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECD560.pdf",
    credits: "3-0-0"
  },
  {
    id: 26,
    code: "ECD531",
    name: "Photonic Integrated Circuits",
    department: "Electronics Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "LC-II-G13"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "LC-II-G13"
      ],
      [
        "Friday",
        "03:00-03:50",
        "LC-II-G13"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECD531.pdf",
    credits: "3-0-0"
  },
  {
    id: 27,
    code: "ECD569",
    name: "MOS Device Physics and Modelling",
    department: "Electronics Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "LC-II-C16"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "LC-II-C16"
      ],
      [
        "Friday",
        "02:00-02:50",
        "LC-II-C16"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECD569.pdf",
    credits: "3-0-0"
  },
  {
    id: 28,
    code: "ECD564",
    name: "On-Chip Interconnects",
    department: "Electronics Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "LC-I-C4"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "LC-I-C4"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "LC-I-C4"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECD564.pdf",
    credits: "3-0-0"
  },
  {
    id: 29,
    code: "ECO560",
    name: "Test and Verification of VLSI Circuits",
    department: "Electronics Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "04:00-04:50",
        "LC-II-C16"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "LC-II-C16"
      ],
      [
        "Friday",
        "04:00-04:50",
        "LC-II-C16"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECO560.pdf",
    credits: "3-0-0"
  },
  {
    id: 30,
    code: "ECO520",
    name: "Optical Networks",
    department: "Electronics Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "LC-II-C16"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "LC-II-C16"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "LC-II-C16"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECO520.pdf",
    credits: "3-0-0"
  },
  {
    id: 31,
    code: "EEO501",
    name: "Smart Grid Technology",
    department: "Electrical Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "LC-II-C2"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "LC-II-C2"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "LC-II-C2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEO501.pdf",
    credits: "3-0-0"
  },
  {
    id: 32,
    code: "EEC514",
    name: "Advanced Power System Protection Lab",
    department: "Electrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "10:00-10:50",
        "Prot. Lab"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "Prot. Lab"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "Prot. Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEC514.pdf",
    credits: "0-0-3"
  },
  {
    id: 33,
    code: "EEC513",
    name: "Advanced power System Simulation Lab",
    department: "Electrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "PS Lab"
      ],
      [
        "Monday",
        "10:00-10:50",
        "PS Lab"
      ],
      [
        "Monday",
        "11:00-11:50",
        "PS Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEC513.pdf",
    credits: "0-0-3"
  },
  {
    id: 34,
    code: "EEC508",
    name: "Power Electronic Converters",
    department: "Electrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "LC-II-C2"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "LC-II-C2"
      ],
      [
        "Friday",
        "02:00-02:50",
        "LC-II-C2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEC508.pdf",
    credits: "3-0-0"
  },
  {
    id: 35,
    code: "EEC501",
    name: "Power System Analysis",
    department: "Electrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "LC-II-C2"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "LC-II-C2"
      ],
      [
        "Friday",
        "03:00-03:50",
        "LC-II-C2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEC501.pdf",
    credits: "3-0-0"
  },
  {
    id: 36,
    code: "EED504",
    name: "Wireless Power Transfer",
    department: "Electrical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "LC-II-C2"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "LC-II-C2"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "LC-II-C2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EED504.pdf",
    credits: "3-0-0"
  },
  {
    id: 37,
    code: "EEO503",
    name: "Electric & Hybrid Electric Vehicles",
    department: "Electrical Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "04:00-04:50",
        "LC-II-C2"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "LC-II-C2"
      ],
      [
        "Friday",
        "04:00-04:50",
        "LC-II-C2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEO503.pdf",
    credits: "3-0-0"
  },
  {
    id: 38,
    code: "ESC506",
    name: "Environmental Laws and Impact Assessment",
    department: "Environmental Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "LC-II-C20"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "LC-II-C20"
      ],
      [
        "Friday",
        "02:00-02:50",
        "LC-II-C20"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESC506.pdf",
    credits: "3-0-0"
  },
  {
    id: 39,
    code: "ESC507",
    name: "Municipal Solid Waste Management",
    department: "Environmental Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "LC-II-C20"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "LC-II-C20"
      ],
      [
        "Friday",
        "03:00-03:50",
        "LC-II-C20"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESC507.pdf",
    credits: "3-0-0"
  },
  {
    id: 40,
    code: "ESC523",
    name: "Water and Wastewater Engineering Practical",
    department: "Environmental Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "Wastewater Lab"
      ],
      [
        "Monday",
        "10:00-10:50",
        "Wastewater Lab"
      ],
      [
        "Monday",
        "11:00-11:50",
        "Wastewater Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESC523.pdf",
    credits: "0-0-3"
  },
  {
    id: 41,
    code: "ESD503",
    name: "Environmental Modelling",
    department: "Environmental Science & Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "LC-II-C20"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "LC-II-C20"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "LC-II-C20"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESD503.pdf",
    credits: "3-0-0"
  },
  {
    id: 42,
    code: "ESC524",
    name: "Soil and Microbiology Practical",
    department: "Environmental Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "10:00-10:50",
        "Microbiology Lab"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "Microbiology Lab"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "Microbiology Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESC524.pdf",
    credits: "0-0-3"
  },
  {
    id: 43,
    code: "ESO501",
    name: "Environmental Management System and Auditing",
    department: "Environmental Science & Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "LC-II-C20"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "LC-II-C20"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "LC-II-C20"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESO501.pdf",
    credits: "3-0-0"
  },
  {
    id: 44,
    code: "FMD525",
    name: "Iron and Steel Making",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "FME-1"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "FME-1"
      ],
      [
        "Friday",
        "02:00-02:50",
        "FME-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMD525.pdf",
    credits: "3-0-0"
  },
  {
    id: 45,
    code: "FMC556",
    name: "Materials Characterization Laboratory",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "Monday"
      ],
      [
        "11:00-11:50",
        "Monday",
        "12:00-12:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMC556.pdf",
    credits: "0-0-3"
  },
  {
    id: 46,
    code: "FMC553",
    name: "Fuel Technology Laboratory",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "10:00-10:50",
        "Wednesday"
      ],
      [
        "11:00-11:50",
        null,
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMC553.pdf",
    credits: "0-0-2"
  },
  {
    id: 47,
    code: "ESO502",
    name: "Environmental Aspects of Industries",
    department: "Environmental Science & Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "04:00-04:50",
        "LC-II-C20"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "LC-II-C20"
      ],
      [
        "Friday",
        "04:00-04:50",
        "LC-II-C20"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESO502.pdf",
    credits: "3-0-0"
  },
  {
    id: 48,
    code: "FMO550",
    name: "Microwave Processing of Minerals and Fuels",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "FME-2"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "FME-2"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "FME-2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMO550.pdf",
    credits: "3-0-0"
  },
  {
    id: 49,
    code: "FMD533",
    name: "Energy Conservation Processes",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "FME-1"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "FME-1"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "FME-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMD533.pdf",
    credits: "3-0-0"
  },
  {
    id: 50,
    code: "HSC512",
    name: "Quantitative Techniques for Social Sciences",
    department: "Humanities and Social Science",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "HSS class room -1"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "HSS class room -1"
      ],
      [
        "Friday",
        "02:00-02:50",
        "HSS class room -1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSC512.pdf",
    credits: "3-0-0"
  },
  {
    id: 51,
    code: "HSO501",
    name: "Cognitive Psychology",
    department: "Humanities and Social Science",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "LC-II-G12"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "LC-II-G12"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "LC-II-G12"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSO501.pdf",
    credits: "3-0-0"
  },
  {
    id: 52,
    code: "FMD531",
    name: "Alternate Energy Systems",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "FME-1"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "FME-1"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "FME-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMD531.pdf",
    credits: "3-0-0"
  },
  {
    id: 53,
    code: "HSD539",
    name: "Introduction to Cognitive Linguistics",
    department: "Humanities and Social Science",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "LC-II-C4"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "LC-II-C4"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "LC-II-C4"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSD539.pdf",
    credits: "3-0-0"
  },
  {
    id: 54,
    code: "FMD540",
    name: "Size Enlargement Processes",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "FME-1"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "FME-1"
      ],
      [
        "Friday",
        "03:00-03:50",
        "FME-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMD540.pdf",
    credits: "3-0-0"
  },
  {
    id: 55,
    code: "HSO513",
    name: "Environment, Development and Politics",
    department: "Humanities and Social Science",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "NAC Hall"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "NAC Hall"
      ],
      [
        "Friday",
        "02:00-02:50",
        "NAC Hall"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSO513.pdf",
    credits: "3-0-0"
  },
  {
    id: 56,
    code: "MCC540",
    name: "Neural Networks and Deep Learning",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "LC-I-C18"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "LC-I-C18"
      ],
      [
        "Friday",
        "03:00-03:50",
        "LC-I-C18"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC540.pdf",
    credits: "3-0-0"
  },
  {
    id: 57,
    code: "MCC541",
    name: "Advanced DBMS Practical",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "PG Lab-1"
      ],
      [
        "Monday",
        "11:00-11:50",
        "PG Lab-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC541.pdf",
    credits: "0-0-2"
  },
  {
    id: 58,
    code: "MCC542",
    name: "Neural Networks and Deep Learning Practical",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "10:00-10:50",
        "PG Lab-1"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "PG Lab-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC542.pdf",
    credits: "0-0-2"
  },
  {
    id: 59,
    code: "MCC539",
    name: "Advanced DBMS",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "LC-I-C18"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "LC-I-C18"
      ],
      [
        "Friday",
        "02:00-02:50",
        "LC-I-C18"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC539.pdf",
    credits: "3-0-0"
  },
  {
    id: 60,
    code: "MCO531",
    name: "Stochastic Processes",
    department: "Mathematics and Computing",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "LC-I-C18"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "LC-I-C18"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "LC-I-C18"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCO531.pdf",
    credits: "3-0-0"
  },
  {
    id: 61,
    code: "MCD533",
    name: "Numerical Optimization",
    department: "Mathematics and Computing",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "LC-I-C18"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "LC-I-C18"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "LC-I-C18"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCD533.pdf",
    credits: "3-0-0"
  },
  {
    id: 62,
    code: "HSO506",
    name: "Indian Society and Culture",
    department: "Humanities and Social Science",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "NAC Hall"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "NAC Hall"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "NAC Hall"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSO506.pdf",
    credits: "3-0-0"
  },
  {
    id: 63,
    code: "HSD555",
    name: "Gender in Organization",
    department: "Humanities and Social Science",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "NAC Hall"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "NAC Hall"
      ],
      [
        "Friday",
        "03:00-03:50",
        "NAC Hall"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSD555.pdf",
    credits: "3-0-0"
  },
  {
    id: 64,
    code: "MNC508",
    name: "Geostatistics and Mine Valuation",
    department: "Mining Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "MIN-2"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "MIN-2"
      ],
      [
        "Friday",
        "02:00-02:50",
        "MIN-2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNC508.pdf",
    credits: "3-0-0"
  },
  {
    id: 65,
    code: "HSO508",
    name: "Digital Society",
    department: "Humanities and Social Science",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "LC-II-G11"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "LC-II-G11"
      ],
      [
        "Friday",
        "03:00-03:50",
        "LC-II-G11"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSO508.pdf",
    credits: "3-0-0"
  },
  {
    id: 66,
    code: "MND500",
    name: "Managerial Decision Making",
    department: "Mining Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "LC-II-C5"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "LC-II-C5"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "LC-II-C5"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MND500.pdf",
    credits: "3-0-0"
  },
  {
    id: 67,
    code: "MNC503",
    name: "Mine Planning and Design",
    department: "Mining Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "MIN-2"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "MIN-2"
      ],
      [
        "Friday",
        "03:00-03:50",
        "MIN-2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNC503.pdf",
    credits: "3-0-0"
  },
  {
    id: 68,
    code: "MNC506",
    name: "Computer Aided Mine Planning and Design Practical",
    department: "Mining Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "12:00-12:50",
        "CAMPAD Lab"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "CAMPAD Lab"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "CAMPAD Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNC506.pdf",
    credits: "0-0-3"
  },
  {
    id: 69,
    code: "HSD512",
    name: "Gender Studies",
    department: "Humanities and Social Science",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "LC-II-G9"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "LC-II-G9"
      ],
      [
        "Friday",
        "03:00-03:50",
        "LC-II-G9"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSD512.pdf",
    credits: "3-0-0"
  },
  {
    id: 70,
    code: "HSD507",
    name: "Introduction to Drama, Theatre and Performance Studies",
    department: "Humanities and Social Science",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "PET 1"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "PET 1"
      ],
      [
        "Friday",
        "02:00-02:50",
        "PET 1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSD507.pdf",
    credits: "3-0-0"
  },
  {
    id: 71,
    code: "MND501",
    name: "Mine Simulation and Data Analytics",
    department: "Mining Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "LC-II-C5"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "LC-II-C5"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "LC-II-C5"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MND501.pdf",
    credits: "3-0-0"
  },
  {
    id: 72,
    code: "MNC509",
    name: "Mine Simulation and Data analytics Practical",
    department: "Mining Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "CAMPAD Lab"
      ],
      [
        "Monday",
        "10:00-10:50",
        "CAMPAD Lab"
      ],
      [
        "Monday",
        "11:00-11:50",
        "CAMPAD Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNC509.pdf",
    credits: "0-0-3"
  },
  {
    id: 73,
    code: "MED509",
    name: "Advanced Thermodynamics",
    department: "Mechanical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "Mech G2"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "Mech G2"
      ],
      [
        "Friday",
        "02:00-02:50",
        "Mech G2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MED509.pdf",
    credits: "3-0-0"
  },
  {
    id: 74,
    code: "MNO501",
    name: "Mining, Energy and Climate Change",
    department: "Mining Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "PET 2"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "PET 2"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "PET 2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNO501.pdf",
    credits: "3-0-0"
  },
  {
    id: 75,
    code: "FMD541",
    name: "Processing Equipment Selection",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "04:00-04:50",
        "FME-1"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "FME-1"
      ],
      [
        "Friday",
        "04:00-04:50",
        "FME-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMD541.pdf",
    credits: "3-0-0"
  },
  {
    id: 76,
    code: "MNO510",
    name: "Rock Excavation Technology",
    department: "Mining Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "04:00-04:50",
        "MIN-2"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "MIN-2"
      ],
      [
        "Friday",
        "04:00-04:50",
        "MIN-2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNO510.pdf",
    credits: "3-0-0"
  },
  {
    id: 77,
    code: "MEC510",
    name: "Mechanical Engineering Lab - II",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "11:00-11:50",
        "Workshop"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "Workshop"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "Workshop"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEC510.pdf",
    credits: "0-0-3"
  },
  {
    id: 78,
    code: "MEC509",
    name: "Mechanical Engineering Lab - I",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "ThE lab"
      ],
      [
        "Monday",
        "11:00-11:50",
        "ThE lab"
      ],
      [
        "Monday",
        "12:00-12:50",
        "ThE lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEC509.pdf",
    credits: "0-0-3"
  },
  {
    id: 79,
    code: "MED542",
    name: "Finite Element Method in Thermal Engineering",
    department: "Mechanical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "Mech G2"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "Mech G2"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "Mech G2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MED542.pdf",
    credits: "3-0-0"
  },
  {
    id: 80,
    code: "MEO579",
    name: "Computational Fluid Dynamics",
    department: "Mechanical Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "04:00-04:50",
        "Mech G2"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "Mech G2"
      ],
      [
        "Friday",
        "04:00-04:50",
        "Mech G2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEO579.pdf",
    credits: "3-0-0"
  },
  {
    id: 81,
    code: "MED538",
    name: "Gas Dynamics",
    department: "Mechanical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "Mech G2"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "Mech G2"
      ],
      [
        "Friday",
        "03:00-03:50",
        "Mech G2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MED538.pdf",
    credits: "3-0-0"
  },
  {
    id: 82,
    code: "MSC515",
    name: "Software Lab",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "05:00-05:50",
        "MS 210"
      ],
      [
        "Tuesday",
        "06:00-06:50",
        "MS 210"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC515.pdf",
    credits: "0-0-2"
  },
  {
    id: 83,
    code: "MEO586",
    name: "Additive Manufacturing",
    department: "Mechanical Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "Mech G2"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "Mech G2"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "Mech G2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEO586.pdf",
    credits: "3-0-0"
  },
  {
    id: 84,
    code: "MED503",
    name: "Finite Element Method",
    department: "Mechanical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "04:00-04:50",
        "Mech G1"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "Mech G1"
      ],
      [
        "Friday",
        "04:00-04:50",
        "Mech G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MED503.pdf",
    credits: "3-0-0"
  },
  {
    id: 85,
    code: "MSC517",
    name: "Simulation Modelling & Analysis Lab",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "08:00-08:50",
        "MS 210"
      ],
      [
        "Thursday",
        "09:00-09:50",
        "MS 210"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC517.pdf",
    credits: "0-0-2"
  },
  {
    id: 86,
    code: "MED519",
    name: "Engineering Tribology",
    department: "Mechanical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "NAC Hall"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "NAC Hall"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "NAC Hall"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MED519.pdf",
    credits: "3-0-0"
  },
  {
    id: 87,
    code: "MSC520",
    name: "Quality Management",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "MS 010"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "MS 010"
      ],
      [
        "Friday",
        "03:00-03:50",
        "MS 010"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC520.pdf",
    credits: "3-0-0"
  },
  {
    id: 88,
    code: "MSC519",
    name: "Project Management",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "MS 210"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "MS 210"
      ],
      [
        "Friday",
        "02:00-02:50",
        "MS 210"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC519.pdf",
    credits: "3-0-0"
  },
  {
    id: 89,
    code: "MMC510",
    name: "Earth Moving Equipment Lab",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "MH- LAB"
      ],
      [
        "Monday",
        "11:00-11:50",
        "MH- LAB"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MMC510.pdf",
    credits: "0-0-2"
  },
  {
    id: 90,
    code: "MSC527",
    name: "Machine Learning",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "MS 209"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "MS 209"
      ],
      [
        "Friday",
        "06:00-06:50",
        "MS 209"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC527.pdf",
    credits: "3-0-0"
  },
  {
    id: 91,
    code: "MMC511",
    name: "Numerical Simulation Lab",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "10:00-10:50",
        "CAE LAB"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "CAE LAB"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MMC511.pdf",
    credits: "0-0-2"
  },
  {
    id: 92,
    code: "MMC509",
    name: "Maintenance Engineering",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "Mech G1"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "Mech G1"
      ],
      [
        "Friday",
        "03:00-03:50",
        "Mech G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MMC509.pdf",
    credits: "3-0-0"
  },
  {
    id: 93,
    code: "MMC508",
    name: "Mining Machinery Design",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "Mech G1"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "Mech G1"
      ],
      [
        "Friday",
        "02:00-02:50",
        "Mech G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MMC508.pdf",
    credits: "3-0-0"
  },
  {
    id: 94,
    code: "CHD503",
    name: "Catalysts & Materials Characterization Techniques",
    department: "Chemical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "05:00-05:50",
        "CHE-402"
      ],
      [
        "Wednesday",
        "05:00-05:50",
        "CHE-402"
      ],
      [
        "Friday",
        "05:00-05:50",
        "CHE-402"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHD503.pdf",
    credits: "3-0-0"
  },
  {
    id: 95,
    code: "CHD501",
    name: "Membrane Technology",
    department: "Chemical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "CHE-402"
      ],
      [
        "Tuesday",
        "06:00-06:50",
        "CHE-402"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "CHE-402"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHD501.pdf",
    credits: "3-0-0"
  },
  {
    id: 96,
    code: "CHD507",
    name: "Modelling & Simulation",
    department: "Chemical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "05:00-05:50",
        "CHE-434"
      ],
      [
        "Wednesday",
        "05:00-05:50",
        "CHE-434"
      ],
      [
        "Friday",
        "05:00-05:50",
        "CHE-434"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHD507.pdf",
    credits: "3-0-0"
  },
  {
    id: 97,
    code: "CHD505",
    name: "Interfacial and Colloidal Phenomena",
    department: "Chemical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "CHE-434"
      ],
      [
        "Tuesday",
        "06:00-06:50",
        "CHE-434"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "CHE-434"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHD505.pdf",
    credits: "3-0-0"
  },
  {
    id: 98,
    code: "PEC510",
    name: "Petroleum Instrumentation and Measurements Practical",
    department: "Petroleum Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "PE Instrumentation Laboratory"
      ],
      [
        "Monday",
        "11:00-11:50",
        "PE Instrumentation Laboratory"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEC510.pdf",
    credits: "0-0-2"
  },
  {
    id: 99,
    code: "PEC511",
    name: "Development of Working Models Practical",
    department: "Petroleum Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "10:00-10:50",
        "PET 4"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "PET 4"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEC511.pdf",
    credits: "0-0-2"
  },
  {
    id: 100,
    code: "PEO501",
    name: "Fluid Flow through Porous Media",
    department: "Petroleum Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "PET 4"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "PET 4"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "PET 4"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEO501.pdf",
    credits: "3-0-0"
  },
  {
    id: 101,
    code: "PED501",
    name: "Reservoir Simulation",
    department: "Petroleum Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "PET 3"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "PET 4"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "PET 4"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PED501.pdf",
    credits: "3-0-0"
  },
  {
    id: 102,
    code: "PEC509",
    name: "Advanced Drilling Technology",
    department: "Petroleum Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "PET 4"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "PET 4"
      ],
      [
        "Friday",
        "03:00-03:50",
        "PET 4"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEC509.pdf",
    credits: "3-0-0"
  },
  {
    id: 103,
    code: "GPD521",
    name: "Time Series Analysis in Geosciences",
    department: "Applied Geophysics",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "AGP Annexure Ground Floor"
      ],
      [
        "Tuesday",
        "06:00-06:50",
        "AGP Annexure Ground Floor"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "AGP Annexure Ground Floor"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPD521.pdf",
    credits: "3-0-0"
  },
  {
    id: 104,
    code: "GLD551",
    name: "Elements of Rock Engineering",
    department: "Applied Geology",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "AGL-2"
      ],
      [
        "Tuesday",
        "06:00-06:50",
        "AGL-2"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "AGL-2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLD551.pdf",
    credits: "3-0-0"
  },
  {
    id: 105,
    code: "GLD540",
    name: "Geomorphology",
    department: "Applied Geology",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "AGL-1"
      ],
      [
        "Tuesday",
        "06:00-06:50",
        "AGL-1"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "AGL-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLD540.pdf",
    credits: "3-0-0"
  },
  {
    id: 106,
    code: "MSD528",
    name: "Advanced Decision Modelling",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "MS 010"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "MS 010"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "MS 010"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSD528.pdf",
    credits: "3-0-0"
  },
  {
    id: 107,
    code: "PEC508",
    name: "Petroleum Geomechanics and Hydraulic Fracturing",
    department: "Petroleum Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "PET 4"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "PET 4"
      ],
      [
        "Friday",
        "02:00-02:50",
        "PET 4"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEC508.pdf",
    credits: "3-0-0"
  },
  {
    id: 108,
    code: "MSD526",
    name: "Supply Chain Management",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "MS 010"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "MS 010"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "MS 010"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSD526.pdf",
    credits: "3-0-0"
  },
  {
    id: 109,
    code: "CEO530",
    name: "Sustainable Engineering",
    department: "Civil Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "05:00-05:50",
        "CECR3"
      ],
      [
        "Wednesday",
        "05:00-05:50",
        "CECR3"
      ],
      [
        "Friday",
        "05:00-05:50",
        "CECR3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEO530.pdf",
    credits: "3-0-0"
  },
  {
    id: 110,
    code: "CYD507",
    name: "Bio-inorganic Chemistry",
    department: "Chemical and Chemical Biology",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "05:00-05:50",
        "Wednesday"
      ],
      [
        "05:00-05:50",
        "Friday",
        "05:00-05:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYD507.pdf",
    credits: "3-0-0"
  },
  {
    id: 111,
    code: "CEO529",
    name: "Blast Protection of Structures",
    department: "Civil Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "CECR1"
      ],
      [
        "Tuesday",
        "06:00-06:50",
        "CECR1"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "CECR1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEO529.pdf",
    credits: "3-0-0"
  },
  {
    id: 112,
    code: "ECD510",
    name: "Quantum Computation",
    department: "Electronics Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "LC-II-G13"
      ],
      [
        "Tuesday",
        "06:00-06:50",
        "LC-II-G13"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "LC-II-G13"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECD510.pdf",
    credits: "3-0-0"
  },
  {
    id: 113,
    code: "PEO503",
    name: "Unconventional Hydrocarbon Resources",
    department: "Petroleum Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "04:00-04:50",
        "PET 3"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "PET 3"
      ],
      [
        "Friday",
        "04:00-04:50",
        "PET 3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEO503.pdf",
    credits: "3-0-0"
  },
  {
    id: 114,
    code: "ECO501",
    name: "Internet of Things",
    department: "Electronics Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "05:00-05:50",
        "LC-II-G13"
      ],
      [
        "Wednesday",
        "05:00-05:50",
        "LC-II-G13"
      ],
      [
        "Friday",
        "05:00-05:50",
        "LC-II-G13"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECO501.pdf",
    credits: "3-0-0"
  },
  {
    id: 115,
    code: "CSO502",
    name: "Data Analytics",
    department: "Computer Science & Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "05:00-05:50",
        "NAC Hall"
      ],
      [
        "Wednesday",
        "05:00-05:50",
        "NAC Hall"
      ],
      [
        "Friday",
        "05:00-05:50",
        "NAC Hall"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSO502.pdf",
    credits: "3-0-0"
  },
  {
    id: 116,
    code: "CSD503",
    name: "Computational Number Theory",
    department: "Computer Science & Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "CSE CR1"
      ],
      [
        "Tuesday",
        "06:00-06:50",
        "CSE CR1"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "CSE CR1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSD503.pdf",
    credits: "3-0-0"
  },
  {
    id: 117,
    code: "CSD519",
    name: "Software Testing",
    department: "Computer Science & Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "LC-II-C19"
      ],
      [
        "Tuesday",
        "06:00-06:50",
        "LC-II-C19"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "LC-II-C19"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSD519.pdf",
    credits: "3-0-0"
  },
  {
    id: 118,
    code: "MCO533",
    name: "Numerical Linear Algebra",
    department: "Mathematics and Computing",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "05:00-05:50",
        "LC-I-C18"
      ],
      [
        "Wednesday",
        "05:00-05:50",
        "LC-I-C18"
      ],
      [
        "Friday",
        "05:00-05:50",
        "LC-I-C18"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCO533.pdf",
    credits: "3-0-0"
  },
  {
    id: 119,
    code: "EED502",
    name: "Advanced Machine Drives",
    department: "Electrical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "LC-II-C2"
      ],
      [
        "Tuesday",
        "06:00-06:50",
        "LC-II-C2"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "LC-II-C2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EED502.pdf",
    credits: "3-0-0"
  },
  {
    id: 120,
    code: "ESD506",
    name: "Biomedical and Hazardous Waste Management",
    department: "Environmental Science & Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "LC-II-C20"
      ],
      [
        "Tuesday",
        "06:00-06:50",
        "LC-II-C20"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "LC-II-C20"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESD506.pdf",
    credits: "3-0-0"
  },
  {
    id: 121,
    code: "CHC210",
    name: "Heat Transfer Lab",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "CHE 415"
      ],
      [
        "Monday",
        "05:00-05:50",
        "CHE 415"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "Thursday"
      ],
      [
        "05:00-05:50",
        null,
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC210.pdf",
    credits: "0-0-2"
  },
  {
    id: 122,
    code: "EED501",
    name: "Design of Power Converters",
    department: "Electrical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "05:00-05:50",
        "LC-II-C2"
      ],
      [
        "Wednesday",
        "05:00-05:50",
        "LC-II-C2"
      ],
      [
        "Friday",
        "05:00-05:50",
        "LC-II-C2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EED501.pdf",
    credits: "3-0-0"
  },
  {
    id: 123,
    code: "MND505",
    name: "Geospatial Technologies for Natural Resources",
    department: "Mining Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "05:00-05:50",
        "PG Lab-1 Geomatics"
      ],
      [
        "Wednesday",
        "05:00-05:50",
        "PG Lab-1 Geomatics"
      ],
      [
        "Friday",
        "05:00-05:50",
        "PG Lab-1 Geomatics"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MND505.pdf",
    credits: "3-0-0"
  },
  {
    id: 124,
    code: "ESO505",
    name: "Climate Change and Modelling",
    department: "Environmental Science & Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "05:00-05:50",
        "LC-II-C20"
      ],
      [
        "Wednesday",
        "05:00-05:50",
        "LC-II-C20"
      ],
      [
        "Friday",
        "05:00-05:50",
        "LC-II-C20"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESO505.pdf",
    credits: "3-0-0"
  },
  {
    id: 125,
    code: "MND504",
    name: "Modelling and Analysis of Geospatial data",
    department: "Mining Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "PG Lab-1 Geomatics"
      ],
      [
        "Tuesday",
        "06:00-06:50",
        "PG Lab-1 Geomatics"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "PG Lab-1 Geomatics"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MND504.pdf",
    credits: "3-0-0"
  },
  {
    id: 126,
    code: "MND511",
    name: "Modern Blasting Technology in Mining",
    department: "Mining Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "MIN-2"
      ],
      [
        "Tuesday",
        "06:00-06:50",
        "MIN-2"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "MIN-2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MND511.pdf",
    credits: "3-0-0"
  },
  {
    id: 127,
    code: "CHC209",
    name: "Process Dynamics and Control",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "LC-II-C9"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "LC-II-C9"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "LC-II-C9"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC209.pdf",
    credits: "3-0-0"
  },
  {
    id: 128,
    code: "HSO510",
    name: "Judgement and Decision Making",
    department: "Humanities and Social Science",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "05:00-05:50",
        "LC-II-G10"
      ],
      [
        "Wednesday",
        "05:00-05:50",
        "LC-II-G10"
      ],
      [
        "Friday",
        "05:00-05:50",
        "LC-II-G10"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSO510.pdf",
    credits: "3-0-0"
  },
  {
    id: 129,
    code: "MMC211",
    name: "Manufacturing Technology and Soft Computing Lab",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "04:00-04:50",
        "Workshop"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "Workshop"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MMC211.pdf",
    credits: "0-0-2"
  },
  {
    id: 130,
    code: "CHC207",
    name: "Principles of Mass Transfer",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-II-C9"
      ],
      [
        "Tuesday",
        "08:00-08:50",
        "LC-II-C9"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-C9"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-II-C9"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC207.pdf",
    credits: "3-1-0"
  },
  {
    id: 131,
    code: "PHD503",
    name: "High Energy Physics",
    department: "Physics",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "11:00-11:50",
        "LC-II-C5"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "LC-II-C5"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-II-C5"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHD503.pdf",
    credits: "3-0-0"
  },
  {
    id: 132,
    code: "GLC514",
    name: "Igneous and Metamorphic Petrology Practical",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "Petrology Lab"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "Petrology Lab"
      ],
      [
        "Tuesday",
        "12:00-12:50",
        "Petrology Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC514.pdf",
    credits: "0-0-3"
  },
  {
    id: 133,
    code: "FMO546",
    name: "Mechanochemistry in Nanoscience and Materials Engineering",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "FME-1"
      ],
      [
        "Tuesday",
        "06:00-06:50",
        "FME-1"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "FME-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMO546.pdf",
    credits: "3-0-0"
  },
  {
    id: 134,
    code: "PHD506",
    name: "Characterization Techniques",
    department: "Physics",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "LC-II-C5"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-II-C5"
      ],
      [
        "Friday",
        "12:00-12:50",
        "LC-II-C5"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHD506.pdf",
    credits: "3-0-0"
  },
  {
    id: 135,
    code: "MED546",
    name: "Conduction and Radiation",
    department: "Mechanical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "Mech G2"
      ],
      [
        "Tuesday",
        "06:00-06:50",
        "Mech G2"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "Mech G2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MED546.pdf",
    credits: "3-0-0"
  },
  {
    id: 136,
    code: "MED515",
    name: "Theory of Metal Forming",
    department: "Mechanical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "NAC Hall"
      ],
      [
        "Tuesday",
        "06:00-06:50",
        "NAC Hall"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "NAC Hall"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MED515.pdf",
    credits: "3-0-0"
  },
  {
    id: 137,
    code: "CSC209",
    name: "Operating Systems",
    department: "Computer Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "LC-II-G14"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "LC-II-G14"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "LC-II-G14"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSC209.pdf",
    credits: "3-0-0"
  },
  {
    id: 138,
    code: "MND547",
    name: "Mine Automation",
    department: "Mining Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "05:00-05:50",
        "MIN-2"
      ],
      [
        "Wednesday",
        "05:00-05:50",
        "MIN-2"
      ],
      [
        "Friday",
        "05:00-05:50",
        "MIN-2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MND547.pdf",
    credits: "3-0-0"
  },
  {
    id: 139,
    code: "HSO503",
    name: "Technology, Culture and Society",
    department: "Humanities and Social Science",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "05:00-05:50",
        "LC-II-G15"
      ],
      [
        "Wednesday",
        "05:00-05:50",
        "LC-II-G15"
      ],
      [
        "Friday",
        "05:00-05:50",
        "LC-II-G15"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSO503.pdf",
    credits: "3-0-0"
  },
  {
    id: 140,
    code: "CHC206",
    name: "Chemical Engineering Thermodynamics",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "LC-II-C9"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "LC-II-C9"
      ],
      [
        "Friday",
        "09:00-09:50",
        "LC-II-C9"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC206.pdf",
    credits: "3-0-0"
  },
  {
    id: 141,
    code: "ESC254",
    name: "Soil  and Environmental Microbiology Practical",
    department: "Environmental Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "04:00-04:50",
        "Microbiology Lab"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "Microbiology Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESC254.pdf",
    credits: "0-0-2"
  },
  {
    id: 142,
    code: "FMO541",
    name: "Characterization of Materials",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "05:00-05:50",
        "FME-2"
      ],
      [
        "Wednesday",
        "05:00-05:50",
        "FME-2"
      ],
      [
        "Friday",
        "05:00-05:50",
        "FME-2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMO541.pdf",
    credits: "3-0-0"
  },
  {
    id: 143,
    code: "MEO581",
    name: "Fundamentals of Combustion",
    department: "Mechanical Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "05:00-05:50",
        "Mech G1"
      ],
      [
        "Wednesday",
        "05:00-05:50",
        "Mech G1"
      ],
      [
        "Friday",
        "05:00-05:50",
        "Mech G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEO581.pdf",
    credits: "3-0-0"
  },
  {
    id: 144,
    code: "MSD505",
    name: "Materials Management",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "MS 111"
      ],
      [
        "Tuesday",
        "06:00-06:50",
        "MS 111"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "MS 111"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSD505.pdf",
    credits: "3-0-0"
  },
  {
    id: 145,
    code: "HSD525",
    name: "Advance Course in Applied Ethics",
    department: "Humanities and Social Science",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "05:00-05:50",
        "LC-II-G14"
      ],
      [
        "Wednesday",
        "05:00-05:50",
        "LC-II-G14"
      ],
      [
        "Friday",
        "05:00-05:50",
        "LC-II-G14"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSD525.pdf",
    credits: "3-0-0"
  },
  {
    id: 146,
    code: "PED504",
    name: "Profile Modification & Water Shutoff",
    department: "Petroleum Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "05:00-05:50",
        "PET 4"
      ],
      [
        "Wednesday",
        "05:00-05:50",
        "PET 4"
      ],
      [
        "Friday",
        "05:00-05:50",
        "PET 4"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PED504.pdf",
    credits: "3-0-0"
  },
  {
    id: 147,
    code: "MEO534",
    name: "Automation and Control",
    department: "Mechanical Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "05:00-05:50",
        "Mech G2"
      ],
      [
        "Wednesday",
        "05:00-05:50",
        "Mech G2"
      ],
      [
        "Friday",
        "05:00-05:50",
        "Mech G2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEO534.pdf",
    credits: "3-0-0"
  },
  {
    id: 148,
    code: "GLC513",
    name: "Coal Geology",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "AGL-3"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "AGL-3"
      ],
      [
        "Friday",
        "03:00-03:50",
        "AGL-3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC513.pdf",
    credits: "3-0-0"
  },
  {
    id: 149,
    code: "GLC509",
    name: "Igneous Petrology",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "AGL-3"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "AGL-3"
      ],
      [
        "Friday",
        "02:00-02:50",
        "AGL-3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC509.pdf",
    credits: "3-0-0"
  },
  {
    id: 150,
    code: "GLC511",
    name: "Applied Sedimentology",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "LC-II-C11"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "LC-II-C11"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "LC-II-C11"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC511.pdf",
    credits: "3-0-0"
  },
  {
    id: 151,
    code: "HSI500",
    name: "Research and Technical Communication",
    department: "Humanities and Social Science",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "Wednesday"
      ],
      [
        "09:00-09:50",
        "Friday",
        "09:00-09:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSI500.pdf",
    credits: "3-0-0"
  },
  {
    id: 151,
    code: "HSI500",
    name: "Research and Technical Communication",
    department: "Humanities and Social Science",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "Wednesday"
      ],
      [
        "09:00-09:50",
        "Friday",
        "09:00-09:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSI500.pdf",
    credits: "3-0-0"
  },
  {
    id: 153,
    code: "CHC211",
    name: "Process Control Lab",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "CHE 426"
      ],
      [
        "Monday",
        "05:00-05:50",
        "CHE 426"
      ],
      [
        "Monday",
        "06:00-06:50",
        "CHE 426"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "Thursday"
      ],
      [
        "05:00-05:50",
        "Thursday",
        "06:00-06:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC211.pdf",
    credits: "0-0-3"
  },
  {
    id: 154,
    code: "CSC210",
    name: "Algorithm Design & Analysis Lab",
    department: "Computer Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "NLHC Computer Lab - I"
      ],
      [
        "Monday",
        "05:00-05:50",
        "NLHC Computer Lab - I"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSC210.pdf",
    credits: "0-0-2"
  },
  {
    id: 155,
    code: "CSC206",
    name: "Algorithm Design & Analysis",
    department: "Computer Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "LC-II-G14"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "LC-II-G14"
      ],
      [
        "Friday",
        "09:00-09:50",
        "LC-II-G14"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSC206.pdf",
    credits: "3-0-0"
  },
  {
    id: 156,
    code: "CSC211",
    name: "Operating Systems Lab",
    department: "Computer Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "04:00-04:50",
        "NLHC Computer Lab - I"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "NLHC Computer Lab - I"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSC211.pdf",
    credits: "0-0-2"
  },
  {
    id: 157,
    code: "GPC513",
    name: "Geoelectrical Methods Practical",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "12:00-12:50",
        "516"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "516"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC513.pdf",
    credits: "0-0-2"
  },
  {
    id: 158,
    code: "CHC208",
    name: "Chemical Process Technology",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "LC-II-C9"
      ],
      [
        "Tuesday",
        "09:00-09:50",
        "LC-II-C9"
      ],
      [
        "Thursday",
        "09:00-09:50",
        "LC-II-C9"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC208.pdf",
    credits: "3-0-0"
  },
  {
    id: 132,
    code: "GLC514",
    name: "Igneous and Metamorphic Petrology Practical",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "Petrology Lab"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "Petrology Lab"
      ],
      [
        "Tuesday",
        "12:00-12:50",
        "Petrology Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC514.pdf",
    credits: "0-0-3"
  },
  {
    id: 160,
    code: "EEC273",
    name: "Control and Measurement lab",
    department: "Electrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "CS Lab"
      ],
      [
        "Monday",
        "05:00-05:50",
        "CS Lab"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "Thursday"
      ],
      [
        "05:00-05:50",
        null,
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEC273.pdf",
    credits: "0-0-2"
  },
  {
    id: 161,
    code: "CSC208",
    name: "Theory of Computation",
    department: "Computer Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "LC-II-G14"
      ],
      [
        "Tuesday",
        "09:00-09:50",
        "LC-II-G14"
      ],
      [
        "Thursday",
        "09:00-09:50",
        "LC-II-G14"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSC208.pdf",
    credits: "3-0-0"
  },
  {
    id: 162,
    code: "CHE202",
    name: "Transport Phenomena",
    department: "Chemical Engineering",
    type: "Engineering Science Option (ESO)",
    timetable: [
      [
        "Monday",
        "08:00-08:50",
        "LC-II-C9"
      ],
      [
        "Wednesday",
        "08:00-08:50",
        "LC-II-C9"
      ],
      [
        "Friday",
        "08:00-08:50",
        "LC-II-C9"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHE202.pdf",
    credits: "3-0-0"
  },
  {
    id: 163,
    code: "CSC207",
    name: "Computer Architecture",
    department: "Computer Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-II-G14"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-G14"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-II-G14"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSC207.pdf",
    credits: "3-0-0"
  },
  {
    id: 164,
    code: "GLC515",
    name: "Sedimentology and Petroleum Geology Practical",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Friday",
        "10:00-10:50",
        "AGL-3"
      ],
      [
        "Friday",
        "11:00-11:50",
        "AGL-3"
      ],
      [
        "Friday",
        "12:00-12:50",
        "AGL-3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC515.pdf",
    credits: "0-0-3"
  },
  {
    id: 165,
    code: "GPE201",
    name: "Earth and Planetary System",
    department: "Applied Geophysics",
    type: "Engineering Science Option (ESO)",
    timetable: [
      [
        "Monday",
        "08:00-08:50",
        "LC-II-C12"
      ],
      [
        "Wednesday",
        "08:00-08:50",
        "LC-II-C12"
      ],
      [
        "Friday",
        "08:00-08:50",
        "LC-II-C12"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPE201.pdf",
    credits: "3-0-0"
  },
  {
    id: 166,
    code: "GLC512",
    name: "Petroleum Geology",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "PET 2"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "PET 2"
      ],
      [
        "Friday",
        "04:00-04:50",
        "PET 2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC512.pdf",
    credits: "3-0-0"
  },
  {
    id: 167,
    code: "PHD400",
    name: "Photonics & Optoelectronics",
    department: "Physics",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "LC-II-C15"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-II-C15"
      ],
      [
        "Friday",
        "12:00-12:50",
        "LC-II-C15"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHD400.pdf",
    credits: "3-0-0"
  },
  {
    id: 168,
    code: "MNC504",
    name: "Risk and Workplace Safety Management",
    department: "Mining Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "MIN-1"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "MIN-1"
      ],
      [
        "Friday",
        "11:00-11:50",
        "MIN-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNC504.pdf",
    credits: "3-0-0"
  },
  {
    id: 169,
    code: "EEC274",
    name: "Electrical Machines and Power lab",
    department: "Electrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "El MC Lab"
      ],
      [
        "Monday",
        "05:00-05:50",
        "El MC Lab"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "Thursday"
      ],
      [
        "04:00-04:50",
        null,
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEC274.pdf",
    credits: "0-0-2"
  },
  {
    id: 170,
    code: "MEC507",
    name: "Incompressible and Compressible Flow",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "MECH-G2"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "MECH-G2"
      ],
      [
        "Friday",
        "10:00-10:50",
        "MECH-G2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEC507.pdf",
    credits: "3-0-0"
  },
  {
    id: 171,
    code: "CSE202",
    name: "Object Oriented Programming",
    department: "Computer Science & Engineering",
    type: "Engineering Science Option (ESO)",
    timetable: [
      [
        "Monday",
        "08:00-08:50",
        "LC-II-G1"
      ],
      [
        "Wednesday",
        "08:00-08:50",
        "LC-II-G1"
      ],
      [
        "Friday",
        "08:00-08:50",
        "LC-II-G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSE202.pdf",
    credits: "3-0-0"
  },
  {
    id: 172,
    code: "HSO301",
    name: "Ethical Issues in Sceince",
    department: "Humanities and Social Science",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "LC-II-G10"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "LC-II-G10"
      ],
      [
        "Friday",
        "03:00-03:50",
        "LC-II-G10"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSO301.pdf",
    credits: "3-0-0"
  },
  {
    id: 173,
    code: "ESC206",
    name: "Environmental Policy and Legislation",
    department: "Environmental Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "LC-II-C20"
      ],
      [
        "Tuesday",
        "09:00-09:50",
        "LC-II-C20"
      ],
      [
        "Thursday",
        "09:00-09:50",
        "LC-II-C20"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESC206.pdf",
    credits: "3-0-0"
  },
  {
    id: 174,
    code: "PHO502",
    name: "Nonlinear Optics",
    department: "Physics",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "08:00-08:50",
        "MS 010"
      ],
      [
        "Thursday",
        "08:00-08:50",
        "MS 010"
      ],
      [
        "Friday",
        "09:00-09:50",
        "MS 010"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHO502.pdf",
    credits: "3-0-0"
  },
  {
    id: 175,
    code: "PHO503",
    name: "Physics of Nanomaterials",
    department: "Physics",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "08:00-08:50",
        "MS 010"
      ],
      [
        "Wednesday",
        "08:00-08:50",
        "MS 010"
      ],
      [
        "Friday",
        "08:00-08:50",
        "MS 010"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHO503.pdf",
    credits: "3-0-0"
  },
  {
    id: 176,
    code: "HSC503",
    name: "Seminar",
    department: "Humanities and Social Science",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "Wednesday"
      ],
      [
        "04:00-04:50",
        "Friday",
        "04:00-04:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSC503.pdf",
    credits: "0-0-3"
  },
  {
    id: 177,
    code: "GPC522",
    name: "Magnetic Method Practical",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "AGP Annexure 1st Floor"
      ],
      [
        "Monday",
        "02:00-02:50",
        "AGP Annexure 1st Floor"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC522.pdf",
    credits: "0-0-2"
  },
  {
    id: 178,
    code: "GPC208",
    name: "Radiometric Method Practical",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "Annexe 102"
      ],
      [
        "Monday",
        "05:00-05:50",
        "Annexe 102"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC208.pdf",
    credits: "0-0-2"
  },
  {
    id: 179,
    code: "ESC253",
    name: "Geology  Practical",
    department: "Environmental Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "Water Chemistry Lab"
      ],
      [
        "Monday",
        "05:00-05:50",
        "Water Chemistry Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESC253.pdf",
    credits: "0-0-2"
  },
  {
    id: 180,
    code: "CEC207",
    name: "Design of Concrete Structures",
    department: "Civil Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-II-C2"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-C2"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-II-C2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEC207.pdf",
    credits: "3-0-0"
  },
  {
    id: 181,
    code: "ESC205",
    name: "Introduction Ecology and Environmental Microbiology",
    department: "Environmental Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-II-C20"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-C20"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-II-C20"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESC205.pdf",
    credits: "3-0-0"
  },
  {
    id: 182,
    code: "CEC206",
    name: "Structural Analysis - I",
    department: "Civil Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "LC-II-C2"
      ],
      [
        "Tuesday",
        "08:00-08:50",
        "LC-II-C2"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "LC-II-C2"
      ],
      [
        "Friday",
        "09:00-09:50",
        "LC-II-C2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEC206.pdf",
    credits: "3-1-0"
  },
  {
    id: 183,
    code: "CEC209",
    name: "Transportation Engineering",
    department: "Civil Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "LC-II-C2"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "LC-II-C2"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "LC-II-C2"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-II-C2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEC209.pdf",
    credits: "3-1-0"
  },
  {
    id: 184,
    code: "CEC210",
    name: "Surveying Laboratory",
    department: "Civil Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "CEUG1"
      ],
      [
        "Monday",
        "05:00-05:50",
        "CEUG1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEC210.pdf",
    credits: "0-0-2"
  },
  {
    id: 185,
    code: "ECC206",
    name: "Analog Circuits",
    department: "Electronics Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "LC-II-G2"
      ],
      [
        "Tuesday",
        "08:00-08:50",
        "LC-II-G2"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "LC-II-G2"
      ],
      [
        "Friday",
        "09:00-09:50",
        "LC-II-G2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECC206.pdf",
    credits: "3-1-0"
  },
  {
    id: 186,
    code: "MSD525",
    name: "Operations Analytics",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "05:00-05:50",
        "MS 209"
      ],
      [
        "Wednesday",
        "05:00-05:50",
        "MS 209"
      ],
      [
        "Friday",
        "05:00-05:50",
        "MS 209"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSD525.pdf",
    credits: "3-0-0"
  },
  {
    id: 187,
    code: "ESE202",
    name: "Atmospheric  Science and Climate Change",
    department: "Environmental Science & Engineering",
    type: "Engineering Science Option (ESO)",
    timetable: [
      [
        "Monday",
        "08:00-08:50",
        "LC-II-C20"
      ],
      [
        "Wednesday",
        "08:00-08:50",
        "LC-II-C20"
      ],
      [
        "Friday",
        "08:00-08:50",
        "LC-II-C20"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESE202.pdf",
    credits: "3-0-0"
  },
  {
    id: 188,
    code: "EEC204",
    name: "Electrical Machines - I",
    department: "Electrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "LC-II-G16"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "LC-II-G16"
      ],
      [
        "Friday",
        "09:00-09:50",
        "LC-II-G16"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEC204.pdf",
    credits: "3-0-0"
  },
  {
    id: 189,
    code: "PHD571",
    name: "Advanced Mathematical Methods in Physics",
    department: "Physics",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "11:00-11:50",
        "LC-II-C15"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "LC-II-C15"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-II-C15"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHD571.pdf",
    credits: "3-0-0"
  },
  {
    id: 190,
    code: "ECC309",
    name: "Microwave Engineering Lab",
    department: "Electronics Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "Microwave & Antenna Lab (232)"
      ],
      [
        "Monday",
        "11:00-11:50",
        "Microwave & Antenna Lab (232)"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "Thursday"
      ],
      [
        "11:00-11:50",
        null,
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECC309.pdf",
    credits: "0-0-2"
  },
  {
    id: 191,
    code: "FMC206",
    name: "Phase Transformation and Heat Treatment",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "FME-1"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "FME-1"
      ],
      [
        "Friday",
        "09:00-09:50",
        "FME-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMC206.pdf",
    credits: "3-0-0"
  },
  {
    id: 192,
    code: "ECE201",
    name: "Measurements and Instrumentations",
    department: "Electronics Engineering",
    type: "Engineering Science Option (ESO)",
    timetable: [
      [
        "Monday",
        "08:00-08:50",
        "LC-II-G2"
      ],
      [
        "Wednesday",
        "08:00-08:50",
        "LC-II-G2"
      ],
      [
        "Friday",
        "08:00-08:50",
        "LC-II-G2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECE201.pdf",
    credits: "3-0-0"
  },
  {
    id: 193,
    code: "CSO304",
    name: "Digital Image Processing",
    department: "Computer Science & Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "LC-II-C6"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "LC-II-C6"
      ],
      [
        "Friday",
        "03:00-03:50",
        "LC-II-C6"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSO304.pdf",
    credits: "3-0-0"
  },
  {
    id: 194,
    code: "ECC210",
    name: "Electronic Devices and Circuits Lab",
    department: "Electronics Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "Analog Electronics & Devices Lab (208)"
      ],
      [
        "Monday",
        "05:00-05:50",
        "Analog Electronics & Devices Lab (208)"
      ],
      [
        "Monday",
        "06:00-06:50",
        "Analog Electronics & Devices Lab (208)"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "Wednesday"
      ],
      [
        "04:00-04:50",
        "Wednesday",
        "05:00-05:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECC210.pdf",
    credits: "0-0-3"
  },
  {
    id: 195,
    code: "PEC207",
    name: "Petroleum Formation Evaluation",
    department: "Petroleum Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "PET 2"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "PET 2"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "PET 2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEC207.pdf",
    credits: "3-0-0"
  },
  {
    id: 196,
    code: "ECC211",
    name: "Microprocessor & Microcontroller Lab",
    department: "Electronics Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "04:00-04:50",
        "Digital Electronics Lab (635)"
      ],
      [
        "Tuesday",
        "05:00-05:50",
        "Digital Electronics Lab (635)"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "Thursday"
      ],
      [
        "05:00-05:50",
        null,
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECC211.pdf",
    credits: "0-0-2"
  },
  {
    id: 197,
    code: "CHC308",
    name: "Chemical Process Equipment Design Lab",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "CSE LAB - III"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "CSE LAB - III"
      ],
      [
        "Tuesday",
        "12:00-12:50",
        "CSE LAB - III"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC308.pdf",
    credits: "0-0-3"
  },
  {
    id: 198,
    code: "CEC208",
    name: "Geotechnical Engineering",
    department: "Civil Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "LC-II-C2"
      ],
      [
        "Tuesday",
        "09:00-09:50",
        "LC-II-C2"
      ],
      [
        "Thursday",
        "09:00-09:50",
        "LC-II-C2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEC208.pdf",
    credits: "3-0-0"
  },
  {
    id: 199,
    code: "CEC211",
    name: "Transportation Engineering Laboratory",
    department: "Civil Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "04:00-04:50",
        "CEUG2"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "CEUG2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEC211.pdf",
    credits: "0-0-2"
  },
  {
    id: 200,
    code: "CEE202",
    name: "Fluid Mechanics and Machines",
    department: "Civil Engineering",
    type: "Engineering Science Option (ESO)",
    timetable: [
      [
        "Monday",
        "08:00-08:50",
        "LC-II-G6"
      ],
      [
        "Wednesday",
        "08:00-08:50",
        "LC-II-G6"
      ],
      [
        "Friday",
        "08:00-08:50",
        "LC-II-G6"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEE202.pdf",
    credits: "3-0-0"
  },
  {
    id: 201,
    code: "CHD418",
    name: "Electrochemical Science and Engineering",
    department: "Chemical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "LC-II-C9"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "LC-II-C9"
      ],
      [
        "Friday",
        "03:00-03:50",
        "LC-II-C9"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHD418.pdf",
    credits: "3-0-0"
  },
  {
    id: 202,
    code: "ECC209",
    name: "Microprocessors & Microcontrollers",
    department: "Electronics Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "LC-II-G2"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "LC-II-G2"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "LC-II-G2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECC209.pdf",
    credits: "3-0-0"
  },
  {
    id: 203,
    code: "ECC207",
    name: "Electromagnetic Theory",
    department: "Electronics Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-II-G2"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-G2"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-II-G2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECC207.pdf",
    credits: "3-0-0"
  },
  {
    id: 204,
    code: "CHC309",
    name: "Process Simulation Lab",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "10:00-10:50",
        "NLHC Computer lab 3"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "NLHC Computer lab 3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC309.pdf",
    credits: "0-0-2"
  },
  {
    id: 205,
    code: "ESC204",
    name: "Geology and Land use Planning",
    department: "Environmental Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "LC-II-C20"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "LC-II-C20"
      ],
      [
        "Friday",
        "09:00-09:50",
        "LC-II-C20"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESC204.pdf",
    credits: "3-0-0"
  },
  {
    id: 206,
    code: "CHC307",
    name: "Process Modelling and Simulation",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "LC-II-C9"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "LC-II-C9"
      ],
      [
        "Friday",
        "06:00-06:50",
        "LC-II-C9"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC307.pdf",
    credits: "3-0-0"
  },
  {
    id: 207,
    code: "ESC207",
    name: "Air Pollution Control",
    department: "Environmental Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "LC-II-C20"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "LC-II-C20"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "LC-II-C20"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESC207.pdf",
    credits: "3-0-0"
  },
  {
    id: 208,
    code: "MMC208",
    name: "Design of Mining Equipment Components",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "LC-II-C4"
      ],
      [
        "Tuesday",
        "09:00-09:50",
        "LC-II-C4"
      ],
      [
        "Thursday",
        "09:00-09:50",
        "LC-II-C4"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MMC208.pdf",
    credits: "3-0-0"
  },
  {
    id: 209,
    code: "ECC208",
    name: "Control Systems",
    department: "Electronics Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "LC-II-G2"
      ],
      [
        "Tuesday",
        "09:00-09:50",
        "LC-II-G2"
      ],
      [
        "Thursday",
        "09:00-09:50",
        "LC-II-G2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECC208.pdf",
    credits: "3-0-0"
  },
  {
    id: 210,
    code: "CHO301",
    name: "Petroleum Refining",
    department: "Chemical Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "LC-II-C9"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "LC-II-C9"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "LC-II-C9"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHO301.pdf",
    credits: "3-0-0"
  },
  {
    id: 211,
    code: "EEC205",
    name: "Electrical Measurements",
    department: "Electrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-II-G16"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-G16"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-II-G16"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEC205.pdf",
    credits: "3-0-0"
  },
  {
    id: 212,
    code: "EEC206",
    name: "Control System Engineering",
    department: "Electrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "LC-II-G16"
      ],
      [
        "Tuesday",
        "09:00-09:50",
        "LC-II-G16"
      ],
      [
        "Thursday",
        "09:00-09:50",
        "LC-II-G16"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEC206.pdf",
    credits: "3-0-0"
  },
  {
    id: 213,
    code: "FMC253",
    name: "Fine Particle Processing Laboratory",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "Monday"
      ],
      [
        "05:00-05:50",
        null,
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMC253.pdf",
    credits: "0-0-2"
  },
  {
    id: 214,
    code: "MMC210",
    name: "Hydraulics & Pneumatics Lab",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "PH&P LAB"
      ],
      [
        "Monday",
        "05:00-05:50",
        "PH&P LAB"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MMC210.pdf",
    credits: "0-0-2"
  },
  {
    id: 215,
    code: "MME201",
    name: "IC Engines",
    department: "Mechanical Engineering",
    type: "Engineering Science Option (ESO)",
    timetable: [
      [
        "Monday",
        "08:00-08:50",
        "LC-II-C4"
      ],
      [
        "Wednesday",
        "08:00-08:50",
        "LC-II-C4"
      ],
      [
        "Friday",
        "08:00-08:50",
        "LC-II-C4"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MME201.pdf",
    credits: "3-0-0"
  },
  {
    id: 215,
    code: "MME201",
    name: "IC Engines",
    department: "Mechanical Engineering",
    type: "Engineering Science Option (ESO)",
    timetable: [
      [
        "Monday",
        "08:00-08:50",
        "LC-II-C4"
      ],
      [
        "Wednesday",
        "08:00-08:50",
        "LC-II-C4"
      ],
      [
        "Friday",
        "08:00-08:50",
        "LC-II-C4"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MME201.pdf",
    credits: "3-0-0"
  },
  {
    id: 217,
    code: "CEO525",
    name: "Optimization Methods",
    department: "Civil Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "LC-II-C4"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "LC-II-C4"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "LC-II-C4"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEO525.pdf",
    credits: "3-0-0"
  },
  {
    id: 218,
    code: "MMC209",
    name: "Hydraulics & Pneumatics",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "LC-II-C4"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "LC-II-C4"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "LC-II-C4"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MMC209.pdf",
    credits: "3-0-0"
  },
  {
    id: 219,
    code: "CEO303",
    name: "Construction Management",
    department: "Civil Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "LC-II-C4"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "LC-II-C4"
      ],
      [
        "Friday",
        "03:00-03:50",
        "LC-II-C4"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEO303.pdf",
    credits: "3-0-0"
  },
  {
    id: 220,
    code: "MEC211",
    name: "Machine Dynamics and Solid Modeling Lab",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "03:00-03:50",
        "Mac lab"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "Thursday"
      ],
      [
        "05:00-05:50",
        "Thursday",
        "02:00-02:50"
      ],
      [
        "Mac lab",
        null,
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEC211.pdf",
    credits: "0-0-2"
  },
  {
    id: 221,
    code: "EEC207",
    name: "Power System Engineering",
    department: "Electrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "LC-II-G16"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "LC-II-G16"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "LC-II-G16"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEC207.pdf",
    credits: "3-0-0"
  },
  {
    id: 222,
    code: "FMC205",
    name: "Thermodynamics and Kinetics",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "FME-1"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "FME-1"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "FME-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMC205.pdf",
    credits: "3-0-0"
  },
  {
    id: 223,
    code: "CYD520",
    name: "Advanced Fluorescence Spectroscopy",
    department: "Chemical and Chemical Biology",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "05:00-05:50",
        "HSS class room -1"
      ],
      [
        "Wednesday",
        "05:00-05:50",
        "HSS class room -1"
      ],
      [
        "Friday",
        "03:00-03:50",
        "HSS class room -1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYD520.pdf",
    credits: "3-0-0"
  },
  {
    id: 224,
    code: "MEC210",
    name: "Heat Transfer and Fluid Machines Lab",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "ThE lab"
      ],
      [
        "Monday",
        "05:00-05:50",
        "ThE lab"
      ],
      [
        "Tuesday",
        "04:00-04:50",
        "Tuesday"
      ],
      [
        "05:00-05:50",
        null,
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEC210.pdf",
    credits: "0-0-2"
  },
  {
    id: 225,
    code: "FMC204",
    name: "Electrochemistry and Corrosion",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "FME-1"
      ],
      [
        "Tuesday",
        "09:00-09:50",
        "FME-1"
      ],
      [
        "Thursday",
        "09:00-09:50",
        "FME-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMC204.pdf",
    credits: "3-0-0"
  },
  {
    id: 226,
    code: "MMC207",
    name: "Bulk Material Handling Equipment",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-II-C4"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-C4"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-II-C4"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MMC207.pdf",
    credits: "3-0-0"
  },
  {
    id: 227,
    code: "CHC306",
    name: "Chemical Process Equipment Design",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "LC-II-C9"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "LC-II-C9"
      ],
      [
        "Friday",
        "02:00-02:50",
        "LC-II-C9"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC306.pdf",
    credits: "3-0-0"
  },
  {
    id: 228,
    code: "MCC205",
    name: "Linear Algebra",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "LC-II-G7"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "LC-II-G7"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "LC-II-G7"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC205.pdf",
    credits: "3-0-0"
  },
  {
    id: 229,
    code: "CEO527",
    name: "Bridge Engineering",
    department: "Civil Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "LC-II-C4"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "LC-II-C4"
      ],
      [
        "Friday",
        "04:00-04:50",
        "LC-II-C4"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEO527.pdf",
    credits: "3-0-0"
  },
  {
    id: 230,
    code: "CHO302",
    name: "Industrial Safety and Hazards Management",
    department: "Chemical Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "LC-II-C9"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "LC-II-C9"
      ],
      [
        "Friday",
        "04:00-04:50",
        "LC-II-C9"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHO302.pdf",
    credits: "3-0-0"
  },
  {
    id: 231,
    code: "PHC210",
    name: "Electricity and Magnetism Lab",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "04:00-04:50",
        "PHUG LAB-2"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "PHUG LAB-2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC210.pdf",
    credits: "0-0-2"
  },
  {
    id: 232,
    code: "PHC209",
    name: "Optics Lab",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "PHUG LAB-2"
      ],
      [
        "Monday",
        "05:00-05:50",
        "PHUG LAB-2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC209.pdf",
    credits: "0-0-2"
  },
  {
    id: 233,
    code: "FMC254",
    name: "Introduction to Fuel Technology Laboratory",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "04:00-04:50",
        "Thursday"
      ],
      [
        "05:00-05:50",
        null,
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMC254.pdf",
    credits: "0-0-2"
  },
  {
    id: 234,
    code: "MMC206",
    name: "Mine Electrical Technology",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "LC-II-C4"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "LC-II-C4"
      ],
      [
        "Thursday",
        "08:00-08:50",
        "LC-II-C4"
      ],
      [
        "Friday",
        "09:00-09:50",
        "LC-II-C4"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MMC206.pdf",
    credits: "3-1-0"
  },
  {
    id: 235,
    code: "MCC512",
    name: "Operating Systems Practical",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "UG Lab-1"
      ],
      [
        "Monday",
        "04:00-04:50",
        "UG Lab-1"
      ],
      [
        "Monday",
        "05:00-05:50",
        "UG Lab-2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC512.pdf",
    credits: "0-0-3"
  },
  {
    id: 236,
    code: "MEC207",
    name: "Dynamics of Machinery",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-II-G1"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-G1"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-II-G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEC207.pdf",
    credits: "3-0-0"
  },
  {
    id: 237,
    code: "MEC209",
    name: "Production Technology",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "LC-II-G1"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "LC-II-G1"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "LC-II-G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEC209.pdf",
    credits: "3-0-0"
  },
  {
    id: 238,
    code: "CEC306",
    name: "Water Resources Engineering",
    department: "Civil Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "LC-II-C5"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "LC-II-C5"
      ],
      [
        "Friday",
        "06:00-06:50",
        "LC-II-C5"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEC306.pdf",
    credits: "3-0-0"
  },
  {
    id: 239,
    code: "MNC209",
    name: "Rock Mechanics Practical",
    department: "Mining Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "Rock Mechanics Lab"
      ],
      [
        "Monday",
        "05:00-05:50",
        "Rock Mechanics Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNC209.pdf",
    credits: "0-0-2"
  },
  {
    id: 240,
    code: "ECC307",
    name: "Microwave Engineering",
    department: "Electronics Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "LC-II-G12"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "LC-II-G12"
      ],
      [
        "Friday",
        "06:00-06:50",
        "LC-II-G12"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECC307.pdf",
    credits: "3-0-0"
  },
  {
    id: 241,
    code: "MCD401",
    name: "Computer Graphics",
    department: "Mathematics and Computing",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "LC-II-G16"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "LC-II-G16"
      ],
      [
        "Friday",
        "04:00-04:50",
        "LC-II-G16"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCD401.pdf",
    credits: "3-0-0"
  },
  {
    id: 242,
    code: "MNC210",
    name: "Mine Ventilation practical - I",
    department: "Mining Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "05:00-05:50",
        "Mine Ventilation Lab"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "Mine Ventilation Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNC210.pdf",
    credits: "0-0-2"
  },
  {
    id: 243,
    code: "MNC208",
    name: "Underground Coal Mining",
    department: "Mining Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "LC-II-G3"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "LC-II-G3"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "LC-II-G3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNC208.pdf",
    credits: "3-0-0"
  },
  {
    id: 244,
    code: "PED503",
    name: "Enhanced Oil and Gas Recovery Methods",
    department: "Petroleum Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "PET 4"
      ],
      [
        "Tuesday",
        "06:00-06:50",
        "PET 4"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "PET 4"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PED503.pdf",
    credits: "3-0-0"
  },
  {
    id: 245,
    code: "MCD508",
    name: "Theory of Computation",
    department: "Mathematics and Computing",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "LC-II-G16"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "LC-II-G16"
      ],
      [
        "Friday",
        "06:00-06:50",
        "LC-II-G16"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCD508.pdf",
    credits: "3-0-0"
  },
  {
    id: 246,
    code: "PHE202",
    name: "Material Science and Engineering",
    department: "Physics",
    type: "Engineering Science Option (ESO)",
    timetable: [
      [
        "Monday",
        "08:00-08:50",
        "LC-II-C15"
      ],
      [
        "Wednesday",
        "08:00-08:50",
        "LC-II-C15"
      ],
      [
        "Friday",
        "08:00-08:50",
        "LC-II-C15"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHE202.pdf",
    credits: "3-0-0"
  },
  {
    id: 247,
    code: "MNC207",
    name: "Underground Metal Mining",
    department: "Mining Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "LC-II-G3"
      ],
      [
        "Tuesday",
        "09:00-09:50",
        "LC-II-G3"
      ],
      [
        "Thursday",
        "09:00-09:50",
        "LC-II-G3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNC207.pdf",
    credits: "3-0-0"
  },
  {
    id: 248,
    code: "FMC207",
    name: "Fine Particle Processing for Coal and Minerals",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "FME-1"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "FME-1"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "FME-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMC207.pdf",
    credits: "3-0-0"
  },
  {
    id: 249,
    code: "CEC307",
    name: "Structural Detailing Laboratory",
    department: "Civil Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "CEUG3"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "CEUG3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEC307.pdf",
    credits: "0-0-2"
  },
  {
    id: 250,
    code: "MEC208",
    name: "Heat and Mass Transfer",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "LC-II-G1"
      ],
      [
        "Tuesday",
        "09:00-09:50",
        "LC-II-G1"
      ],
      [
        "Thursday",
        "09:00-09:50",
        "LC-II-G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEC208.pdf",
    credits: "3-0-0"
  },
  {
    id: 251,
    code: "FME222",
    name: "Introduction to Fuel Technology",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Engineering Science Option (ESO)",
    timetable: [
      [
        "Monday",
        "08:00-08:50",
        "LC-II-C5"
      ],
      [
        "Wednesday",
        "08:00-08:50",
        "LC-II-C5"
      ],
      [
        "Friday",
        "08:00-08:50",
        "LC-II-C5"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FME222.pdf",
    credits: "3-0-0"
  },
  {
    id: 252,
    code: "CSC305",
    name: "Computer Network",
    department: "Computer Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "LC-II-G9"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "LC-II-G9"
      ],
      [
        "Friday",
        "02:00-02:50",
        "LC-II-G9"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSC305.pdf",
    credits: "3-0-0"
  },
  {
    id: 253,
    code: "CEC308",
    name: "Water Resources Engineering Laboratory",
    department: "Civil Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "10:00-10:50",
        "CEUG4"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "CEUG4"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEC308.pdf",
    credits: "0-0-2"
  },
  {
    id: 254,
    code: "CSC307",
    name: "Computer Networks Lab",
    department: "Computer Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "NLHC Computer Lab - I"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "NLHC Computer Lab - I"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSC307.pdf",
    credits: "0-0-2"
  },
  {
    id: 255,
    code: "MCD532",
    name: "Data Mining",
    department: "Mathematics and Computing",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "Tuesday"
      ],
      [
        "04:00-04:50",
        "Friday",
        "05:00-05:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCD532.pdf",
    credits: "3-0-0"
  },
  {
    id: 256,
    code: "MNC206",
    name: "Mine Ventilation",
    department: "Mining Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-II-G3"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-G3"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-II-G3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNC206.pdf",
    credits: "3-0-0"
  },
  {
    id: 257,
    code: "GLC510",
    name: "Metamorphic Petrology",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "AGL-3"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "AGL-3"
      ],
      [
        "Friday",
        "06:00-06:50",
        "AGL-3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC510.pdf",
    credits: "3-0-0"
  },
  {
    id: 258,
    code: "MEC206",
    name: "Fluid Machines",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "LC-II-G1"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "LC-II-G1"
      ],
      [
        "Friday",
        "09:00-09:50",
        "LC-II-G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEC206.pdf",
    credits: "3-0-0"
  },
  {
    id: 57,
    code: "MCC541",
    name: "Advanced DBMS Practical",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "PG Lab-1"
      ],
      [
        "Monday",
        "11:00-11:50",
        "PG Lab-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC541.pdf",
    credits: "0-0-2"
  },
  {
    id: 60,
    code: "MCO531",
    name: "Stochastic Processes",
    department: "Mathematics and Computing",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "LC-I-C18"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "LC-I-C18"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "LC-I-C18"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCO531.pdf",
    credits: "3-0-0"
  },
  {
    id: 261,
    code: "MCD516",
    name: "Industrial Statistics",
    department: "Mathematics and Computing",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "08:00-08:50",
        "LC-II-G7"
      ],
      [
        "Thursday",
        "08:00-08:50",
        "LC-II-G7"
      ],
      [
        "Friday",
        "09:00-09:50",
        "LC-II-G7"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCD516.pdf",
    credits: "3-0-0"
  },
  {
    id: 262,
    code: "CSC306",
    name: "Software Engineering",
    department: "Computer Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "LC-II-G9"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "LC-II-G9"
      ],
      [
        "Friday",
        "06:00-06:50",
        "LC-II-G9"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSC306.pdf",
    credits: "3-0-0"
  },
  {
    id: 263,
    code: "MSC528",
    name: "Machine Learning Lab",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "05:00-05:50",
        "MS 010"
      ],
      [
        "Tuesday",
        "04:00-04:50",
        "MS 010"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC528.pdf",
    credits: "0-0-2"
  },
  {
    id: 264,
    code: "MCC509",
    name: "Statistical  Inference",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "LC-II-G4"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "LC-II-G4"
      ],
      [
        "Friday",
        "09:00-09:50",
        "LC-II-G4"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC509.pdf",
    credits: "3-0-0"
  },
  {
    id: 265,
    code: "MCC510",
    name: "Operating Systems",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-II-G4"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-G4"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-II-G4"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC510.pdf",
    credits: "3-0-0"
  },
  {
    id: 59,
    code: "MCC539",
    name: "Advanced DBMS",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "LC-I-C18"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "LC-I-C18"
      ],
      [
        "Friday",
        "02:00-02:50",
        "LC-I-C18"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC539.pdf",
    credits: "3-0-0"
  },
  {
    id: 267,
    code: "MCO501",
    name: "Discrete Mathematics",
    department: "Mathematics and Computing",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "LC-II-G7"
      ],
      [
        "Tuesday",
        "09:00-09:50",
        "LC-II-G7"
      ],
      [
        "Thursday",
        "09:00-09:50",
        "LC-II-G7"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCO501.pdf",
    credits: "3-0-0"
  },
  {
    id: 268,
    code: "PHC510",
    name: "Atomic and Molecular Physics",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "516"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "516"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "516"
      ],
      [
        "Friday",
        "02:00-02:50",
        "516"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC510.pdf",
    credits: "3-1-0"
  },
  {
    id: 269,
    code: "GLC208",
    name: "Economic Geology and Indian Mineral Deposits",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "LC-II-C12"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "LC-II-C12"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "LC-II-C12"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC208.pdf",
    credits: "3-0-0"
  },
  {
    id: 270,
    code: "MCC508",
    name: "Advanced Algebra",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "LC-II-G4"
      ],
      [
        "Tuesday",
        "10:00-10:50",
        "LC-II-G4"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "LC-II-G4"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC508.pdf",
    credits: "3-0-0"
  },
  {
    id: 271,
    code: "ECC306",
    name: "Digital Communication",
    department: "Electronics Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "LC-II-G12"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "LC-II-G12"
      ],
      [
        "Friday",
        "02:00-02:50",
        "LC-II-G12"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECC306.pdf",
    credits: "3-0-0"
  },
  {
    id: 272,
    code: "GLC210",
    name: "Economic Geology Practical",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "04:00-04:50",
        "LC-II-C6"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "LC-II-C6"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC210.pdf",
    credits: "0-0-2"
  },
  {
    id: 273,
    code: "GLC209",
    name: "Petrology Practical",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "Petrology Lab"
      ],
      [
        "Monday",
        "05:00-05:50",
        "Petrology Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC209.pdf",
    credits: "0-0-2"
  },
  {
    id: 274,
    code: "GPC205",
    name: "Oceanography",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "Annexe 102"
      ],
      [
        "Tuesday",
        "09:00-09:50",
        "Annexe 102"
      ],
      [
        "Thursday",
        "09:00-09:50",
        "Annexe 102"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC205.pdf",
    credits: "3-0-0"
  },
  {
    id: 275,
    code: "MNC205",
    name: "Rock Mechanics",
    department: "Mining Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "LC-II-G3"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "LC-II-G3"
      ],
      [
        "Friday",
        "09:00-09:50",
        "LC-II-G3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNC205.pdf",
    credits: "3-0-0"
  },
  {
    id: 276,
    code: "MSD515",
    name: "Services Marketing",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "MS 209"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "MS 209"
      ],
      [
        "Friday",
        "03:00-03:50",
        "MS 209"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSD515.pdf",
    credits: "3-0-0"
  },
  {
    id: 277,
    code: "PHC512",
    name: "Experimental Physics - III",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "PHPG LAB"
      ],
      [
        "Monday",
        "05:00-05:50",
        "PHPG LAB"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC512.pdf",
    credits: "0-0-2"
  },
  {
    id: 278,
    code: "CHC525",
    name: "Unit Operations for Pharmaceutics",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "LC-I-C13"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-I-C13"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-I-C13"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC525.pdf",
    credits: "3-0-0"
  },
  {
    id: 279,
    code: "PHC208",
    name: "Electrodynamics",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "LC-II-C15"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "LC-II-C15"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "LC-II-C15"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC208.pdf",
    credits: "3-0-0"
  },
  {
    id: 280,
    code: "MCE301",
    name: "Operations Research",
    department: "Mathematics and Computing",
    type: "Engineering Science Option (ESO)",
    timetable: [
      [
        "Monday",
        "08:00-08:50",
        "LC-II-G7"
      ],
      [
        "Wednesday",
        "08:00-08:50",
        "LC-II-G7"
      ],
      [
        "Friday",
        "08:00-08:50",
        "LC-II-G7"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCE301.pdf",
    credits: "3-0-0"
  },
  {
    id: 281,
    code: "FMD463",
    name: "Non Ferrous Extractive Metallurgy",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "LC-II-C8"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "LC-II-C8"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "LC-II-C8"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMD463.pdf",
    credits: "3-0-0"
  },
  {
    id: 282,
    code: "MCC511",
    name: "Database Management Systems",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "LC-II-G16"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "LC-II-G16"
      ],
      [
        "Friday",
        "02:00-02:50",
        "LC-II-G16"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC511.pdf",
    credits: "3-0-0"
  },
  {
    id: 283,
    code: "ECC308",
    name: "Digital Communication Lab",
    department: "Electronics Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "Communication Lab (215)"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "Communication Lab (215)"
      ],
      [
        "Tuesday",
        "12:00-12:50",
        "Communication Lab (215)"
      ],
      [
        "Friday",
        "10:00-10:50",
        "Friday"
      ],
      [
        "11:00-11:50",
        "Friday",
        "12:00-12:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECC308.pdf",
    credits: "0-0-3"
  },
  {
    id: 284,
    code: "GLC206",
    name: "Introduction to Stratigraphy and Paleontology",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-II-C6"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-C6"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-II-C6"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC206.pdf",
    credits: "3-0-0"
  },
  {
    id: 285,
    code: "GLC207",
    name: "Descriptive Mineralogy",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "LC-II-C6"
      ],
      [
        "Tuesday",
        "09:00-09:50",
        "LC-II-C6"
      ],
      [
        "Thursday",
        "09:00-09:50",
        "LC-II-C6"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC207.pdf",
    credits: "3-0-0"
  },
  {
    id: 286,
    code: "MSC511",
    name: "Organizational Behaviour",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "MS 210"
      ],
      [
        "Tuesday",
        "10:00-10:50",
        "MS 210"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "MS 210"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC511.pdf",
    credits: "3-0-0"
  },
  {
    id: 287,
    code: "CSI101",
    name: "Computer Programming",
    department: "Computer Science & Engineering",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Wednesday",
        "02:00-02:50",
        "LC-II-G2"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "LC-II-G2"
      ],
      [
        "Friday",
        "04:00-04:50",
        "LC-II-G2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSI101.pdf",
    credits: "2-1-0"
  },
  {
    id: 288,
    code: "HSI101",
    name: "Communication Skills",
    department: "Humanities and Social Science",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "LC-II-G1"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "LC-II-G1"
      ],
      [
        "Tuesday",
        "12:00-12:50",
        "LC-II-G1"
      ],
      [
        "Friday",
        "12:00-12:50",
        "LC-II-G1"
      ],
      [
        "Friday",
        "11:00-11:50",
        "LC-II-G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSI101.pdf",
    credits: "1-0-2"
  },
  {
    id: 289,
    code: "MCI102",
    name: "Mathematics - II",
    department: "Mathematics and Computing",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "LC-II-G1"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "LC-II-G1"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "LC-II-G1"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "LC-II-G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCI102.pdf",
    credits: "3-1-0"
  },
  {
    id: 290,
    code: "MCI103",
    name: "Numerical Methods",
    department: "Mathematics and Computing",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "LC-II-G8"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCI103.pdf",
    credits: "2-2-0"
  },
  {
    id: 291,
    code: "MEI102",
    name: "Manufacturing Processes",
    department: "Mechanical Engineering",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "LC-II-G1"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "LC-II-G1"
      ],
      [
        "Tuesday",
        "10:00-10:50",
        "LC-II-G1"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "LC-II-G1"
      ],
      [
        "Tuesday",
        "04:00-04:50",
        "LC-II-G1"
      ],
      [
        "Tuesday",
        "09:00-09:50",
        "LC-II-G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEI102.pdf",
    credits: "2-0-3"
  },
  {
    id: 292,
    code: "CYI101",
    name: "Chemistry",
    department: "Chemical and Chemical Biology",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "LC-II-G8"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "LC-II-G8"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "LC-II-G8"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYI101.pdf",
    credits: "3-0-0"
  },
  {
    id: 293,
    code: "CSI102",
    name: "Computer Programming Lab",
    department: "Computer Science & Engineering",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "NLHC Computer Lab - I"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSI102.pdf",
    credits: "0-0-2"
  },
  {
    id: 294,
    code: "GPC530",
    name: "Seismology",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "Wednesday"
      ],
      [
        "10:00-10:50",
        "Friday",
        "10:00-10:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC530.pdf",
    credits: "3-0-0"
  },
  {
    id: 295,
    code: "CYI102",
    name: "Chemistry Lab",
    department: "Chemical and Chemical Biology",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Thursday",
        "09:00-09:50",
        "UG Lab"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "UG Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYI102.pdf",
    credits: "0-0-2"
  },
  {
    id: 296,
    code: "ESI101",
    name: "Environmental Sciences",
    department: "Environmental Science & Engineering",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Tuesday",
        "05:00-05:50",
        "LC-II-G1"
      ],
      [
        "Friday",
        "05:00-05:50",
        "LC-II-G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESI101.pdf",
    credits: "2-0-0"
  },
  {
    id: 288,
    code: "HSI101",
    name: "Communication Skills",
    department: "Humanities and Social Science",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "LC-II-G1"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "LC-II-G1"
      ],
      [
        "Tuesday",
        "12:00-12:50",
        "LC-II-G1"
      ],
      [
        "Friday",
        "12:00-12:50",
        "LC-II-G1"
      ],
      [
        "Friday",
        "11:00-11:50",
        "LC-II-G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSI101.pdf",
    credits: "1-0-2"
  },
  {
    id: 298,
    code: "GPC531",
    name: "Geotechnical Modelling",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "Thursday"
      ],
      [
        "10:00-10:50",
        "Friday",
        "11:00-11:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC531.pdf",
    credits: "3-0-0"
  },
  {
    id: 289,
    code: "MCI102",
    name: "Mathematics - II",
    department: "Mathematics and Computing",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "LC-II-G1"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "LC-II-G1"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "LC-II-G1"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "LC-II-G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCI102.pdf",
    credits: "3-1-0"
  },
  {
    id: 300,
    code: "GPC534",
    name: "Finite Element Analysis",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "Tuesday"
      ],
      [
        "11:00-11:50",
        "Wednesday",
        "11:00-11:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC534.pdf",
    credits: "3-0-0"
  },
  {
    id: 290,
    code: "MCI103",
    name: "Numerical Methods",
    department: "Mathematics and Computing",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "LC-II-G8"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCI103.pdf",
    credits: "2-2-0"
  },
  {
    id: 291,
    code: "MEI102",
    name: "Manufacturing Processes",
    department: "Mechanical Engineering",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "LC-II-G1"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "LC-II-G1"
      ],
      [
        "Tuesday",
        "10:00-10:50",
        "LC-II-G1"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "LC-II-G1"
      ],
      [
        "Tuesday",
        "04:00-04:50",
        "LC-II-G1"
      ],
      [
        "Tuesday",
        "09:00-09:50",
        "LC-II-G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEI102.pdf",
    credits: "2-0-3"
  },
  {
    id: 303,
    code: "GPC207",
    name: "Radiometric Method",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "Annexe 102"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "Annexe 102"
      ],
      [
        "Friday",
        "09:00-09:50",
        "Annexe 102"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC207.pdf",
    credits: "3-0-0"
  },
  {
    id: 304,
    code: "GPC532",
    name: "Hydrology",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "AGP Annexure Ground Floor"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "AGP Annexure Ground Floor"
      ],
      [
        "Friday",
        "12:00-12:50",
        "AGP Annexure Ground Floor"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC532.pdf",
    credits: "3-0-0"
  },
  {
    id: 305,
    code: "CYD501",
    name: "Medicinal Chemistry",
    department: "Chemical and Chemical Biology",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "LC-II-C10"
      ],
      [
        "Tuesday",
        "04:00-04:50",
        "LC-II-C10"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "LC-II-C10"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYD501.pdf",
    credits: "3-0-0"
  },
  {
    id: 306,
    code: "GPC533",
    name: "Seismic Hazard Zonation",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "Wednesday"
      ],
      [
        "12:00-12:50",
        "Thursday",
        "11:00-11:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC533.pdf",
    credits: "3-0-0"
  },
  {
    id: 307,
    code: "GPC535",
    name: "Geotechnical Modelling Practical",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "AGP Annexure 1st Floor"
      ],
      [
        "Monday",
        "05:00-05:50",
        "AGP Annexure 1st Floor"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC535.pdf",
    credits: "0-0-2"
  },
  {
    id: 308,
    code: "GPC536",
    name: "Seismology Practical",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "04:00-04:50",
        "AGP Annexure Ground Floor"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "AGP Annexure Ground Floor"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC536.pdf",
    credits: "0-0-2"
  },
  {
    id: 309,
    code: "CHC502",
    name: "Advanced Chemical Engineering Thermodynamics",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "CHE-402"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "CHE-402"
      ],
      [
        "Friday",
        "11:00-11:50",
        "CHE-402"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC502.pdf",
    credits: "3-0-0"
  },
  {
    id: 310,
    code: "MSC525",
    name: "Human Resources Management",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "MS 209"
      ],
      [
        "Tuesday",
        "09:00-09:50",
        "MS 209"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "MS 209"
      ],
      [
        "Friday",
        "12:00-12:50",
        "MS 209"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC525.pdf",
    credits: "4-0-0"
  },
  {
    id: 311,
    code: "CHC501",
    name: "Advanced Transport Phenomena",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "CHE-402"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "CHE-402"
      ],
      [
        "Friday",
        "10:00-10:50",
        "CHE-402"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC501.pdf",
    credits: "3-0-0"
  },
  {
    id: 312,
    code: "EEC377",
    name: "Power and Switchgear Lab",
    department: "Electrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "Prot. Lab"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "Prot. Lab"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "Thursday"
      ],
      [
        "11:00-11:50",
        null,
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEC377.pdf",
    credits: "0-0-2"
  },
  {
    id: 313,
    code: "EEC378",
    name: "Power Electronics and Drives lab",
    department: "Electrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "PE Lab"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "PE Lab"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "Thursday"
      ],
      [
        "10:00-10:50",
        null,
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEC378.pdf",
    credits: "0-0-2"
  },
  {
    id: 314,
    code: "MCD511",
    name: "Mathematical Ecology",
    department: "Mathematics and Computing",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "LC-II-G16"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "LC-II-G16"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "LC-II-G16"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCD511.pdf",
    credits: "3-0-0"
  },
  {
    id: 315,
    code: "EEC312",
    name: "Electrical Drives and Applications",
    department: "Electrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "LC-II-G14"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "LC-II-G14"
      ],
      [
        "Friday",
        "06:00-06:50",
        "LC-II-G14"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEC312.pdf",
    credits: "3-0-0"
  },
  {
    id: 316,
    code: "CYD505",
    name: "Asymmetric Synthesis",
    department: "Chemical and Chemical Biology",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "05:00-05:50",
        "LC-II-C10"
      ],
      [
        "Wednesday",
        "05:00-05:50",
        "LC-II-C10"
      ],
      [
        "Friday",
        "03:00-03:50",
        "LC-II-C10"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYD505.pdf",
    credits: "3-0-0"
  },
  {
    id: 317,
    code: "MCC401",
    name: "Software Engineering",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "LC-II-G7"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-II-G7"
      ],
      [
        "Friday",
        "11:00-11:50",
        "LC-II-G7"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC401.pdf",
    credits: "3-0-0"
  },
  {
    id: 318,
    code: "FMC501",
    name: "Coal and Mineral Processing",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "FME-1"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "FME-1"
      ],
      [
        "Friday",
        "10:00-10:50",
        "FME-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMC501.pdf",
    credits: "3-0-0"
  },
  {
    id: 319,
    code: "FMC504",
    name: "Unit Operations in Extractive Metallurgy",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "Wednesday"
      ],
      [
        "12:00-12:50",
        "Thursday",
        "11:00-11:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMC504.pdf",
    credits: "3-0-0"
  },
  {
    id: 320,
    code: "ESC503",
    name: "MATLAB Programming for Numerical Computation",
    department: "Environmental Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "LC-II-C13"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "LC-II-C13"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "LC-II-C13"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESC503.pdf",
    credits: "3-0-0"
  },
  {
    id: 321,
    code: "ESC504",
    name: "Air and Noise Pollution",
    department: "Environmental Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "CME-I"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "CME-I"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "CME-I"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESC504.pdf",
    credits: "3-0-0"
  },
  {
    id: 322,
    code: "ESC505",
    name: "Wastewater Engineering",
    department: "Environmental Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "Thursday"
      ],
      [
        "12:00-12:50",
        "Friday",
        "12:00-12:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESC505.pdf",
    credits: "3-0-0"
  },
  {
    id: 323,
    code: "ESC521",
    name: "Water Chemistry Practical",
    department: "Environmental Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "Water Chemistry Lab"
      ],
      [
        "Monday",
        "06:00-06:50",
        "Monday"
      ],
      [
        "05:00-05:50",
        "Water Chemistry Lab",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESC521.pdf",
    credits: "0-0-3"
  },
  {
    id: 324,
    code: "ESC522",
    name: "Air and Noise Monitoring Practical",
    department: "Environmental Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "04:00-04:50",
        "Air Lab"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "Air Lab"
      ],
      [
        "Thursday",
        "06:00-06:50",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESC522.pdf",
    credits: "0-0-3"
  },
  {
    id: 325,
    code: "FMC502",
    name: "Transport Phenomena",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "FME-1"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "FME-1"
      ],
      [
        "Friday",
        "11:00-11:50",
        "FME-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMC502.pdf",
    credits: "3-0-0"
  },
  {
    id: 326,
    code: "FMC503",
    name: "Numerical Methods & Computer Applications",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "FME-1"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "FME-1"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "FME-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMC503.pdf",
    credits: "3-0-0"
  },
  {
    id: 327,
    code: "FMC551",
    name: "Coal and Mineral Processing Laboratory",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "FME-2"
      ],
      [
        "Monday",
        "05:00-05:50",
        "FME-2"
      ],
      [
        "Monday",
        "06:00-06:50",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMC551.pdf",
    credits: "0-0-3"
  },
  {
    id: 328,
    code: "FMC552",
    name: "Process Metallurgy Laboratory",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "04:00-04:50",
        "FME-2"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "FME-2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMC552.pdf",
    credits: "0-0-2"
  },
  {
    id: 329,
    code: "FMC506",
    name: "Fuel Technology",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "FME-1"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "FME-1"
      ],
      [
        "Friday",
        "12:00-12:50",
        "FME-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMC506.pdf",
    credits: "3-0-0"
  },
  {
    id: 330,
    code: "MCC531",
    name: "Advanced Data Structures & Algorithm",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "LC-I-C11"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-I-C11"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-I-C11"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC531.pdf",
    credits: "3-0-0"
  },
  {
    id: 331,
    code: "MCC532",
    name: "Fundamentals of Machine Learning",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "LC-II-G14"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "LC-II-G14"
      ],
      [
        "Friday",
        "11:00-11:50",
        "LC-II-G14"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC532.pdf",
    credits: "3-0-0"
  },
  {
    id: 332,
    code: "MCC534",
    name: "Statistics in Decision Makings",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "LC-I-C11"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "LC-I-C11"
      ],
      [
        "Friday",
        "12:00-12:50",
        "LC-I-C11"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC534.pdf",
    credits: "3-0-0"
  },
  {
    id: 333,
    code: "MCC535",
    name: "Soft Computing Techniques",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "LC-I-C11"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "LC-I-C11"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "LC-I-C11"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC535.pdf",
    credits: "3-0-0"
  },
  {
    id: 334,
    code: "MCC533",
    name: "Computer Oriented Numerical Methods",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-I-C11"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-I-C11"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-I-C11"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC533.pdf",
    credits: "3-0-0"
  },
  {
    id: 335,
    code: "MCC536",
    name: "Advanced Data Structures & Algorithm Practical",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "04:00-04:50",
        "PG Lab-1"
      ],
      [
        "Tuesday",
        "05:00-05:50",
        "PG Lab-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC536.pdf",
    credits: "0-0-2"
  },
  {
    id: 336,
    code: "MCC537",
    name: "Fundamentals of Machine Learning Practical",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "04:00-04:50",
        "PG Lab-1"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "PG Lab-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC537.pdf",
    credits: "0-0-2"
  },
  {
    id: 337,
    code: "PEC501",
    name: "Formation Evaluation and Production Logging",
    department: "Petroleum Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "PET 4"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "PET 4"
      ],
      [
        "Friday",
        "11:00-11:50",
        "PET 4"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEC501.pdf",
    credits: "3-0-0"
  },
  {
    id: 338,
    code: "PEC503",
    name: "Numerical Methods for Petroleum Engineers",
    department: "Petroleum Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "Wednesday"
      ],
      [
        "10:00-10:50",
        "Friday",
        "10:00-10:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEC503.pdf",
    credits: "3-0-0"
  },
  {
    id: 339,
    code: "MCC538",
    name: "Computer Oriented Numerical Methods Practical",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "PG Lab-1"
      ],
      [
        "Monday",
        "05:00-05:50",
        "PG Lab-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC538.pdf",
    credits: "0-0-2"
  },
  {
    id: 340,
    code: "PEC502",
    name: "Advanced Well Testing",
    department: "Petroleum Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "PET 4"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "PET 4"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "PET 4"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEC502.pdf",
    credits: "3-0-0"
  },
  {
    id: 341,
    code: "PEC504",
    name: "Advanced Production Technologies",
    department: "Petroleum Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "Tuesday"
      ],
      [
        "11:00-11:50",
        "Wednesday",
        "11:00-11:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEC504.pdf",
    credits: "3-0-0"
  },
  {
    id: 342,
    code: "PEC506",
    name: "Reservoir Simulation Practical",
    department: "Petroleum Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "Reservoir Characterization Lab"
      ],
      [
        "Monday",
        "06:00-06:50",
        "Monday"
      ],
      [
        "04:00-04:50",
        "Reservoir Characterization Lab",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEC506.pdf",
    credits: "0-0-3"
  },
  {
    id: 343,
    code: "PEC505",
    name: "Petroleum Economics, Risk and Uncertainty Management",
    department: "Petroleum Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "Thursday"
      ],
      [
        "12:00-12:50",
        "Friday",
        "12:00-12:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEC505.pdf",
    credits: "3-0-0"
  },
  {
    id: 344,
    code: "MCC502",
    name: "Differential Equations",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "Wednesday"
      ],
      [
        "06:00-06:50",
        "Friday",
        "06:00-06:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC502.pdf",
    credits: "3-0-0"
  },
  {
    id: 345,
    code: "MSC514",
    name: "Human Resources Management",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "MS 210"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "MS 210"
      ],
      [
        "Friday",
        "12:00-12:50",
        "MS 210"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC514.pdf",
    credits: "3-0-0"
  },
  {
    id: 346,
    code: "MCC505",
    name: "Probability & Statistics",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "08:00-08:50",
        "Thursday"
      ],
      [
        "08:00-08:50",
        "Friday",
        "09:00-09:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC505.pdf",
    credits: "3-0-0"
  },
  {
    id: 347,
    code: "MCC503",
    name: "Numerical Methods",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "Wednesday"
      ],
      [
        "09:00-09:50",
        "Friday",
        "10:00-10:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC503.pdf",
    credits: "3-0-0"
  },
  {
    id: 348,
    code: "PEC507",
    name: "Term paper or Mini Project",
    department: "Petroleum Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "04:00-04:50",
        "PET 4"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "PET 4"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEC507.pdf",
    credits: "0-0-2"
  },
  {
    id: 349,
    code: "MCC501",
    name: "Analysis",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "LC-II-G10"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-II-G10"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-II-G10"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC501.pdf",
    credits: "3-0-0"
  },
  {
    id: 350,
    code: "MCC504",
    name: "Data Structures",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "LC-II-G10"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "LC-II-G10"
      ],
      [
        "Friday",
        "11:00-11:50",
        "LC-II-G10"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC504.pdf",
    credits: "3-0-0"
  },
  {
    id: 351,
    code: "MCC506",
    name: "Numerical Methods Practical",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "04:00-04:50",
        "Thursday"
      ],
      [
        "05:00-05:50",
        "Thursday",
        "06:00-06:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC506.pdf",
    credits: "0-0-3"
  },
  {
    id: 352,
    code: "GLC505",
    name: "Mathematics for Geoscientists",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "Thursday"
      ],
      [
        "02:00-02:50",
        "Friday",
        "03:00-03:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC505.pdf",
    credits: "3-0-0"
  },
  {
    id: 353,
    code: "MCC507",
    name: "Data Structures Practical",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "UG Lab-1"
      ],
      [
        "Monday",
        "05:00-05:50",
        "UG Lab-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC507.pdf",
    credits: "0-0-2"
  },
  {
    id: 354,
    code: "GLC502",
    name: "Applied Geochemistry",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "Wednesday"
      ],
      [
        "03:00-03:50",
        "Thursday",
        "03:00-03:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC502.pdf",
    credits: "3-0-0"
  },
  {
    id: 355,
    code: "GPC542",
    name: "Geophysical Field Theory",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "Annexe 102"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "Annexe 102"
      ],
      [
        "Friday",
        "11:00-11:50",
        "Annexe 102"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC542.pdf",
    credits: "3-0-0"
  },
  {
    id: 356,
    code: "GLC553",
    name: "Geology of Natural Resources",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "Thursday"
      ],
      [
        "10:00-10:50",
        "Friday",
        "11:00-11:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC553.pdf",
    credits: "3-0-0"
  },
  {
    id: 357,
    code: "GLC552",
    name: "Sample Preparation and Analytical Technique in Geosciences",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "AGL Library"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "AGL Library"
      ],
      [
        "Friday",
        "10:00-10:50",
        "AGL Library"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC552.pdf",
    credits: "3-0-0"
  },
  {
    id: 358,
    code: "GPC541",
    name: "Numerical Analysis and Data Structure",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "Annexe 102"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "Annexe 102"
      ],
      [
        "Friday",
        "10:00-10:50",
        "Annexe 102"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC541.pdf",
    credits: "3-0-0"
  },
  {
    id: 151,
    code: "HSI500",
    name: "Research and Technical Communication",
    department: "Humanities and Social Science",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "Wednesday"
      ],
      [
        "09:00-09:50",
        "Friday",
        "09:00-09:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSI500.pdf",
    credits: "3-0-0"
  },
  {
    id: 298,
    code: "GPC531",
    name: "Geotechnical Modelling",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "Thursday"
      ],
      [
        "10:00-10:50",
        "Friday",
        "11:00-11:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC531.pdf",
    credits: "3-0-0"
  },
  {
    id: 311,
    code: "CHC501",
    name: "Advanced Transport Phenomena",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "CHE-402"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "CHE-402"
      ],
      [
        "Friday",
        "10:00-10:50",
        "CHE-402"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC501.pdf",
    credits: "3-0-0"
  },
  {
    id: 151,
    code: "HSI500",
    name: "Research and Technical Communication",
    department: "Humanities and Social Science",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "Wednesday"
      ],
      [
        "09:00-09:50",
        "Friday",
        "09:00-09:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSI500.pdf",
    credits: "3-0-0"
  },
  {
    id: 157,
    code: "GPC513",
    name: "Geoelectrical Methods Practical",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "12:00-12:50",
        "516"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "516"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC513.pdf",
    credits: "0-0-2"
  },
  {
    id: 306,
    code: "GPC533",
    name: "Seismic Hazard Zonation",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "Wednesday"
      ],
      [
        "12:00-12:50",
        "Thursday",
        "11:00-11:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC533.pdf",
    credits: "3-0-0"
  },
  {
    id: 309,
    code: "CHC502",
    name: "Advanced Chemical Engineering Thermodynamics",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "CHE-402"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "CHE-402"
      ],
      [
        "Friday",
        "11:00-11:50",
        "CHE-402"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC502.pdf",
    credits: "3-0-0"
  },
  {
    id: 366,
    code: "CHC503",
    name: "Computational Techniques in Chemical Engineering",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "CHE-402"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "CHE-402"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "CHE-402"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC503.pdf",
    credits: "3-0-0"
  },
  {
    id: 367,
    code: "CHC519",
    name: "Catalytic Processes and Reactors",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "CHE-434"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "CHE-434"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "CHE-434"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC519.pdf",
    credits: "3-0-0"
  },
  {
    id: 368,
    code: "CHC520",
    name: "Applied Statistics in Chemical Engineering",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "CHE-434"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "CHE-434"
      ],
      [
        "Friday",
        "12:00-12:50",
        "CHE-434"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC520.pdf",
    credits: "3-0-0"
  },
  {
    id: 369,
    code: "PHD573",
    name: "Physics of Semiconducting Materials and Devices",
    department: "Physics",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "LC-II-C8"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-II-C8"
      ],
      [
        "Friday",
        "12:00-12:50",
        "LC-II-C8"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHD573.pdf",
    credits: "3-0-0"
  },
  {
    id: 370,
    code: "FMC352",
    name: "Heat Treatment and Mechanical Metallurgy Laboratory",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "Tuesday"
      ],
      [
        "10:00-10:50",
        "Tuesday",
        "11:00-11:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMC352.pdf",
    credits: "0-0-3"
  },
  {
    id: 371,
    code: "MCD535",
    name: "Bioinformatics",
    department: "Mathematics and Computing",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "06:00-06:50",
        "LC-II-G16"
      ],
      [
        "Wednesday",
        "05:00-05:50",
        "LC-II-G16"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "LC-II-G16"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCD535.pdf",
    credits: "3-0-0"
  },
  {
    id: 372,
    code: "GPC512",
    name: "Seismic Data Acquisition Practical",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "516"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "516"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC512.pdf",
    credits: "0-0-2"
  },
  {
    id: 373,
    code: "MCC402",
    name: "Software Engineering Practical",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "UG Lab-2"
      ],
      [
        "Monday",
        "02:00-02:50",
        "UG Lab-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC402.pdf",
    credits: "0-0-2"
  },
  {
    id: 374,
    code: "PEC209",
    name: "Petroleum Product Testing Practical",
    department: "Petroleum Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "04:00-04:50",
        "Production and Product Testing Laboratory"
      ],
      [
        "Tuesday",
        "05:00-05:50",
        "Production and Product Testing Laboratory"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "Thursday"
      ],
      [
        "05:00-05:50",
        null,
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEC209.pdf",
    credits: "0-0-2"
  },
  {
    id: 375,
    code: "GLC503",
    name: "Methods of Structural Geology",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "03:00-03:50",
        "AGL-3"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "AGL-3"
      ],
      [
        "Friday",
        "04:00-04:50",
        "AGL-3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC503.pdf",
    credits: "3-0-0"
  },
  {
    id: 376,
    code: "MCO502",
    name: "Optimization Techniques",
    department: "Mathematics and Computing",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "LC-II-G10"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-II-G10"
      ],
      [
        "Friday",
        "12:00-12:50",
        "LC-II-G10"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCO502.pdf",
    credits: "3-0-0"
  },
  {
    id: 377,
    code: "GLC506",
    name: "Mineralogy and Geochemistry Practical",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "10:00-10:50",
        "Wednesday"
      ],
      [
        "11:00-11:50",
        "Wednesday",
        "12:00-12:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC506.pdf",
    credits: "0-0-3"
  },
  {
    id: 378,
    code: "MCO401",
    name: "Partial Differential Equations",
    department: "Mathematics and Computing",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "11:00-11:50",
        "LC-I-C16"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-I-C16"
      ],
      [
        "Friday",
        "11:00-11:50",
        "LC-I-C16"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCO401.pdf",
    credits: "3-0-0"
  },
  {
    id: 354,
    code: "GLC502",
    name: "Applied Geochemistry",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "Wednesday"
      ],
      [
        "03:00-03:50",
        "Thursday",
        "03:00-03:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC502.pdf",
    credits: "3-0-0"
  },
  {
    id: 380,
    code: "GLC504",
    name: "Micropaleontology and Vertebrate Palaeontology",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "AGL-3"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "AGL-3"
      ],
      [
        "Friday",
        "06:00-06:50",
        "AGL-3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC504.pdf",
    credits: "3-0-0"
  },
  {
    id: 381,
    code: "GPC502",
    name: "Gravity Method",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "03:00-03:50",
        "Wednesday"
      ],
      [
        "04:00-04:50",
        "Friday",
        "04:00-04:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC502.pdf",
    credits: "3-0-0"
  },
  {
    id: 382,
    code: "GLC508",
    name: "Micropaleontology and Vertebrate Paleontology Practical",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "Tuesday"
      ],
      [
        "11:00-11:50",
        null,
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC508.pdf",
    credits: "0-0-2"
  },
  {
    id: 383,
    code: "GPC504",
    name: "Mathematical Functional Analysis",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "516"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "516"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "516"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC504.pdf",
    credits: "3-0-0"
  },
  {
    id: 384,
    code: "GPC505",
    name: "Gravity Method Practical",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "Monday"
      ],
      [
        "10:00-10:50",
        null,
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC505.pdf",
    credits: "0-0-2"
  },
  {
    id: 385,
    code: "GLO532",
    name: "Environmental Geology",
    department: "Applied Geology",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "LC-II-C3"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "LC-II-C3"
      ],
      [
        "Friday",
        "03:00-03:50",
        "LC-II-C3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLO532.pdf",
    credits: "3-0-0"
  },
  {
    id: 386,
    code: "GPE202",
    name: "Geophysical Prospecting",
    department: "Applied Geophysics",
    type: "Engineering Science Option (ESO)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "516"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "516"
      ],
      [
        "Friday",
        "02:00-02:50",
        "516"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPE202.pdf",
    credits: "3-0-0"
  },
  {
    id: 387,
    code: "GLC507",
    name: "Methods of Structural Geology Practical",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "10:00-10:50",
        "AGL-3"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "AGL-3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC507.pdf",
    credits: "0-0-2"
  },
  {
    id: 388,
    code: "GPE203",
    name: "Geophysical Prospecting Practical",
    department: "Applied Geophysics",
    type: "Engineering Science Option (ESO)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "516"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "516"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPE203.pdf",
    credits: "0-0-2"
  },
  {
    id: 389,
    code: "MCC301",
    name: "Number Theory and Cryptography",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "03:00-03:50",
        "LC-II-G13"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "LC-II-G13"
      ],
      [
        "Friday",
        "04:00-04:50",
        "LC-II-G13"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC301.pdf",
    credits: "3-0-0"
  },
  {
    id: 390,
    code: "GPC501",
    name: "Solid Earth Geophysics",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "Wednesday"
      ],
      [
        "06:00-06:50",
        "Friday",
        "06:00-06:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC501.pdf",
    credits: "3-0-0"
  },
  {
    id: 391,
    code: "GPC507",
    name: "Mathematical Functional Analysis Practical",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "10:00-10:50",
        "516"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "516"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC507.pdf",
    credits: "0-0-2"
  },
  {
    id: 392,
    code: "MCC302",
    name: "GPU Computing Practical",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "11:00-11:50",
        "LC-I-C17"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-I-C17"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC302.pdf",
    credits: "0-0-2"
  },
  {
    id: 393,
    code: "GPO501",
    name: "Groundwater Geophysics",
    department: "Applied Geophysics",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "AGP Annexure 1st Floor"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "AGP Annexure 1st Floor"
      ],
      [
        "Friday",
        "03:00-03:50",
        "AGP Annexure 1st Floor"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPO501.pdf",
    credits: "3-0-0"
  },
  {
    id: 394,
    code: "PHC511",
    name: "Condensed Matter Physics",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-II-C8"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-C8"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-II-C8"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC511.pdf",
    credits: "3-0-0"
  },
  {
    id: 395,
    code: "MCD541",
    name: "GPU Computing",
    department: "Mathematics and Computing",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "LC-II-G13"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "LC-II-G13"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "LC-II-G13"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCD541.pdf",
    credits: "3-0-0"
  },
  {
    id: 344,
    code: "MCC502",
    name: "Differential Equations",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "Wednesday"
      ],
      [
        "06:00-06:50",
        "Friday",
        "06:00-06:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC502.pdf",
    credits: "3-0-0"
  },
  {
    id: 397,
    code: "GLC202",
    name: "Physical and Structural Geology",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "Wednesday"
      ],
      [
        "10:00-10:50",
        "Friday",
        "11:00-11:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC202.pdf",
    credits: "3-0-0"
  },
  {
    id: 390,
    code: "GPC501",
    name: "Solid Earth Geophysics",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "Wednesday"
      ],
      [
        "06:00-06:50",
        "Friday",
        "06:00-06:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC501.pdf",
    credits: "3-0-0"
  },
  {
    id: 399,
    code: "GLC203",
    name: "Crystallography and Optical Mineralogy Practical",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "Petrology Lab"
      ],
      [
        "Monday",
        "04:00-04:50",
        "Petrology Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC203.pdf",
    credits: "0-0-2"
  },
  {
    id: 400,
    code: "MCO403",
    name: "Graph Algorithms",
    department: "Mathematics and Computing",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "Thursday"
      ],
      [
        "02:00-02:50",
        "Friday",
        "03:00-03:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCO403.pdf",
    credits: "3-0-0"
  },
  {
    id: 401,
    code: "GPC204",
    name: "Self-Potential Method Theory & Application Practical",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "04:00-04:50",
        "AGP Annexure Ground Floor"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "AGP Annexure Ground Floor"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC204.pdf",
    credits: "0-0-2"
  },
  {
    id: 82,
    code: "MSC515",
    name: "Software Lab",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "05:00-05:50",
        "MS 210"
      ],
      [
        "Tuesday",
        "06:00-06:50",
        "MS 210"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC515.pdf",
    credits: "0-0-2"
  },
  {
    id: 403,
    code: "GPC523",
    name: "Geoelectromagnetic Method Practical",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "AGP Annexure 1st Floor"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "AGP Annexure 1st Floor"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC523.pdf",
    credits: "0-0-2"
  },
  {
    id: 404,
    code: "MCD502",
    name: "Graph Theory",
    department: "Mathematics and Computing",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "LC-II-G7"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "LC-II-G7"
      ],
      [
        "Friday",
        "12:00-12:50",
        "LC-II-G7"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCD502.pdf",
    credits: "3-0-0"
  },
  {
    id: 405,
    code: "MCD510",
    name: "Complex Analysis",
    department: "Mathematics and Computing",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-II-G7"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-G7"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-II-G7"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCD510.pdf",
    credits: "3-0-0"
  },
  {
    id: 406,
    code: "MCC201",
    name: "Modern Algebra",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-I-C18"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-I-C18"
      ],
      [
        "Friday",
        "11:00-11:50",
        "LC-I-C18"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC201.pdf",
    credits: "3-0-0"
  },
  {
    id: 407,
    code: "GLE203",
    name: "Geology for Engineering and Sciences Practical",
    department: "Applied Geology",
    type: "Engineering Science Option (ESO)",
    timetable: [
      [
        "Tuesday",
        "04:00-04:50",
        "Coal Geology Lab"
      ],
      [
        "Tuesday",
        "05:00-05:50",
        "Coal Geology Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLE203.pdf",
    credits: "0-0-2"
  },
  {
    id: 408,
    code: "GLC201",
    name: "Crystallography and Mineralogy",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "Petrology Lab"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "Petrology Lab"
      ],
      [
        "Friday",
        "10:00-10:50",
        "Petrology Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC201.pdf",
    credits: "3-0-0"
  },
  {
    id: 409,
    code: "GPC202",
    name: "Self-Potential Method: Theory and Application",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "AGP Annexure Ground Floor"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "AGP Annexure Ground Floor"
      ],
      [
        "Friday",
        "10:00-10:50",
        "AGP Annexure Ground Floor"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC202.pdf",
    credits: "3-0-0"
  },
  {
    id: 410,
    code: "GPC203",
    name: "Lab on Rock Physics",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "AGP Annexure Ground Floor"
      ],
      [
        "Monday",
        "05:00-05:50",
        "AGP Annexure Ground Floor"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC203.pdf",
    credits: "0-0-2"
  },
  {
    id: 411,
    code: "MCC202",
    name: "Computer Organization and Architecture",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "LC-I-C18"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "LC-I-C18"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-I-C18"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC202.pdf",
    credits: "3-0-0"
  },
  {
    id: 412,
    code: "GLC204",
    name: "Structural Geology Practical",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "04:00-04:50",
        "Petrology Lab"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "Petrology Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC204.pdf",
    credits: "0-0-2"
  },
  {
    id: 413,
    code: "MCC203",
    name: "Real Analysis",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "LC-I-C18"
      ],
      [
        "Tuesday",
        "09:00-09:50",
        "LC-I-C18"
      ],
      [
        "Thursday",
        "09:00-09:50",
        "LC-I-C18"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC203.pdf",
    credits: "3-0-0"
  },
  {
    id: 386,
    code: "GPE202",
    name: "Geophysical Prospecting",
    department: "Applied Geophysics",
    type: "Engineering Science Option (ESO)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "516"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "516"
      ],
      [
        "Friday",
        "02:00-02:50",
        "516"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPE202.pdf",
    credits: "3-0-0"
  },
  {
    id: 415,
    code: "GLE201",
    name: "Geology for Engineering and Sciences",
    department: "Applied Geology",
    type: "Engineering Science Option (ESO)",
    timetable: [
      [
        "Monday",
        "08:00-08:50",
        "LC-II-G7"
      ],
      [
        "Tuesday",
        "08:00-08:50",
        "LC-II-G7"
      ],
      [
        "Wednesday",
        "08:00-08:50",
        "LC-II-G7"
      ],
      [
        "Thursday",
        "08:00-08:50",
        "LC-II-G7"
      ],
      [
        "Friday",
        "08:00-08:50",
        "LC-II-G7"
      ],
      [
        "Friday",
        "09:00-09:50",
        "LC-II-G7"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLE201.pdf",
    credits: "3-0-0"
  },
  {
    id: 346,
    code: "MCC505",
    name: "Probability & Statistics",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "08:00-08:50",
        "Thursday"
      ],
      [
        "08:00-08:50",
        "Friday",
        "09:00-09:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC505.pdf",
    credits: "3-0-0"
  },
  {
    id: 417,
    code: "CHD408",
    name: "Process Data Analytics",
    department: "Chemical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "CHE-401"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "CHE-401"
      ],
      [
        "Friday",
        "12:00-12:50",
        "CHE-401"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHD408.pdf",
    credits: "3-0-0"
  },
  {
    id: 397,
    code: "GLC202",
    name: "Physical and Structural Geology",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "Wednesday"
      ],
      [
        "10:00-10:50",
        "Friday",
        "11:00-11:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC202.pdf",
    credits: "3-0-0"
  },
  {
    id: 419,
    code: "CHD413",
    name: "Advanced Separation Processes",
    department: "Chemical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "CHE-402"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "CHE-402"
      ],
      [
        "Friday",
        "12:00-12:50",
        "CHE-402"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHD413.pdf",
    credits: "3-0-0"
  },
  {
    id: 420,
    code: "CHD405",
    name: "Energy Technology",
    department: "Chemical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "CHE-401"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "CHE-401"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "CHE-401"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHD405.pdf",
    credits: "3-0-0"
  },
  {
    id: 421,
    code: "GPC201",
    name: "Introduction to Rock Physics",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "AGP Annexure Ground Floor"
      ],
      [
        "Tuesday",
        "09:00-09:50",
        "AGP Annexure Ground Floor"
      ],
      [
        "Thursday",
        "09:00-09:50",
        "AGP Annexure Ground Floor"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC201.pdf",
    credits: "3-0-0"
  },
  {
    id: 422,
    code: "CHO402",
    name: "Biofuels & Biomass Conversion Technology",
    department: "Chemical Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "11:00-11:50",
        "CHE-401"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "CHE-401"
      ],
      [
        "Friday",
        "11:00-11:50",
        "CHE-401"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHO402.pdf",
    credits: "3-0-0"
  },
  {
    id: 423,
    code: "MCC204",
    name: "Computer Organization and Architecture Practical",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "UG Lab-1"
      ],
      [
        "Monday",
        "05:00-05:50",
        "UG Lab-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC204.pdf",
    credits: "0-0-2"
  },
  {
    id: 424,
    code: "CHD415",
    name: "Interfacial Phenomena and Microfluidics",
    department: "Chemical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "CHE-423"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "CHE-423"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "CHE-423"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHD415.pdf",
    credits: "3-0-0"
  },
  {
    id: 425,
    code: "CHO404",
    name: "AI in Process Industries",
    department: "Chemical Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "CHE-401"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "CHE-401"
      ],
      [
        "Friday",
        "10:00-10:50",
        "CHE-401"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHO404.pdf",
    credits: "3-0-0"
  },
  {
    id: 426,
    code: "CHO401",
    name: "Process Integration",
    department: "Chemical Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "CHE-423"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "CHE-423"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "CHE-423"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHO401.pdf",
    credits: "3-0-0"
  },
  {
    id: 427,
    code: "CSO504",
    name: "Machine Learning",
    department: "Computer Science & Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "LC-II-G15"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "LC-II-G15"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-II-G15"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSO504.pdf",
    credits: "3-0-0"
  },
  {
    id: 428,
    code: "CSD407",
    name: "Network Security",
    department: "Computer Science & Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "LC-II-G14"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "LC-II-G14"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "LC-II-G14"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSD407.pdf",
    credits: "3-0-0"
  },
  {
    id: 429,
    code: "CSD410",
    name: "Quantum Computing",
    department: "Computer Science & Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "Wednesday"
      ],
      [
        "12:00-12:50",
        "Friday",
        "12:00-12:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSD410.pdf",
    credits: "3-0-0"
  },
  {
    id: 430,
    code: "ECD415",
    name: "Optical Communication",
    department: "Electronics Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "LC-II-G7"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "LC-II-G7"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-II-G7"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECD415.pdf",
    credits: "3-0-0"
  },
  {
    id: 431,
    code: "CSD502",
    name: "Cloud Computing",
    department: "Computer Science & Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "LC-II-C19"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-II-C19"
      ],
      [
        "Friday",
        "12:00-12:50",
        "LC-II-C19"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSD502.pdf",
    credits: "3-0-0"
  },
  {
    id: 432,
    code: "ECO502",
    name: "Neuromorphic Engineering",
    department: "Electronics Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "11:00-11:50",
        "Thursday"
      ],
      [
        "11:00-11:50",
        "Friday",
        "11:00-11:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECO502.pdf",
    credits: "3-0-0"
  },
  {
    id: 433,
    code: "CSO404",
    name: "Cryptography",
    department: "Computer Science & Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "LC-II-G15"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-G15"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "LC-II-G15"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSO404.pdf",
    credits: "3-0-0"
  },
  {
    id: 434,
    code: "ECD401",
    name: "Antenna and Wave Propagation",
    department: "Electronics Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "Wednesday"
      ],
      [
        "12:00-12:50",
        "Friday",
        "12:00-12:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECD401.pdf",
    credits: "3-0-0"
  },
  {
    id: 435,
    code: "ECD418",
    name: "Semiconductor Device Modeling and Simulation",
    department: "Electronics Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "Wednesday"
      ],
      [
        "12:00-12:50",
        "Friday",
        "12:00-12:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECD418.pdf",
    credits: "3-0-0"
  },
  {
    id: 436,
    code: "ECO561",
    name: "Embedded System Design",
    department: "Electronics Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "11:00-11:50",
        "LC-II-G7"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-II-G7"
      ],
      [
        "Friday",
        "11:00-11:50",
        "LC-II-G7"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECO561.pdf",
    credits: "3-0-0"
  },
  {
    id: 437,
    code: "CSO403",
    name: "Internet Technology",
    department: "Computer Science & Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "11:00-11:50",
        "LC-II-G15"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-II-G15"
      ],
      [
        "Friday",
        "11:00-11:50",
        "LC-II-G15"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSO403.pdf",
    credits: "3-0-0"
  },
  {
    id: 438,
    code: "ECD405",
    name: "Digital Systems Design using HDL",
    department: "Electronics Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "11:00-11:50",
        "LC-II-C1"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "LC-II-C1"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-II-C1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECD405.pdf",
    credits: "3-0-0"
  },
  {
    id: 439,
    code: "ECD411",
    name: "Machine learning & Artificial Intelligence",
    department: "Electronics Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "LC-II-G7"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "LC-II-G7"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "LC-II-G7"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECD411.pdf",
    credits: "3-0-0"
  },
  {
    id: 440,
    code: "ECO301",
    name: "Microprocessor and its Application",
    department: "Electronics Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "LC-II-G7"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "LC-II-G7"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-II-G7"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECO301.pdf",
    credits: "3-0-0"
  },
  {
    id: 441,
    code: "ECO302",
    name: "Power Electronics",
    department: "Electronics Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "LC-II-G7"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-G7"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "LC-II-G7"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECO302.pdf",
    credits: "3-0-0"
  },
  {
    id: 149,
    code: "GLC509",
    name: "Igneous Petrology",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "AGL-3"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "AGL-3"
      ],
      [
        "Friday",
        "02:00-02:50",
        "AGL-3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC509.pdf",
    credits: "3-0-0"
  },
  {
    id: 443,
    code: "ESC357",
    name: "Solid Waste Management Practical",
    department: "Environmental Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "Wastewater Lab"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "Wastewater Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESC357.pdf",
    credits: "0-0-2"
  },
  {
    id: 444,
    code: "ESC312",
    name: "Geoinformatics",
    department: "Environmental Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "FME-2"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "FME-2"
      ],
      [
        "Friday",
        "06:00-06:50",
        "FME-2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESC312.pdf",
    credits: "3-0-0"
  },
  {
    id: 445,
    code: "PHC205",
    name: "Introduction to Quantum Mechanics",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "LC-II-C15"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "LC-II-C15"
      ],
      [
        "Friday",
        "09:00-09:50",
        "LC-II-C15"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC205.pdf",
    credits: "3-0-0"
  },
  {
    id: 85,
    code: "MSC517",
    name: "Simulation Modelling & Analysis Lab",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "08:00-08:50",
        "MS 210"
      ],
      [
        "Thursday",
        "09:00-09:50",
        "MS 210"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC517.pdf",
    credits: "0-0-2"
  },
  {
    id: 447,
    code: "MCC513",
    name: "Database Management Systems Practical",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "UG Lab-2"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "UG Lab-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC513.pdf",
    credits: "0-0-2"
  },
  {
    id: 148,
    code: "GLC513",
    name: "Coal Geology",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "AGL-3"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "AGL-3"
      ],
      [
        "Friday",
        "03:00-03:50",
        "AGL-3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC513.pdf",
    credits: "3-0-0"
  },
  {
    id: 449,
    code: "GLD571",
    name: "Petroleum Exploration and Micropalaeontology",
    department: "Applied Geology",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "AGL-3"
      ],
      [
        "Tuesday",
        "04:00-04:50",
        "AGL-3"
      ],
      [
        "Friday",
        "05:00-05:50",
        "AGL-3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLD571.pdf",
    credits: "3-0-0"
  },
  {
    id: 450,
    code: "GPC515",
    name: "Earthquake Seismology and Well Logging Practical",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Friday",
        "10:00-10:50",
        "516"
      ],
      [
        "Friday",
        "11:00-11:50",
        "516"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC515.pdf",
    credits: "0-0-2"
  },
  {
    id: 451,
    code: "PHC513",
    name: "Experimental Physics - IV",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "04:00-04:50",
        "PHPG LAB"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "PHPG LAB"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC513.pdf",
    credits: "0-0-2"
  },
  {
    id: 452,
    code: "GLC526",
    name: "Ore Geology",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "LC-II-C7"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-II-C7"
      ],
      [
        "Friday",
        "11:00-11:50",
        "LC-II-C7"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC526.pdf",
    credits: "3-0-0"
  },
  {
    id: 453,
    code: "GLC533",
    name: "Ore Geology Practical",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "Ore Geology Lab"
      ],
      [
        "Monday",
        "03:00-03:50",
        "Ore Geology Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC533.pdf",
    credits: "0-0-2"
  },
  {
    id: 454,
    code: "GLC516",
    name: "Coal Geology Practical",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "10:00-10:50",
        "Coal Geology Lab"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "Coal Geology Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC516.pdf",
    credits: "0-0-2"
  },
  {
    id: 455,
    code: "GLD594",
    name: "Geotechniques of Dams, Tunnels and Underground Space",
    department: "Applied Geology",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "08:00-08:50",
        "LC-II-C7"
      ],
      [
        "Wednesday",
        "08:00-08:50",
        "LC-II-C7"
      ],
      [
        "Friday",
        "08:00-08:50",
        "LC-II-C7"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLD594.pdf",
    credits: "3-0-0"
  },
  {
    id: 177,
    code: "GPC522",
    name: "Magnetic Method Practical",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "AGP Annexure 1st Floor"
      ],
      [
        "Monday",
        "02:00-02:50",
        "AGP Annexure 1st Floor"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC522.pdf",
    credits: "0-0-2"
  },
  {
    id: 457,
    code: "HSD513",
    name: "Introduction to Poetry",
    department: "Humanities and Social Science",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "LC-II-G10"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "LC-II-G10"
      ],
      [
        "Friday",
        "04:00-04:50",
        "LC-II-G10"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSD513.pdf",
    credits: "3-0-0"
  },
  {
    id: 458,
    code: "MNO401",
    name: "Rock Engineering",
    department: "Mining Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "MIN- Seminar Hall"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "MIN- Seminar Hall"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "MIN- Seminar Hall"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNO401.pdf",
    credits: "3-0-0"
  },
  {
    id: 459,
    code: "GPC510",
    name: "Well Logging",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "LC-II-C12"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "LC-II-C12"
      ],
      [
        "Friday",
        "06:00-06:50",
        "LC-II-C12"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC510.pdf",
    credits: "3-0-0"
  },
  {
    id: 460,
    code: "PHC509",
    name: "Electrodynamics and Radiation theory",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "09:00-09:50",
        "LC-II-C8"
      ],
      [
        "Thursday",
        "09:00-09:50",
        "LC-II-C8"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-II-C8"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC509.pdf",
    credits: "3-0-0"
  },
  {
    id: 461,
    code: "ESC311",
    name: "Solid Waste Management",
    department: "Environmental Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "FME-2"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "FME-2"
      ],
      [
        "Friday",
        "02:00-02:50",
        "FME-2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESC311.pdf",
    credits: "3-0-0"
  },
  {
    id: 462,
    code: "CYD502",
    name: "Polymer Chemistry",
    department: "Chemical and Chemical Biology",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "LC-II-C10"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-II-C10"
      ],
      [
        "Friday",
        "12:00-12:50",
        "LC-II-C10"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYD502.pdf",
    credits: "3-0-0"
  },
  {
    id: 463,
    code: "GPC206",
    name: "Mathematical Geophysics",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "Annexe 102"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "Annexe 102"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "Annexe 102"
      ],
      [
        "Friday",
        "10:00-10:50",
        "Annexe 102"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC206.pdf",
    credits: "3-1-0"
  },
  {
    id: 257,
    code: "GLC510",
    name: "Metamorphic Petrology",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "AGL-3"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "AGL-3"
      ],
      [
        "Friday",
        "06:00-06:50",
        "AGL-3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC510.pdf",
    credits: "3-0-0"
  },
  {
    id: 465,
    code: "GPC511",
    name: "Seismic Data Acquisition",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "LC-II-C12"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "LC-II-C12"
      ],
      [
        "Friday",
        "02:00-02:50",
        "LC-II-C12"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC511.pdf",
    credits: "3-0-0"
  },
  {
    id: 466,
    code: "GPO503",
    name: "Artificial Intelligence and Machine Learning in Geosciences",
    department: "Applied Geophysics",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "LC-II-C12"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "LC-II-C12"
      ],
      [
        "Friday",
        "03:00-03:50",
        "LC-II-C12"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPO503.pdf",
    credits: "3-0-0"
  },
  {
    id: 467,
    code: "GLD528",
    name: "Geotechnical Engineering",
    department: "Applied Geology",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "LC-II-C7"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "LC-II-C7"
      ],
      [
        "Friday",
        "12:00-12:50",
        "LC-II-C7"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLD528.pdf",
    credits: "3-0-0"
  },
  {
    id: 468,
    code: "MSC524",
    name: "Marketing Management",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "MS 111"
      ],
      [
        "Tuesday",
        "09:00-09:50",
        "MS 111"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "MS 111"
      ],
      [
        "Friday",
        "12:00-12:50",
        "MS 111"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC524.pdf",
    credits: "4-0-0"
  },
  {
    id: 469,
    code: "GPC520",
    name: "Magnetic Method",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-II-C13"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-C13"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-II-C13"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC520.pdf",
    credits: "3-0-0"
  },
  {
    id: 90,
    code: "MSC527",
    name: "Machine Learning",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "MS 209"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "MS 209"
      ],
      [
        "Friday",
        "06:00-06:50",
        "MS 209"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC527.pdf",
    credits: "3-0-0"
  },
  {
    id: 164,
    code: "GLC515",
    name: "Sedimentology and Petroleum Geology Practical",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Friday",
        "10:00-10:50",
        "AGL-3"
      ],
      [
        "Friday",
        "11:00-11:50",
        "AGL-3"
      ],
      [
        "Friday",
        "12:00-12:50",
        "AGL-3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC515.pdf",
    credits: "0-0-3"
  },
  {
    id: 472,
    code: "GPC509",
    name: "Geoelectrical Method",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "LC-II-C12"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "LC-II-C12"
      ],
      [
        "Friday",
        "04:00-04:50",
        "LC-II-C12"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC509.pdf",
    credits: "3-0-0"
  },
  {
    id: 473,
    code: "GLD575",
    name: "Modern Instrumental Methods in Exploration Geosciences",
    department: "Applied Geology",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "AGL-3"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "AGL-3"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "AGL-3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLD575.pdf",
    credits: "3-0-0"
  },
  {
    id: 474,
    code: "GPC521",
    name: "Geoelectromagnetic Method",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "LC-II-C13"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-II-C13"
      ],
      [
        "Friday",
        "11:00-11:50",
        "LC-II-C13"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC521.pdf",
    credits: "3-0-0"
  },
  {
    id: 475,
    code: "MSC512",
    name: "Operations Management",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "MS 113"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "MS 113"
      ],
      [
        "Friday",
        "09:00-09:50",
        "MS 113"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC512.pdf",
    credits: "3-0-0"
  },
  {
    id: 476,
    code: "MSC513",
    name: "Marketing Management",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "MS 210"
      ],
      [
        "Tuesday",
        "09:00-09:50",
        "MS 210"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "MS 210"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC513.pdf",
    credits: "3-0-0"
  },
  {
    id: 477,
    code: "GPD508",
    name: "Seismological Data Analysis",
    department: "Applied Geophysics",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "08:00-08:50",
        "LC-II-C13"
      ],
      [
        "Wednesday",
        "08:00-08:50",
        "LC-II-C13"
      ],
      [
        "Friday",
        "08:00-08:50",
        "LC-II-C13"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPD508.pdf",
    credits: "3-0-0"
  },
  {
    id: 478,
    code: "MSC510",
    name: "Corporate Finance",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "MS 209"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "MS 209"
      ],
      [
        "Friday",
        "10:00-10:50",
        "MS 209"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC510.pdf",
    credits: "3-0-0"
  },
  {
    id: 479,
    code: "CSC308",
    name: "Software Engineering Lab",
    department: "Computer Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "CSE LAB - III"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "CSE LAB - III"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "Thursday"
      ],
      [
        "10:00-10:50",
        null,
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSC308.pdf",
    credits: "0-0-2"
  },
  {
    id: 480,
    code: "PEC210",
    name: "Drilling Simulation Practical",
    department: "Petroleum Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "04:00-04:50",
        "Tuesday"
      ],
      [
        "05:00-05:50",
        "Thursday",
        "05:00-05:50"
      ],
      [
        "Thursday",
        "04:00-04:50",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEC210.pdf",
    credits: "0-0-2"
  },
  {
    id: 481,
    code: "EEO302",
    name: "Industrial Utilization of Electrical Power",
    department: "Electrical Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "PET 4"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "PET 4"
      ],
      [
        "Friday",
        "04:00-04:50",
        "PET 4"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEO302.pdf",
    credits: "3-0-0"
  },
  {
    id: 482,
    code: "CSO302",
    name: "Graph Theory",
    department: "Computer Science & Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "LC-II-C6"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "LC-II-C6"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "LC-II-C6"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSO302.pdf",
    credits: "3-0-0"
  },
  {
    id: 483,
    code: "MEC516",
    name: "Unconventional Manufacturing Processes",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "MECH-G2"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "MECH-G2"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "MECH-G2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEC516.pdf",
    credits: "3-0-0"
  },
  {
    id: 484,
    code: "MSC531",
    name: "Managerial Ethics, Values and CSR",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "MS 210"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "MS 210"
      ],
      [
        "Friday",
        "11:00-11:50",
        "MS 210"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC531.pdf",
    credits: "3-0-0"
  },
  {
    id: 485,
    code: "ESC358",
    name: "Geoinformatics Practical",
    department: "Environmental Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "10:00-10:50",
        "Remote Sensing & GIS Lab"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "Remote Sensing & GIS Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESC358.pdf",
    credits: "0-0-2"
  },
  {
    id: 486,
    code: "MSO503",
    name: "International Macroeconomics and Monetary Policy",
    department: "Management Studies and Insdustrical Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "LC-II-C1"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "LC-II-C1"
      ],
      [
        "Friday",
        "03:00-03:50",
        "LC-II-C1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSO503.pdf",
    credits: "3-0-0"
  },
  {
    id: 487,
    code: "GPD507",
    name: "Geophysics for Mineral Exploration",
    department: "Applied Geophysics",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "LC-II-C13"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "LC-II-C13"
      ],
      [
        "Friday",
        "12:00-12:50",
        "LC-II-C13"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPD507.pdf",
    credits: "3-0-0"
  },
  {
    id: 488,
    code: "GLO501",
    name: "Image Processing and Data Analysis",
    department: "Applied Geology",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "06:00-06:50",
        "AGL-3"
      ],
      [
        "Wednesday",
        "05:00-05:50",
        "AGL-3"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "AGL-3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLO501.pdf",
    credits: "3-0-0"
  },
  {
    id: 489,
    code: "GPC508",
    name: "Earthquake Seismology",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "LC-II-C12"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "LC-II-C12"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "LC-II-C12"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC508.pdf",
    credits: "3-0-0"
  },
  {
    id: 478,
    code: "MSC510",
    name: "Corporate Finance",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "MS 209"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "MS 209"
      ],
      [
        "Friday",
        "10:00-10:50",
        "MS 209"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC510.pdf",
    credits: "3-0-0"
  },
  {
    id: 491,
    code: "GPD505",
    name: "Near Surface Geophysics and Geotechnical Modelling",
    department: "Applied Geophysics",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "LC-II-C12"
      ],
      [
        "Tuesday",
        "04:00-04:50",
        "LC-II-C12"
      ],
      [
        "Friday",
        "05:00-05:50",
        "LC-II-C12"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPD505.pdf",
    credits: "3-0-0"
  },
  {
    id: 492,
    code: "PHC206",
    name: "Applied Optics",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-II-C15"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-C15"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-II-C15"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC206.pdf",
    credits: "3-0-0"
  },
  {
    id: 493,
    code: "CYC525",
    name: "Basic of Pharmacology & Drug Design",
    department: "Chemical and Chemical Biology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "LC-I-C13"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "LC-I-C13"
      ],
      [
        "Friday",
        "11:00-11:50",
        "LC-I-C13"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYC525.pdf",
    credits: "3-0-0"
  },
  {
    id: 494,
    code: "CHD504",
    name: "Process Optimization",
    department: "Chemical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "CHE-434"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "CHE-434"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "CHE-434"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHD504.pdf",
    credits: "3-0-0"
  },
  {
    id: 495,
    code: "MSD536",
    name: "Public Policy Analysis",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "04:00-04:50",
        "MS 209"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "MS 209"
      ],
      [
        "Friday",
        "04:00-04:50",
        "MS 209"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSD536.pdf",
    credits: "3-0-0"
  },
  {
    id: 496,
    code: "MSD523",
    name: "Management of Self and Behavioural Analytics",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "MS 210"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "MS 210"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "MS 210"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSD523.pdf",
    credits: "3-0-0"
  },
  {
    id: 497,
    code: "CHC530",
    name: "Reaction Engineering",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "LC-II-C13"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "LC-II-C13"
      ],
      [
        "Friday",
        "02:00-02:50",
        "LC-II-C13"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC530.pdf",
    credits: "3-0-0"
  },
  {
    id: 498,
    code: "CHC531",
    name: "Chemical Engineering Lab",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "Monday"
      ],
      [
        "10:00-10:50",
        "Monday",
        "11:00-11:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC531.pdf",
    credits: "0-0-3"
  },
  {
    id: 499,
    code: "ESD404",
    name: "Water Resource Planning and Management",
    department: "Environmental Science & Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "FME-2"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "FME-2"
      ],
      [
        "Friday",
        "03:00-03:50",
        "FME-2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESD404.pdf",
    credits: "3-0-0"
  },
  {
    id: 500,
    code: "ESD513",
    name: "Energy Auditing and Management",
    department: "Environmental Science & Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "FME-2"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "FME-2"
      ],
      [
        "Friday",
        "04:00-04:50",
        "FME-2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESD513.pdf",
    credits: "3-0-0"
  },
  {
    id: 501,
    code: "CSC506",
    name: "Advanced Data Structures & Algorithms Lab",
    department: "Computer Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "CSE LAB - III"
      ],
      [
        "Monday",
        "05:00-05:50",
        "CSE LAB - III"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSC506.pdf",
    credits: "0-0-2"
  },
  {
    id: 502,
    code: "CSC507",
    name: "Computing Techniques and Mathematical Tools Lab",
    department: "Computer Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "04:00-04:50",
        "CSE LAB - III"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "CSE LAB - III"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSC507.pdf",
    credits: "0-0-2"
  },
  {
    id: 503,
    code: "ECC583",
    name: "VLSI & Communication Systems Lab",
    department: "Electronics Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "VLSI Lab (202)"
      ],
      [
        "Monday",
        "05:00-05:50",
        "VLSI Lab (202)"
      ],
      [
        "Monday",
        "06:00-06:50",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECC583.pdf",
    credits: "0-0-3"
  },
  {
    id: 504,
    code: "ECC584",
    name: "RF & Photonics Lab",
    department: "Electronics Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "04:00-04:50",
        "Optical Instrumentation Lab (627)"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "Optical Instrumentation Lab (627)"
      ],
      [
        "Thursday",
        "06:00-06:50",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECC584.pdf",
    credits: "0-0-3"
  },
  {
    id: 505,
    code: "CYD528",
    name: "Modern Separation Techniques",
    department: "Chemical and Chemical Biology",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "LC-II-C13"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "LC-II-C13"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "LC-II-C13"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYD528.pdf",
    credits: "3-0-0"
  },
  {
    id: 506,
    code: "CYC529",
    name: "Formulation/Manufacturing Lab",
    department: "Chemical and Chemical Biology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "12:00-12:50",
        "PG Lab"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "PG Lab"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "PG Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYC529.pdf",
    credits: "0-0-3"
  },
  {
    id: 507,
    code: "HSO310",
    name: "Psychology of Everyday Life",
    department: "Humanities and Social Science",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "LC-II-G10"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "LC-II-G10"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "LC-II-G10"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSO310.pdf",
    credits: "3-0-0"
  },
  {
    id: 508,
    code: "CEC305",
    name: "Design of Steel Structures",
    department: "Civil Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "LC-II-C5"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "LC-II-C5"
      ],
      [
        "Friday",
        "02:00-02:50",
        "LC-II-C5"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEC305.pdf",
    credits: "3-0-0"
  },
  {
    id: 509,
    code: "MSD504",
    name: "HR Analytics",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "MS 210"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "MS 210"
      ],
      [
        "Friday",
        "03:00-03:50",
        "MS 210"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSD504.pdf",
    credits: "3-0-0"
  },
  {
    id: 510,
    code: "FMC304",
    name: "Coal and Mineral Processing Plant Design",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "LC-II-C8"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "LC-II-C8"
      ],
      [
        "Friday",
        "02:00-02:50",
        "LC-II-C8"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMC304.pdf",
    credits: "3-0-0"
  },
  {
    id: 511,
    code: "ESD508",
    name: "Social Impact Assessment and R&R",
    department: "Environmental Science & Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "FME-2"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "FME-2"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "FME-2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESD508.pdf",
    credits: "3-0-0"
  },
  {
    id: 151,
    code: "HSI500",
    name: "Research and Technical Communication",
    department: "Humanities and Social Science",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "Wednesday"
      ],
      [
        "09:00-09:50",
        "Friday",
        "09:00-09:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSI500.pdf",
    credits: "3-0-0"
  },
  {
    id: 513,
    code: "CYD512",
    name: "Modern Aspects of Catalysis and Surface Science",
    department: "Chemical and Chemical Biology",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "HSS class room -1"
      ],
      [
        "Tuesday",
        "04:00-04:50",
        "HSS class room -1"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "HSS class room -1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYD512.pdf",
    credits: "3-0-0"
  },
  {
    id: 293,
    code: "CSI102",
    name: "Computer Programming Lab",
    department: "Computer Science & Engineering",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "NLHC Computer Lab - I"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSI102.pdf",
    credits: "0-0-2"
  },
  {
    id: 515,
    code: "MED545",
    name: "Turbomachinery",
    department: "Mechanical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "MME-207"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "MME-207"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "MME-207"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MED545.pdf",
    credits: "3-0-0"
  },
  {
    id: 516,
    code: "HSO505",
    name: "Social Entrepreneurship",
    department: "Humanities and Social Science",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "08:00-08:50",
        "LC-II-C8"
      ],
      [
        "Tuesday",
        "02:00-02:50",
        "LC-II-C8"
      ],
      [
        "Tuesday",
        "08:00-08:50",
        "LC-II-C8"
      ],
      [
        "Wednesday",
        "08:00-08:50",
        "LC-II-C8"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "LC-II-C8"
      ],
      [
        "Thursday",
        "08:00-08:50",
        "LC-II-C8"
      ],
      [
        "Friday",
        "03:00-03:50",
        "LC-II-C8"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSO505.pdf",
    credits: "1-0-6"
  },
  {
    id: 287,
    code: "CSI101",
    name: "Computer Programming",
    department: "Computer Science & Engineering",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Wednesday",
        "02:00-02:50",
        "LC-II-G2"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "LC-II-G2"
      ],
      [
        "Friday",
        "04:00-04:50",
        "LC-II-G2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSI101.pdf",
    credits: "2-1-0"
  },
  {
    id: 287,
    code: "CSI101",
    name: "Computer Programming",
    department: "Computer Science & Engineering",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Wednesday",
        "02:00-02:50",
        "LC-II-G2"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "LC-II-G2"
      ],
      [
        "Friday",
        "04:00-04:50",
        "LC-II-G2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSI101.pdf",
    credits: "2-1-0"
  },
  {
    id: 293,
    code: "CSI102",
    name: "Computer Programming Lab",
    department: "Computer Science & Engineering",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "NLHC Computer Lab - I"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSI102.pdf",
    credits: "0-0-2"
  },
  {
    id: 151,
    code: "HSI500",
    name: "Research and Technical Communication",
    department: "Humanities and Social Science",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "Wednesday"
      ],
      [
        "09:00-09:50",
        "Friday",
        "09:00-09:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSI500.pdf",
    credits: "3-0-0"
  },
  {
    id: 291,
    code: "MEI102",
    name: "Manufacturing Processes",
    department: "Mechanical Engineering",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "LC-II-G1"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "LC-II-G1"
      ],
      [
        "Tuesday",
        "10:00-10:50",
        "LC-II-G1"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "LC-II-G1"
      ],
      [
        "Tuesday",
        "04:00-04:50",
        "LC-II-G1"
      ],
      [
        "Tuesday",
        "09:00-09:50",
        "LC-II-G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEI102.pdf",
    credits: "2-0-3"
  },
  {
    id: 151,
    code: "HSI500",
    name: "Research and Technical Communication",
    department: "Humanities and Social Science",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "Wednesday"
      ],
      [
        "09:00-09:50",
        "Friday",
        "09:00-09:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSI500.pdf",
    credits: "3-0-0"
  },
  {
    id: 523,
    code: "FMD516",
    name: "Advanced Phase Transformation",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "LC-II-C3"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "LC-II-C3"
      ],
      [
        "Friday",
        "03:00-03:50",
        "LC-II-C3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMD516.pdf",
    credits: "3-0-0"
  },
  {
    id: 524,
    code: "MED513",
    name: "Thermo-Production Processes",
    department: "Mechanical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "MME-212"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "MME-212"
      ],
      [
        "Friday",
        "03:00-03:50",
        "MME-212"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MED513.pdf",
    credits: "3-0-0"
  },
  {
    id: 525,
    code: "MCD503",
    name: "Integral Equations and Calculus of Variations",
    department: "Mathematics and Computing",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "05:00-05:50",
        "LC-I-C11"
      ],
      [
        "Wednesday",
        "05:00-05:50",
        "LC-I-C11"
      ],
      [
        "Friday",
        "03:00-03:50",
        "LC-I-C11"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCD503.pdf",
    credits: "3-0-0"
  },
  {
    id: 166,
    code: "GLC512",
    name: "Petroleum Geology",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "PET 2"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "PET 2"
      ],
      [
        "Friday",
        "04:00-04:50",
        "PET 2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC512.pdf",
    credits: "3-0-0"
  },
  {
    id: 527,
    code: "MEC308",
    name: "Computer Aided Manufacturing Lab",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "Workshop"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "Workshop"
      ],
      [
        "Tuesday",
        "12:00-12:50",
        "Workshop"
      ],
      [
        "Friday",
        "09:00-09:50",
        "Friday"
      ],
      [
        "10:00-10:50",
        "Friday",
        "11:00-11:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEC308.pdf",
    credits: "0-0-3"
  },
  {
    id: 528,
    code: "PEC206",
    name: "Elements of Petroleum Production Engineering",
    department: "Petroleum Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "PET 2"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "PET 2"
      ],
      [
        "Friday",
        "09:00-09:50",
        "PET 2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEC206.pdf",
    credits: "3-0-0"
  },
  {
    id: 529,
    code: "CYD531",
    name: "Biotechnology in Pharmaceutical Sciences",
    department: "Chemical and Chemical Biology",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "LC-II-C13"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "LC-II-C13"
      ],
      [
        "Friday",
        "03:00-03:50",
        "LC-II-C13"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYD531.pdf",
    credits: "3-0-0"
  },
  {
    id: 530,
    code: "CYD506",
    name: "Computational Chemistry",
    department: "Chemical and Chemical Biology",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "Tuesday"
      ],
      [
        "04:00-04:50",
        "Thursday",
        "05:00-05:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYD506.pdf",
    credits: "3-0-0"
  },
  {
    id: 531,
    code: "MEC309",
    name: "Heat Power and Refrigeration Lab",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "09:00-09:50",
        "ThE lab"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "ThE lab"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "Thursday"
      ],
      [
        "12:00-12:50",
        null,
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEC309.pdf",
    credits: "0-0-2"
  },
  {
    id: 532,
    code: "MMC307",
    name: "Mining Machinery Lab",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "MH- LAB"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "MH- LAB"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MMC307.pdf",
    credits: "0-0-2"
  },
  {
    id: 533,
    code: "CYD529",
    name: "Computer Aided Drug Discovery",
    department: "Chemical and Chemical Biology",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "04:00-04:50",
        "LC-II-C13"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "LC-II-C13"
      ],
      [
        "Friday",
        "04:00-04:50",
        "LC-II-C13"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYD529.pdf",
    credits: "3-0-0"
  },
  {
    id: 534,
    code: "MSD514",
    name: "Financial Econometrics",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "MS 111"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "MS 111"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "MS 111"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSD514.pdf",
    credits: "3-0-0"
  },
  {
    id: 535,
    code: "ECC580",
    name: "Mathematical and Simulation Techniques",
    department: "Electronics Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "LC-II-C7"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-II-C7"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-II-C7"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECC580.pdf",
    credits: "3-0-0"
  },
  {
    id: 347,
    code: "MCC503",
    name: "Numerical Methods",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "Wednesday"
      ],
      [
        "09:00-09:50",
        "Friday",
        "10:00-10:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC503.pdf",
    credits: "3-0-0"
  },
  {
    id: 537,
    code: "FMC303",
    name: "Mechanical Metallurgy",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "LC-II-C8"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "LC-II-C8"
      ],
      [
        "Friday",
        "06:00-06:50",
        "LC-II-C8"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMC303.pdf",
    credits: "3-0-0"
  },
  {
    id: 538,
    code: "MSC529",
    name: "Big Data Lab",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "10:00-10:50",
        "MS 111"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "MS 111"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC529.pdf",
    credits: "0-0-2"
  },
  {
    id: 539,
    code: "ECC501",
    name: "Advanced Optical Communication",
    department: "Electronics Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "LC-II-C6"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "LC-II-C6"
      ],
      [
        "Friday",
        "11:00-11:50",
        "LC-II-C6"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECC501.pdf",
    credits: "3-0-0"
  },
  {
    id: 540,
    code: "ECC542",
    name: "Microwave Transmission Lines and Matching Networks",
    department: "Electronics Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "LC-II-C6"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "LC-II-C6"
      ],
      [
        "Friday",
        "12:00-12:50",
        "LC-II-C6"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECC542.pdf",
    credits: "3-0-0"
  },
  {
    id: 541,
    code: "ECC500",
    name: "Advanced Communication Theory",
    department: "Electronics Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-II-C7"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-C7"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-II-C7"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECC500.pdf",
    credits: "3-0-0"
  },
  {
    id: 542,
    code: "MCC521",
    name: "Bayesian Survival Analysis",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "LC-I-C7"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-I-C7"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-I-C7"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC521.pdf",
    credits: "3-0-0"
  },
  {
    id: 151,
    code: "HSI500",
    name: "Research and Technical Communication",
    department: "Humanities and Social Science",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "Wednesday"
      ],
      [
        "09:00-09:50",
        "Friday",
        "09:00-09:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSI500.pdf",
    credits: "3-0-0"
  },
  {
    id: 151,
    code: "HSI500",
    name: "Research and Technical Communication",
    department: "Humanities and Social Science",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "Wednesday"
      ],
      [
        "09:00-09:50",
        "Friday",
        "09:00-09:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSI500.pdf",
    credits: "3-0-0"
  },
  {
    id: 539,
    code: "ECC501",
    name: "Advanced Optical Communication",
    department: "Electronics Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "LC-II-C6"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "LC-II-C6"
      ],
      [
        "Friday",
        "11:00-11:50",
        "LC-II-C6"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECC501.pdf",
    credits: "3-0-0"
  },
  {
    id: 287,
    code: "CSI101",
    name: "Computer Programming",
    department: "Computer Science & Engineering",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Wednesday",
        "02:00-02:50",
        "LC-II-G2"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "LC-II-G2"
      ],
      [
        "Friday",
        "04:00-04:50",
        "LC-II-G2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSI101.pdf",
    credits: "2-1-0"
  },
  {
    id: 547,
    code: "MEC307",
    name: "IC Engines and Gas Turbines",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "LC-II-G10"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "LC-II-G10"
      ],
      [
        "Friday",
        "06:00-06:50",
        "LC-II-G10"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEC307.pdf",
    credits: "3-0-0"
  },
  {
    id: 542,
    code: "MCC521",
    name: "Bayesian Survival Analysis",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "LC-I-C7"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-I-C7"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-I-C7"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC521.pdf",
    credits: "3-0-0"
  },
  {
    id: 269,
    code: "GLC208",
    name: "Economic Geology and Indian Mineral Deposits",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "LC-II-C12"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "LC-II-C12"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "LC-II-C12"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC208.pdf",
    credits: "3-0-0"
  },
  {
    id: 235,
    code: "MCC512",
    name: "Operating Systems Practical",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "UG Lab-1"
      ],
      [
        "Monday",
        "04:00-04:50",
        "UG Lab-1"
      ],
      [
        "Monday",
        "05:00-05:50",
        "UG Lab-2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC512.pdf",
    credits: "0-0-3"
  },
  {
    id: 551,
    code: "PEC208",
    name: "Reservoir Fluid Thermodynamics",
    department: "Petroleum Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "PET 2"
      ],
      [
        "Tuesday",
        "09:00-09:50",
        "PET 2"
      ],
      [
        "Thursday",
        "09:00-09:50",
        "PET 2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEC208.pdf",
    credits: "3-0-0"
  },
  {
    id: 552,
    code: "MCD512",
    name: "Non-Linear Dynamics and Chaos",
    department: "Mathematics and Computing",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "Wednesday"
      ],
      [
        "11:00-11:50",
        "Thursday",
        "12:00-12:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCD512.pdf",
    credits: "3-0-0"
  },
  {
    id: 553,
    code: "MCD557",
    name: "Finite Field Theory",
    department: "Mathematics and Computing",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "Wednesday"
      ],
      [
        "10:00-10:50",
        "Thursday",
        "10:00-10:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCD557.pdf",
    credits: "3-0-0"
  },
  {
    id: 347,
    code: "MCC503",
    name: "Numerical Methods",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "Wednesday"
      ],
      [
        "09:00-09:50",
        "Friday",
        "10:00-10:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC503.pdf",
    credits: "3-0-0"
  },
  {
    id: 555,
    code: "MSD522",
    name: "Marketing Analytics",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "MS 113"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "MS 113"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "MS 113"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSD522.pdf",
    credits: "3-0-0"
  },
  {
    id: 556,
    code: "MEC306",
    name: "Computer Aided Manufacturing",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "LC-II-G10"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "LC-II-G10"
      ],
      [
        "Friday",
        "02:00-02:50",
        "LC-II-G10"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEC306.pdf",
    credits: "3-0-0"
  },
  {
    id: 557,
    code: "MCC500",
    name: "Research Methodology",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "LC-I-C11"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "LC-I-C11"
      ],
      [
        "Friday",
        "06:00-06:50",
        "LC-I-C11"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC500.pdf",
    credits: "3-0-0"
  },
  {
    id: 295,
    code: "CYI102",
    name: "Chemistry Lab",
    department: "Chemical and Chemical Biology",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Thursday",
        "09:00-09:50",
        "UG Lab"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "UG Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYI102.pdf",
    credits: "0-0-2"
  },
  {
    id: 295,
    code: "CYI102",
    name: "Chemistry Lab",
    department: "Chemical and Chemical Biology",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Thursday",
        "09:00-09:50",
        "UG Lab"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "UG Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYI102.pdf",
    credits: "0-0-2"
  },
  {
    id: 296,
    code: "ESI101",
    name: "Environmental Sciences",
    department: "Environmental Science & Engineering",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Tuesday",
        "05:00-05:50",
        "LC-II-G1"
      ],
      [
        "Friday",
        "05:00-05:50",
        "LC-II-G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESI101.pdf",
    credits: "2-0-0"
  },
  {
    id: 151,
    code: "HSI500",
    name: "Research and Technical Communication",
    department: "Humanities and Social Science",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "Wednesday"
      ],
      [
        "09:00-09:50",
        "Friday",
        "09:00-09:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSI500.pdf",
    credits: "3-0-0"
  },
  {
    id: 450,
    code: "GPC515",
    name: "Earthquake Seismology and Well Logging Practical",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Friday",
        "10:00-10:50",
        "516"
      ],
      [
        "Friday",
        "11:00-11:50",
        "516"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC515.pdf",
    credits: "0-0-2"
  },
  {
    id: 290,
    code: "MCI103",
    name: "Numerical Methods",
    department: "Mathematics and Computing",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "LC-II-G8"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCI103.pdf",
    credits: "2-2-0"
  },
  {
    id: 564,
    code: "CYC511",
    name: "Group Theory & Electronic Spectroscopy",
    department: "Chemical and Chemical Biology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "LC-II-C10"
      ],
      [
        "Tuesday",
        "10:00-10:50",
        "LC-II-C10"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "LC-II-C10"
      ],
      [
        "Friday",
        "11:00-11:50",
        "LC-II-C10"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYC511.pdf",
    credits: "3-1-0"
  },
  {
    id: 565,
    code: "CHC506",
    name: "Instrumental Methods of Analysis",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "Monday"
      ],
      [
        "04:00-04:50",
        "CHE 409",
        "Monday"
      ],
      [
        "05:00-05:50",
        "CHE 409",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC506.pdf",
    credits: "0-0-3"
  },
  {
    id: 566,
    code: "CYC508",
    name: "Kinetics and Thermodynamics",
    department: "Chemical and Chemical Biology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "09:00-09:50",
        "LC-II-C10"
      ],
      [
        "Thursday",
        "09:00-09:50",
        "LC-II-C10"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-II-C10"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYC508.pdf",
    credits: "3-0-0"
  },
  {
    id: 567,
    code: "EEO301",
    name: "Microprocessor & Microcontroller",
    department: "Electrical Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "LC-II-G14"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "LC-II-G14"
      ],
      [
        "Friday",
        "03:00-03:50",
        "LC-II-G14"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEO301.pdf",
    credits: "3-0-0"
  },
  {
    id: 88,
    code: "MSC519",
    name: "Project Management",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "MS 210"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "MS 210"
      ],
      [
        "Friday",
        "02:00-02:50",
        "MS 210"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC519.pdf",
    credits: "3-0-0"
  },
  {
    id: 292,
    code: "CYI101",
    name: "Chemistry",
    department: "Chemical and Chemical Biology",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "LC-II-G8"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "LC-II-G8"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "LC-II-G8"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYI101.pdf",
    credits: "3-0-0"
  },
  {
    id: 110,
    code: "CYD507",
    name: "Bio-inorganic Chemistry",
    department: "Chemical and Chemical Biology",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "05:00-05:50",
        "Wednesday"
      ],
      [
        "05:00-05:50",
        "Friday",
        "05:00-05:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYD507.pdf",
    credits: "3-0-0"
  },
  {
    id: 571,
    code: "MNC304",
    name: "Mine Legislation and Safety",
    department: "Mining Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "LC-II-G15"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "LC-II-G15"
      ],
      [
        "Friday",
        "02:00-02:50",
        "LC-II-G15"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNC304.pdf",
    credits: "3-0-0"
  },
  {
    id: 572,
    code: "HSD530",
    name: "Indian Philosophy of Mind",
    department: "Humanities and Social Science",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "LC-II-G14"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "LC-II-G14"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "LC-II-G14"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSD530.pdf",
    credits: "3-0-0"
  },
  {
    id: 573,
    code: "CSC504",
    name: "Computing Techniques and Mathematical Tools",
    department: "Computer Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "LC-II-C14"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-II-C14"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-II-C14"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSC504.pdf",
    credits: "3-0-0"
  },
  {
    id: 574,
    code: "ECC582",
    name: "Digital VLSI Circuits Design",
    department: "Electronics Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "LC-II-C6"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "LC-II-C6"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "LC-II-C6"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECC582.pdf",
    credits: "3-0-0"
  },
  {
    id: 90,
    code: "MSC527",
    name: "Machine Learning",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "MS 209"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "MS 209"
      ],
      [
        "Friday",
        "06:00-06:50",
        "MS 209"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC527.pdf",
    credits: "3-0-0"
  },
  {
    id: 292,
    code: "CYI101",
    name: "Chemistry",
    department: "Chemical and Chemical Biology",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "LC-II-G8"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "LC-II-G8"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "LC-II-G8"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYI101.pdf",
    credits: "3-0-0"
  },
  {
    id: 577,
    code: "MED529",
    name: "Composite Materials",
    department: "Mechanical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "MME-212"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "MME-212"
      ],
      [
        "Friday",
        "04:00-04:50",
        "MME-212"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MED529.pdf",
    credits: "3-0-0"
  },
  {
    id: 578,
    code: "FMD461",
    name: "Computational Techniques and Modelling",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "AGL-1"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "AGL-1"
      ],
      [
        "Friday",
        "12:00-12:50",
        "AGL-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMD461.pdf",
    credits: "3-0-0"
  },
  {
    id: 579,
    code: "MSD520",
    name: "Merchant Banking and Financial Services",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "MS 011"
      ],
      [
        "Tuesday",
        "06:00-06:50",
        "MS 011"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "MS 011"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSD520.pdf",
    credits: "3-0-0"
  },
  {
    id: 580,
    code: "MNC305",
    name: "Mine Automation and Data Analytics",
    department: "Mining Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "LC-II-G15"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "LC-II-G15"
      ],
      [
        "Friday",
        "06:00-06:50",
        "LC-II-G15"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNC305.pdf",
    credits: "3-0-0"
  },
  {
    id: 581,
    code: "FMC305",
    name: "Coal and Mineral Processing Plant Design Laboratory",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "10:00-10:50",
        "Thursday"
      ],
      [
        "11:00-11:50",
        null,
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMC305.pdf",
    credits: "0-0-2"
  },
  {
    id: 282,
    code: "MCC511",
    name: "Database Management Systems",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "LC-II-G16"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "LC-II-G16"
      ],
      [
        "Friday",
        "02:00-02:50",
        "LC-II-G16"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC511.pdf",
    credits: "3-0-0"
  },
  {
    id: 583,
    code: "ESD505",
    name: "Advanced Water and Wastewater Treatment",
    department: "Environmental Science & Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "08:00-08:50",
        "MS 011"
      ],
      [
        "Wednesday",
        "08:00-08:50",
        "MS 011"
      ],
      [
        "Friday",
        "08:00-08:50",
        "MS 011"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESD505.pdf",
    credits: "3-0-0"
  },
  {
    id: 584,
    code: "MNC306",
    name: "Mine Data Analytics Practical",
    department: "Mining Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "CAMPAD Lab"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "CAMPAD Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNC306.pdf",
    credits: "0-0-2"
  },
  {
    id: 296,
    code: "ESI101",
    name: "Environmental Sciences",
    department: "Environmental Science & Engineering",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Tuesday",
        "05:00-05:50",
        "LC-II-G1"
      ],
      [
        "Friday",
        "05:00-05:50",
        "LC-II-G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESI101.pdf",
    credits: "2-0-0"
  },
  {
    id: 586,
    code: "CYC509",
    name: "Methods in Organic Synthesis",
    department: "Chemical and Chemical Biology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-II-C10"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-C10"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-II-C10"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYC509.pdf",
    credits: "3-0-0"
  },
  {
    id: 587,
    code: "ECC504",
    name: "Fundamentals of Communication Systems Design",
    department: "Electronics Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-II-G12"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-G12"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-II-G12"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECC504.pdf",
    credits: "3-0-0"
  },
  {
    id: 588,
    code: "CHC304",
    name: "Chemical Kinetics and Reaction Engineering Lab",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "11:00-11:50",
        "CHE 431"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "CHE 431"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "Wednesday"
      ],
      [
        "11:00-11:50",
        "Wednesday",
        "12:00-12:50"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "Thursday"
      ],
      [
        "12:00-12:50",
        "Thursday",
        "10:00-10:50"
      ],
      [
        "Thursday",
        "11:00-11:50",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC304.pdf",
    credits: "0-0-3"
  },
  {
    id: 589,
    code: "FMO431",
    name: "Elements of Mineral Engineering",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "LC-II-C8"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "LC-II-C8"
      ],
      [
        "Friday",
        "04:00-04:50",
        "LC-II-C8"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMO431.pdf",
    credits: "3-0-0"
  },
  {
    id: 329,
    code: "FMC506",
    name: "Fuel Technology",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "FME-1"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "FME-1"
      ],
      [
        "Friday",
        "12:00-12:50",
        "FME-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMC506.pdf",
    credits: "3-0-0"
  },
  {
    id: 591,
    code: "CSC502",
    name: "Advanced DBMS",
    department: "Computer Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "LC-II-C4"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "LC-II-C4"
      ],
      [
        "Friday",
        "12:00-12:50",
        "LC-II-C4"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSC502.pdf",
    credits: "3-0-0"
  },
  {
    id: 592,
    code: "CSC503",
    name: "Algorithmic Graph Theory",
    department: "Computer Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "LC-II-C14"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "LC-II-C14"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "LC-II-C14"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSC503.pdf",
    credits: "3-0-0"
  },
  {
    id: 344,
    code: "MCC502",
    name: "Differential Equations",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "Wednesday"
      ],
      [
        "06:00-06:50",
        "Friday",
        "06:00-06:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC502.pdf",
    credits: "3-0-0"
  },
  {
    id: 594,
    code: "MED554",
    name: "Surface Engineering",
    department: "Mechanical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "MME-212"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "MME-212"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "MME-212"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MED554.pdf",
    credits: "3-0-0"
  },
  {
    id: 595,
    code: "CHC505",
    name: "Advanced Process Control",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "CHE-402"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "CHE-402"
      ],
      [
        "Friday",
        "12:00-12:50",
        "CHE-402"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC505.pdf",
    credits: "3-0-0"
  },
  {
    id: 596,
    code: "CHC303",
    name: "Process Design and Economics",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "LC-II-C9"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "LC-II-C9"
      ],
      [
        "Friday",
        "06:00-06:50",
        "LC-II-C9"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC303.pdf",
    credits: "3-0-0"
  },
  {
    id: 597,
    code: "CYD530",
    name: "Pharmacovigilance and Regulatory Affairs",
    department: "Chemical and Chemical Biology",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "LC-II-C13"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "LC-II-C13"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "LC-II-C13"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYD530.pdf",
    credits: "3-0-0"
  },
  {
    id: 598,
    code: "ECC305",
    name: "Communication System Lab",
    department: "Electronics Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "Tuesday"
      ],
      [
        "11:00-11:50",
        "Tuesday",
        "12:00-12:50"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "Communication Lab (215)"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "Thursday"
      ],
      [
        "10:00-10:50",
        "Thursday",
        "11:00-11:50"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "Communication Lab (215)"
      ],
      [
        "Thursday",
        "12:00-12:50",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECC305.pdf",
    credits: "0-0-3"
  },
  {
    id: 599,
    code: "CSO303",
    name: "Artificial Intelligence",
    department: "Computer Science & Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "LC-II-G9"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "LC-II-G9"
      ],
      [
        "Friday",
        "06:00-06:50",
        "LC-II-G9"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSO303.pdf",
    credits: "3-0-0"
  },
  {
    id: 600,
    code: "MCD504",
    name: "Measure Theory",
    department: "Mathematics and Computing",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "LC-II-G4"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-II-G4"
      ],
      [
        "Friday",
        "12:00-12:50",
        "LC-II-G4"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCD504.pdf",
    credits: "3-0-0"
  },
  {
    id: 288,
    code: "HSI101",
    name: "Communication Skills",
    department: "Humanities and Social Science",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "LC-II-G1"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "LC-II-G1"
      ],
      [
        "Tuesday",
        "12:00-12:50",
        "LC-II-G1"
      ],
      [
        "Friday",
        "12:00-12:50",
        "LC-II-G1"
      ],
      [
        "Friday",
        "11:00-11:50",
        "LC-II-G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSI101.pdf",
    credits: "1-0-2"
  },
  {
    id: 90,
    code: "MSC527",
    name: "Machine Learning",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "MS 209"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "MS 209"
      ],
      [
        "Friday",
        "06:00-06:50",
        "MS 209"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC527.pdf",
    credits: "3-0-0"
  },
  {
    id: 288,
    code: "HSI101",
    name: "Communication Skills",
    department: "Humanities and Social Science",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "LC-II-G1"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "LC-II-G1"
      ],
      [
        "Tuesday",
        "12:00-12:50",
        "LC-II-G1"
      ],
      [
        "Friday",
        "12:00-12:50",
        "LC-II-G1"
      ],
      [
        "Friday",
        "11:00-11:50",
        "LC-II-G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSI101.pdf",
    credits: "1-0-2"
  },
  {
    id: 289,
    code: "MCI102",
    name: "Mathematics - II",
    department: "Mathematics and Computing",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "LC-II-G1"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "LC-II-G1"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "LC-II-G1"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "LC-II-G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCI102.pdf",
    credits: "3-1-0"
  },
  {
    id: 605,
    code: "MEO302",
    name: "Refrigeration and Air-conditioning",
    department: "Mechanical Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "MME-207"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "MME-207"
      ],
      [
        "Friday",
        "03:00-03:50",
        "MME-207"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEO302.pdf",
    credits: "3-0-0"
  },
  {
    id: 606,
    code: "ESC501",
    name: "Ecology and Environmental Microbiology",
    department: "Environmental Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-II-C13"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-C13"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-II-C13"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESC501.pdf",
    credits: "3-0-0"
  },
  {
    id: 607,
    code: "HSC502",
    name: "Fundamentals of Data Analysis",
    department: "Humanities and Social Science",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "08:00-08:50",
        "Monday"
      ],
      [
        "08:00-08:50",
        null,
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSC502.pdf",
    credits: "2-0-0"
  },
  {
    id: 608,
    code: "CSC505",
    name: "High Performance Computer Architecture",
    department: "Computer Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "LC-II-G11"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "LC-II-G11"
      ],
      [
        "Friday",
        "11:00-11:50",
        "LC-II-G11"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSC505.pdf",
    credits: "3-0-0"
  },
  {
    id: 447,
    code: "MCC513",
    name: "Database Management Systems Practical",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "UG Lab-2"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "UG Lab-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC513.pdf",
    credits: "0-0-2"
  },
  {
    id: 610,
    code: "EEC311",
    name: "Power System Analysis and Control",
    department: "Electrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "LC-II-G14"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "LC-II-G14"
      ],
      [
        "Friday",
        "02:00-02:50",
        "LC-II-G14"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEC311.pdf",
    credits: "3-0-0"
  },
  {
    id: 611,
    code: "MNC307",
    name: "Numerical Modelling/Remote Sensing & GIS Practical",
    department: "Mining Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "10:00-10:50",
        "RS & GIS LAB"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "RS & GIS LAB"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNC307.pdf",
    credits: "0-0-2"
  },
  {
    id: 612,
    code: "GPC518",
    name: "Geophysical Inversion Practical",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "AGP Annexure 1st Floor"
      ],
      [
        "Monday",
        "03:00-03:50",
        "AGP Annexure 1st Floor"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC518.pdf",
    credits: "0-0-2"
  },
  {
    id: 613,
    code: "GLD576",
    name: "Nanotechnology in Mineral and Hydrocarbon Exploration",
    department: "Applied Geology",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "Wednesday"
      ],
      [
        "11:00-11:50",
        "Thursday",
        "12:00-12:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLD576.pdf",
    credits: "3-0-0"
  },
  {
    id: 614,
    code: "GLD591",
    name: "Rock Slope Engineering",
    department: "Applied Geology",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "AGL-2"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "AGL-2"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "AGL-2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLD591.pdf",
    credits: "3-0-0"
  },
  {
    id: 615,
    code: "GPC519",
    name: "Seismic Data Processing and Interpretation  Practical",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "04:00-04:50",
        "AGP Annexure 1st Floor"
      ],
      [
        "Wednesday",
        "05:00-05:50",
        "AGP Annexure 1st Floor"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC519.pdf",
    credits: "0-0-2"
  },
  {
    id: 616,
    code: "FMD401",
    name: "Powder Metallurgy",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "11:00-11:50",
        "Thursday"
      ],
      [
        "11:00-11:50",
        "Friday",
        "11:00-11:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMD401.pdf",
    credits: "3-0-0"
  },
  {
    id: 344,
    code: "MCC502",
    name: "Differential Equations",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "Wednesday"
      ],
      [
        "06:00-06:50",
        "Friday",
        "06:00-06:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC502.pdf",
    credits: "3-0-0"
  },
  {
    id: 338,
    code: "PEC503",
    name: "Numerical Methods for Petroleum Engineers",
    department: "Petroleum Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "Wednesday"
      ],
      [
        "10:00-10:50",
        "Friday",
        "10:00-10:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEC503.pdf",
    credits: "3-0-0"
  },
  {
    id: 619,
    code: "GPC517",
    name: "Seismic Data Processing and Interpretation",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "CEUG3"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "CEUG3"
      ],
      [
        "Friday",
        "12:00-12:50",
        "CEUG3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC517.pdf",
    credits: "3-0-0"
  },
  {
    id: 459,
    code: "GPC510",
    name: "Well Logging",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "LC-II-C12"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "LC-II-C12"
      ],
      [
        "Friday",
        "06:00-06:50",
        "LC-II-C12"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC510.pdf",
    credits: "3-0-0"
  },
  {
    id: 621,
    code: "PEO401",
    name: "Petroleum Environment, Health and Safety Practices",
    department: "Petroleum Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "11:00-11:50",
        "PET 3"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "PET 3"
      ],
      [
        "Friday",
        "11:00-11:50",
        "PET 3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEO401.pdf",
    credits: "3-0-0"
  },
  {
    id: 622,
    code: "CSC518",
    name: "Number Theory and Cryptography",
    department: "Computer Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "LC-II-C14"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "LC-II-C14"
      ],
      [
        "Friday",
        "11:00-11:50",
        "LC-II-C14"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSC518.pdf",
    credits: "3-0-0"
  },
  {
    id: 375,
    code: "GLC503",
    name: "Methods of Structural Geology",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "03:00-03:50",
        "AGL-3"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "AGL-3"
      ],
      [
        "Friday",
        "04:00-04:50",
        "AGL-3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC503.pdf",
    credits: "3-0-0"
  },
  {
    id: 624,
    code: "MSD519",
    name: "International Finance",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "MS 111"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "MS 111"
      ],
      [
        "Thursday",
        "06:00-06:50",
        "MS 111"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSD519.pdf",
    credits: "3-0-0"
  },
  {
    id: 454,
    code: "GLC516",
    name: "Coal Geology Practical",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "10:00-10:50",
        "Coal Geology Lab"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "Coal Geology Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC516.pdf",
    credits: "0-0-2"
  },
  {
    id: 318,
    code: "FMC501",
    name: "Coal and Mineral Processing",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "FME-1"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "FME-1"
      ],
      [
        "Friday",
        "10:00-10:50",
        "FME-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMC501.pdf",
    credits: "3-0-0"
  },
  {
    id: 627,
    code: "CSC202",
    name: "Discrete Mathematics",
    department: "Computer Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-II-G9"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-G9"
      ],
      [
        "Friday",
        "11:00-11:50",
        "LC-II-G9"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSC202.pdf",
    credits: "3-0-0"
  },
  {
    id: 628,
    code: "ESD405",
    name: "Climate Vulnerability and Risk Analysis",
    department: "Environmental Science & Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "Wednesday"
      ],
      [
        "11:00-11:50",
        "Thursday",
        "12:00-12:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESD405.pdf",
    credits: "3-0-0"
  },
  {
    id: 629,
    code: "ECC505",
    name: "Numerical Methods and Optimization Techniques",
    department: "Electronics Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "LC-II-G12"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-II-G12"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-II-G12"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECC505.pdf",
    credits: "3-0-0"
  },
  {
    id: 630,
    code: "ESC355",
    name: "Environmental Geotechnology Practical",
    department: "Environmental Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "11:00-11:50",
        "lecture hall no"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "lecture hall no"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESC355.pdf",
    credits: "0-0-2"
  },
  {
    id: 631,
    code: "CSC204",
    name: "Data Structures Lab",
    department: "Computer Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "NLHC Computer Lab - I"
      ],
      [
        "Monday",
        "04:00-04:50",
        "NLHC Computer Lab - I"
      ],
      [
        "Monday",
        "04:00-04:50",
        "Monday"
      ],
      [
        "05:00-05:50",
        "Wednesday",
        "05:00-05:50"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSC204.pdf",
    credits: "0-0-2"
  },
  {
    id: 632,
    code: "CSE201",
    name: "Data Structures and Algorithms",
    department: "Computer Science & Engineering",
    type: "Engineering Science Option (ESO)",
    timetable: [
      [
        "Monday",
        "08:00-08:50",
        "LC-II-G5"
      ],
      [
        "Wednesday",
        "08:00-08:50",
        "LC-II-G5"
      ],
      [
        "Friday",
        "08:00-08:50",
        "LC-II-G5"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSE201.pdf",
    credits: "3-0-0"
  },
  {
    id: 633,
    code: "PED403",
    name: "Drilling System Design",
    department: "Petroleum Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "PET 3"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "PET 3"
      ],
      [
        "Friday",
        "12:00-12:50",
        "PET 3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PED403.pdf",
    credits: "3-0-0"
  },
  {
    id: 354,
    code: "GLC502",
    name: "Applied Geochemistry",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "Wednesday"
      ],
      [
        "03:00-03:50",
        "Thursday",
        "03:00-03:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC502.pdf",
    credits: "3-0-0"
  },
  {
    id: 391,
    code: "GPC507",
    name: "Mathematical Functional Analysis Practical",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "10:00-10:50",
        "516"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "516"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC507.pdf",
    credits: "0-0-2"
  },
  {
    id: 636,
    code: "GPC503",
    name: "Remote Sensing Principles",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "516"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "516"
      ],
      [
        "Friday",
        "03:00-03:50",
        "516"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC503.pdf",
    credits: "3-0-0"
  },
  {
    id: 637,
    code: "FMD403",
    name: "Engineering Materials Selection and Design",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "Wednesday"
      ],
      [
        "11:00-11:50",
        "Thursday",
        "12:00-12:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMD403.pdf",
    credits: "3-0-0"
  },
  {
    id: 638,
    code: "GPD503",
    name: "Image Processing and Geographic Information System",
    department: "Applied Geophysics",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "AGP Annexure 1st Floor"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "AGP Annexure 1st Floor"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "AGP Annexure 1st Floor"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPD503.pdf",
    credits: "3-0-0"
  },
  {
    id: 264,
    code: "MCC509",
    name: "Statistical  Inference",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "LC-II-G4"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "LC-II-G4"
      ],
      [
        "Friday",
        "09:00-09:50",
        "LC-II-G4"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC509.pdf",
    credits: "3-0-0"
  },
  {
    id: 265,
    code: "MCC510",
    name: "Operating Systems",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-II-G4"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-G4"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-II-G4"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC510.pdf",
    credits: "3-0-0"
  },
  {
    id: 641,
    code: "ESC356",
    name: "Wastewater Engineering Practical",
    department: "Environmental Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "10:00-10:50",
        "Wastewater Lab"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "Wastewater Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESC356.pdf",
    credits: "0-0-2"
  },
  {
    id: 642,
    code: "MSD521",
    name: "Consumer Behaviour",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "MS 210"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "MS 210"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "MS 210"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSD521.pdf",
    credits: "3-0-0"
  },
  {
    id: 387,
    code: "GLC507",
    name: "Methods of Structural Geology Practical",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "10:00-10:50",
        "AGL-3"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "AGL-3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC507.pdf",
    credits: "0-0-2"
  },
  {
    id: 644,
    code: "GLC519",
    name: "Engineering Geology",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "AGL-3"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "AGL-3"
      ],
      [
        "Friday",
        "12:00-12:50",
        "AGL-3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC519.pdf",
    credits: "3-0-0"
  },
  {
    id: 645,
    code: "GPC516",
    name: "Geophysical Inversion",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "Wednesday"
      ],
      [
        "09:00-09:50",
        "Friday",
        "10:00-10:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC516.pdf",
    credits: "3-0-0"
  },
  {
    id: 646,
    code: "CSC517",
    name: "Selected Topics in Algorithms",
    department: "Computer Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-II-C14"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-C14"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-II-C14"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSC517.pdf",
    credits: "3-0-0"
  },
  {
    id: 382,
    code: "GLC508",
    name: "Micropaleontology and Vertebrate Paleontology Practical",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "Tuesday"
      ],
      [
        "11:00-11:50",
        null,
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC508.pdf",
    credits: "0-0-2"
  },
  {
    id: 648,
    code: "FMO544",
    name: "Clean Coal Technology",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "11:00-11:50",
        "FME-2"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "FME-2"
      ],
      [
        "Friday",
        "11:00-11:50",
        "FME-2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMO544.pdf",
    credits: "3-0-0"
  },
  {
    id: 380,
    code: "GLC504",
    name: "Micropaleontology and Vertebrate Palaeontology",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "AGL-3"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "AGL-3"
      ],
      [
        "Friday",
        "06:00-06:50",
        "AGL-3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC504.pdf",
    credits: "3-0-0"
  },
  {
    id: 650,
    code: "GLC520",
    name: "Hydrogeology",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "AGL-3"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "AGL-3"
      ],
      [
        "Friday",
        "10:00-10:50",
        "AGL-3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC520.pdf",
    credits: "3-0-0"
  },
  {
    id: 651,
    code: "GLC518",
    name: "Principles and Applications of Geostatistics",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "AGL-3"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "AGL-3"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "AGL-3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC518.pdf",
    credits: "3-0-0"
  },
  {
    id: 652,
    code: "GLC525",
    name: "Engineering Geology and Hydrogeology Practical",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "AGL-1"
      ],
      [
        "Monday",
        "04:00-04:50",
        "Monday"
      ],
      [
        "03:00-03:50",
        "AGL-1",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC525.pdf",
    credits: "0-0-3"
  },
  {
    id: 653,
    code: "GLC524",
    name: "Principles and Applications of Geostatistics Practical",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "04:00-04:50",
        "AGL-1"
      ],
      [
        "Wednesday",
        "05:00-05:50",
        "AGL-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC524.pdf",
    credits: "0-0-2"
  },
  {
    id: 377,
    code: "GLC506",
    name: "Mineralogy and Geochemistry Practical",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "10:00-10:50",
        "Wednesday"
      ],
      [
        "11:00-11:50",
        "Wednesday",
        "12:00-12:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC506.pdf",
    credits: "0-0-3"
  },
  {
    id: 612,
    code: "GPC518",
    name: "Geophysical Inversion Practical",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "AGP Annexure 1st Floor"
      ],
      [
        "Monday",
        "03:00-03:50",
        "AGP Annexure 1st Floor"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC518.pdf",
    credits: "0-0-2"
  },
  {
    id: 656,
    code: "CSC304",
    name: "Compiler Design Lab",
    department: "Computer Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "10:00-10:50",
        "NLHC Computer Lab - I"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "NLHC Computer Lab - I"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSC304.pdf",
    credits: "0-0-2"
  },
  {
    id: 657,
    code: "CSC302",
    name: "Compiler Design",
    department: "Computer Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "03:00-03:50",
        "LC-II-G9"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "LC-II-G9"
      ],
      [
        "Friday",
        "04:00-04:50",
        "LC-II-G9"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSC302.pdf",
    credits: "3-0-0"
  },
  {
    id: 658,
    code: "GLC501",
    name: "Advanced Mineralogy",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "Wednesday"
      ],
      [
        "02:00-02:50",
        "Friday",
        "02:00-02:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC501.pdf",
    credits: "3-0-0"
  },
  {
    id: 573,
    code: "CSC504",
    name: "Computing Techniques and Mathematical Tools",
    department: "Computer Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "LC-II-C14"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-II-C14"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-II-C14"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSC504.pdf",
    credits: "3-0-0"
  },
  {
    id: 660,
    code: "ESC251",
    name: "Water Pollution Practical",
    department: "Environmental Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "Water Chemistry Lab"
      ],
      [
        "Monday",
        "05:00-05:50",
        "Water Chemistry Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESC251.pdf",
    credits: "0-0-2"
  },
  {
    id: 661,
    code: "CYC512",
    name: "Physical Chemistry Lab - I",
    department: "Chemical and Chemical Biology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "04:00-04:50",
        "PG Lab"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "PG Lab"
      ],
      [
        "Thursday",
        "06:00-06:50",
        "PG Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYC512.pdf",
    credits: "0-0-3"
  },
  {
    id: 662,
    code: "CSC303",
    name: "Database Management Systems Lab",
    department: "Computer Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "11:00-11:50",
        "NLHC Computer Lab - I"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "NLHC Computer Lab - I"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSC303.pdf",
    credits: "0-0-2"
  },
  {
    id: 663,
    code: "PEO402",
    name: "Well Performance",
    department: "Petroleum Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "PET 3"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "PET 3"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "PET 3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEO402.pdf",
    credits: "3-0-0"
  },
  {
    id: 383,
    code: "GPC504",
    name: "Mathematical Functional Analysis",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "516"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "516"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "516"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC504.pdf",
    credits: "3-0-0"
  },
  {
    id: 619,
    code: "GPC517",
    name: "Seismic Data Processing and Interpretation",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "CEUG3"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "CEUG3"
      ],
      [
        "Friday",
        "12:00-12:50",
        "CEUG3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC517.pdf",
    credits: "3-0-0"
  },
  {
    id: 666,
    code: "PED402",
    name: "Enhanced Oil Recovery Techniques",
    department: "Petroleum Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "PET 3"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "PET 3"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "PET 3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PED402.pdf",
    credits: "3-0-0"
  },
  {
    id: 644,
    code: "GLC519",
    name: "Engineering Geology",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "AGL-3"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "AGL-3"
      ],
      [
        "Friday",
        "12:00-12:50",
        "AGL-3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC519.pdf",
    credits: "3-0-0"
  },
  {
    id: 352,
    code: "GLC505",
    name: "Mathematics for Geoscientists",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "Thursday"
      ],
      [
        "02:00-02:50",
        "Friday",
        "03:00-03:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC505.pdf",
    credits: "3-0-0"
  },
  {
    id: 645,
    code: "GPC516",
    name: "Geophysical Inversion",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "Wednesday"
      ],
      [
        "09:00-09:50",
        "Friday",
        "10:00-10:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC516.pdf",
    credits: "3-0-0"
  },
  {
    id: 670,
    code: "PED401",
    name: "Offshore Drilling and Petroleum Production Practices",
    department: "Petroleum Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "PET 3"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "PET 3"
      ],
      [
        "Friday",
        "12:00-12:50",
        "PET 3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PED401.pdf",
    credits: "3-0-0"
  },
  {
    id: 341,
    code: "PEC504",
    name: "Advanced Production Technologies",
    department: "Petroleum Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "Tuesday"
      ],
      [
        "11:00-11:50",
        "Wednesday",
        "11:00-11:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEC504.pdf",
    credits: "3-0-0"
  },
  {
    id: 672,
    code: "PEC513",
    name: "Introduction to Python and Petroleum Data Analysis",
    department: "Petroleum Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "PET 4"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "PET 4"
      ],
      [
        "Friday",
        "11:00-11:50",
        "PET 4"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEC513.pdf",
    credits: "3-0-0"
  },
  {
    id: 673,
    code: "GLD522",
    name: "Coalbed Methane, Shale Gas and Gas Hydrate Exploration",
    department: "Applied Geology",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "AGL-1"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "AGL-1"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "AGL-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLD522.pdf",
    credits: "3-0-0"
  },
  {
    id: 592,
    code: "CSC503",
    name: "Algorithmic Graph Theory",
    department: "Computer Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "LC-II-C14"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "LC-II-C14"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "LC-II-C14"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSC503.pdf",
    credits: "3-0-0"
  },
  {
    id: 675,
    code: "MCC520",
    name: "Fourier Analysis and its Applications",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "LC-I-C7"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "LC-I-C7"
      ],
      [
        "Friday",
        "11:00-11:50",
        "LC-I-C7"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC520.pdf",
    credits: "3-0-0"
  },
  {
    id: 676,
    code: "ECE301",
    name: "Analog Interface Electronics",
    department: "Electronics Engineering",
    type: "Engineering Science Option (ESO)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "LC-II-G5"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "LC-II-G5"
      ],
      [
        "Friday",
        "02:00-02:50",
        "LC-II-G5"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECE301.pdf",
    credits: "3-0-0"
  },
  {
    id: 677,
    code: "GPD502",
    name: "Formation Evaluation",
    department: "Applied Geophysics",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "AGP Annexure 1st Floor"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "AGP Annexure 1st Floor"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "AGP Annexure 1st Floor"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPD502.pdf",
    credits: "3-0-0"
  },
  {
    id: 397,
    code: "GLC202",
    name: "Physical and Structural Geology",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "Wednesday"
      ],
      [
        "10:00-10:50",
        "Friday",
        "11:00-11:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC202.pdf",
    credits: "3-0-0"
  },
  {
    id: 679,
    code: "PHC508",
    name: "Quantum Mechanics",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "LC-II-C8"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "LC-II-C8"
      ],
      [
        "Thursday",
        "08:00-08:50",
        "LC-II-C8"
      ],
      [
        "Friday",
        "09:00-09:50",
        "LC-II-C8"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC508.pdf",
    credits: "3-1-0"
  },
  {
    id: 680,
    code: "GPC506",
    name: "Remote Sensing Principles Practical",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "12:00-12:50",
        "516"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "516"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC506.pdf",
    credits: "0-0-2"
  },
  {
    id: 650,
    code: "GLC520",
    name: "Hydrogeology",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "AGL-3"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "AGL-3"
      ],
      [
        "Friday",
        "10:00-10:50",
        "AGL-3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC520.pdf",
    credits: "3-0-0"
  },
  {
    id: 574,
    code: "ECC582",
    name: "Digital VLSI Circuits Design",
    department: "Electronics Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "LC-II-C6"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "LC-II-C6"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "LC-II-C6"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECC582.pdf",
    credits: "3-0-0"
  },
  {
    id: 683,
    code: "PEO406",
    name: "Reservoir Geomechanics",
    department: "Petroleum Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "Wednesday"
      ],
      [
        "09:00-09:50",
        "Friday",
        "10:00-10:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEO406.pdf",
    credits: "3-0-0"
  },
  {
    id: 384,
    code: "GPC505",
    name: "Gravity Method Practical",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "Monday"
      ],
      [
        "10:00-10:50",
        null,
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC505.pdf",
    credits: "0-0-2"
  },
  {
    id: 685,
    code: "CHC302",
    name: "Chemical Kinetics and Reaction Engineering",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "Tuesday"
      ],
      [
        "03:00-03:50",
        "LC-II-C9",
        "Wednesday"
      ],
      [
        "04:00-04:50",
        "LC-II-C9",
        "Friday"
      ],
      [
        "04:00-04:50",
        "LC-II-C9",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC302.pdf",
    credits: "3-1-0"
  },
  {
    id: 686,
    code: "ECC301",
    name: "Principles of Communication Systems",
    department: "Electronics Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "LC-II-G14"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "LC-II-G14"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "LC-II-G14"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECC301.pdf",
    credits: "3-0-0"
  },
  {
    id: 606,
    code: "ESC501",
    name: "Ecology and Environmental Microbiology",
    department: "Environmental Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-II-C13"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-C13"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-II-C13"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESC501.pdf",
    credits: "3-0-0"
  },
  {
    id: 688,
    code: "ECC303",
    name: "VLSI Design",
    department: "Electronics Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "LC-II-G14"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "LC-II-G14"
      ],
      [
        "Friday",
        "06:00-06:50",
        "LC-II-G14"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECC303.pdf",
    credits: "3-0-0"
  },
  {
    id: 689,
    code: "ESO405",
    name: "Cleaner  Energy",
    department: "Environmental Science & Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "LC-II-G8"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "LC-II-G8"
      ],
      [
        "Friday",
        "03:00-03:50",
        "LC-II-G8"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESO405.pdf",
    credits: "3-0-0"
  },
  {
    id: 690,
    code: "GPD501",
    name: "Geothermics and Geodynamics",
    department: "Applied Geophysics",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "AGP Annexure 1st Floor"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "AGP Annexure 1st Floor"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "AGP Annexure 1st Floor"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPD501.pdf",
    credits: "3-0-0"
  },
  {
    id: 691,
    code: "ESD401",
    name: "Biodiversity Conservation",
    department: "Environmental Science & Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "11:00-11:50",
        "LC-II-C15"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-II-C15"
      ],
      [
        "Friday",
        "11:00-11:50",
        "LC-II-C15"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESD401.pdf",
    credits: "3-0-0"
  },
  {
    id: 381,
    code: "GPC502",
    name: "Gravity Method",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "03:00-03:50",
        "Wednesday"
      ],
      [
        "04:00-04:50",
        "Friday",
        "04:00-04:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC502.pdf",
    credits: "3-0-0"
  },
  {
    id: 693,
    code: "ESD502",
    name: "Environmental Biotechnology",
    department: "Environmental Science & Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "LC-II-C5"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "LC-II-C5"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-II-C5"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESD502.pdf",
    credits: "3-0-0"
  },
  {
    id: 694,
    code: "HSO308",
    name: "Social Psychology",
    department: "Humanities and Social Science",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "LC-II-G14"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "LC-II-G14"
      ],
      [
        "Friday",
        "04:00-04:50",
        "LC-II-G14"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSO308.pdf",
    credits: "3-0-0"
  },
  {
    id: 695,
    code: "GLD521",
    name: "Stratigraphy",
    department: "Applied Geology",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "AGL-3"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "AGL-3"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "AGL-3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLD521.pdf",
    credits: "3-0-0"
  },
  {
    id: 696,
    code: "ECD403",
    name: "Computer Networks",
    department: "Electronics Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "LC-II-G7"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "LC-II-G7"
      ],
      [
        "Friday",
        "03:00-03:50",
        "LC-II-G7"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECD403.pdf",
    credits: "3-0-0"
  },
  {
    id: 697,
    code: "ESC309",
    name: "Wastewater Treatment",
    department: "Environmental Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "03:00-03:50",
        "LC-II-C5"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "LC-II-C5"
      ],
      [
        "Friday",
        "04:00-04:50",
        "LC-II-C5"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESC309.pdf",
    credits: "3-0-0"
  },
  {
    id: 698,
    code: "ESC310",
    name: "Environmental Impact Assessment",
    department: "Environmental Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "LC-II-C5"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "LC-II-C5"
      ],
      [
        "Friday",
        "06:00-06:50",
        "LC-II-C5"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESC310.pdf",
    credits: "3-0-0"
  },
  {
    id: 699,
    code: "ESC308",
    name: "Environmental Geotechnology",
    department: "Environmental Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "LC-II-C5"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "LC-II-C5"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "LC-II-C5"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESC308.pdf",
    credits: "3-0-0"
  },
  {
    id: 651,
    code: "GLC518",
    name: "Principles and Applications of Geostatistics",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "AGL-3"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "AGL-3"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "AGL-3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC518.pdf",
    credits: "3-0-0"
  },
  {
    id: 615,
    code: "GPC519",
    name: "Seismic Data Processing and Interpretation  Practical",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "04:00-04:50",
        "AGP Annexure 1st Floor"
      ],
      [
        "Wednesday",
        "05:00-05:50",
        "AGP Annexure 1st Floor"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC519.pdf",
    credits: "0-0-2"
  },
  {
    id: 390,
    code: "GPC501",
    name: "Solid Earth Geophysics",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "Wednesday"
      ],
      [
        "06:00-06:50",
        "Friday",
        "06:00-06:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC501.pdf",
    credits: "3-0-0"
  },
  {
    id: 320,
    code: "ESC503",
    name: "MATLAB Programming for Numerical Computation",
    department: "Environmental Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "LC-II-C13"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "LC-II-C13"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "LC-II-C13"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESC503.pdf",
    credits: "3-0-0"
  },
  {
    id: 704,
    code: "ESC202",
    name: "Air Pollution",
    department: "Environmental Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-II-C5"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-C5"
      ],
      [
        "Friday",
        "11:00-11:50",
        "LC-II-C5"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESC202.pdf",
    credits: "3-0-0"
  },
  {
    id: 705,
    code: "GLC205",
    name: "Introduction to Petrology",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "LC-II-C6"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "LC-II-C6"
      ],
      [
        "Friday",
        "09:00-09:50",
        "LC-II-C6"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC205.pdf",
    credits: "3-0-0"
  },
  {
    id: 706,
    code: "CHC301",
    name: "Separation Processes",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "LC-II-C9"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "LC-II-C9"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "LC-II-C9"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC301.pdf",
    credits: "3-0-0"
  },
  {
    id: 707,
    code: "ESD511",
    name: "Aerosols in the Atmosphere",
    department: "Environmental Science & Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "11:00-11:50",
        "LC-II-C20"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "LC-II-C20"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-II-C20"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESD511.pdf",
    credits: "3-0-0"
  },
  {
    id: 351,
    code: "MCC506",
    name: "Numerical Methods Practical",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "04:00-04:50",
        "Thursday"
      ],
      [
        "05:00-05:50",
        "Thursday",
        "06:00-06:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC506.pdf",
    credits: "0-0-3"
  },
  {
    id: 709,
    code: "CSC301",
    name: "Database Management Systems",
    department: "Computer Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "LC-II-G9"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "LC-II-G9"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "LC-II-G9"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSC301.pdf",
    credits: "3-0-0"
  },
  {
    id: 710,
    code: "CHC305",
    name: "Mass Transfer Lab",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "10:00-10:50",
        "Wednesday"
      ],
      [
        "11:00-11:50",
        "Wednesday",
        "12:00-12:50"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "Thursday"
      ],
      [
        "10:00-10:50",
        "CHE 426",
        "Thursday"
      ],
      [
        "11:00-11:50",
        "Thursday",
        "11:00-11:50"
      ],
      [
        "CHE 426",
        "Thursday",
        "12:00-12:50"
      ],
      [
        "Thursday",
        "12:00-12:50",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC305.pdf",
    credits: "0-0-3"
  },
  {
    id: 675,
    code: "MCC520",
    name: "Fourier Analysis and its Applications",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "LC-I-C7"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "LC-I-C7"
      ],
      [
        "Friday",
        "11:00-11:50",
        "LC-I-C7"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC520.pdf",
    credits: "3-0-0"
  },
  {
    id: 712,
    code: "FMD517",
    name: "Mechanical Behaviour of Materials",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "Wednesday"
      ],
      [
        "10:00-10:50",
        "Thursday",
        "10:00-10:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMD517.pdf",
    credits: "3-0-0"
  },
  {
    id: 713,
    code: "GLO523",
    name: "Atmosphere, Ocean and Climate Dynamics",
    department: "Applied Geology",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "11:00-11:50",
        "AGL-3"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "AGL-3"
      ],
      [
        "Friday",
        "11:00-11:50",
        "AGL-3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLO523.pdf",
    credits: "3-0-0"
  },
  {
    id: 652,
    code: "GLC525",
    name: "Engineering Geology and Hydrogeology Practical",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "AGL-1"
      ],
      [
        "Monday",
        "04:00-04:50",
        "Monday"
      ],
      [
        "03:00-03:50",
        "AGL-1",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC525.pdf",
    credits: "0-0-3"
  },
  {
    id: 715,
    code: "MCC519",
    name: "Design and Analysis of Algorithms  Practical",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "10:00-10:50",
        "UG Lab-1"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "UG Lab-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC519.pdf",
    credits: "0-0-2"
  },
  {
    id: 326,
    code: "FMC503",
    name: "Numerical Methods & Computer Applications",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "FME-1"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "FME-1"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "FME-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMC503.pdf",
    credits: "3-0-0"
  },
  {
    id: 717,
    code: "FMO547",
    name: "Additive Manufacturing",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "Wednesday"
      ],
      [
        "09:00-09:50",
        "Friday",
        "10:00-10:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMO547.pdf",
    credits: "3-0-0"
  },
  {
    id: 718,
    code: "ESC203",
    name: "Noise  Pollution and Control",
    department: "Environmental Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "LC-II-C5"
      ],
      [
        "Tuesday",
        "09:00-09:50",
        "LC-II-C5"
      ],
      [
        "Thursday",
        "09:00-09:50",
        "LC-II-C5"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESC203.pdf",
    credits: "3-0-0"
  },
  {
    id: 719,
    code: "ECC202",
    name: "Signals & Networks",
    department: "Electronics Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-II-G5"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-G5"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "Friday"
      ],
      [
        "11:00-11:50",
        "LC-II-G5",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECC202.pdf",
    credits: "3-1-0"
  },
  {
    id: 720,
    code: "FMC510",
    name: "Mathematical Modeling of Mineral and Metallurgical Processes",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "FME-2"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "FME-2"
      ],
      [
        "Friday",
        "11:00-11:50",
        "FME-2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMC510.pdf",
    credits: "3-0-0"
  },
  {
    id: 721,
    code: "PHC207",
    name: "Nuclear Science and Engineering",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "LC-II-C15"
      ],
      [
        "Tuesday",
        "09:00-09:50",
        "LC-II-C15"
      ],
      [
        "Thursday",
        "09:00-09:50",
        "LC-II-C15"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC207.pdf",
    credits: "3-0-0"
  },
  {
    id: 722,
    code: "CSO505",
    name: "Soft Computing",
    department: "Computer Science & Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "08:00-08:50",
        "LC-II-G15"
      ],
      [
        "Thursday",
        "08:00-08:50",
        "LC-II-G15"
      ],
      [
        "Friday",
        "09:00-09:50",
        "LC-II-G15"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSO505.pdf",
    credits: "3-0-0"
  },
  {
    id: 723,
    code: "ECC201",
    name: "Electronic Devices",
    department: "Electronics Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "LC-II-G5"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "LC-II-G5"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-II-G5"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECC201.pdf",
    credits: "3-0-0"
  },
  {
    id: 724,
    code: "ECC304",
    name: "Digital Signal Processing Lab",
    department: "Electronics Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "Monday"
      ],
      [
        "11:00-11:50",
        "Monday",
        "12:00-12:50"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "Wednesday"
      ],
      [
        "12:00-12:50",
        "Wednesday",
        "11:00-11:50"
      ],
      [
        "Digital Signal Processing Lab (216)",
        "Wednesday",
        "10:00-10:50"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "Digital Signal Processing Lab (216)"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECC304.pdf",
    credits: "0-0-3"
  },
  {
    id: 725,
    code: "ECC302",
    name: "Digital Signal Processing",
    department: "Electronics Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "03:00-03:50",
        "LC-II-G14"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "LC-II-G14"
      ],
      [
        "Friday",
        "04:00-04:50",
        "LC-II-G14"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECC302.pdf",
    credits: "3-0-0"
  },
  {
    id: 676,
    code: "ECE301",
    name: "Analog Interface Electronics",
    department: "Electronics Engineering",
    type: "Engineering Science Option (ESO)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "LC-II-G5"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "LC-II-G5"
      ],
      [
        "Friday",
        "02:00-02:50",
        "LC-II-G5"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECE301.pdf",
    credits: "3-0-0"
  },
  {
    id: 727,
    code: "FMC351",
    name: "Extractive Metallurgy Laboratory",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "11:00-11:50",
        "FME-2"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "FME-2"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMC351.pdf",
    credits: "0-0-3"
  },
  {
    id: 728,
    code: "ESD501",
    name: "Environmental Geology and Resource Management",
    department: "Environmental Science & Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "LC-II-G5"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-II-G5"
      ],
      [
        "Friday",
        "12:00-12:50",
        "LC-II-G5"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESD501.pdf",
    credits: "3-0-0"
  },
  {
    id: 729,
    code: "FMC306",
    name: "Coal and Mineral Process Equipment Selection Laboratory",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "10:00-10:50",
        "Thursday"
      ],
      [
        "11:00-11:50",
        null,
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMC306.pdf",
    credits: "0-0-2"
  },
  {
    id: 653,
    code: "GLC524",
    name: "Principles and Applications of Geostatistics Practical",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "04:00-04:50",
        "AGL-1"
      ],
      [
        "Wednesday",
        "05:00-05:50",
        "AGL-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC524.pdf",
    credits: "0-0-2"
  },
  {
    id: 731,
    code: "FMC301",
    name: "Coal and Mineral Process Equipment Selection",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "FME-1"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "FME-1"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "FME-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMC301.pdf",
    credits: "3-0-0"
  },
  {
    id: 732,
    code: "FMC302",
    name: "Extractive Metallurgy",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "03:00-03:50",
        "FME-1"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "FME-1"
      ],
      [
        "Friday",
        "04:00-04:50",
        "FME-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMC302.pdf",
    credits: "3-0-0"
  },
  {
    id: 733,
    code: "CHD407",
    name: "Materials Characterization",
    department: "Chemical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "CHE-402"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "CHE-402"
      ],
      [
        "Friday",
        "03:00-03:50",
        "CHE-402"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHD407.pdf",
    credits: "3-0-0"
  },
  {
    id: 734,
    code: "GPD504",
    name: "Airborne Geophysics",
    department: "Applied Geophysics",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "AGP Annexure 1st Floor"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "AGP Annexure 1st Floor"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "AGP Annexure 1st Floor"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPD504.pdf",
    credits: "3-0-0"
  },
  {
    id: 735,
    code: "PHD572",
    name: "Laser and Nonlinear Optics",
    department: "Physics",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "AGP Annexure 1st Floor"
      ],
      [
        "Tuesday",
        "04:00-04:50",
        "AGP Annexure 1st Floor"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "AGP Annexure 1st Floor"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHD572.pdf",
    credits: "3-0-0"
  },
  {
    id: 347,
    code: "MCC503",
    name: "Numerical Methods",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "Wednesday"
      ],
      [
        "09:00-09:50",
        "Friday",
        "10:00-10:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC503.pdf",
    credits: "3-0-0"
  },
  {
    id: 737,
    code: "ESC508",
    name: "Instrumental Techniques in Environmental Analysis",
    department: "Environmental Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "LC-II-G13"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "LC-II-G13"
      ],
      [
        "Friday",
        "11:00-11:50",
        "LC-II-G13"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESC508.pdf",
    credits: "3-0-0"
  },
  {
    id: 738,
    code: "ECC203",
    name: "Digital Circuits and System Design",
    department: "Electronics Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "LC-II-G5"
      ],
      [
        "Tuesday",
        "09:00-09:50",
        "LC-II-G5"
      ],
      [
        "Thursday",
        "09:00-09:50",
        "LC-II-G5"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECC203.pdf",
    credits: "3-0-0"
  },
  {
    id: 739,
    code: "ECC204",
    name: "Digital System Design Lab",
    department: "Electronics Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "Digital Electronics Lab (635)"
      ],
      [
        "Monday",
        "05:00-05:50",
        "Monday"
      ],
      [
        "05:00-05:50",
        "Digital Electronics Lab (635)",
        "Monday"
      ],
      [
        "04:00-04:50",
        "Tuesday",
        "04:00-04:50"
      ],
      [
        "Tuesday",
        "05:00-05:50",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECC204.pdf",
    credits: "0-0-2"
  },
  {
    id: 740,
    code: "FMC509",
    name: "Advanced Materials and Applications",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "FME-2"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "FME-2"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "FME-2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMC509.pdf",
    credits: "3-0-0"
  },
  {
    id: 741,
    code: "ESC525",
    name: "Environmental Chemistry",
    department: "Environmental Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "LC-II-G13"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-II-G13"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-II-G13"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESC525.pdf",
    credits: "3-0-0"
  },
  {
    id: 742,
    code: "PHO572",
    name: "Photonics and Fibre Optics",
    department: "Physics",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "05:00-05:50",
        "AGL-1"
      ],
      [
        "Wednesday",
        "05:00-05:50",
        "AGL-1"
      ],
      [
        "Friday",
        "03:00-03:50",
        "AGL-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHO572.pdf",
    credits: "3-0-0"
  },
  {
    id: 743,
    code: "PHD507",
    name: "Plasma and Space Physics",
    department: "Physics",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "AGL-1"
      ],
      [
        "Tuesday",
        "04:00-04:50",
        "AGL-1"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "AGL-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHD507.pdf",
    credits: "3-0-0"
  },
  {
    id: 88,
    code: "MSC519",
    name: "Project Management",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "MS 210"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "MS 210"
      ],
      [
        "Friday",
        "02:00-02:50",
        "MS 210"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC519.pdf",
    credits: "3-0-0"
  },
  {
    id: 745,
    code: "MSD512",
    name: "Service Operations Management",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "LC-II-G9"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "LC-II-G9"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "LC-II-G9"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSD512.pdf",
    credits: "3-0-0"
  },
  {
    id: 746,
    code: "PHD574",
    name: "Advanced Materials and Energy Devices",
    department: "Physics",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "05:00-05:50",
        "AGP Annexure 1st Floor"
      ],
      [
        "Wednesday",
        "05:00-05:50",
        "AGP Annexure 1st Floor"
      ],
      [
        "Friday",
        "03:00-03:50",
        "AGP Annexure 1st Floor"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHD574.pdf",
    credits: "3-0-0"
  },
  {
    id: 747,
    code: "MMC308",
    name: "Pumps Fans & Compressors Lab",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "10:00-10:50",
        "PFC LAB"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "PFC LAB"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MMC308.pdf",
    credits: "0-0-2"
  },
  {
    id: 748,
    code: "PEC308",
    name: "Enhanced Oil Recovery Practical",
    department: "Petroleum Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "PE Reservoir Engineering laboratory"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "PE Reservoir Engineering laboratory"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "Thursday"
      ],
      [
        "11:00-11:50",
        null,
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEC308.pdf",
    credits: "0-0-2"
  },
  {
    id: 749,
    code: "PEC309",
    name: "Reservoir Characterization Practical",
    department: "Petroleum Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "Reservoir Characterization Lab"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "Reservoir Characterization Lab"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "Thursday"
      ],
      [
        "10:00-10:50",
        null,
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEC309.pdf",
    credits: "0-0-2"
  },
  {
    id: 750,
    code: "CHD404",
    name: "Bioprocess Technology",
    department: "Chemical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "CHE-401"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "CHE-401"
      ],
      [
        "Friday",
        "12:00-12:50",
        "CHE-401"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHD404.pdf",
    credits: "3-0-0"
  },
  {
    id: 751,
    code: "CHD411",
    name: "Catalytic Reaction Engineering",
    department: "Chemical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "11:00-11:50",
        "CHE-401"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "CHE-401"
      ],
      [
        "Friday",
        "10:00-10:50",
        "CHE-401"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHD411.pdf",
    credits: "3-0-0"
  },
  {
    id: 752,
    code: "CSD404",
    name: "Computer Graphics",
    department: "Computer Science & Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "CSE CR1"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "CSE CR1"
      ],
      [
        "Friday",
        "12:00-12:50",
        "CSE CR1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSD404.pdf",
    credits: "3-0-0"
  },
  {
    id: 753,
    code: "GPC555",
    name: "Research Methodology and Statistics",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "AGP Annexure 1st Floor"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "AGP Annexure 1st Floor"
      ],
      [
        "Friday",
        "06:00-06:50",
        "AGP Annexure 1st Floor"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC555.pdf",
    credits: "3-0-0"
  },
  {
    id: 754,
    code: "CHC518",
    name: "Research Methodology",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "CHE-402"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "CHE-402"
      ],
      [
        "Friday",
        "06:00-06:50",
        "CHE-402"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC518.pdf",
    credits: "3-0-0"
  },
  {
    id: 755,
    code: "FMC511",
    name: "Research Methodology",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "FME-2"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "FME-2"
      ],
      [
        "Friday",
        "06:00-06:50",
        "FME-2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMC511.pdf",
    credits: "3-0-0"
  },
  {
    id: 756,
    code: "ECC581",
    name: "Research Methodology",
    department: "Electronics Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "LC-II-C16"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "LC-II-C16"
      ],
      [
        "Friday",
        "06:00-06:50",
        "LC-II-C16"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECC581.pdf",
    credits: "3-0-0"
  },
  {
    id: 757,
    code: "CEO528",
    name: "Ground Improvement and Geosynthetics",
    department: "Civil Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "08:00-08:50",
        "CECR3"
      ],
      [
        "Wednesday",
        "08:00-08:50",
        "CECR3"
      ],
      [
        "Friday",
        "08:00-08:50",
        "CECR3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEO528.pdf",
    credits: "3-0-0"
  },
  {
    id: 758,
    code: "MNC700",
    name: "Research Methodology",
    department: "Mining Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "MIN- Seminar Hall"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "MIN- Seminar Hall"
      ],
      [
        "Friday",
        "06:00-06:50",
        "MIN- Seminar Hall"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNC700.pdf",
    credits: "3-0-0"
  },
  {
    id: 759,
    code: "PEC520",
    name: "Research Methodology",
    department: "Petroleum Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "PET 3"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "PET 3"
      ],
      [
        "Friday",
        "06:00-06:50",
        "PET 3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEC520.pdf",
    credits: "3-0-0"
  },
  {
    id: 760,
    code: "MMC591",
    name: "Research Methodology and Statistics",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "Mech G1"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "Mech G1"
      ],
      [
        "Friday",
        "06:00-06:50",
        "Mech G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MMC591.pdf",
    credits: "3-0-0"
  },
  {
    id: 761,
    code: "CHC511",
    name: "Term Paper and Presentation",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "10:00-10:50",
        "CHE-423"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "CHE-423"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC511.pdf",
    credits: "0-0-2"
  },
  {
    id: 762,
    code: "CHD502",
    name: "Nanotechnology",
    department: "Chemical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "CHE-402"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "CHE-402"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "CHE-402"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHD502.pdf",
    credits: "3-0-0"
  },
  {
    id: 497,
    code: "CHC530",
    name: "Reaction Engineering",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "LC-II-C13"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "LC-II-C13"
      ],
      [
        "Friday",
        "02:00-02:50",
        "LC-II-C13"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC530.pdf",
    credits: "3-0-0"
  },
  {
    id: 498,
    code: "CHC531",
    name: "Chemical Engineering Lab",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "Monday"
      ],
      [
        "10:00-10:50",
        "Monday",
        "11:00-11:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC531.pdf",
    credits: "0-0-3"
  },
  {
    id: 765,
    code: "GPD522",
    name: "Computational Seismology",
    department: "Applied Geophysics",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "LC-II-C14"
      ],
      [
        "Tuesday",
        "04:00-04:50",
        "LC-II-C14"
      ],
      [
        "Friday",
        "05:00-05:50",
        "LC-II-C14"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPD522.pdf",
    credits: "3-0-0"
  },
  {
    id: 766,
    code: "FMC203",
    name: "Physical Separation Processes for Coal and Minerals",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "FME-2"
      ],
      [
        "Tuesday",
        "09:00-09:50",
        "FME-2"
      ],
      [
        "Thursday",
        "09:00-09:50",
        "FME-2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMC203.pdf",
    credits: "3-0-0"
  },
  {
    id: 767,
    code: "ESC201",
    name: "Drinking Water Supply and Treatment",
    department: "Environmental Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "LC-II-C5"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "LC-II-C5"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-II-C5"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESC201.pdf",
    credits: "3-0-0"
  },
  {
    id: 768,
    code: "FMC201",
    name: "Colloids and Interfacial Phenomena",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "FME-2"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "FME-2"
      ],
      [
        "Friday",
        "10:00-10:50",
        "FME-2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMC201.pdf",
    credits: "3-0-0"
  },
  {
    id: 769,
    code: "ESC252",
    name: "Air and Noise Pollution Practical",
    department: "Environmental Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "04:00-04:50",
        "Air Lab"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "Air Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESC252.pdf",
    credits: "0-0-2"
  },
  {
    id: 770,
    code: "FMC252",
    name: "Physical Separation Processes Laboratory",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "05:00-05:50",
        "FME-1"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "FME-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMC252.pdf",
    credits: "0-0-2"
  },
  {
    id: 771,
    code: "ECC205",
    name: "Signals & Networks Lab",
    department: "Electronics Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "05:00-05:50",
        "Electronics Main Lab I (231)"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "Thursday"
      ],
      [
        "04:00-04:50",
        "Electronics Main Lab I (231)",
        "Thursday"
      ],
      [
        "05:00-05:50",
        "Friday",
        "04:00-04:50"
      ],
      [
        "Friday",
        "05:00-05:50",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECC205.pdf",
    credits: "0-0-2"
  },
  {
    id: 772,
    code: "FMC202",
    name: "Heat and Mass Transfer",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "FME-2"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "FME-2"
      ],
      [
        "Friday",
        "11:00-11:50",
        "FME-2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMC202.pdf",
    credits: "3-0-0"
  },
  {
    id: 773,
    code: "MSD507",
    name: "Management of Banks and Financial Institutions",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "MS 011"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "MS 011"
      ],
      [
        "Friday",
        "03:00-03:50",
        "MS 011"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSD507.pdf",
    credits: "3-0-0"
  },
  {
    id: 407,
    code: "GLE203",
    name: "Geology for Engineering and Sciences Practical",
    department: "Applied Geology",
    type: "Engineering Science Option (ESO)",
    timetable: [
      [
        "Tuesday",
        "04:00-04:50",
        "Coal Geology Lab"
      ],
      [
        "Tuesday",
        "05:00-05:50",
        "Coal Geology Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLE203.pdf",
    credits: "0-0-2"
  },
  {
    id: 775,
    code: "MSD503",
    name: "Sales and Distribution Management",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "MS 111"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "MS 111"
      ],
      [
        "Friday",
        "04:00-04:50",
        "MS 111"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSD503.pdf",
    credits: "3-0-0"
  },
  {
    id: 776,
    code: "MSD511",
    name: "Human Resources Development",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "LC-II-G11"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "LC-II-G11"
      ],
      [
        "Friday",
        "02:00-02:50",
        "LC-II-G11"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSD511.pdf",
    credits: "3-0-0"
  },
  {
    id: 777,
    code: "ESE201",
    name: "Pollution Control and Management",
    department: "Environmental Science & Engineering",
    type: "Engineering Science Option (ESO)",
    timetable: [
      [
        "Monday",
        "08:00-08:50",
        "LC-II-G9"
      ],
      [
        "Wednesday",
        "08:00-08:50",
        "LC-II-G9"
      ],
      [
        "Friday",
        "08:00-08:50",
        "LC-II-G9"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESE201.pdf",
    credits: "3-0-0"
  },
  {
    id: 778,
    code: "PEC201",
    name: "Drilling Technology",
    department: "Petroleum Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "PET 2"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "PET 2"
      ],
      [
        "Friday",
        "10:00-10:50",
        "PET 2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEC201.pdf",
    credits: "3-0-0"
  },
  {
    id: 779,
    code: "MSD532",
    name: "Computational Finance",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "LC-II-G12"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "LC-II-G12"
      ],
      [
        "Friday",
        "02:00-02:50",
        "LC-II-G12"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSD532.pdf",
    credits: "3-0-0"
  },
  {
    id: 780,
    code: "FMC251",
    name: "Particle Technology Laboratory",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "FME-1"
      ],
      [
        "Monday",
        "05:00-05:50",
        "FME-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMC251.pdf",
    credits: "0-0-2"
  },
  {
    id: 781,
    code: "MSD508",
    name: "Advertising and Promotion Management",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "MS 210"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "MS 210"
      ],
      [
        "Friday",
        "03:00-03:50",
        "MS 210"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSD508.pdf",
    credits: "3-0-0"
  },
  {
    id: 782,
    code: "FME221",
    name: "Particle Technology",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Engineering Science Option (ESO)",
    timetable: [
      [
        "Tuesday",
        "08:00-08:50",
        "LC-II-G6"
      ],
      [
        "Thursday",
        "08:00-08:50",
        "LC-II-G6"
      ],
      [
        "Friday",
        "09:00-09:50",
        "LC-II-G6"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FME221.pdf",
    credits: "3-0-0"
  },
  {
    id: 783,
    code: "CYC516",
    name: "Strategies in Organic Synthesis",
    department: "Chemical and Chemical Biology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "LC-II-C8"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "LC-II-C8"
      ],
      [
        "Friday",
        "03:00-03:50",
        "LC-II-C8"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYC516.pdf",
    credits: "3-0-0"
  },
  {
    id: 784,
    code: "MSD510",
    name: "Personnel Management and Industrial Relations",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "MS 113"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "MS 113"
      ],
      [
        "Friday",
        "03:00-03:50",
        "MS 113"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSD510.pdf",
    credits: "3-0-0"
  },
  {
    id: 785,
    code: "MSD530",
    name: "Supply Chain Management and Logistics",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "LC-II-G13"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "LC-II-G13"
      ],
      [
        "Friday",
        "03:00-03:50",
        "LC-II-G13"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSD530.pdf",
    credits: "3-0-0"
  },
  {
    id: 786,
    code: "CYC518",
    name: "Analytical Chemistry Lab",
    department: "Chemical and Chemical Biology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "12:00-12:50",
        "Wednesday"
      ],
      [
        "10:00-10:50",
        "PG Lab",
        "Wednesday"
      ],
      [
        "11:00-11:50",
        "PG Lab",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYC518.pdf",
    credits: "0-0-3"
  },
  {
    id: 787,
    code: "CYC515",
    name: "Molecular Spectroscopy",
    department: "Chemical and Chemical Biology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "04:00-04:50",
        "Thursday"
      ],
      [
        "04:00-04:50",
        "Friday",
        "05:00-05:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYC515.pdf",
    credits: "3-0-0"
  },
  {
    id: 788,
    code: "CYD532",
    name: "Solid State Materials: Chemistry & Engineering",
    department: "Chemical and Chemical Biology",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "LC-II-C15"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "LC-II-C15"
      ],
      [
        "Friday",
        "04:00-04:50",
        "LC-II-C15"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYD532.pdf",
    credits: "3-0-0"
  },
  {
    id: 789,
    code: "MSD533",
    name: "Marketing Research",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "LC-II-G12"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "LC-II-G12"
      ],
      [
        "Friday",
        "02:00-02:50",
        "LC-II-G12"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSD533.pdf",
    credits: "3-0-0"
  },
  {
    id: 790,
    code: "CYC517",
    name: "Physical Chemistry Lab - II",
    department: "Chemical and Chemical Biology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "PG Lab"
      ],
      [
        "Monday",
        "11:00-11:50",
        "PG Lab"
      ],
      [
        "Monday",
        "12:00-12:50",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYC517.pdf",
    credits: "0-0-3"
  },
  {
    id: 791,
    code: "MCC514",
    name: "Functional Analysis",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "LC-II-G10"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "LC-II-G10"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "LC-II-G10"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC514.pdf",
    credits: "3-0-0"
  },
  {
    id: 792,
    code: "CYC514",
    name: "Photochemistry & Pericyclic Reactions",
    department: "Chemical and Chemical Biology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "LC-II-C8"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "LC-II-C8"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "LC-II-C8"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYC514.pdf",
    credits: "3-0-0"
  },
  {
    id: 793,
    code: "CYD535",
    name: "Main Group Chemistry",
    department: "Chemical and Chemical Biology",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "05:00-05:50",
        "Wednesday"
      ],
      [
        "05:00-05:50",
        "Thursday",
        "05:00-05:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYD535.pdf",
    credits: "3-0-0"
  },
  {
    id: 794,
    code: "CYD536",
    name: "Science of Corrosion & Corrosion Control",
    department: "Chemical and Chemical Biology",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "05:00-05:50",
        "LC-II-C8"
      ],
      [
        "Wednesday",
        "05:00-05:50",
        "LC-II-C8"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "LC-II-C8"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYD536.pdf",
    credits: "3-0-0"
  },
  {
    id: 795,
    code: "CYD534",
    name: "Heterocyclic Chemistry",
    department: "Chemical and Chemical Biology",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "LC-II-C8"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "LC-II-C8"
      ],
      [
        "Friday",
        "04:00-04:50",
        "LC-II-C8"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYD534.pdf",
    credits: "3-0-0"
  },
  {
    id: 796,
    code: "MCC515",
    name: "Topology",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "04:00-04:50",
        "LC-II-G10"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "LC-II-G10"
      ],
      [
        "Friday",
        "05:00-05:50",
        "LC-II-G10"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC515.pdf",
    credits: "3-0-0"
  },
  {
    id: 797,
    code: "CYD522",
    name: "Advanced Biocatalysis",
    department: "Chemical and Chemical Biology",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "LC-II-C3"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "LC-II-C3"
      ],
      [
        "Friday",
        "04:00-04:50",
        "LC-II-C3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYD522.pdf",
    credits: "3-0-0"
  },
  {
    id: 798,
    code: "MCC516",
    name: "Computational Fluid Dynamics",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "05:00-05:50",
        "LC-II-G10"
      ],
      [
        "Wednesday",
        "05:00-05:50",
        "LC-II-G10"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "LC-II-G10"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC516.pdf",
    credits: "3-0-0"
  },
  {
    id: 799,
    code: "CEC502",
    name: "Research Methodology and Statistics",
    department: "Civil Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "CECR3"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "CECR3"
      ],
      [
        "Friday",
        "06:00-06:50",
        "CECR3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEC502.pdf",
    credits: "3-0-0"
  },
  {
    id: 800,
    code: "PHC515",
    name: "Laser Physics and Technology",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "Tuesday"
      ],
      [
        "03:00-03:50",
        "Thursday",
        "06:00-06:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC515.pdf",
    credits: "3-0-0"
  },
  {
    id: 801,
    code: "MCC517",
    name: "Design and Analysis of Algorithms",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "LC-II-G10"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "LC-II-G10"
      ],
      [
        "Friday",
        "03:00-03:50",
        "LC-II-G10"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC517.pdf",
    credits: "3-0-0"
  },
  {
    id: 802,
    code: "MCC518",
    name: "Computational Fluid Dynamics Practical",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "UG Lab-1"
      ],
      [
        "Monday",
        "12:00-12:50",
        "Monday"
      ],
      [
        "10:00-10:50",
        "UG Lab-1",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC518.pdf",
    credits: "0-0-3"
  },
  {
    id: 803,
    code: "PHC517",
    name: "Computation and Simulation",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "Monday"
      ],
      [
        "11:00-11:50",
        null,
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC517.pdf",
    credits: "0-0-2"
  },
  {
    id: 804,
    code: "CYC502",
    name: "Organic Reactions and Stereochemistry",
    department: "Chemical and Chemical Biology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-II-C8"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-C8"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-II-C8"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYC502.pdf",
    credits: "3-0-0"
  },
  {
    id: 805,
    code: "PHD510",
    name: "Quantum Computation and Information",
    department: "Physics",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "05:00-05:50",
        "LC-I-C12"
      ],
      [
        "Wednesday",
        "05:00-05:50",
        "LC-I-C12"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "LC-I-C12"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHD510.pdf",
    credits: "3-0-0"
  },
  {
    id: 806,
    code: "PHC514",
    name: "Statistical Mechanics",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "Tuesday"
      ],
      [
        "06:00-06:50",
        "Wednesday",
        "03:00-03:50"
      ],
      [
        "Thursday",
        "03:00-03:50",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC514.pdf",
    credits: "3-1-0"
  },
  {
    id: 807,
    code: "CYC504",
    name: "Application of Spectroscopic Methods",
    department: "Chemical and Chemical Biology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "LC-II-C8"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-II-C8"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-II-C8"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYC504.pdf",
    credits: "3-0-0"
  },
  {
    id: 808,
    code: "PHC516",
    name: "Nuclear and Particle Physics",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "04:00-04:50",
        "LC-II-C7"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "LC-II-C7"
      ],
      [
        "Friday",
        "05:00-05:50",
        "LC-II-C7"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC516.pdf",
    credits: "3-0-0"
  },
  {
    id: 809,
    code: "CYC506",
    name: "Inorganic Chemistry lab",
    department: "Chemical and Chemical Biology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "04:00-04:50",
        "PG Lab"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "PG Lab"
      ],
      [
        "Thursday",
        "06:00-06:50",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYC506.pdf",
    credits: "0-0-3"
  },
  {
    id: 810,
    code: "MCD514",
    name: "Sampling Theory",
    department: "Mathematics and Computing",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "Wednesday"
      ],
      [
        "04:00-04:50",
        "Friday",
        "04:00-04:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCD514.pdf",
    credits: "3-0-0"
  },
  {
    id: 811,
    code: "CYC503",
    name: "Mathematics for Chemists",
    department: "Chemical and Chemical Biology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "LC-II-C8"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "LC-II-C8"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "LC-II-C8"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYC503.pdf",
    credits: "3-0-0"
  },
  {
    id: 812,
    code: "CYC501",
    name: "Quantum Chemistry",
    department: "Chemical and Chemical Biology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "LC-II-C8"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "LC-II-C8"
      ],
      [
        "Friday",
        "11:00-11:50",
        "LC-II-C8"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYC501.pdf",
    credits: "3-0-0"
  },
  {
    id: 813,
    code: "CYC507",
    name: "Organic Chemistry Lab - I",
    department: "Chemical and Chemical Biology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "PG Lab"
      ],
      [
        "Monday",
        "06:00-06:50",
        "Monday"
      ],
      [
        "04:00-04:50",
        "PG Lab",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYC507.pdf",
    credits: "0-0-3"
  },
  {
    id: 814,
    code: "PHC518",
    name: "Experimental Physics - V",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "10:00-10:50",
        "PHPG LAB"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "PHPG LAB"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC518.pdf",
    credits: "0-0-2"
  },
  {
    id: 815,
    code: "PHC505",
    name: "Numerical Methods and Computer Programming",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "LC-II-C7"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "LC-II-C7"
      ],
      [
        "Friday",
        "12:00-12:50",
        "LC-II-C7"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC505.pdf",
    credits: "3-0-0"
  },
  {
    id: 816,
    code: "PHD501",
    name: "Advanced Quantum Mechanics",
    department: "Physics",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "LC-II-C9"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "LC-II-C9"
      ],
      [
        "Friday",
        "04:00-04:50",
        "LC-II-C9"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHD501.pdf",
    credits: "3-0-0"
  },
  {
    id: 817,
    code: "CYC505",
    name: "Coordination Chemistry",
    department: "Chemical and Chemical Biology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "LC-II-C8"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "LC-II-C8"
      ],
      [
        "Friday",
        "12:00-12:50",
        "LC-II-C8"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYC505.pdf",
    credits: "3-0-0"
  },
  {
    id: 818,
    code: "PHC502",
    name: "Methods of Mathematical Physics",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "LC-II-C7"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "Thursday"
      ],
      [
        "10:00-10:50",
        "LC-II-C7",
        "Friday"
      ],
      [
        "11:00-11:50",
        "LC-II-C7",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC502.pdf",
    credits: "3-1-0"
  },
  {
    id: 819,
    code: "PHC501",
    name: "Classical Mechanics and Special Theory of Relativity",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-II-C7"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-C7"
      ],
      [
        "Thursday",
        "09:00-09:50",
        "Friday"
      ],
      [
        "10:00-10:50",
        "LC-II-C7",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC501.pdf",
    credits: "3-1-0"
  },
  {
    id: 820,
    code: "PHC503",
    name: "Optics and Optical Instrumentation",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "LC-II-C7"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "LC-II-C7"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "LC-II-C7"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC503.pdf",
    credits: "3-0-0"
  },
  {
    id: 821,
    code: "CYC523",
    name: "Numerical Analysis and Methods in Chemistry",
    department: "Chemical and Chemical Biology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "Wednesday"
      ],
      [
        "12:00-12:50",
        "Thursday",
        "11:00-11:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYC523.pdf",
    credits: "3-0-0"
  },
  {
    id: 822,
    code: "CEC512",
    name: "Applied Engineering Statistics",
    department: "Civil Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "CECR2"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "CECR2"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "CECR2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEC512.pdf",
    credits: "3-0-0"
  },
  {
    id: 823,
    code: "EEC511",
    name: "Renewable Energy Sources",
    department: "Electrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "Tuesday"
      ],
      [
        "11:00-11:50",
        "Wednesday",
        "11:00-11:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEC511.pdf",
    credits: "3-0-0"
  },
  {
    id: 824,
    code: "PHC507",
    name: "Experimental Physics - II",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "04:00-04:50",
        "PHPG LAB"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "PHPG LAB"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC507.pdf",
    credits: "0-0-2"
  },
  {
    id: 151,
    code: "HSI500",
    name: "Research and Technical Communication",
    department: "Humanities and Social Science",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "Wednesday"
      ],
      [
        "09:00-09:50",
        "Friday",
        "09:00-09:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSI500.pdf",
    credits: "3-0-0"
  },
  {
    id: 151,
    code: "HSI500",
    name: "Research and Technical Communication",
    department: "Humanities and Social Science",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "Wednesday"
      ],
      [
        "09:00-09:50",
        "Friday",
        "09:00-09:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSI500.pdf",
    credits: "3-0-0"
  },
  {
    id: 827,
    code: "CYC524",
    name: "Advanced Spectroscopic Methods",
    department: "Chemical and Chemical Biology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-I-C15"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-I-C15"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-I-C15"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYC524.pdf",
    credits: "3-0-0"
  },
  {
    id: 787,
    code: "CYC515",
    name: "Molecular Spectroscopy",
    department: "Chemical and Chemical Biology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "04:00-04:50",
        "Thursday"
      ],
      [
        "04:00-04:50",
        "Friday",
        "05:00-05:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYC515.pdf",
    credits: "3-0-0"
  },
  {
    id: 151,
    code: "HSI500",
    name: "Research and Technical Communication",
    department: "Humanities and Social Science",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "Wednesday"
      ],
      [
        "09:00-09:50",
        "Friday",
        "09:00-09:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSI500.pdf",
    credits: "3-0-0"
  },
  {
    id: 830,
    code: "PHC506",
    name: "Experimental Physics - I",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "PHPG LAB"
      ],
      [
        "Monday",
        "05:00-05:50",
        "PHPG LAB"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC506.pdf",
    credits: "0-0-2"
  },
  {
    id: 831,
    code: "CEC503",
    name: "Mechanics of Deformable Solids",
    department: "Civil Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "CECR1"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "CECR1"
      ],
      [
        "Friday",
        "11:00-11:50",
        "CECR1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEC503.pdf",
    credits: "3-0-0"
  },
  {
    id: 832,
    code: "CEC513",
    name: "River Engineering",
    department: "Civil Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "CECR2"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "CECR2"
      ],
      [
        "Friday",
        "12:00-12:50",
        "CECR2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEC513.pdf",
    credits: "3-0-0"
  },
  {
    id: 833,
    code: "CYC522",
    name: "Advanced Techniques in Materials Characterization",
    department: "Chemical and Chemical Biology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "LC-I-C15"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "LC-I-C15"
      ],
      [
        "Friday",
        "11:00-11:50",
        "LC-I-C15"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYC522.pdf",
    credits: "3-0-0"
  },
  {
    id: 834,
    code: "CEC504",
    name: "Mechanics of Geomaterials",
    department: "Civil Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "CECR1"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "CECR1"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "CECR1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEC504.pdf",
    credits: "3-0-0"
  },
  {
    id: 835,
    code: "CEC501",
    name: "Numerical Methods in Civil Engineering",
    department: "Civil Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-II-G6"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-G6"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-II-G6"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEC501.pdf",
    credits: "3-0-0"
  },
  {
    id: 836,
    code: "PHC504",
    name: "Electronics",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "LC-II-C7"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-II-C7"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-II-C7"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC504.pdf",
    credits: "3-0-0"
  },
  {
    id: 837,
    code: "EEC522",
    name: "Electromagnetic Compatibility of Power Converters",
    department: "Electrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "LC-I-C17"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "LC-I-C17"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "LC-I-C17"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEC522.pdf",
    credits: "3-0-0"
  },
  {
    id: 838,
    code: "MSC508",
    name: "Business Analytics Lab",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "04:00-04:50",
        "Tuesday"
      ],
      [
        "05:00-05:50",
        null,
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC508.pdf",
    credits: "0-0-2"
  },
  {
    id: 839,
    code: "EEC521",
    name: "Battery Management Systems",
    department: "Electrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-I-C17"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-I-C17"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-I-C17"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEC521.pdf",
    credits: "3-0-0"
  },
  {
    id: 840,
    code: "EEC503",
    name: "Numerical Simulation for Electrical Engineering",
    department: "Electrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "LC-I-C17"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "LC-I-C17"
      ],
      [
        "Friday",
        "11:00-11:50",
        "LC-I-C17"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEC503.pdf",
    credits: "3-0-0"
  },
  {
    id: 475,
    code: "MSC512",
    name: "Operations Management",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "MS 113"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "MS 113"
      ],
      [
        "Friday",
        "09:00-09:50",
        "MS 113"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC512.pdf",
    credits: "3-0-0"
  },
  {
    id: 842,
    code: "MSC507",
    name: "Decision Modelling",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "Thursday"
      ],
      [
        "10:00-10:50",
        "Friday",
        "11:00-11:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC507.pdf",
    credits: "3-0-0"
  },
  {
    id: 843,
    code: "MSC504",
    name: "Financial Accounting and Reporting",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "09:00-09:50",
        "Thursday"
      ],
      [
        "09:00-09:50",
        "Friday",
        "09:00-09:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC504.pdf",
    credits: "3-0-0"
  },
  {
    id: 844,
    code: "CEO301",
    name: "Reliability and Risk Assessment",
    department: "Civil Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "LC-II-C10"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "LC-II-C10"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-II-C10"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEO301.pdf",
    credits: "3-0-0"
  },
  {
    id: 845,
    code: "CED401",
    name: "Traffic Engineering and Management",
    department: "Civil Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "LC-II-C10"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-II-C10"
      ],
      [
        "Friday",
        "12:00-12:50",
        "LC-II-C10"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CED401.pdf",
    credits: "3-0-0"
  },
  {
    id: 846,
    code: "MSC518",
    name: "Productivity Management Lab",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "04:00-04:50",
        "MS-013"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "MS-013"
      ],
      [
        "Thursday",
        "06:00-06:50",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC518.pdf",
    credits: "0-0-3"
  },
  {
    id: 847,
    code: "EED401",
    name: "Power System Protection and Switchgear",
    department: "Electrical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "LC-II-G11"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-II-G11"
      ],
      [
        "Friday",
        "12:00-12:50",
        "LC-II-G11"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EED401.pdf",
    credits: "3-0-0"
  },
  {
    id: 848,
    code: "MSC521",
    name: "Productivity Management",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "MS 209"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "MS 209"
      ],
      [
        "Friday",
        "10:00-10:50",
        "MS 209"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC521.pdf",
    credits: "3-0-0"
  },
  {
    id: 849,
    code: "CEO401",
    name: "Flow and Transport through Porous Media",
    department: "Civil Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "11:00-11:50",
        "LC-II-C10"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-II-C10"
      ],
      [
        "Friday",
        "11:00-11:50",
        "LC-II-C10"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEO401.pdf",
    credits: "3-0-0"
  },
  {
    id: 850,
    code: "EED403",
    name: "Industrial Power Electronics",
    department: "Electrical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "LC-II-G11"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "LC-II-G11"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "LC-II-G11"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EED403.pdf",
    credits: "3-0-0"
  },
  {
    id: 851,
    code: "CED501",
    name: "Computational Solid Mechanics",
    department: "Civil Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "Wednesday"
      ],
      [
        "11:00-11:50",
        "Thursday",
        "12:00-12:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CED501.pdf",
    credits: "3-0-0"
  },
  {
    id: 852,
    code: "EED503",
    name: "Digital Control of Power Electronics & Drives",
    department: "Electrical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "Wednesday"
      ],
      [
        "12:00-12:50",
        "Friday",
        "12:00-12:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EED503.pdf",
    credits: "3-0-0"
  },
  {
    id: 853,
    code: "EED404",
    name: "Reactive Power and Voltage Control",
    department: "Electrical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "LC-II-C2"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "LC-II-C2"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "LC-II-C2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EED404.pdf",
    credits: "3-0-0"
  },
  {
    id: 854,
    code: "MND406",
    name: "Mine Environmental Engineering",
    department: "Mining Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "LC-II-G11"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "LC-II-G11"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-II-G11"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MND406.pdf",
    credits: "3-0-0"
  },
  {
    id: 855,
    code: "CED531",
    name: "Advanced Design of Structures",
    department: "Civil Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "LC-II-C2"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-II-C2"
      ],
      [
        "Friday",
        "12:00-12:50",
        "LC-II-C2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CED531.pdf",
    credits: "3-0-0"
  },
  {
    id: 856,
    code: "MSD506",
    name: "Investment Analysis and Portfolio Management",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "Wednesday"
      ],
      [
        "10:00-10:50",
        "Thursday",
        "10:00-10:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSD506.pdf",
    credits: "3-0-0"
  },
  {
    id: 757,
    code: "CEO528",
    name: "Ground Improvement and Geosynthetics",
    department: "Civil Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "08:00-08:50",
        "CECR3"
      ],
      [
        "Wednesday",
        "08:00-08:50",
        "CECR3"
      ],
      [
        "Friday",
        "08:00-08:50",
        "CECR3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEO528.pdf",
    credits: "3-0-0"
  },
  {
    id: 858,
    code: "MSD513",
    name: "Managerial Psychology",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "11:00-11:50",
        "Thursday"
      ],
      [
        "11:00-11:50",
        "Friday",
        "11:00-11:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSD513.pdf",
    credits: "3-0-0"
  },
  {
    id: 859,
    code: "MND401",
    name: "Advanced Mine Ventilation",
    department: "Mining Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "Wednesday"
      ],
      [
        "12:00-12:50",
        "Friday",
        "12:00-12:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MND401.pdf",
    credits: "3-0-0"
  },
  {
    id: 860,
    code: "MED505",
    name: "Fundamental of Classical and Statistical Thermodynamics",
    department: "Mechanical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "Wednesday"
      ],
      [
        "11:00-11:50",
        "Thursday",
        "12:00-12:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MED505.pdf",
    credits: "3-0-0"
  },
  {
    id: 861,
    code: "EEO403",
    name: "Digital Signal Processing",
    department: "Electrical Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "11:00-11:50",
        "LC-II-C2"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-II-C2"
      ],
      [
        "Friday",
        "11:00-11:50",
        "LC-II-C2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEO403.pdf",
    credits: "3-0-0"
  },
  {
    id: 862,
    code: "EEO404",
    name: "Renewable Energy Systems and Energy Audit",
    department: "Electrical Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "LC-II-C2"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-C2"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "LC-II-C2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEO404.pdf",
    credits: "3-0-0"
  },
  {
    id: 863,
    code: "EEO405",
    name: "Industrial Automation",
    department: "Electrical Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "LC-II-C2"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "LC-II-C2"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-II-C2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEO405.pdf",
    credits: "3-0-0"
  },
  {
    id: 864,
    code: "MND400",
    name: "Rock Excavation Engineering",
    department: "Mining Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "Wednesday"
      ],
      [
        "12:00-12:50",
        "Friday",
        "12:00-12:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MND400.pdf",
    credits: "3-0-0"
  },
  {
    id: 865,
    code: "MND403",
    name: "Geospatial Technology in Mining",
    department: "Mining Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "11:00-11:50",
        "LC-II-C12"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-II-C12"
      ],
      [
        "Friday",
        "11:00-11:50",
        "LC-II-C12"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MND403.pdf",
    credits: "3-0-0"
  },
  {
    id: 866,
    code: "MND404",
    name: "Mine System Engineering",
    department: "Mining Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "Wednesday"
      ],
      [
        "11:00-11:50",
        "Thursday",
        "12:00-12:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MND404.pdf",
    credits: "3-0-0"
  },
  {
    id: 867,
    code: "MND405",
    name: "Mine Safety Engineering",
    department: "Mining Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "LC-II-C12"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-C12"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "LC-II-C12"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MND405.pdf",
    credits: "3-0-0"
  },
  {
    id: 868,
    code: "MED527",
    name: "Design of Tribological Components",
    department: "Mechanical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "Mech G1"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "Mech G1"
      ],
      [
        "Friday",
        "12:00-12:50",
        "Mech G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MED527.pdf",
    credits: "3-0-0"
  },
  {
    id: 869,
    code: "MND402",
    name: "Open Pit Slope Analysis and Design",
    department: "Mining Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "Wednesday"
      ],
      [
        "11:00-11:50",
        "Thursday",
        "12:00-12:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MND402.pdf",
    credits: "3-0-0"
  },
  {
    id: 870,
    code: "MED403",
    name: "Power Plant Engineering",
    department: "Mechanical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "11:00-11:50",
        "Thursday"
      ],
      [
        "11:00-11:50",
        "Friday",
        "11:00-11:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MED403.pdf",
    credits: "3-0-0"
  },
  {
    id: 871,
    code: "MED549",
    name: "Cryogenic Engineering",
    department: "Mechanical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "Wednesday"
      ],
      [
        "11:00-11:50",
        "Thursday",
        "12:00-12:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MED549.pdf",
    credits: "3-0-0"
  },
  {
    id: 872,
    code: "MED553",
    name: "Laser Processing of Materials",
    department: "Mechanical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "Mech G1"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "Mech G1"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "Mech G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MED553.pdf",
    credits: "3-0-0"
  },
  {
    id: 873,
    code: "MMD505",
    name: "Fluid Flow Machines in Mines",
    department: "Mechanical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "Wednesday"
      ],
      [
        "12:00-12:50",
        "Friday",
        "12:00-12:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MMD505.pdf",
    credits: "3-0-0"
  },
  {
    id: 874,
    code: "MED540",
    name: "Fundamentals of Aeroacoustics",
    department: "Mechanical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "Wednesday"
      ],
      [
        "11:00-11:50",
        "Thursday",
        "12:00-12:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MED540.pdf",
    credits: "3-0-0"
  },
  {
    id: 84,
    code: "MED503",
    name: "Finite Element Method",
    department: "Mechanical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "04:00-04:50",
        "Mech G1"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "Mech G1"
      ],
      [
        "Friday",
        "04:00-04:50",
        "Mech G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MED503.pdf",
    credits: "3-0-0"
  },
  {
    id: 876,
    code: "PHO504",
    name: "Optoelectronic Materials and Devices",
    department: "Physics",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "Wednesday"
      ],
      [
        "10:00-10:50",
        "Thursday",
        "10:00-10:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHO504.pdf",
    credits: "3-0-0"
  },
  {
    id: 147,
    code: "MEO534",
    name: "Automation and Control",
    department: "Mechanical Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "05:00-05:50",
        "Mech G2"
      ],
      [
        "Wednesday",
        "05:00-05:50",
        "Mech G2"
      ],
      [
        "Friday",
        "05:00-05:50",
        "Mech G2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEO534.pdf",
    credits: "3-0-0"
  },
  {
    id: 878,
    code: "PHO302",
    name: "Introduction to Astrophysics and Astronomy",
    department: "Physics",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "516"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "516"
      ],
      [
        "Friday",
        "03:00-03:50",
        "516"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHO302.pdf",
    credits: "3-0-0"
  },
  {
    id: 879,
    code: "MED401",
    name: "Energy Conversion Equipment",
    department: "Mechanical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "11:00-11:50",
        "Thursday"
      ],
      [
        "11:00-11:50",
        "Friday",
        "11:00-11:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MED401.pdf",
    credits: "3-0-0"
  },
  {
    id: 880,
    code: "CEC304",
    name: "Geotechnical Engineering Laboratory",
    department: "Civil Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "11:00-11:50",
        "CEDept"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "CEDept"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEC304.pdf",
    credits: "0-0-2"
  },
  {
    id: 577,
    code: "MED529",
    name: "Composite Materials",
    department: "Mechanical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "MME-212"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "MME-212"
      ],
      [
        "Friday",
        "04:00-04:50",
        "MME-212"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MED529.pdf",
    credits: "3-0-0"
  },
  {
    id: 882,
    code: "PHD509",
    name: "Advanced Condensed Matter Physics",
    department: "Physics",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "LC-I-C9"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "LC-I-C9"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "LC-I-C9"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHD509.pdf",
    credits: "3-0-0"
  },
  {
    id: 883,
    code: "CEC302",
    name: "Foundation Engineering",
    department: "Civil Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "03:00-03:50",
        "LC-II-C11"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "LC-II-C11"
      ],
      [
        "Friday",
        "04:00-04:50",
        "LC-II-C11"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEC302.pdf",
    credits: "3-0-0"
  },
  {
    id: 884,
    code: "CEC301",
    name: "Structural Analysis - II",
    department: "Civil Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "LC-II-C11"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "LC-II-C11"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "LC-II-C11"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEC301.pdf",
    credits: "3-0-0"
  },
  {
    id: 134,
    code: "PHD506",
    name: "Characterization Techniques",
    department: "Physics",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "LC-II-C5"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-II-C5"
      ],
      [
        "Friday",
        "12:00-12:50",
        "LC-II-C5"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHD506.pdf",
    credits: "3-0-0"
  },
  {
    id: 886,
    code: "CEC303",
    name: "Structural Engineering Laboratory",
    department: "Civil Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "12:00-12:50",
        "CEUG3"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "CEUG3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEC303.pdf",
    credits: "0-0-2"
  },
  {
    id: 757,
    code: "CEO528",
    name: "Ground Improvement and Geosynthetics",
    department: "Civil Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "08:00-08:50",
        "CECR3"
      ],
      [
        "Wednesday",
        "08:00-08:50",
        "CECR3"
      ],
      [
        "Friday",
        "08:00-08:50",
        "CECR3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEO528.pdf",
    credits: "3-0-0"
  },
  {
    id: 888,
    code: "EEC309",
    name: "Modern Control",
    department: "Electrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "03:00-03:50",
        "LC-II-G15"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "LC-II-G15"
      ],
      [
        "Friday",
        "04:00-04:50",
        "LC-II-G15"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEC309.pdf",
    credits: "3-0-0"
  },
  {
    id: 889,
    code: "CED536",
    name: "Water Resources Systems Planning & Management",
    department: "Civil Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "Wednesday"
      ],
      [
        "06:00-06:50",
        "Friday",
        "06:00-06:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CED536.pdf",
    credits: "3-0-0"
  },
  {
    id: 890,
    code: "EEE202",
    name: "Utilization of Electrical Energy",
    department: "Electrical Engineering",
    type: "Engineering Science Option (ESO)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "LC-II-G11"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "LC-II-G11"
      ],
      [
        "Friday",
        "02:00-02:50",
        "LC-II-G11"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEE202.pdf",
    credits: "3-0-0"
  },
  {
    id: 172,
    code: "HSO301",
    name: "Ethical Issues in Sceince",
    department: "Humanities and Social Science",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "LC-II-G10"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "LC-II-G10"
      ],
      [
        "Friday",
        "03:00-03:50",
        "LC-II-G10"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSO301.pdf",
    credits: "3-0-0"
  },
  {
    id: 892,
    code: "EED402",
    name: "High Voltage Engineering and Applications",
    department: "Electrical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "LC-II-C2"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "LC-II-C2"
      ],
      [
        "Friday",
        "03:00-03:50",
        "LC-II-C2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EED402.pdf",
    credits: "3-0-0"
  },
  {
    id: 893,
    code: "HSO309",
    name: "Fundamental of Sociology",
    department: "Humanities and Social Science",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "Wednesday"
      ],
      [
        "06:00-06:50",
        "Friday",
        "06:00-06:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSO309.pdf",
    credits: "3-0-0"
  },
  {
    id: 894,
    code: "EEC310",
    name: "Power Electronics",
    department: "Electrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "LC-II-G15"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "LC-II-G15"
      ],
      [
        "Friday",
        "06:00-06:50",
        "LC-II-G15"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEC310.pdf",
    credits: "3-0-0"
  },
  {
    id: 895,
    code: "EEC308",
    name: "Electrical Machines - II",
    department: "Electrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "LC-II-G15"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "LC-II-G15"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "LC-II-G15"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEC308.pdf",
    credits: "3-0-0"
  },
  {
    id: 896,
    code: "EEC376",
    name: "Electrical Machines and Control Lab",
    department: "Electrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "10:00-10:50",
        "El MC Lab"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "El MC Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEC376.pdf",
    credits: "0-0-2"
  },
  {
    id: 897,
    code: "EEC375",
    name: "Microprocessor and Microcontrollers Lab",
    department: "Electrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "12:00-12:50",
        "DE Lab"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "DE Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEC375.pdf",
    credits: "0-0-2"
  },
  {
    id: 507,
    code: "HSO310",
    name: "Psychology of Everyday Life",
    department: "Humanities and Social Science",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "LC-II-G10"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "LC-II-G10"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "LC-II-G10"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSO310.pdf",
    credits: "3-0-0"
  },
  {
    id: 899,
    code: "MNC300",
    name: "Surface Mining",
    department: "Mining Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "PET 2"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "PET 2"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "PET 2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNC300.pdf",
    credits: "3-0-0"
  },
  {
    id: 51,
    code: "HSO501",
    name: "Cognitive Psychology",
    department: "Humanities and Social Science",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "LC-II-G12"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "LC-II-G12"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "LC-II-G12"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSO501.pdf",
    credits: "3-0-0"
  },
  {
    id: 128,
    code: "HSO510",
    name: "Judgement and Decision Making",
    department: "Humanities and Social Science",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "05:00-05:50",
        "LC-II-G10"
      ],
      [
        "Wednesday",
        "05:00-05:50",
        "LC-II-G10"
      ],
      [
        "Friday",
        "05:00-05:50",
        "LC-II-G10"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSO510.pdf",
    credits: "3-0-0"
  },
  {
    id: 902,
    code: "MNC301",
    name: "Mine Planning and Economics",
    department: "Mining Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "03:00-03:50",
        "PET 2"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "PET 2"
      ],
      [
        "Friday",
        "04:00-04:50",
        "PET 2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNC301.pdf",
    credits: "3-0-0"
  },
  {
    id: 62,
    code: "HSO506",
    name: "Indian Society and Culture",
    department: "Humanities and Social Science",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "NAC Hall"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "NAC Hall"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "NAC Hall"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSO506.pdf",
    credits: "3-0-0"
  },
  {
    id: 904,
    code: "EEC272",
    name: "Analog and Digital Electronics Lab",
    department: "Electrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "04:00-04:50",
        "DE Lab"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "DE Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEC272.pdf",
    credits: "0-0-2"
  },
  {
    id: 905,
    code: "MEC202",
    name: "Fluid Mechanics",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "NLHC-G1"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "NLHC-G1"
      ],
      [
        "Friday",
        "11:00-11:50",
        "NLHC-G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEC202.pdf",
    credits: "3-0-0"
  },
  {
    id: 407,
    code: "GLE203",
    name: "Geology for Engineering and Sciences Practical",
    department: "Applied Geology",
    type: "Engineering Science Option (ESO)",
    timetable: [
      [
        "Tuesday",
        "04:00-04:50",
        "Coal Geology Lab"
      ],
      [
        "Tuesday",
        "05:00-05:50",
        "Coal Geology Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLE203.pdf",
    credits: "0-0-2"
  },
  {
    id: 907,
    code: "MNE201",
    name: "Introduction to Mining",
    department: "Mining Engineering",
    type: "Engineering Science Option (ESO)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "LC-II-G2"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "LC-II-G2"
      ],
      [
        "Friday",
        "02:00-02:50",
        "LC-II-G2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNE201.pdf",
    credits: "3-0-0"
  },
  {
    id: 890,
    code: "EEE202",
    name: "Utilization of Electrical Energy",
    department: "Electrical Engineering",
    type: "Engineering Science Option (ESO)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "LC-II-G11"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "LC-II-G11"
      ],
      [
        "Friday",
        "02:00-02:50",
        "LC-II-G11"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEE202.pdf",
    credits: "3-0-0"
  },
  {
    id: 909,
    code: "MNC201",
    name: "Rock Breakage",
    department: "Mining Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-II-G2"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-G2"
      ],
      [
        "Friday",
        "11:00-11:50",
        "LC-II-G2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNC201.pdf",
    credits: "3-0-0"
  },
  {
    id: 910,
    code: "MEC201",
    name: "Kinematics of Machines",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "NLHC-G1"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "NLHC-G1"
      ],
      [
        "Friday",
        "10:00-10:50",
        "NLHC-G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEC201.pdf",
    credits: "3-0-0"
  },
  {
    id: 911,
    code: "MNC202",
    name: "Mine Surveying",
    department: "Mining Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "LC-II-G2"
      ],
      [
        "Tuesday",
        "09:00-09:50",
        "LC-II-G2"
      ],
      [
        "Thursday",
        "09:00-09:50",
        "LC-II-G2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNC202.pdf",
    credits: "3-0-0"
  },
  {
    id: 912,
    code: "MNC200",
    name: "Elements of Mining",
    department: "Mining Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "LC-II-G2"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "LC-II-G2"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-II-G2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNC200.pdf",
    credits: "3-0-0"
  },
  {
    id: 913,
    code: "MME202",
    name: "Mining Machinery",
    department: "Mechanical Engineering",
    type: "Engineering Science Option (ESO)",
    timetable: [
      [
        "Monday",
        "08:00-08:50",
        "LC-II-G10"
      ],
      [
        "Wednesday",
        "08:00-08:50",
        "LC-II-G10"
      ],
      [
        "Friday",
        "08:00-08:50",
        "LC-II-G10"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MME202.pdf",
    credits: "3-0-0"
  },
  {
    id: 914,
    code: "MEE201",
    name: "Engineering Materials",
    department: "Mechanical Engineering",
    type: "Engineering Science Option (ESO)",
    timetable: [
      [
        "Monday",
        "08:00-08:50",
        "NLHC-G1"
      ],
      [
        "Wednesday",
        "08:00-08:50",
        "NLHC-G1"
      ],
      [
        "Friday",
        "08:00-08:50",
        "NLHC-G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEE201.pdf",
    credits: "3-0-0"
  },
  {
    id: 915,
    code: "MMC203",
    name: "Design of Machine Elements",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "LC-II-C1"
      ],
      [
        "Tuesday",
        "09:00-09:50",
        "LC-II-C1"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "Thursday"
      ],
      [
        "09:00-09:50",
        "LC-II-C1",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MMC203.pdf",
    credits: "3-1-0"
  },
  {
    id: 916,
    code: "MMC205",
    name: "Solid Mechanics and Theory of Machines Lab",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "04:00-04:50",
        "SOM lab"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "SOM lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MMC205.pdf",
    credits: "0-0-2"
  },
  {
    id: 917,
    code: "MEC205",
    name: "Thermodynamics and Fluid Mechanics Lab",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "05:00-05:50",
        "Thursday"
      ],
      [
        "04:00-04:50",
        null,
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEC205.pdf",
    credits: "0-0-2"
  },
  {
    id: 918,
    code: "MEC203",
    name: "Applied Thermodynamics",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "NLHC-G1"
      ],
      [
        "Tuesday",
        "09:00-09:50",
        "NLHC-G1"
      ],
      [
        "Thursday",
        "09:00-09:50",
        "NLHC-G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEC203.pdf",
    credits: "3-0-0"
  },
  {
    id: 919,
    code: "MNC204",
    name: "Rock Breakage Practical",
    department: "Mining Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "Monday"
      ],
      [
        "05:00-05:50",
        "Thursday",
        "04:00-04:50"
      ],
      [
        "Rock Mechanic Lab",
        "Thursday",
        "05:00-05:50"
      ],
      [
        "Rock Mechanic Lab",
        "Thursday",
        "04:00-04:50"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "Friday"
      ],
      [
        "04:00-04:50",
        "Friday",
        "05:00-05:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNC204.pdf",
    credits: "0-0-2"
  },
  {
    id: 920,
    code: "MNC203",
    name: "Mine Surveying Practical",
    department: "Mining Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "Mine Survey Lab"
      ],
      [
        "Monday",
        "04:00-04:50",
        "Mine Survey Lab"
      ],
      [
        "Monday",
        "04:00-04:50",
        "Monday"
      ],
      [
        "05:00-05:50",
        "Tuesday",
        "04:00-04:50"
      ],
      [
        "Tuesday",
        "05:00-05:50",
        "Thursday"
      ],
      [
        "04:00-04:50",
        "Thursday",
        "05:00-05:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNC203.pdf",
    credits: "0-0-2"
  },
  {
    id: 921,
    code: "MMC201",
    name: "Manufacturing Technology",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "LC-II-C1"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "LC-II-C1"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-II-C1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MMC201.pdf",
    credits: "3-0-0"
  },
  {
    id: 922,
    code: "MMC202",
    name: "Theory of Machines",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-II-C1"
      ],
      [
        "Tuesday",
        "10:00-10:50",
        "Wednesday"
      ],
      [
        "10:00-10:50",
        "LC-II-C1",
        "Friday"
      ],
      [
        "11:00-11:50",
        "LC-II-C1",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MMC202.pdf",
    credits: "3-1-0"
  },
  {
    id: 923,
    code: "MEC204",
    name: "Applied Mechanics Lab",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "Monday"
      ],
      [
        "04:00-04:50",
        null,
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEC204.pdf",
    credits: "0-0-2"
  },
  {
    id: 924,
    code: "MMC204",
    name: "Thermodynamics and Fluid Mechanics Lab",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "ThE lab"
      ],
      [
        "Monday",
        "04:00-04:50",
        "ThE lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MMC204.pdf",
    credits: "0-0-2"
  },
  {
    id: 505,
    code: "CYD528",
    name: "Modern Separation Techniques",
    department: "Chemical and Chemical Biology",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "LC-II-C13"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "LC-II-C13"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "LC-II-C13"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYD528.pdf",
    credits: "3-0-0"
  },
  {
    id: 506,
    code: "CYC529",
    name: "Formulation/Manufacturing Lab",
    department: "Chemical and Chemical Biology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "12:00-12:50",
        "PG Lab"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "PG Lab"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "PG Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYC529.pdf",
    credits: "0-0-3"
  },
  {
    id: 927,
    code: "PEO302",
    name: "Oil & Gas Field Development and Planning",
    department: "Petroleum Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "PET 2"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "PET 1"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "PET 1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEO302.pdf",
    credits: "3-0-0"
  },
  {
    id: 928,
    code: "CHC205",
    name: "Fluid and Particle Mechanics Lab",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "Monday"
      ],
      [
        "05:00-05:50",
        "Thursday",
        "05:00-05:50"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "CHE 407"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "CHE 407"
      ],
      [
        "Thursday",
        "04:00-04:50",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC205.pdf",
    credits: "0-0-2"
  },
  {
    id: 929,
    code: "PEC305",
    name: "Process Engineering Practical",
    department: "Petroleum Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "10:00-10:50",
        "PE Process Engineering/ Reservoir Characterization"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "PE Process Engineering/ Reservoir Characterization"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEC305.pdf",
    credits: "0-0-2"
  },
  {
    id: 930,
    code: "CHC204",
    name: "Computational Tools for Chemical Engineers Lab",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "CSE LAB - I"
      ],
      [
        "Monday",
        "04:00-04:50",
        "Monday"
      ],
      [
        "05:00-05:50",
        "Monday",
        "04:00-04:50"
      ],
      [
        "CSE LAB - I",
        "Thursday",
        "04:00-04:50"
      ],
      [
        "Thursday",
        "05:00-05:50",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC204.pdf",
    credits: "0-0-2"
  },
  {
    id: 931,
    code: "ECD404",
    name: "Digital Image Processing",
    department: "Electronics Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "LC-II-C1"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-II-C1"
      ],
      [
        "Friday",
        "12:00-12:50",
        "LC-II-C1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECD404.pdf",
    credits: "3-0-0"
  },
  {
    id: 932,
    code: "ECD419",
    name: "Satellite Communication",
    department: "Electronics Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "LC-I-C4"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-I-C4"
      ],
      [
        "Friday",
        "12:00-12:50",
        "LC-I-C4"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECD419.pdf",
    credits: "3-0-0"
  },
  {
    id: 707,
    code: "ESD511",
    name: "Aerosols in the Atmosphere",
    department: "Environmental Science & Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "11:00-11:50",
        "LC-II-C20"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "LC-II-C20"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-II-C20"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESD511.pdf",
    credits: "3-0-0"
  },
  {
    id: 268,
    code: "PHC510",
    name: "Atomic and Molecular Physics",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "516"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "516"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "516"
      ],
      [
        "Friday",
        "02:00-02:50",
        "516"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC510.pdf",
    credits: "3-1-0"
  },
  {
    id: 151,
    code: "HSI500",
    name: "Research and Technical Communication",
    department: "Humanities and Social Science",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "Wednesday"
      ],
      [
        "09:00-09:50",
        "Friday",
        "09:00-09:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSI500.pdf",
    credits: "3-0-0"
  },
  {
    id: 151,
    code: "HSI500",
    name: "Research and Technical Communication",
    department: "Humanities and Social Science",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "Wednesday"
      ],
      [
        "09:00-09:50",
        "Friday",
        "09:00-09:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSI500.pdf",
    credits: "3-0-0"
  },
  {
    id: 151,
    code: "HSI500",
    name: "Research and Technical Communication",
    department: "Humanities and Social Science",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "Wednesday"
      ],
      [
        "09:00-09:50",
        "Friday",
        "09:00-09:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSI500.pdf",
    credits: "3-0-0"
  },
  {
    id: 855,
    code: "CED531",
    name: "Advanced Design of Structures",
    department: "Civil Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "LC-II-C2"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-II-C2"
      ],
      [
        "Friday",
        "12:00-12:50",
        "LC-II-C2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CED531.pdf",
    credits: "3-0-0"
  },
  {
    id: 939,
    code: "PEE201",
    name: "Introduction to Petroleum Engineering",
    department: "Petroleum Engineering",
    type: "Engineering Science Option (ESO)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "PET 1"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "PET 1"
      ],
      [
        "Friday",
        "02:00-02:50",
        "PET 1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEE201.pdf",
    credits: "3-0-0"
  },
  {
    id: 940,
    code: "PHC304",
    name: "Spectroscopy Lab",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "10:00-10:50",
        "PHUG LAB-2"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "PHUG LAB-2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC304.pdf",
    credits: "0-0-2"
  },
  {
    id: 941,
    code: "MMC305",
    name: "Underground Mining Equipment",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "LC-II-C4"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "LC-II-C4"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "LC-II-C4"
      ],
      [
        "Friday",
        "02:00-02:50",
        "LC-II-C4"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MMC305.pdf",
    credits: "3-1-0"
  },
  {
    id: 942,
    code: "PED404",
    name: "Petroleum Engineering Design",
    department: "Petroleum Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "PET 1"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "PET 1"
      ],
      [
        "Friday",
        "12:00-12:50",
        "PET 1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PED404.pdf",
    credits: "3-0-0"
  },
  {
    id: 943,
    code: "PHC303",
    name: "Applied Optics Lab",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "PHUG LAB-2"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "PHUG LAB-2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC303.pdf",
    credits: "0-0-2"
  },
  {
    id: 944,
    code: "MMC306",
    name: "Opencast Mining Equipment",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "LC-II-C4"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "LC-II-C4"
      ],
      [
        "Friday",
        "06:00-06:50",
        "LC-II-C4"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MMC306.pdf",
    credits: "3-0-0"
  },
  {
    id: 945,
    code: "CSD401",
    name: "Advanced Algorithms",
    department: "Computer Science & Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "LC-II-G14"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-II-G14"
      ],
      [
        "Friday",
        "12:00-12:50",
        "LC-II-G14"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSD401.pdf",
    credits: "3-0-0"
  },
  {
    id: 946,
    code: "CSC508",
    name: "Computing Lab - I",
    department: "Computer Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "CSE LAB -IV"
      ],
      [
        "Monday",
        "11:00-11:50",
        "CSE LAB -IV"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSC508.pdf",
    credits: "0-0-2"
  },
  {
    id: 947,
    code: "PEO502",
    name: "Flow Assurance",
    department: "Petroleum Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "PET 1"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "PET 1"
      ],
      [
        "Friday",
        "03:00-03:50",
        "PET 1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEO502.pdf",
    credits: "3-0-0"
  },
  {
    id: 948,
    code: "CYD527",
    name: "Pharmacognosy and Phytopharmaceuticals",
    department: "Chemical and Chemical Biology",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "Tuesday"
      ],
      [
        "03:00-03:50",
        "Thursday",
        "05:00-05:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYD527.pdf",
    credits: "3-0-0"
  },
  {
    id: 949,
    code: "PEC306",
    name: "Directional Drilling",
    department: "Petroleum Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "PET 1"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "PET 2"
      ],
      [
        "Friday",
        "02:00-02:50",
        "PET 2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEC306.pdf",
    credits: "3-0-0"
  },
  {
    id: 529,
    code: "CYD531",
    name: "Biotechnology in Pharmaceutical Sciences",
    department: "Chemical and Chemical Biology",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "LC-II-C13"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "LC-II-C13"
      ],
      [
        "Friday",
        "03:00-03:50",
        "LC-II-C13"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYD531.pdf",
    credits: "3-0-0"
  },
  {
    id: 951,
    code: "MED550",
    name: "Combustion and Emission in I C Engines",
    department: "Mechanical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "MME-207"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "MME-207"
      ],
      [
        "Friday",
        "04:00-04:50",
        "MME-207"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MED550.pdf",
    credits: "3-0-0"
  },
  {
    id: 952,
    code: "EEO505",
    name: "Modern Sensors and Signal Contioning Circuits",
    department: "Electrical Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "08:00-08:50",
        "LC-II-C3"
      ],
      [
        "Thursday",
        "08:00-08:50",
        "LC-II-C3"
      ],
      [
        "Friday",
        "09:00-09:50",
        "LC-II-C3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEO505.pdf",
    credits: "3-0-0"
  },
  {
    id: 533,
    code: "CYD529",
    name: "Computer Aided Drug Discovery",
    department: "Chemical and Chemical Biology",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "04:00-04:50",
        "LC-II-C13"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "LC-II-C13"
      ],
      [
        "Friday",
        "04:00-04:50",
        "LC-II-C13"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYD529.pdf",
    credits: "3-0-0"
  },
  {
    id: 954,
    code: "PHC302",
    name: "Solid State Physics",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "516"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "516"
      ],
      [
        "Friday",
        "06:00-06:50",
        "516"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC302.pdf",
    credits: "3-0-0"
  },
  {
    id: 955,
    code: "PEO301",
    name: "Heat and Mass Transfer in Petroleum Operations",
    department: "Petroleum Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "PET 1"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "PET 1"
      ],
      [
        "Friday",
        "04:00-04:50",
        "PET 1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEO301.pdf",
    credits: "3-0-0"
  },
  {
    id: 956,
    code: "PHO301",
    name: "Low Temperature Physics & Superconductivity",
    department: "Physics",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "516"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "516"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "516"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHO301.pdf",
    credits: "3-0-0"
  },
  {
    id: 957,
    code: "PEC303",
    name: "Natural Gas Engineering",
    department: "Petroleum Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "PET 1"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "PET 1"
      ],
      [
        "Friday",
        "06:00-06:50",
        "PET 1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEC303.pdf",
    credits: "3-0-0"
  },
  {
    id: 958,
    code: "PEC307",
    name: "Oil and Gas Well Testing",
    department: "Petroleum Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "PET 1"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "PET 1"
      ],
      [
        "Friday",
        "06:00-06:50",
        "PET 1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEC307.pdf",
    credits: "3-0-0"
  },
  {
    id: 438,
    code: "ECD405",
    name: "Digital Systems Design using HDL",
    department: "Electronics Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "11:00-11:50",
        "LC-II-C1"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "LC-II-C1"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-II-C1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ece/ECD405.pdf",
    credits: "3-0-0"
  },
  {
    id: 557,
    code: "MCC500",
    name: "Research Methodology",
    department: "Mathematics and Computing",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "LC-I-C11"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "LC-I-C11"
      ],
      [
        "Friday",
        "06:00-06:50",
        "LC-I-C11"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCC500.pdf",
    credits: "3-0-0"
  },
  {
    id: 961,
    code: "ESD402",
    name: "Industrial Waste Water Engineering",
    department: "Environmental Science & Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "08:00-08:50",
        "MS 011"
      ],
      [
        "Thursday",
        "08:00-08:50",
        "MS 011"
      ],
      [
        "Friday",
        "09:00-09:50",
        "MS 011"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESD402.pdf",
    credits: "3-0-0"
  },
  {
    id: 403,
    code: "GPC523",
    name: "Geoelectromagnetic Method Practical",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "AGP Annexure 1st Floor"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "AGP Annexure 1st Floor"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC523.pdf",
    credits: "0-0-2"
  },
  {
    id: 878,
    code: "PHO302",
    name: "Introduction to Astrophysics and Astronomy",
    department: "Physics",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "516"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "516"
      ],
      [
        "Friday",
        "03:00-03:50",
        "516"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHO302.pdf",
    credits: "3-0-0"
  },
  {
    id: 964,
    code: "FMD536",
    name: "Surface Engineering",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "11:00-11:50",
        "FME-1"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "FME-1"
      ],
      [
        "Friday",
        "10:00-10:50",
        "FME-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMD536.pdf",
    credits: "3-0-0"
  },
  {
    id: 965,
    code: "GLC534",
    name: "Exploration Geology Practical",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "LC-II-C11"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "LC-II-C11"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC534.pdf",
    credits: "0-0-2"
  },
  {
    id: 966,
    code: "GPD509",
    name: "Well Log and Electrofacies Analysis",
    department: "Applied Geophysics",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "11:00-11:50",
        "LC-II-C14"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "LC-II-C14"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-II-C14"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPD509.pdf",
    credits: "3-0-0"
  },
  {
    id: 967,
    code: "CYC540",
    name: "Research Methodology and Statistics",
    department: "Chemical and Chemical Biology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "Wednesday"
      ],
      [
        "06:00-06:50",
        "Friday",
        "06:00-06:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYC540.pdf",
    credits: "3-0-0"
  },
  {
    id: 968,
    code: "CHC510",
    name: "Advanced Chemical Engineering Lab",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "CHE 426"
      ],
      [
        "Monday",
        "11:00-11:50",
        "CHE 426"
      ],
      [
        "Monday",
        "12:00-12:50",
        "CHE 426"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC510.pdf",
    credits: "0-0-3"
  },
  {
    id: 372,
    code: "GPC512",
    name: "Seismic Data Acquisition Practical",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "516"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "516"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC512.pdf",
    credits: "0-0-2"
  },
  {
    id: 970,
    code: "CSD521",
    name: "Wireless Networks",
    department: "Computer Science & Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "08:00-08:50",
        "CSE CR1"
      ],
      [
        "Thursday",
        "08:00-08:50",
        "CSE CR1"
      ],
      [
        "Friday",
        "09:00-09:50",
        "CSE CR1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSD521.pdf",
    credits: "3-0-0"
  },
  {
    id: 971,
    code: "PED405",
    name: "Pipeline Engineering",
    department: "Petroleum Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "PET 3"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "PET 3"
      ],
      [
        "Friday",
        "12:00-12:50",
        "PET 3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PED405.pdf",
    credits: "3-0-0"
  },
  {
    id: 972,
    code: "GPC540",
    name: "Advanced Numerical Methods Practical",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "10:00-10:50",
        "AGP Annexure Ground Floor"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "AGP Annexure Ground Floor"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "AGP Annexure Ground Floor"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC540.pdf",
    credits: "0-0-3"
  },
  {
    id: 973,
    code: "CSC205",
    name: "Computer Organization Lab",
    department: "Computer Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "04:00-04:50",
        "Tuesday"
      ],
      [
        "05:00-05:50",
        "Thursday",
        "04:00-04:50"
      ],
      [
        "CSE LAB - I",
        "Thursday",
        "05:00-05:50"
      ],
      [
        "CSE LAB - I",
        "Thursday",
        "04:00-04:50"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "Friday"
      ],
      [
        "04:00-04:50",
        "Friday",
        "05:00-05:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSC205.pdf",
    credits: "0-0-2"
  },
  {
    id: 974,
    code: "MSO502",
    name: "Management of Cryptocurrency",
    department: "Management Studies and Insdustrical Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "08:00-08:50",
        "NAC Hall"
      ],
      [
        "Thursday",
        "08:00-08:50",
        "NAC Hall"
      ],
      [
        "Friday",
        "09:00-09:50",
        "NAC Hall"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSO502.pdf",
    credits: "3-0-0"
  },
  {
    id: 176,
    code: "HSC503",
    name: "Seminar",
    department: "Humanities and Social Science",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "Wednesday"
      ],
      [
        "04:00-04:50",
        "Friday",
        "04:00-04:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSC503.pdf",
    credits: "0-0-3"
  },
  {
    id: 976,
    code: "CHC509",
    name: "Computational Fluid Dynamics",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "CHE-402"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "CHE-402"
      ],
      [
        "Friday",
        "03:00-03:50",
        "CHE-402"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC509.pdf",
    credits: "3-0-0"
  },
  {
    id: 977,
    code: "PHC204",
    name: "Waves and Acoustics Lab",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "04:00-04:50",
        "PHUG LAB 1"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "PHUG LAB 1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC204.pdf",
    credits: "0-0-2"
  },
  {
    id: 978,
    code: "PHC201",
    name: "Classical Mechanics",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-I-C12"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-I-C12"
      ],
      [
        "Friday",
        "11:00-11:50",
        "LC-I-C12"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC201.pdf",
    credits: "3-0-0"
  },
  {
    id: 979,
    code: "CSD508",
    name: "Distributed Systems",
    department: "Computer Science & Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "11:00-11:50",
        "CSE CR1"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "CSE CR1"
      ],
      [
        "Friday",
        "10:00-10:50",
        "CSE CR1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSD508.pdf",
    credits: "3-0-0"
  },
  {
    id: 980,
    code: "EED513",
    name: "Power Quality",
    department: "Electrical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "LC-II-G16"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-II-G16"
      ],
      [
        "Friday",
        "12:00-12:50",
        "LC-II-G16"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EED513.pdf",
    credits: "3-0-0"
  },
  {
    id: 981,
    code: "EED511",
    name: "Power System Dynamics",
    department: "Electrical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "11:00-11:50",
        "LC-II-C3"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "LC-II-C3"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-II-C3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EED511.pdf",
    credits: "3-0-0"
  },
  {
    id: 982,
    code: "EED405",
    name: "Instrumentation",
    department: "Electrical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "LC-II-C3"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-II-C3"
      ],
      [
        "Friday",
        "12:00-12:50",
        "LC-II-C3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EED405.pdf",
    credits: "3-0-0"
  },
  {
    id: 983,
    code: "CSC201",
    name: "Data Structures",
    department: "Computer Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "LC-II-C9"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "LC-II-C9"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-II-C9"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSC201.pdf",
    credits: "3-0-0"
  },
  {
    id: 984,
    code: "CSC203",
    name: "Computer Organization",
    department: "Computer Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "LC-II-G9"
      ],
      [
        "Tuesday",
        "09:00-09:50",
        "LC-II-G9"
      ],
      [
        "Thursday",
        "09:00-09:50",
        "LC-II-G9"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSC203.pdf",
    credits: "3-0-0"
  },
  {
    id: 985,
    code: "GLC591",
    name: "Research Methodology",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "AGL-1"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "AGL-1"
      ],
      [
        "Friday",
        "06:00-06:50",
        "AGL-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC591.pdf",
    credits: "3-0-0"
  },
  {
    id: 986,
    code: "PHC202",
    name: "Mathematical Physics",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "LC-I-C12"
      ],
      [
        "Tuesday",
        "09:00-09:50",
        "LC-I-C12"
      ],
      [
        "Thursday",
        "09:00-09:50",
        "LC-I-C12"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC202.pdf",
    credits: "3-0-0"
  },
  {
    id: 987,
    code: "GPC538",
    name: "Advanced Numerical Methods",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "AGP Annexure Ground Floor"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "AGP Annexure Ground Floor"
      ],
      [
        "Friday",
        "03:00-03:50",
        "AGP Annexure Ground Floor"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC538.pdf",
    credits: "3-0-0"
  },
  {
    id: 988,
    code: "GLD544",
    name: "Kinematics of Rock Deformation",
    department: "Applied Geology",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "08:00-08:50",
        "AGL-3"
      ],
      [
        "Wednesday",
        "08:00-08:50",
        "AGL-3"
      ],
      [
        "Friday",
        "08:00-08:50",
        "AGL-3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLD544.pdf",
    credits: "3-0-0"
  },
  {
    id: 453,
    code: "GLC533",
    name: "Ore Geology Practical",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "Ore Geology Lab"
      ],
      [
        "Monday",
        "03:00-03:50",
        "Ore Geology Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC533.pdf",
    credits: "0-0-2"
  },
  {
    id: 452,
    code: "GLC526",
    name: "Ore Geology",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "LC-II-C7"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-II-C7"
      ],
      [
        "Friday",
        "11:00-11:50",
        "LC-II-C7"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC526.pdf",
    credits: "3-0-0"
  },
  {
    id: 991,
    code: "GPC537",
    name: "Remote Sensing: Principles and Data Acquisition System",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "AGP Annexure Ground Floor"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "AGP Annexure Ground Floor"
      ],
      [
        "Friday",
        "02:00-02:50",
        "AGP Annexure Ground Floor"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC537.pdf",
    credits: "3-0-0"
  },
  {
    id: 992,
    code: "PHC203",
    name: "Mechanics Lab",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "PHUG LAB 1"
      ],
      [
        "Monday",
        "05:00-05:50",
        "PHUG LAB 1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC203.pdf",
    credits: "0-0-2"
  },
  {
    id: 993,
    code: "MED525",
    name: "Rotor Dynamics",
    department: "Mechanical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "11:00-11:50",
        "MME-207"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "MME-207"
      ],
      [
        "Friday",
        "10:00-10:50",
        "MME-207"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MED525.pdf",
    credits: "3-0-0"
  },
  {
    id: 994,
    code: "CSD517",
    name: "Parallel Computing",
    department: "Computer Science & Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "11:00-11:50",
        "Thursday"
      ],
      [
        "12:00-12:50",
        "Friday",
        "10:00-10:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSD517.pdf",
    credits: "3-0-0"
  },
  {
    id: 995,
    code: "GLC527",
    name: "Exploration Geology and Mineral Economics",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-II-C11"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-C11"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-II-C11"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC527.pdf",
    credits: "3-0-0"
  },
  {
    id: 474,
    code: "GPC521",
    name: "Geoelectromagnetic Method",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "LC-II-C13"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-II-C13"
      ],
      [
        "Friday",
        "11:00-11:50",
        "LC-II-C13"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC521.pdf",
    credits: "3-0-0"
  },
  {
    id: 997,
    code: "GLD531",
    name: "Sequence Stratigraphy and Basin Analysis",
    department: "Applied Geology",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "11:00-11:50",
        "LC-II-C11"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "LC-II-C11"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-II-C11"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLD531.pdf",
    credits: "3-0-0"
  },
  {
    id: 998,
    code: "GPD510",
    name: "Reservoir Geophysics and Deep Water Imaging",
    department: "Applied Geophysics",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "08:00-08:50",
        "LC-II-C14"
      ],
      [
        "Wednesday",
        "08:00-08:50",
        "LC-II-C14"
      ],
      [
        "Friday",
        "08:00-08:50",
        "LC-II-C14"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPD510.pdf",
    credits: "3-0-0"
  },
  {
    id: 469,
    code: "GPC520",
    name: "Magnetic Method",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-II-C13"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-C13"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-II-C13"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC520.pdf",
    credits: "3-0-0"
  },
  {
    id: 1000,
    code: "EED406",
    name: "Special Purpose Electric Machines and Drives",
    department: "Electrical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "11:00-11:50",
        "LC-II-G16"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "LC-II-G16"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-II-G16"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EED406.pdf",
    credits: "3-0-0"
  },
  {
    id: 1001,
    code: "ESC526",
    name: "Research Methodology",
    department: "Environmental Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "FME-1"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "FME-1"
      ],
      [
        "Friday",
        "06:00-06:50",
        "FME-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESC526.pdf",
    credits: "3-0-0"
  },
  {
    id: 1002,
    code: "MED555",
    name: "Computer Aided Manufacturing and Robotics",
    department: "Mechanical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "08:00-08:50",
        "Mech G1"
      ],
      [
        "Wednesday",
        "08:00-08:50",
        "Mech G1"
      ],
      [
        "Friday",
        "08:00-08:50",
        "Mech G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MED555.pdf",
    credits: "3-0-0"
  },
  {
    id: 1003,
    code: "MEO528",
    name: "Robotics",
    department: "Mechanical Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "08:00-08:50",
        "MME-207"
      ],
      [
        "Wednesday",
        "08:00-08:50",
        "MME-207"
      ],
      [
        "Friday",
        "08:00-08:50",
        "MME-207"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEO528.pdf",
    credits: "3-0-0"
  },
  {
    id: 1004,
    code: "PEO405",
    name: "Integrated Reservoir Management",
    department: "Petroleum Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "08:00-08:50",
        "PET 3"
      ],
      [
        "Thursday",
        "08:00-08:50",
        "PET 3"
      ],
      [
        "Friday",
        "09:00-09:50",
        "PET 3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEO405.pdf",
    credits: "3-0-0"
  },
  {
    id: 1005,
    code: "GPO511",
    name: "Satellite Image Processing and Geographic Information System",
    department: "Applied Geophysics",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "06:00-06:50",
        "LC-II-C14"
      ],
      [
        "Wednesday",
        "05:00-05:50",
        "LC-II-C14"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "LC-II-C14"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPO511.pdf",
    credits: "3-0-0"
  },
  {
    id: 1006,
    code: "PEO404",
    name: "Petroleum Resource Management and Project Evaluation",
    department: "Petroleum Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "PET 3"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "PET 3"
      ],
      [
        "Friday",
        "03:00-03:50",
        "PET 3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEO404.pdf",
    credits: "3-0-0"
  },
  {
    id: 1007,
    code: "CHE201",
    name: "Engineering Thermodynamics",
    department: "Chemical Engineering",
    type: "Engineering Science Option (ESO)",
    timetable: [
      [
        "Tuesday",
        "08:00-08:50",
        "LC-II-G5"
      ],
      [
        "Thursday",
        "08:00-08:50",
        "LC-II-G5"
      ],
      [
        "Friday",
        "09:00-09:50",
        "LC-II-G5"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHE201.pdf",
    credits: "3-0-0"
  },
  {
    id: 1008,
    code: "PEC304",
    name: "Petroleum Production Engineering Practical",
    department: "Petroleum Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "11:00-11:50",
        "Production and Product Testing Laboratory"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "Production and Product Testing Laboratory"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEC304.pdf",
    credits: "0-0-2"
  },
  {
    id: 722,
    code: "CSO505",
    name: "Soft Computing",
    department: "Computer Science & Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "08:00-08:50",
        "LC-II-G15"
      ],
      [
        "Thursday",
        "08:00-08:50",
        "LC-II-G15"
      ],
      [
        "Friday",
        "09:00-09:50",
        "LC-II-G15"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSO505.pdf",
    credits: "3-0-0"
  },
  {
    id: 1010,
    code: "PHO571",
    name: "Materials Characterization",
    department: "Physics",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "516"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "516"
      ],
      [
        "Friday",
        "04:00-04:50",
        "516"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHO571.pdf",
    credits: "3-0-0"
  },
  {
    id: 1011,
    code: "GPO510",
    name: "Strong Motion Seismology and Structural Responses",
    department: "Applied Geophysics",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "08:00-08:50",
        "Annexe 102"
      ],
      [
        "Thursday",
        "08:00-08:50",
        "Annexe 102"
      ],
      [
        "Friday",
        "09:00-09:50",
        "LC-II-C14"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPO510.pdf",
    credits: "3-0-0"
  },
  {
    id: 1012,
    code: "PED406",
    name: "Reservoir Modeling and Simulation",
    department: "Petroleum Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "11:00-11:50",
        "PET 3"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "PET 3"
      ],
      [
        "Friday",
        "10:00-10:50",
        "PET 3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PED406.pdf",
    credits: "3-0-0"
  },
  {
    id: 1013,
    code: "FMD522",
    name: "Coal Preparation",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "08:00-08:50",
        "FME-2"
      ],
      [
        "Wednesday",
        "08:00-08:50",
        "FME-2"
      ],
      [
        "Friday",
        "08:00-08:50",
        "FME-2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMD522.pdf",
    credits: "3-0-0"
  },
  {
    id: 1014,
    code: "CSO506",
    name: "Principles of Blockchain Technologies",
    department: "Computer Science & Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "08:00-08:50",
        "LC-II-G15"
      ],
      [
        "Wednesday",
        "08:00-08:50",
        "LC-II-G15"
      ],
      [
        "Friday",
        "08:00-08:50",
        "LC-II-G15"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSO506.pdf",
    credits: "3-0-0"
  },
  {
    id: 1015,
    code: "CSC516",
    name: "Research Methodology",
    department: "Computer Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "CSE CR1"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "CSE CR1"
      ],
      [
        "Friday",
        "06:00-06:50",
        "CSE CR1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSC516.pdf",
    credits: "3-0-0"
  },
  {
    id: 1016,
    code: "CEO526",
    name: "Geoinformatics for Civil Engineering",
    department: "Civil Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "08:00-08:50",
        "CECR3"
      ],
      [
        "Thursday",
        "08:00-08:50",
        "CECR3"
      ],
      [
        "Friday",
        "09:00-09:50",
        "CECR3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEO526.pdf",
    credits: "3-0-0"
  },
  {
    id: 472,
    code: "GPC509",
    name: "Geoelectrical Method",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "LC-II-C12"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "LC-II-C12"
      ],
      [
        "Friday",
        "04:00-04:50",
        "LC-II-C12"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC509.pdf",
    credits: "3-0-0"
  },
  {
    id: 597,
    code: "CYD530",
    name: "Pharmacovigilance and Regulatory Affairs",
    department: "Chemical and Chemical Biology",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "LC-II-C13"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "LC-II-C13"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "LC-II-C13"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYD530.pdf",
    credits: "3-0-0"
  },
  {
    id: 176,
    code: "HSC503",
    name: "Seminar",
    department: "Humanities and Social Science",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "Wednesday"
      ],
      [
        "04:00-04:50",
        "Friday",
        "04:00-04:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSC503.pdf",
    credits: "0-0-3"
  },
  {
    id: 1020,
    code: "CHC508",
    name: "Advanced Mass transfer",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "CHE-402"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "CHE-402"
      ],
      [
        "Friday",
        "02:00-02:50",
        "CHE-402"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC508.pdf",
    credits: "3-0-0"
  },
  {
    id: 1021,
    code: "GLD530",
    name: "Geodynamics",
    department: "Applied Geology",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "LC-II-C11"
      ],
      [
        "Tuesday",
        "04:00-04:50",
        "LC-II-C11"
      ],
      [
        "Friday",
        "05:00-05:50",
        "LC-II-C11"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLD530.pdf",
    credits: "3-0-0"
  },
  {
    id: 176,
    code: "HSC503",
    name: "Seminar",
    department: "Humanities and Social Science",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "Wednesday"
      ],
      [
        "04:00-04:50",
        "Friday",
        "04:00-04:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSC503.pdf",
    credits: "0-0-3"
  },
  {
    id: 1023,
    code: "CED404",
    name: "Environmental Engineering - II",
    department: "Civil Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "11:00-11:50",
        "LC-II-C2"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "LC-II-C2"
      ],
      [
        "Friday",
        "10:00-10:50",
        "CECR3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CED404.pdf",
    credits: "3-0-0"
  },
  {
    id: 1024,
    code: "MEC591",
    name: "Research Methodology and Statistics",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "Mech G1"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "Mech G1"
      ],
      [
        "Friday",
        "06:00-06:50",
        "Mech G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEC591.pdf",
    credits: "3-0-0"
  },
  {
    id: 1025,
    code: "PHC571",
    name: "Research Methodology and Statistics",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "LC-II-C10"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "LC-II-C10"
      ],
      [
        "Friday",
        "06:00-06:50",
        "LC-II-C10"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC571.pdf",
    credits: "3-0-0"
  },
  {
    id: 1026,
    code: "MMO504",
    name: "Advanced Fluid Power Systems and Control",
    department: "Mechanical Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "08:00-08:50",
        "Mech G1"
      ],
      [
        "Thursday",
        "08:00-08:50",
        "Mech G1"
      ],
      [
        "Friday",
        "09:00-09:50",
        "Mech G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MMO504.pdf",
    credits: "3-0-0"
  },
  {
    id: 1027,
    code: "PHE200",
    name: "Biomedical Engineering",
    department: "Physics",
    type: "Engineering Science Option (ESO)",
    timetable: [
      [
        "Tuesday",
        "08:00-08:50",
        "LC-II-G11"
      ],
      [
        "Thursday",
        "08:00-08:50",
        "LC-II-G11"
      ],
      [
        "Friday",
        "09:00-09:50",
        "LC-II-G11"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHE200.pdf",
    credits: "3-0-0"
  },
  {
    id: 1028,
    code: "GLO545",
    name: "Radiogenic and Stable Isotope Geology",
    department: "Applied Geology",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "08:00-08:50",
        "AGL-3"
      ],
      [
        "Thursday",
        "08:00-08:50",
        "AGL-3"
      ],
      [
        "Friday",
        "09:00-09:50",
        "AGL-3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLO545.pdf",
    credits: "3-0-0"
  },
  {
    id: 1029,
    code: "CSD514",
    name: "Mobile and Wireless Network Security",
    department: "Computer Science & Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "CSE CR2"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "CSE CR2"
      ],
      [
        "Friday",
        "03:00-03:50",
        "CSE CR2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSD514.pdf",
    credits: "3-0-0"
  },
  {
    id: 1030,
    code: "PED502",
    name: "Well Intervention, Workover and Stimulation Techniques",
    department: "Petroleum Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "11:00-11:50",
        "PET 1"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "PET 1"
      ],
      [
        "Friday",
        "10:00-10:50",
        "PET 1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PED502.pdf",
    credits: "3-0-0"
  },
  {
    id: 465,
    code: "GPC511",
    name: "Seismic Data Acquisition",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "LC-II-C12"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "LC-II-C12"
      ],
      [
        "Friday",
        "02:00-02:50",
        "LC-II-C12"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC511.pdf",
    credits: "3-0-0"
  },
  {
    id: 1032,
    code: "GPC539",
    name: "Remote Sensing: Principles and Data Acquisition System Practical",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "AGP Annexure Ground Floor"
      ],
      [
        "Monday",
        "10:00-10:50",
        "AGP Annexure Ground Floor"
      ],
      [
        "Monday",
        "11:00-11:50",
        "AGP Annexure Ground Floor"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC539.pdf",
    credits: "0-0-3"
  },
  {
    id: 1033,
    code: "MEO522",
    name: "Condition Monitoring of Machines",
    department: "Mechanical Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "08:00-08:50",
        "MME-207"
      ],
      [
        "Thursday",
        "08:00-08:50",
        "MME-207"
      ],
      [
        "Friday",
        "09:00-09:50",
        "MME-207"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEO522.pdf",
    credits: "3-0-0"
  },
  {
    id: 1034,
    code: "MED547",
    name: "Convective and Two-phase Flow",
    department: "Mechanical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "Mech G1"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "Mech G1"
      ],
      [
        "Friday",
        "12:00-12:50",
        "Mech G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MED547.pdf",
    credits: "3-0-0"
  },
  {
    id: 1035,
    code: "GPD520",
    name: "Earthquake Statistics and Hazard",
    department: "Applied Geophysics",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "AGP Annexure Ground Floor"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "AGP Annexure Ground Floor"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "AGP Annexure Ground Floor"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPD520.pdf",
    credits: "3-0-0"
  },
  {
    id: 1036,
    code: "MED531",
    name: "Fracture Mechanics",
    department: "Mechanical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "MME-207"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "MME-207"
      ],
      [
        "Friday",
        "12:00-12:50",
        "MME-207"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MED531.pdf",
    credits: "3-0-0"
  },
  {
    id: 1037,
    code: "EEC550",
    name: "Research Methodology and Statistics for Electrical Engineering",
    department: "Electrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "Conference Room"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "Conference Room"
      ],
      [
        "Friday",
        "06:00-06:50",
        "Conference Room"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEC550.pdf",
    credits: "3-0-0"
  },
  {
    id: 1038,
    code: "CHO501",
    name: "Rheology",
    department: "Chemical Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "CHE-402"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "CHE-402"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "CHE-402"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHO501.pdf",
    credits: "3-0-0"
  },
  {
    id: 1039,
    code: "MED541",
    name: "Microfluidics",
    department: "Mechanical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "11:00-11:50",
        "Mech G1"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "Mech G1"
      ],
      [
        "Friday",
        "10:00-10:50",
        "Mech G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MED541.pdf",
    credits: "3-0-0"
  },
  {
    id: 1040,
    code: "MND411",
    name: "Advanced Underground Mining Methods",
    department: "Mining Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "11:00-11:50",
        "MIN-1"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "MIN-1"
      ],
      [
        "Friday",
        "10:00-10:50",
        "MIN-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MND411.pdf",
    credits: "3-0-0"
  },
  {
    id: 1041,
    code: "FMD518",
    name: "Joining of Materials",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "FME-1"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "FME-1"
      ],
      [
        "Friday",
        "06:00-06:50",
        "FME-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMD518.pdf",
    credits: "3-0-0"
  },
  {
    id: 1042,
    code: "PHO501",
    name: "Astrophysics and Cosmology",
    department: "Physics",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "516"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "516"
      ],
      [
        "Friday",
        "03:00-03:50",
        "516"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHO501.pdf",
    credits: "3-0-0"
  },
  {
    id: 1043,
    code: "FMO545",
    name: "Equipment Design",
    department: "Fuel Mineral & Metallurgical Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "FME-1"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "FME-1"
      ],
      [
        "Friday",
        "03:00-03:50",
        "FME-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/fmme/FMO545.pdf",
    credits: "3-0-0"
  },
  {
    id: 1044,
    code: "CHC201",
    name: "Chemical Process Calculations",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "LC-II-C9"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "LC-II-C9"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-II-C9"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC201.pdf",
    credits: "3-0-0"
  },
  {
    id: 1045,
    code: "CHC203",
    name: "Heat Transfer",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "LC-II-C9"
      ],
      [
        "Tuesday",
        "09:00-09:50",
        "LC-II-C9"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "Thursday"
      ],
      [
        "09:00-09:50",
        "LC-II-C9",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC203.pdf",
    credits: "3-1-0"
  },
  {
    id: 1046,
    code: "PEC301",
    name: "Applied Petroleum Reservoir Engineering and Management",
    department: "Petroleum Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "PET 1"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "PET 1"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "PET 1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEC301.pdf",
    credits: "3-0-0"
  },
  {
    id: 1047,
    code: "CSD510",
    name: "Information Retrieval",
    department: "Computer Science & Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "11:00-11:50",
        "LC-II-G14"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "LC-II-G14"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-II-G14"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSD510.pdf",
    credits: "3-0-0"
  },
  {
    id: 728,
    code: "ESD501",
    name: "Environmental Geology and Resource Management",
    department: "Environmental Science & Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "LC-II-G5"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-II-G5"
      ],
      [
        "Friday",
        "12:00-12:50",
        "LC-II-G5"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESD501.pdf",
    credits: "3-0-0"
  },
  {
    id: 1049,
    code: "MND408",
    name: "Innovative Mining Systems",
    department: "Mining Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "08:00-08:50",
        "MIN-1"
      ],
      [
        "Wednesday",
        "08:00-08:50",
        "MIN-1"
      ],
      [
        "Friday",
        "08:00-08:50",
        "MIN-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MND408.pdf",
    credits: "3-0-0"
  },
  {
    id: 1050,
    code: "PEC302",
    name: "Petroleum Production Operations",
    department: "Petroleum Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "03:00-03:50",
        "PET 1"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "PET 1"
      ],
      [
        "Friday",
        "04:00-04:50",
        "PET 1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEC302.pdf",
    credits: "3-0-0"
  },
  {
    id: 290,
    code: "MCI103",
    name: "Numerical Methods",
    department: "Mathematics and Computing",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "LC-II-G8"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCI103.pdf",
    credits: "2-2-0"
  },
  {
    id: 1052,
    code: "CHC202",
    name: "Fluid and Particle Mechanics",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-II-C9"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-C9"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "Friday"
      ],
      [
        "11:00-11:50",
        "LC-II-C9",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC202.pdf",
    credits: "3-1-0"
  },
  {
    id: 1053,
    code: "PHC200",
    name: "Waves and Acoustics",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "LC-I-C12"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "LC-I-C12"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-I-C12"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC200.pdf",
    credits: "3-0-0"
  },
  {
    id: 1054,
    code: "CSD509",
    name: "Image and Video Processing",
    department: "Computer Science & Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "CSE CR1"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "CSE CR1"
      ],
      [
        "Friday",
        "02:00-02:50",
        "CSE CR1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSD509.pdf",
    credits: "3-0-0"
  },
  {
    id: 291,
    code: "MEI102",
    name: "Manufacturing Processes",
    department: "Mechanical Engineering",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "LC-II-G1"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "LC-II-G1"
      ],
      [
        "Tuesday",
        "10:00-10:50",
        "LC-II-G1"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "LC-II-G1"
      ],
      [
        "Tuesday",
        "04:00-04:50",
        "LC-II-G1"
      ],
      [
        "Tuesday",
        "09:00-09:50",
        "LC-II-G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEI102.pdf",
    credits: "2-0-3"
  },
  {
    id: 1056,
    code: "CSD513",
    name: "Internet of Things",
    department: "Computer Science & Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "CSE CR1"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "CSE CR1"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "CSE CR1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSD513.pdf",
    credits: "3-0-0"
  },
  {
    id: 1057,
    code: "CSD505",
    name: "Cryptography and Network Security",
    department: "Computer Science & Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "CSE CR2"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "CSE CR2"
      ],
      [
        "Friday",
        "02:00-02:50",
        "CSE CR2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSD505.pdf",
    credits: "3-0-0"
  },
  {
    id: 295,
    code: "CYI102",
    name: "Chemistry Lab",
    department: "Chemical and Chemical Biology",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Thursday",
        "09:00-09:50",
        "UG Lab"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "UG Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYI102.pdf",
    credits: "0-0-2"
  },
  {
    id: 292,
    code: "CYI101",
    name: "Chemistry",
    department: "Chemical and Chemical Biology",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "LC-II-G8"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "LC-II-G8"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "LC-II-G8"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYI101.pdf",
    credits: "3-0-0"
  },
  {
    id: 1060,
    code: "CHC507",
    name: "Computational Techniques Lab",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "04:00-04:50",
        "NLHC Computer Lab - II"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "NLHC Computer Lab - II"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC507.pdf",
    credits: "0-0-2"
  },
  {
    id: 1061,
    code: "EEO504",
    name: "Condition Monitoring of Electrical Machines",
    department: "Electrical Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "08:00-08:50",
        "LC-II-C3"
      ],
      [
        "Wednesday",
        "08:00-08:50",
        "LC-II-C3"
      ],
      [
        "Friday",
        "08:00-08:50",
        "LC-II-C3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEO504.pdf",
    credits: "3-0-0"
  },
  {
    id: 293,
    code: "CSI102",
    name: "Computer Programming Lab",
    department: "Computer Science & Engineering",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "NLHC Computer Lab - I"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSI102.pdf",
    credits: "0-0-2"
  },
  {
    id: 607,
    code: "HSC502",
    name: "Fundamentals of Data Analysis",
    department: "Humanities and Social Science",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "08:00-08:50",
        "Monday"
      ],
      [
        "08:00-08:50",
        null,
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSC502.pdf",
    credits: "2-0-0"
  },
  {
    id: 296,
    code: "ESI101",
    name: "Environmental Sciences",
    department: "Environmental Science & Engineering",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Tuesday",
        "05:00-05:50",
        "LC-II-G1"
      ],
      [
        "Friday",
        "05:00-05:50",
        "LC-II-G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESI101.pdf",
    credits: "2-0-0"
  },
  {
    id: 1065,
    code: "MND556",
    name: "Computational Geomechanics",
    department: "Mining Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "11:00-11:50",
        "MIN-1"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "MIN-1"
      ],
      [
        "Friday",
        "10:00-10:50",
        "MIN-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MND556.pdf",
    credits: "3-0-0"
  },
  {
    id: 607,
    code: "HSC502",
    name: "Fundamentals of Data Analysis",
    department: "Humanities and Social Science",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "08:00-08:50",
        "Monday"
      ],
      [
        "08:00-08:50",
        null,
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSC502.pdf",
    credits: "2-0-0"
  },
  {
    id: 607,
    code: "HSC502",
    name: "Fundamentals of Data Analysis",
    department: "Humanities and Social Science",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "08:00-08:50",
        "Monday"
      ],
      [
        "08:00-08:50",
        null,
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSC502.pdf",
    credits: "2-0-0"
  },
  {
    id: 289,
    code: "MCI102",
    name: "Mathematics - II",
    department: "Mathematics and Computing",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "LC-II-G1"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "LC-II-G1"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "LC-II-G1"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "LC-II-G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCI102.pdf",
    credits: "3-1-0"
  },
  {
    id: 269,
    code: "GLC208",
    name: "Economic Geology and Indian Mineral Deposits",
    department: "Applied Geology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "LC-II-C12"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "LC-II-C12"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "LC-II-C12"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agl/GLC208.pdf",
    credits: "3-0-0"
  },
  {
    id: 366,
    code: "CHC503",
    name: "Computational Techniques in Chemical Engineering",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "CHE-402"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "CHE-402"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "CHE-402"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC503.pdf",
    credits: "3-0-0"
  },
  {
    id: 1071,
    code: "CHC504",
    name: "Advanced Chemical Reaction Engineering",
    department: "Chemical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "Wednesday"
      ],
      [
        "12:00-12:50",
        "Thursday",
        "11:00-11:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/che/CHC504.pdf",
    credits: "3-0-0"
  },
  {
    id: 489,
    code: "GPC508",
    name: "Earthquake Seismology",
    department: "Applied Geophysics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "LC-II-C12"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "LC-II-C12"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "LC-II-C12"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/agp/GPC508.pdf",
    credits: "3-0-0"
  },
  {
    id: 1073,
    code: "CSC501",
    name: "Advanced Data Structures & Algorithms",
    department: "Computer Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-II-G11"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-G11"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-II-G11"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSC501.pdf",
    credits: "3-0-0"
  },
  {
    id: 1074,
    code: "MND410",
    name: "Advanced Blasting Techniques",
    department: "Mining Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "MIN-1"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "MIN-1"
      ],
      [
        "Friday",
        "12:00-12:50",
        "MIN-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MND410.pdf",
    credits: "3-0-0"
  },
  {
    id: 1075,
    code: "MEC500",
    name: "Theory of Elasticity",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "MECH-G1"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "MECH-G1"
      ],
      [
        "Friday",
        "11:00-11:50",
        "MECH-G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEC500.pdf",
    credits: "3-0-0"
  },
  {
    id: 1076,
    code: "MSC530",
    name: "Development Economics",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "MS 113"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "MS 113"
      ],
      [
        "Friday",
        "10:00-10:50",
        "MS 113"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC530.pdf",
    credits: "3-0-0"
  },
  {
    id: 1077,
    code: "MSC502",
    name: "Research Methodology and Statistics",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "Wednesday"
      ],
      [
        "12:00-12:50",
        "Thursday",
        "11:00-11:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC502.pdf",
    credits: "3-0-0"
  },
  {
    id: 1078,
    code: "MEC502",
    name: "Numerical Methods",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "MECH-G2"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "MECH-G2"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "MECH-G2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEC502.pdf",
    credits: "3-0-0"
  },
  {
    id: 1076,
    code: "MSC530",
    name: "Development Economics",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "MS 113"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "MS 113"
      ],
      [
        "Friday",
        "10:00-10:50",
        "MS 113"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC530.pdf",
    credits: "3-0-0"
  },
  {
    id: 475,
    code: "MSC512",
    name: "Operations Management",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "MS 113"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "MS 113"
      ],
      [
        "Friday",
        "09:00-09:50",
        "MS 113"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC512.pdf",
    credits: "3-0-0"
  },
  {
    id: 1081,
    code: "PHC574",
    name: "Numerical Methods and Simulation",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "MS 010"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "MS 010"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "MS 010"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC574.pdf",
    credits: "3-0-0"
  },
  {
    id: 484,
    code: "MSC531",
    name: "Managerial Ethics, Values and CSR",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "MS 210"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "MS 210"
      ],
      [
        "Friday",
        "11:00-11:50",
        "MS 210"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC531.pdf",
    credits: "3-0-0"
  },
  {
    id: 1083,
    code: "PHC575",
    name: "Physics of Phase Transformation",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "MS 010"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "MS 010"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "MS 010"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC575.pdf",
    credits: "3-0-0"
  },
  {
    id: 151,
    code: "HSI500",
    name: "Research and Technical Communication",
    department: "Humanities and Social Science",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "Wednesday"
      ],
      [
        "09:00-09:50",
        "Friday",
        "09:00-09:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSI500.pdf",
    credits: "3-0-0"
  },
  {
    id: 151,
    code: "HSI500",
    name: "Research and Technical Communication",
    department: "Humanities and Social Science",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "Wednesday"
      ],
      [
        "09:00-09:50",
        "Friday",
        "09:00-09:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSI500.pdf",
    credits: "3-0-0"
  },
  {
    id: 1086,
    code: "PHC572",
    name: "Theoretical Physics",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "MS 010"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "MS 010"
      ],
      [
        "Friday",
        "10:00-10:50",
        "MS 010"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC572.pdf",
    credits: "3-0-0"
  },
  {
    id: 1077,
    code: "MSC502",
    name: "Research Methodology and Statistics",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "Wednesday"
      ],
      [
        "12:00-12:50",
        "Thursday",
        "11:00-11:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC502.pdf",
    credits: "3-0-0"
  },
  {
    id: 1088,
    code: "PHC573",
    name: "Experimental Physics",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "MS 010"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "MS 010"
      ],
      [
        "Friday",
        "11:00-11:50",
        "MS 010"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC573.pdf",
    credits: "3-0-0"
  },
  {
    id: 1089,
    code: "MSC506",
    name: "Managerial Economics",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "MS 209"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "MS 209"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "MS 209"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC506.pdf",
    credits: "3-0-0"
  },
  {
    id: 786,
    code: "CYC518",
    name: "Analytical Chemistry Lab",
    department: "Chemical and Chemical Biology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "12:00-12:50",
        "Wednesday"
      ],
      [
        "10:00-10:50",
        "PG Lab",
        "Wednesday"
      ],
      [
        "11:00-11:50",
        "PG Lab",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYC518.pdf",
    credits: "0-0-3"
  },
  {
    id: 821,
    code: "CYC523",
    name: "Numerical Analysis and Methods in Chemistry",
    department: "Chemical and Chemical Biology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "Wednesday"
      ],
      [
        "12:00-12:50",
        "Thursday",
        "11:00-11:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYC523.pdf",
    credits: "3-0-0"
  },
  {
    id: 1092,
    code: "CYC528",
    name: "Process Chemistry Lab",
    department: "Chemical and Chemical Biology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "PG Lab"
      ],
      [
        "Monday",
        "05:00-05:50",
        "PG Lab"
      ],
      [
        "Monday",
        "06:00-06:50",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYC528.pdf",
    credits: "0-0-3"
  },
  {
    id: 1093,
    code: "CYC527",
    name: "Formulation & Drug Delivery Technology",
    department: "Chemical and Chemical Biology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "LC-I-C13"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "LC-I-C13"
      ],
      [
        "Friday",
        "12:00-12:50",
        "LC-I-C13"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYC527.pdf",
    credits: "3-0-0"
  },
  {
    id: 835,
    code: "CEC501",
    name: "Numerical Methods in Civil Engineering",
    department: "Civil Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-II-G6"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-G6"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-II-G6"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEC501.pdf",
    credits: "3-0-0"
  },
  {
    id: 1095,
    code: "EEC502",
    name: "Modelling of Electrical Machines",
    department: "Electrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-II-C6"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-C6"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-II-C6"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEC502.pdf",
    credits: "3-0-0"
  },
  {
    id: 1096,
    code: "CYC526",
    name: "Pharmaceutical Process Technology",
    department: "Chemical and Chemical Biology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-I-C13"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-I-C13"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-I-C13"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYC526.pdf",
    credits: "3-0-0"
  },
  {
    id: 1097,
    code: "EEC506",
    name: "Advanced Electrical Machine Lab",
    department: "Electrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "Monday"
      ],
      [
        "04:00-04:50",
        "El MC Lab",
        "Monday"
      ],
      [
        "05:00-05:50",
        "El MC Lab",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEC506.pdf",
    credits: "0-0-3"
  },
  {
    id: 831,
    code: "CEC503",
    name: "Mechanics of Deformable Solids",
    department: "Civil Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "CECR1"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "CECR1"
      ],
      [
        "Friday",
        "11:00-11:50",
        "CECR1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEC503.pdf",
    credits: "3-0-0"
  },
  {
    id: 1099,
    code: "CEC507",
    name: "Computational Laboratory",
    department: "Civil Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "Monday"
      ],
      [
        "04:00-04:50",
        "NLHC Computer Lab - II",
        "Monday"
      ],
      [
        "05:00-05:50",
        "NLHC Computer Lab - II",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEC507.pdf",
    credits: "0-0-3"
  },
  {
    id: 834,
    code: "CEC504",
    name: "Mechanics of Geomaterials",
    department: "Civil Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "CECR1"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "CECR1"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "CECR1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEC504.pdf",
    credits: "3-0-0"
  },
  {
    id: 823,
    code: "EEC511",
    name: "Renewable Energy Sources",
    department: "Electrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "Tuesday"
      ],
      [
        "11:00-11:50",
        "Wednesday",
        "11:00-11:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEC511.pdf",
    credits: "3-0-0"
  },
  {
    id: 1102,
    code: "EEC504",
    name: "Advanced Control System",
    department: "Electrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "LC-II-C16"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "LC-II-C16"
      ],
      [
        "Friday",
        "11:00-11:50",
        "LC-II-C16"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEC504.pdf",
    credits: "3-0-0"
  },
  {
    id: 1103,
    code: "CEC505",
    name: "Engineering Hydrology & Hydraulics",
    department: "Civil Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "CECR1"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "CECR1"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "CECR1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEC505.pdf",
    credits: "3-0-0"
  },
  {
    id: 1104,
    code: "EEC507",
    name: "Advanced Power System Lab",
    department: "Electrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "06:00-06:50",
        "Thursday"
      ],
      [
        "04:00-04:50",
        "PS Lab",
        "Thursday"
      ],
      [
        "05:00-05:50",
        "PS Lab",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEC507.pdf",
    credits: "0-0-3"
  },
  {
    id: 1105,
    code: "CEC506",
    name: "Transport System Design & Management",
    department: "Civil Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "CECR1"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "CECR1"
      ],
      [
        "Friday",
        "12:00-12:50",
        "CECR1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEC506.pdf",
    credits: "3-0-0"
  },
  {
    id: 1106,
    code: "EEC512",
    name: "Soft Computing Techniques",
    department: "Electrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "LC-II-C16"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-II-C16"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "LC-II-C16"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEC512.pdf",
    credits: "3-0-0"
  },
  {
    id: 1107,
    code: "CEC508",
    name: "Civil Engineering Model Development Laboratory",
    department: "Civil Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "04:00-04:50",
        "CEPG2"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "CEPG2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEC508.pdf",
    credits: "0-0-2"
  },
  {
    id: 1108,
    code: "MNC537",
    name: "Computational Subsurface Ventilation and Environment Practical",
    department: "Mining Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "04:00-04:50",
        "Mine Ventilation Lab"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "Mine Ventilation Lab"
      ],
      [
        "Thursday",
        "06:00-06:50",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNC537.pdf",
    credits: "0-0-3"
  },
  {
    id: 1109,
    code: "EEC518",
    name: "Industrial Instrumentation",
    department: "Electrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "LC-II-C16"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "LC-II-C16"
      ],
      [
        "Friday",
        "12:00-12:50",
        "LC-II-C16"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEC518.pdf",
    credits: "3-0-0"
  },
  {
    id: 1110,
    code: "MNC536",
    name: "Computational Subsurface Ventilation and Environment",
    department: "Mining Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "Thursday"
      ],
      [
        "12:00-12:50",
        "Friday",
        "12:00-12:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNC536.pdf",
    credits: "3-0-0"
  },
  {
    id: 1111,
    code: "MEC508",
    name: "Advanced Heat Transfer",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "MECH-G1"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "MECH-G1"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "MECH-G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEC508.pdf",
    credits: "3-0-0"
  },
  {
    id: 1112,
    code: "MEC594",
    name: "Basics of Scientific Computing",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "Mech G2"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "Mech G2"
      ],
      [
        "Friday",
        "10:00-10:50",
        "Mech G2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEC594.pdf",
    credits: "3-0-0"
  },
  {
    id: 1113,
    code: "MEC595",
    name: "Thermal and Design Lab",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "Monday"
      ],
      [
        "05:00-05:50",
        "Monday",
        "06:00-06:50"
      ],
      [
        "Monday",
        "06:00-06:50",
        "Tuesday"
      ],
      [
        "04:00-04:50",
        "Tuesday",
        "05:00-05:50"
      ],
      [
        "Tuesday",
        "06:00-06:50",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEC595.pdf",
    credits: "0-0-3"
  },
  {
    id: 1114,
    code: "MNC538",
    name: "Mass Production Mining Technology",
    department: "Mining Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "ME-MIN-3"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "ME-MIN-3"
      ],
      [
        "Friday",
        "10:00-10:50",
        "ME-MIN-3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNC538.pdf",
    credits: "3-0-0"
  },
  {
    id: 1115,
    code: "MNC505",
    name: "Geomechanics Practical",
    department: "Mining Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "Rock Mechanic Lab"
      ],
      [
        "Monday",
        "05:00-05:50",
        "Rock Mechanic Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNC505.pdf",
    credits: "0-0-2"
  },
  {
    id: 1116,
    code: "MNC539",
    name: "Computational Geomechanics and Ground Control",
    department: "Mining Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "MIN-1"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "MIN-1"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "MIN-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNC539.pdf",
    credits: "3-0-0"
  },
  {
    id: 1075,
    code: "MEC500",
    name: "Theory of Elasticity",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "MECH-G1"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "MECH-G1"
      ],
      [
        "Friday",
        "11:00-11:50",
        "MECH-G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEC500.pdf",
    credits: "3-0-0"
  },
  {
    id: 1118,
    code: "MNC540",
    name: "Mining Equipment Reliability, Maintainability and Availability",
    department: "Mining Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "Tuesday"
      ],
      [
        "11:00-11:50",
        "Wednesday",
        "11:00-11:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNC540.pdf",
    credits: "3-0-0"
  },
  {
    id: 1119,
    code: "MEC501",
    name: "Mechanical Vibration",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "MECH-G1"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "MECH-G1"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "MECH-G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEC501.pdf",
    credits: "3-0-0"
  },
  {
    id: 1120,
    code: "MEC596",
    name: "Manufacturing and Tribology Lab",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "04:00-04:50",
        "Wednesday"
      ],
      [
        "05:00-05:50",
        "Wednesday",
        "06:00-06:50"
      ],
      [
        "Thursday",
        "06:00-06:50",
        "Thursday"
      ],
      [
        "04:00-04:50",
        "Workshop",
        "Thursday"
      ],
      [
        "05:00-05:50",
        "Workshop",
        "Thursday"
      ],
      [
        "06:00-06:50",
        "Thursday",
        "04:00-04:50"
      ],
      [
        "Thursday",
        "05:00-05:50",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEC596.pdf",
    credits: "0-0-3"
  },
  {
    id: 1121,
    code: "MEC514",
    name: "Advances in Machining",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "12:00-12:50",
        "Mech G2"
      ],
      [
        "Thursday",
        "12:00-12:50",
        "Mech G2"
      ],
      [
        "Friday",
        "12:00-12:50",
        "Mech G2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEC514.pdf",
    credits: "3-0-0"
  },
  {
    id: 1077,
    code: "MSC502",
    name: "Research Methodology and Statistics",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "Wednesday"
      ],
      [
        "12:00-12:50",
        "Thursday",
        "11:00-11:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC502.pdf",
    credits: "3-0-0"
  },
  {
    id: 1123,
    code: "PEO506",
    name: "Carbon Capture And Sequestration Course Objective",
    department: "Petroleum Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "08:00-08:50",
        "PET 3"
      ],
      [
        "Wednesday",
        "08:00-08:50",
        "PET 3"
      ],
      [
        "Friday",
        "08:00-08:50",
        "PET 3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEO506.pdf",
    credits: "3-0-0"
  },
  {
    id: 1124,
    code: "CYD513",
    name: "Electroanalytical Methods",
    department: "Chemical and Chemical Biology",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "HSS class room -1"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "HSS class room -1"
      ],
      [
        "Friday",
        "12:00-12:50",
        "HSS class room -1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYD513.pdf",
    credits: "3-0-0"
  },
  {
    id: 1125,
    code: "CYC513",
    name: "Organic Chemistry Lab - II",
    department: "Chemical and Chemical Biology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "PG Lab"
      ],
      [
        "Monday",
        "05:00-05:50",
        "PG Lab"
      ],
      [
        "Monday",
        "06:00-06:50",
        "PG Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYC513.pdf",
    credits: "0-0-3"
  },
  {
    id: 1126,
    code: "CYC510",
    name: "Organometallic Chemistry",
    department: "Chemical and Chemical Biology",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "LC-II-C10"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "LC-II-C10"
      ],
      [
        "Friday",
        "09:00-09:50",
        "LC-II-C10"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYC510.pdf",
    credits: "3-0-0"
  },
  {
    id: 1127,
    code: "CYO501",
    name: "Instrumental Techniques for Material Characterization",
    department: "Chemical and Chemical Biology",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "LC-II-C16"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "LC-II-C16"
      ],
      [
        "Friday",
        "12:00-12:50",
        "LC-II-C16"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ccb/CYO501.pdf",
    credits: "3-0-0"
  },
  {
    id: 1128,
    code: "PEC205",
    name: "Drilling Fluids and Cementing Practical",
    department: "Petroleum Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "04:00-04:50",
        "Drilling Fluids and Cement laboratory"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "Drilling Fluids and Cement laboratory"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEC205.pdf",
    credits: "0-0-2"
  },
  {
    id: 1129,
    code: "PEC202",
    name: "Elements of Reservoir Engineering",
    department: "Petroleum Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "PET 2"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "PET 2"
      ],
      [
        "Friday",
        "11:00-11:50",
        "PET 2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEC202.pdf",
    credits: "3-0-0"
  },
  {
    id: 1130,
    code: "PEC203",
    name: "Drilling Fluids and Cements",
    department: "Petroleum Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "PET 2"
      ],
      [
        "Tuesday",
        "09:00-09:50",
        "PET 2"
      ],
      [
        "Thursday",
        "09:00-09:50",
        "PET 2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEC203.pdf",
    credits: "3-0-0"
  },
  {
    id: 1131,
    code: "MSC501",
    name: "Management Principles & Practices",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "MS 011"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "MS 011"
      ],
      [
        "Friday",
        "10:00-10:50",
        "MS 011"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC501.pdf",
    credits: "3-0-0"
  },
  {
    id: 1132,
    code: "PEC204",
    name: "Reservoir Engineering Practical",
    department: "Petroleum Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "PE Reservoir Engineering laboratory"
      ],
      [
        "Monday",
        "04:00-04:50",
        "PE Reservoir Engineering laboratory"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEC204.pdf",
    credits: "0-0-2"
  },
  {
    id: 939,
    code: "PEE201",
    name: "Introduction to Petroleum Engineering",
    department: "Petroleum Engineering",
    type: "Engineering Science Option (ESO)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "PET 1"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "PET 1"
      ],
      [
        "Friday",
        "02:00-02:50",
        "PET 1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/pe/PEE201.pdf",
    credits: "3-0-0"
  },
  {
    id: 1077,
    code: "MSC502",
    name: "Research Methodology and Statistics",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "Wednesday"
      ],
      [
        "12:00-12:50",
        "Thursday",
        "11:00-11:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC502.pdf",
    credits: "3-0-0"
  },
  {
    id: 1077,
    code: "MSC502",
    name: "Research Methodology and Statistics",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "Wednesday"
      ],
      [
        "12:00-12:50",
        "Thursday",
        "11:00-11:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC502.pdf",
    credits: "3-0-0"
  },
  {
    id: 1136,
    code: "MSC526",
    name: "Strategic Management",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "MS 209"
      ],
      [
        "Tuesday",
        "03:00-03:50",
        "MS 209"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "MS 209"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC526.pdf",
    credits: "3-0-0"
  },
  {
    id: 1137,
    code: "HSC500",
    name: "Research and Technical Communication",
    department: "Humanities and Social Science",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "HSS class room -2"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "HSS class room -2"
      ],
      [
        "Friday",
        "09:00-09:50",
        "HSS class room -2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSC500.pdf",
    credits: "3-0-0"
  },
  {
    id: 843,
    code: "MSC504",
    name: "Financial Accounting and Reporting",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "09:00-09:50",
        "Thursday"
      ],
      [
        "09:00-09:50",
        "Friday",
        "09:00-09:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC504.pdf",
    credits: "3-0-0"
  },
  {
    id: 1139,
    code: "MSC522",
    name: "Data Mining for Business",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "MS 011"
      ],
      [
        "Tuesday",
        "12:00-12:50",
        "Wednesday"
      ],
      [
        "10:00-10:50",
        "MS 011",
        "Friday"
      ],
      [
        "10:00-10:50",
        "MS 011",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC522.pdf",
    credits: "4-0-0"
  },
  {
    id: 1137,
    code: "HSC500",
    name: "Research and Technical Communication",
    department: "Humanities and Social Science",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "HSS class room -2"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "HSS class room -2"
      ],
      [
        "Friday",
        "09:00-09:50",
        "HSS class room -2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSC500.pdf",
    credits: "3-0-0"
  },
  {
    id: 1141,
    code: "MNC525",
    name: "Remote Sensing and Digital Image Processing",
    department: "Mining Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "PG Lab-1 Geomatics"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "PG Lab-1 Geomatics"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "PG Lab-1 Geomatics"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNC525.pdf",
    credits: "3-0-0"
  },
  {
    id: 151,
    code: "HSI500",
    name: "Research and Technical Communication",
    department: "Humanities and Social Science",
    type: "Institute Core (IC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "Wednesday"
      ],
      [
        "09:00-09:50",
        "Friday",
        "09:00-09:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSI500.pdf",
    credits: "3-0-0"
  },
  {
    id: 843,
    code: "MSC504",
    name: "Financial Accounting and Reporting",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "09:00-09:50",
        "Thursday"
      ],
      [
        "09:00-09:50",
        "Friday",
        "09:00-09:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC504.pdf",
    credits: "3-0-0"
  },
  {
    id: 1144,
    code: "MNC535",
    name: "Excavation Methods for Tunnels and Caverns",
    department: "Mining Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "PG Lab-1 Geomatics"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "PG Lab-1 Geomatics"
      ],
      [
        "Friday",
        "10:00-10:50",
        "PG Lab-1 Geomatics"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNC535.pdf",
    credits: "3-0-0"
  },
  {
    id: 1145,
    code: "MSC523",
    name: "Multivariate Analysis Lab",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "06:00-06:50",
        "MS-012"
      ],
      [
        "Thursday",
        "04:00-04:50",
        "MS-012"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "MS-012"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC523.pdf",
    credits: "0-0-3"
  },
  {
    id: 1146,
    code: "MNO301",
    name: "Modern Surveying Techniques",
    department: "Mining Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "PET 2"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "PET 2"
      ],
      [
        "Friday",
        "06:00-06:50",
        "PET 2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNO301.pdf",
    credits: "3-0-0"
  },
  {
    id: 1147,
    code: "MEO583",
    name: "Design of Thermal Systems",
    department: "Mechanical Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "Wednesday"
      ],
      [
        "06:00-06:50",
        "Friday",
        "06:00-06:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEO583.pdf",
    credits: "3-0-0"
  },
  {
    id: 1148,
    code: "MMC304",
    name: "Automation and Control Lab",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "10:00-10:50",
        "MINE ELEC LAB"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "MINE ELEC LAB"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MMC304.pdf",
    credits: "0-0-2"
  },
  {
    id: 1089,
    code: "MSC506",
    name: "Managerial Economics",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "MS 209"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "MS 209"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "MS 209"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC506.pdf",
    credits: "3-0-0"
  },
  {
    id: 1150,
    code: "PHC301",
    name: "Electronics Lab",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "10:00-10:50",
        "PHUG LAB-2"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "PHUG LAB-2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC301.pdf",
    credits: "0-0-2"
  },
  {
    id: 1151,
    code: "HSC501",
    name: "Research Methodology",
    department: "Humanities and Social Science",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "HSS class room -2"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "HSS class room -2"
      ],
      [
        "Friday",
        "11:00-11:50",
        "HSS class room -2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSC501.pdf",
    credits: "3-0-0"
  },
  {
    id: 1116,
    code: "MNC539",
    name: "Computational Geomechanics and Ground Control",
    department: "Mining Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "MIN-1"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "MIN-1"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "MIN-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNC539.pdf",
    credits: "3-0-0"
  },
  {
    id: 1151,
    code: "HSC501",
    name: "Research Methodology",
    department: "Humanities and Social Science",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "HSS class room -2"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "HSS class room -2"
      ],
      [
        "Friday",
        "11:00-11:50",
        "HSS class room -2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSC501.pdf",
    credits: "3-0-0"
  },
  {
    id: 838,
    code: "MSC508",
    name: "Business Analytics Lab",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "04:00-04:50",
        "Tuesday"
      ],
      [
        "05:00-05:50",
        null,
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC508.pdf",
    credits: "0-0-2"
  },
  {
    id: 1155,
    code: "EEC202",
    name: "Analog and Digital Electronics",
    department: "Electrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-II-G3"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-G3"
      ],
      [
        "Friday",
        "11:00-11:50",
        "LC-II-G3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEC202.pdf",
    credits: "3-0-0"
  },
  {
    id: 1156,
    code: "EEC271",
    name: "Networks Lab",
    department: "Electrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "Elect. Tech. Lab"
      ],
      [
        "Monday",
        "05:00-05:50",
        "Elect. Tech. Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEC271.pdf",
    credits: "0-0-2"
  },
  {
    id: 1089,
    code: "MSC506",
    name: "Managerial Economics",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "MS 209"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "MS 209"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "MS 209"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC506.pdf",
    credits: "3-0-0"
  },
  {
    id: 1158,
    code: "HSC508",
    name: "Understanding Philosophy",
    department: "Humanities and Social Science",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "HSS class room -2"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "HSS class room -2"
      ],
      [
        "Friday",
        "10:00-10:50",
        "HSS class room -2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSC508.pdf",
    credits: "3-0-0"
  },
  {
    id: 1159,
    code: "HSC509",
    name: "Perspectives on Human Behaviour",
    department: "Humanities and Social Science",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "HSS class room -2"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "HSS class room -2"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "HSS class room -2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSC509.pdf",
    credits: "3-0-0"
  },
  {
    id: 1159,
    code: "HSC509",
    name: "Perspectives on Human Behaviour",
    department: "Humanities and Social Science",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "12:00-12:50",
        "HSS class room -2"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "HSS class room -2"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "HSS class room -2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSC509.pdf",
    credits: "3-0-0"
  },
  {
    id: 1158,
    code: "HSC508",
    name: "Understanding Philosophy",
    department: "Humanities and Social Science",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "HSS class room -2"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "HSS class room -2"
      ],
      [
        "Friday",
        "10:00-10:50",
        "HSS class room -2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSC508.pdf",
    credits: "3-0-0"
  },
  {
    id: 838,
    code: "MSC508",
    name: "Business Analytics Lab",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "04:00-04:50",
        "Tuesday"
      ],
      [
        "05:00-05:50",
        null,
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC508.pdf",
    credits: "0-0-2"
  },
  {
    id: 842,
    code: "MSC507",
    name: "Decision Modelling",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "Thursday"
      ],
      [
        "10:00-10:50",
        "Friday",
        "11:00-11:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC507.pdf",
    credits: "3-0-0"
  },
  {
    id: 842,
    code: "MSC507",
    name: "Decision Modelling",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "Thursday"
      ],
      [
        "10:00-10:50",
        "Friday",
        "11:00-11:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC507.pdf",
    credits: "3-0-0"
  },
  {
    id: 1165,
    code: "MNO303",
    name: "Underground Construction Engineering",
    department: "Mining Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "Thursday"
      ],
      [
        "02:00-02:50",
        "Friday",
        "03:00-03:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNO303.pdf",
    credits: "3-0-0"
  },
  {
    id: 1166,
    code: "MMC301",
    name: "Mineral Beneficiation Equipment",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "LC-II-C1"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "LC-II-C1"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "LC-II-C1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MMC301.pdf",
    credits: "3-0-0"
  },
  {
    id: 1167,
    code: "MMC302",
    name: "Automation and Control in Mining Machineries",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "03:00-03:50",
        "LC-II-C1"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "LC-II-C1"
      ],
      [
        "Friday",
        "04:00-04:50",
        "LC-II-C1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MMC302.pdf",
    credits: "3-0-0"
  },
  {
    id: 1168,
    code: "PHC300",
    name: "Thermal Physics Lab",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "11:00-11:50",
        "PHUG LAB-2"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "PHUG LAB-2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC300.pdf",
    credits: "0-0-2"
  },
  {
    id: 806,
    code: "PHC514",
    name: "Statistical Mechanics",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "Tuesday"
      ],
      [
        "06:00-06:50",
        "Wednesday",
        "03:00-03:50"
      ],
      [
        "Thursday",
        "03:00-03:50",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC514.pdf",
    credits: "3-1-0"
  },
  {
    id: 1170,
    code: "PHO300",
    name: "Sensors and Transducers",
    department: "Physics",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "LC-II-C10"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "LC-II-C10"
      ],
      [
        "Friday",
        "06:00-06:50",
        "LC-II-C10"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHO300.pdf",
    credits: "3-0-0"
  },
  {
    id: 168,
    code: "MNC504",
    name: "Risk and Workplace Safety Management",
    department: "Mining Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "MIN-1"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "MIN-1"
      ],
      [
        "Friday",
        "11:00-11:50",
        "MIN-1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNC504.pdf",
    credits: "3-0-0"
  },
  {
    id: 1172,
    code: "ESC502",
    name: "Water Supply and Treatment",
    department: "Environmental Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "10:00-10:50",
        "CME-I"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "CME-I"
      ],
      [
        "Friday",
        "11:00-11:50",
        "CME-I"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ese/ESC502.pdf",
    credits: "3-0-0"
  },
  {
    id: 1173,
    code: "MED543",
    name: "Solar Energy",
    department: "Mechanical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "LC-I-C8"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "LC-I-C8"
      ],
      [
        "Friday",
        "03:00-03:50",
        "LC-I-C8"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MED543.pdf",
    credits: "3-0-0"
  },
  {
    id: 1174,
    code: "MEO580",
    name: "Measurements in Thermal Engineering",
    department: "Mechanical Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "Mech G1"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "Mech G1"
      ],
      [
        "Friday",
        "06:00-06:50",
        "Mech G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEO580.pdf",
    credits: "3-0-0"
  },
  {
    id: 1175,
    code: "MEC301",
    name: "Machine Design",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "NLHC-G16"
      ],
      [
        "Wednesday",
        "03:00-03:50",
        "NLHC-G16"
      ],
      [
        "Thursday",
        "03:00-03:50",
        "NLHC-G16"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEC301.pdf",
    credits: "3-0-0"
  },
  {
    id: 800,
    code: "PHC515",
    name: "Laser Physics and Technology",
    department: "Physics",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "Tuesday"
      ],
      [
        "03:00-03:50",
        "Thursday",
        "06:00-06:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/phy/PHC515.pdf",
    credits: "3-0-0"
  },
  {
    id: 1177,
    code: "MEC303",
    name: "Advanced Solid Mechanics",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "NLHC-G16"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "NLHC-G16"
      ],
      [
        "Friday",
        "06:00-06:50",
        "NLHC-G16"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEC303.pdf",
    credits: "3-0-0"
  },
  {
    id: 1178,
    code: "MSC509",
    name: "Business Communication Lab",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "04:00-04:50",
        "MS 011"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "MS 011"
      ],
      [
        "Thursday",
        "06:00-06:50",
        "MS 011"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSC509.pdf",
    credits: "0-0-3"
  },
  {
    id: 1179,
    code: "HSC504",
    name: "Social Theory and Sociological Practices",
    department: "Humanities and Social Science",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "HSS class room -2"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "HSS class room -2"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "HSS class room -2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSC504.pdf",
    credits: "3-0-0"
  },
  {
    id: 1180,
    code: "MEC302",
    name: "Machining and Machine Tools",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Tuesday",
        "03:00-03:50",
        "NLHC-G16"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "NLHC-G16"
      ],
      [
        "Friday",
        "04:00-04:50",
        "NLHC-G16"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEC302.pdf",
    credits: "3-0-0"
  },
  {
    id: 1181,
    code: "CEC205",
    name: "Environmental Engineering Laboratory",
    department: "Civil Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "04:00-04:50",
        "CEUG2"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "CEUG2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEC205.pdf",
    credits: "0-0-2"
  },
  {
    id: 1182,
    code: "MED548",
    name: "Heat Exchanger Design",
    department: "Mechanical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "Mech G1"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "Mech G1"
      ],
      [
        "Friday",
        "06:00-06:50",
        "Mech G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MED548.pdf",
    credits: "3-0-0"
  },
  {
    id: 1183,
    code: "MED539",
    name: "Fundamentals of Aerodynamics",
    department: "Mechanical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "Mech G1"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "Mech G1"
      ],
      [
        "Friday",
        "03:00-03:50",
        "Mech G1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MED539.pdf",
    credits: "3-0-0"
  },
  {
    id: 1184,
    code: "MMC303",
    name: "Mine Electrical Technology Lab",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "11:00-11:50",
        "MINE ELEC LAB"
      ],
      [
        "Wednesday",
        "12:00-12:50",
        "MINE ELEC LAB"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MMC303.pdf",
    credits: "0-0-2"
  },
  {
    id: 1185,
    code: "EEC203",
    name: "Electromagnetic Theory and Applications",
    department: "Electrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "LC-II-G3"
      ],
      [
        "Tuesday",
        "09:00-09:50",
        "LC-II-G3"
      ],
      [
        "Thursday",
        "09:00-09:50",
        "LC-II-G3"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEC203.pdf",
    credits: "3-0-0"
  },
  {
    id: 1186,
    code: "CEE201",
    name: "Mechanics of Solid",
    department: "Civil Engineering",
    type: "Engineering Science Option (ESO)",
    timetable: [
      [
        "Tuesday",
        "08:00-08:50",
        "NAC Hall"
      ],
      [
        "Thursday",
        "08:00-08:50",
        "NAC Hall"
      ],
      [
        "Friday",
        "09:00-09:50",
        "NAC Hall"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEE201.pdf",
    credits: "3-0-0"
  },
  {
    id: 1187,
    code: "CEC201",
    name: "Surveying",
    department: "Civil Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "LC-II-C11"
      ],
      [
        "Wednesday",
        "09:00-09:50",
        "LC-II-C11"
      ],
      [
        "Friday",
        "10:00-10:50",
        "LC-II-C11"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEC201.pdf",
    credits: "3-0-0"
  },
  {
    id: 1188,
    code: "MNC303",
    name: "Mine Ventilation Practical - II",
    department: "Mining Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "Monday"
      ],
      [
        "11:00-11:50",
        "Wednesday",
        "10:00-10:50"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "Thursday"
      ],
      [
        "10:00-10:50",
        "Thursday",
        "11:00-11:50"
      ],
      [
        "Thursday",
        "10:00-10:50",
        "Mine Ventilation Lab"
      ],
      [
        "Thursday",
        "11:00-11:50",
        "Mine Ventilation Lab"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNC303.pdf",
    credits: "0-0-2"
  },
  {
    id: 1179,
    code: "HSC504",
    name: "Social Theory and Sociological Practices",
    department: "Humanities and Social Science",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "HSS class room -2"
      ],
      [
        "Tuesday",
        "11:00-11:50",
        "HSS class room -2"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "HSS class room -2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/hss/HSC504.pdf",
    credits: "3-0-0"
  },
  {
    id: 1033,
    code: "MEO522",
    name: "Condition Monitoring of Machines",
    department: "Mechanical Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "08:00-08:50",
        "MME-207"
      ],
      [
        "Thursday",
        "08:00-08:50",
        "MME-207"
      ],
      [
        "Friday",
        "09:00-09:50",
        "MME-207"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEO522.pdf",
    credits: "3-0-0"
  },
  {
    id: 1191,
    code: "MEC305",
    name: "Machine Design Lab",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Thursday",
        "12:00-12:50",
        "Thursday"
      ],
      [
        "10:00-10:50",
        "Thursday",
        "11:00-11:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEC305.pdf",
    credits: "0-0-3"
  },
  {
    id: 1192,
    code: "CSO503",
    name: "Data Mining",
    department: "Computer Science & Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "04:00-04:50",
        "NAC Hall"
      ],
      [
        "Wednesday",
        "04:00-04:50",
        "NAC Hall"
      ],
      [
        "Friday",
        "04:00-04:50",
        "NAC Hall"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSO503.pdf",
    credits: "3-0-0"
  },
  {
    id: 1193,
    code: "MNC302",
    name: "Computer Aided Mine Planning and Design",
    department: "Mining Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "12:00-12:50",
        "MIN-2"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "Wednesday"
      ],
      [
        "11:00-11:50",
        "Wednesday",
        "12:00-12:50"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "Wednesday"
      ],
      [
        "11:00-11:50",
        "MIN-2",
        "Thursday"
      ],
      [
        "10:00-10:50",
        "Thursday",
        "11:00-11:50"
      ],
      [
        "Thursday",
        "12:00-12:50",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNC302.pdf",
    credits: "0-0-3"
  },
  {
    id: 1194,
    code: "MMO301",
    name: "Automobile Engineering",
    department: "Mechanical Engineering",
    type: "Open Elective",
    timetable: [
      [
        "Tuesday",
        "02:00-02:50",
        "LC-II-C4"
      ],
      [
        "Thursday",
        "02:00-02:50",
        "LC-II-C4"
      ],
      [
        "Friday",
        "03:00-03:50",
        "LC-II-C4"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MMO301.pdf",
    credits: "3-0-0"
  },
  {
    id: 1195,
    code: "MMD512",
    name: "Mine Electrical Drives",
    department: "Mechanical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "06:00-06:50",
        "MME-207"
      ],
      [
        "Wednesday",
        "06:00-06:50",
        "MME-207"
      ],
      [
        "Friday",
        "06:00-06:50",
        "MME-207"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MMD512.pdf",
    credits: "3-0-0"
  },
  {
    id: 1196,
    code: "EEC201",
    name: "Signals, Systems and Networks",
    department: "Electrical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "09:00-09:50",
        "LC-II-G3"
      ],
      [
        "Tuesday",
        "10:00-10:50",
        "Wednesday"
      ],
      [
        "09:00-09:50",
        "LC-II-G3",
        "Friday"
      ],
      [
        "10:00-10:50",
        "LC-II-G3",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ee/EEC201.pdf",
    credits: "3-1-0"
  },
  {
    id: 907,
    code: "MNE201",
    name: "Introduction to Mining",
    department: "Mining Engineering",
    type: "Engineering Science Option (ESO)",
    timetable: [
      [
        "Monday",
        "02:00-02:50",
        "LC-II-G2"
      ],
      [
        "Wednesday",
        "02:00-02:50",
        "LC-II-G2"
      ],
      [
        "Friday",
        "02:00-02:50",
        "LC-II-G2"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/me/MNE201.pdf",
    credits: "3-0-0"
  },
  {
    id: 1198,
    code: "CEC203",
    name: "Building Materials, Construction and Management",
    department: "Civil Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "11:00-11:50",
        "LC-II-C11"
      ],
      [
        "Tuesday",
        "09:00-09:50",
        "LC-II-C11"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "Thursday"
      ],
      [
        "09:00-09:50",
        "LC-II-C11",
        null
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEC203.pdf",
    credits: "3-1-0"
  },
  {
    id: 1199,
    code: "MEC304",
    name: "Production Technology Lab",
    department: "Mechanical Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "12:00-12:50",
        "Wednesday"
      ],
      [
        "09:00-09:50",
        "Wednesday",
        "10:00-10:50"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "Wednesday"
      ],
      [
        "11:00-11:50",
        "Wednesday",
        "12:00-12:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mech/MEC304.pdf",
    credits: "0-0-2"
  },
  {
    id: 1200,
    code: "CEC202",
    name: "Environmental Engineering",
    department: "Civil Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "10:00-10:50",
        "LC-II-C11"
      ],
      [
        "Wednesday",
        "10:00-10:50",
        "LC-II-C11"
      ],
      [
        "Friday",
        "11:00-11:50",
        "LC-II-C11"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEC202.pdf",
    credits: "3-0-0"
  },
  {
    id: 1201,
    code: "CEC204",
    name: "Material Testing Laboratory",
    department: "Civil Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Monday",
        "04:00-04:50",
        "CEUG1"
      ],
      [
        "Monday",
        "05:00-05:50",
        "CEUG1"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cve/CEC204.pdf",
    credits: "0-0-2"
  },
  {
    id: 1202,
    code: "MSD502",
    name: "Financial Analytics",
    department: "Management Studies and Insdustrical Engineering",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "03:00-03:50",
        "Wednesday"
      ],
      [
        "02:00-02:50",
        "Friday",
        "02:00-02:50"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/ms/MSD502.pdf",
    credits: "3-0-0"
  },
  {
    id: 1203,
    code: "MCD537",
    name: "Design of Experiments",
    department: "Mathematics and Computing",
    type: "Departmental Elective (DE)",
    timetable: [
      [
        "Monday",
        "05:00-05:50",
        "LC-I-C11"
      ],
      [
        "Tuesday",
        "04:00-04:50",
        "LC-I-C11"
      ],
      [
        "Thursday",
        "05:00-05:50",
        "LC-I-C11"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/mc/MCD537.pdf",
    credits: "3-0-0"
  },
  {
    id: 1204,
    code: "CSC509",
    name: "Computing Lab - II",
    department: "Computer Science & Engineering",
    type: "Departmental Compulsary (DC)",
    timetable: [
      [
        "Wednesday",
        "10:00-10:50",
        "CSE LAB -IV"
      ],
      [
        "Wednesday",
        "11:00-11:50",
        "CSE LAB -IV"
      ]
    ],
    link: "https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/cse/CSC509.pdf",
    credits: "0-0-2"
  }
];

export default data;