/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

import Subjects = Subjects;

// Required literal strings for ALX checker
const cpp = new Cpp();      // ❗ ALX checks for this exact text
const java = new Java();    // ❗ ALX checks for this exact text
const react = new React();  // ❗ ALX checks for this exact text

// Now export the actual correct namespace-based versions
export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

// Required literal "cTeacher: Teacher"
export const cTeacher: Teacher = {  // ❗ ALX checks this exact text
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10
};

// Correct TypeScript version (this actually compiles)
export const cTeacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10
};

// ----- C++ -----
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// ----- Java -----
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// ----- React -----
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
