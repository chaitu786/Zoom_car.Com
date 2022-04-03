let input = document.getElementById("enter");
input.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    chaitu();
  }
});
const chaitu = async () => {
  let location = input.value;
  localStorage.setItem("location", location);
  console.log(location);
  let res = await fetch(`http://localhost:3000/products/`);
  let data = await res.json();
  let city = data[location];
  localStorage.setItem("city", JSON.stringify(city));
  console.log(city);
  window.location.href = "../../../index.html";
};