let sayHello = () => {
  return "Hello Akilan";
};

let sayShortHello = () => "Hello Akilan";

console.log(sayHello());
console.log(sayShortHello());

let jobs = [
  { role: "DevOps Lead", isActive: true },
  { role: "DataScience Lead", isActive: true },
  { role: "Testing Lead", isActive: false },
];

let activeJobs = jobs.filter((job) => job.isActive);
console.log(activeJobs);

/* [
    { role: 'DevOps Lead', isActive: true },
    { role: 'DataScience Lead', isActive: true }
] */
