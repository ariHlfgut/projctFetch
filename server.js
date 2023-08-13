const reqOptions = {
  method: "get",
  headers: {
    "Content-Type": "application/json",
  },
};

const name1 = document.getElementById("name");
const email1 = document.getElementById("email");
const img1 = document.getElementById("img");
const age1 = document.getElementById("age");

const buttonApi = document.getElementById("buttonApi");
buttonApi.addEventListener("click", () => {
  getApi().then((data) => {
    name1.textContent =
      data.results[0].name.title +
      " " +
      data.results[0].name.first +
      " " +
      data.results[0].name.last;
    email1.textContent = data.results[0].email;
    img1.src = data.results[0].picture.large;
    age1.textContent = data.results[0].dob.age;
  });
});
async function getApi() {
  try {
    const user = await fetch("https://randomuser.me/api", reqOptions);
    const dataUser = await user.json();
    return dataUser;
  } catch {
    console.log(error);
  }
}
