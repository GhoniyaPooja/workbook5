"use strict";

let employees = [
  {
    id: "55007",
    name: "Karina Chambers",
    jobTitle: "Tech Lead",
    yearsAtCompany: 4,
    email: "karinachambers@ziore.com",
    wfhAddress: "640 Boynton Place, Faxon, Kentucky, 42071",
    skillSet:
      "Velit commodo voluptate id est. Fugiat magna enim quis exercitation duis fugiat non nisi consequat.",
    projectsAssignedTo: [
      {
        projectId: 112,
        name: "Cupidatat aute",
      },
    ],
  },
  {
    id: "23810",
    name: "Kasey Bowers",
    jobTitle: "Senior Programmer",
    yearsAtCompany: 9,
    email: "kaseybowers@ziore.com",
    wfhAddress: "969 Clarendon Road, Marshall, Vermont, 47859",
    skillSet: "Est et voluptate incididunt deserunt culpa excepteur.",
    projectsAssignedTo: [
      {
        projectId: 124,
        name: "Amet do deserunttate aliqua",
      },
    ],
  },
  {
    id: "52797",
    name: "Bonner Church",
    jobTitle: "Senior Programmer",
    yearsAtCompany: 6,
    email: "bonnerchurch@ziore.com",
    wfhAddress: "158 Overbaugh Place, Bayview, Georgia, 31316",
    skillSet: "Qui minim minim aute anim reprehenderit nulla voluptate nulla.",
    projectsAssignedTo: [
      {
        projectId: 131,
        name: "Ut minim anim",
      },
      {
        projectId: 147,
        name: "Velit Lorem reprehenderit",
      },
    ],
  },
  {
    id: "62847",
    name: "Dejesus Fischer",
    jobTitle: "Backend Programmer",
    yearsAtCompany: 3,
    email: "dejesusfischer@ziore.com",
    wfhAddress: "228 Williams Place, Rote, Virgin Islands, 00804",
    skillSet: "Laborum incididunt ex adipisicing elit ullamco.",
    projectsAssignedTo: [
      {
        projectId: 131,
        name: "Ut minim anim",
      },
      {
        projectId: 133,
        name: "Est minim labore",
      },
      {
        projectId: 152,
        name: "Reprehenderit officia",
      },
    ],
  },
  {
    id: "16642",
    name: "Henderson Barber",
    jobTitle: "Senior Programmer",
    yearsAtCompany: 13,
    email: "hendersonbarber@ziore.com",
    wfhAddress: "805 Johnson Street, Ripley, Nevada, 89019",
    skillSet: "Nisi reprehenderit eiusmod cupidatat tempor laborum.",
    projectsAssignedTo: [
      {
        projectId: 131,
        name: "Ut minim anim",
      },
      {
        projectId: 123,
        name: "Reprehenderit reprehenderit",
      },
      {
        projectId: 105,
        name: "Pariatur eiusmod",
      },
    ],
  },
  {
    id: "32775",
    name: "Glenn Peterson",
    jobTitle: "Tech Lead",
    yearsAtCompany: 16,
    email: "glennpeterson@ziore.com",
    wfhAddress: "135 Russell Street, Cecilia, South Carolina, 29407",
    skillSet: "Commodo excepteur sit.",
    projectsAssignedTo: [
      {
        projectId: 134,
        name: "Dolore exercitation veniam",
      },
      {
        projectId: 131,
        name: "Ut minim anim",
      },
      {
        projectId: 107,
        name: "Ea sint irure do excepteur",
      },
    ],
  },
  {
    id: "76394",
    name: "Mcguire Alston",
    jobTitle: "Web Designer",
    yearsAtCompany: 2,
    email: "mcguirealston@ziore.com",
    wfhAddress: "245 Henry Street, Roosevelt, Minnesota, 56673",
    skillSet: "Esse sint occaecat ad aliqua sunt in eiusmod do.",
    projectsAssignedTo: [
      {
        projectId: 131,
        name: "Ut minim anim",
      },
      {
        projectId: 132,
        name: "Fugiat amet do cillum do",
      },
      {
        projectId: 142,
        name: "Sunt consequat incididunt",
      },
    ],
  },
  {
    id: "58889",
    name: "Lacey Mccarthy",
    jobTitle: "Web Programmer",
    yearsAtCompany: 1,
    email: "laceymccarthy@ziore.com",
    wfhAddress: "123 Kenilworth Place, Thynedale, Rhode Island, 02860",
    skillSet: "Dolore in mollit eu nulla sint ipsum nisi.",
    projectsAssignedTo: [
      {
        projectId: 113,
        name: "Magna aute sint",
      },
    ],
  },
  {
    id: "56701",
    name: "Benjamin Ferrell",
    jobTitle: "Backend Programmer",
    yearsAtCompany: 6,
    email: "benjaminferrell@ziore.com",
    wfhAddress: "929 Tehama Street, Belmont, Maine, 04952",
    skillSet:
      "Consequat laborum consectetur velit velit laboris eu tempor laborum elit occaecat irure.",
    projectsAssignedTo: [
      {
        projectId: 101,
        name: "Commodo exercitation",
      },
      {
        projectId: 131,
        name: "Mollit magna ad culpa",
      },
    ],
  },
  {
    id: "80897",
    name: "Hester Stout",
    jobTitle: "Senior Programmer",
    yearsAtCompany: 2,
    email: "hesterstout@ziore.com",
    wfhAddress: "816 Kings Place, Kempton, North Carolina, 27834",
    skillSet: "Do officia deserunt nulla.",
    projectsAssignedTo: [
      {
        projectId: 131,
        name: "Ut minim anim",
      },
    ],
  },
  {
    id: "49534",
    name: "Agnes Cooley",
    jobTitle: "Senior Programmer",
    yearsAtCompany: 21,
    email: "agnescooley@ziore.com",
    wfhAddress: "712 Louisa Street, Cherokee, Illinois, 60015",
    skillSet: "Anim sit dolore ullamco ut aliqua.",
    projectsAssignedTo: [
      {
        projectId: 150,
        name: "Adipisicing ea",
      },
      {
        projectId: 123,
        name: "Reprehenderit reprehenderit",
      },
    ],
  },
  {
    id: "33459",
    name: "Kerr Lynch",
    jobTitle: "Tech Lead",
    yearsAtCompany: 4,
    email: "kerrlynch@ziore.com",
    wfhAddress: "694 Albee Square, Fivepointville, Washington, 17517",
    skillSet: "Duis ex do ullamco sunt aliqua culpa aute.",
    projectsAssignedTo: [
      {
        projectId: 144,
        name: "Commodo anim occaecat",
      },
    ],
  },
  {
    id: "72054",
    name: "Kendra Perry",
    jobTitle: "Web Designer",
    yearsAtCompany: 1,
    email: "kendraperry@ziore.com",
    wfhAddress: "942 Conduit Boulevard, Alamo, Texas, 78516",
    skillSet: "Cupidatat amet qui proident ut aute eiusmod ex.",
    projectsAssignedTo: [
      {
        projectId: 107,
        name: "Ea sint irure do excepteur",
      },
      {
        projectId: 112,
        name: "Consequat non fugiat",
      },
      {
        projectId: 113,
        name: "Magna aute sint",
      },
    ],
  },
];

