interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Ifedolapo",
  lastName: "Ajayi",
  age: 25,
  location: "Cairo"
};

const student2: Student = {
  firstName: "Adewunmi",
  lastName: "Olawale",
  age: 27,
  location: "Lagos"
};

const studentsList: Student[] = [student1, student2];

// Create table
const table = document.createElement("table");
const tableBody = document.createElement("tbody");

// Add table headers
const headerRow = document.createElement("tr");
const th1 = document.createElement("th");
th1.textContent = "First Name";
const th2 = document.createElement("th");
th2.textContent = "Location";
headerRow.appendChild(th1);
headerRow.appendChild(th2);
tableBody.appendChild(headerRow);

// Add rows for each student
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const tdName = document.createElement("td");
  tdName.textContent = student.firstName;

  const tdLocation = document.createElement("td");
  tdLocation.textContent = student.location;

  row.appendChild(tdName);
  row.appendChild(tdLocation);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
