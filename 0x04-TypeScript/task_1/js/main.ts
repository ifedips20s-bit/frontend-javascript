// -----------------------------
// Teacher interface
// -----------------------------
interface Teacher {
  readonly firstName: string;       // only set at initialization
  readonly lastName: string;        // only set at initialization
  fullTimeEmployee: boolean;        // always defined
  yearsOfExperience?: number;       // optional
  location: string;                 // always defined
  [key: string]: any;               // allow additional properties
}

// -----------------------------
// Teacher examples
// -----------------------------
const teacher1: Teacher = {
  firstName: "Alice",
  lastName: "Smith",
  fullTimeEmployee: true,
  location: "New York",
};

const teacher2: Teacher = {
  firstName: "Bob",
  lastName: "Brown",
  fullTimeEmployee: false,
  location: "Paris",
  yearsOfExperience: 5,
};

const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,       // extra property
};

console.log("Teacher examples:");
console.log(teacher1);
console.log(teacher2);
console.log(teacher3);

// -----------------------------
// Directors interface
// -----------------------------
interface Directors extends Teacher {
  numberOfReports: number;   // required attribute
}

// -----------------------------
// Directors examples
// -----------------------------
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

const director2: Directors = {
  firstName: 'Alice',
  lastName: 'Smith',
  location: 'New York',
  fullTimeEmployee: true,
  numberOfReports: 10,
  department: 'Engineering',  // extra attribute
};

console.log("Director examples:");
console.log(director1);
console.log(director2);

// -----------------------------
// Testing readonly and optional
// -----------------------------
/*
// Uncommenting the following lines will cause TypeScript errors
teacher1.firstName = "Tom";        // ❌ Error: cannot assign to readonly
teacher2.lastName = "Green";       // ❌ Error: cannot assign to readonly
*/

// Optional property
if (teacher2.yearsOfExperience) {
  console.log(`${teacher2.firstName} has ${teacher2.yearsOfExperience} years of experience`);
}

// Extra property access
console.log(`Director2 department: ${director2.department}`);