("use strict");

window.onload = function () {
  // HTML element variables
  let personInfoList = document.querySelector("#personInfoList");
  let employeeDetailesTb = document.querySelector("#employeeDetailesTb");

  //functions
  function loadInfoDropdown() {
    for (const employee of employees) {
      let option = document.createElement("option");
      option.value = employee.id;
      option.innerText = employee.name;
      personInfoList.appendChild(option);
    }
  }
  function loadEmployeeDetails() {
    for (const employee of employees) {
      if (employee.id == personInfoList.value) {
        let row = employeeDetailesTb.insertRow();

        let cell1 = row.insertCell(0);
        cell1.innerText = employee.id;

        let cell2 = row.insertCell(1);
        cell2.innerText = employee.name;

        let cell3 = row.insertCell(2);
        cell3.innerText = employee.jobTitle;

        let cell4 = row.insertCell(3);
        cell4.innerText = employee.yearsAtCompany;

        let cell5 = row.insertCell(4);
        cell5.innerText = employee.email;

        let cell6 = row.insertCell(5);
        cell6.innerText = employee.wfhAddress;

        let cell7 = row.insertCell(6);
        cell7.innerText = employee.skillSet;

        let cell8 = row.insertCell(7);
        cell8.innerText = employee.projectsAssignedTo.length;
      }
    }
  }
  //event handling
  personInfoList.onchange = loadEmployeeDetails;

  //initial loading
  loadInfoDropdown();
};
