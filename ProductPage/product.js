const appendData = (mainData, add) => {
  //   console.log("mainData:", mainData);

  add.innerHTML = null;
  //   console.log("add:", add);
  mainData.map(function (el) {
    let mainDiv = document.createElement("div");
    mainDiv.style.display = "flex";
    mainDiv.style.gap = "3%";

    let div1 = document.createElement("div");
    div1.setAttribute("id", "div1");
    let div2 = document.createElement("div");
    div2.setAttribute("id", "div2");
    let div3 = document.createElement("div");
    div3.style.display = "flex";
    div3.style.gap = "3%";
    let div4 = document.createElement("div");
    div4.setAttribute("id", "div4");
    let div5 = document.createElement("div");
    div5.setAttribute("id", "div5");

    let btn = document.createElement("button");
    btn.innerText = "Book Now";
    btn.setAttribute("id", "btn");

    let image = document.createElement("img");
    let h3 = document.createElement("h3");
    let liquid = document.createElement("p");
    let seat = document.createElement("p");
    let star = document.createElement("p");
    let distance = document.createElement("p");
    let rate = document.createElement("h1");

    image.src = el.img;
    image.style.height = "100px";
    image.style.width = "100px";

    h3.innerText = el.name;
    liquid.innerText = el.fuel;
    seat.innerText = "|Seats " + el.Seater;
    star.innerText = "⭐" + el.Rating;

    distance.innerText = el.location;
    rate.innerText = el.price;

    div1.append(image);
    div3.append(liquid, seat);
    div2.append(h3, div3, star);
    div4.append(distance);
    div5.append(rate, btn);
    mainDiv.append(div1, div2, div4, div5);
    btn.onclick = () => {
      localStorage.setItem("bookingdata", JSON.stringify(el));

      window.location.href = "/ProductPage/booking.html";
    };
    add.append(mainDiv);
  });
};

export { appendData };
