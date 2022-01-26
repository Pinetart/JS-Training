// fetch("todos/luigi.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("error: ", err);
//   });

// const getTodos = async () => {
//   const response = await fetch("todos/luigi.json");
//   const data = await response.json();
//   return data;
// };
// console.log(getTodos());

const getShort = async (resource) => {
  const information = await (await fetch(resource)).json();
  return information;
};

getShort("todos/luigi.json").then((data) => console.log("resolved:", data));
