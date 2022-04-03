let discount = async () => {
  try {
    let res = await fetch(
      `https://api.zoomcar.com/v5/home/sections?platform=web&version=2&device_id=000&device_name=000&city=mumbai&country_code=IND&locale=en`
    );
    // console.log(res);
    let data = await res.json();
    // console.log("data:", data);
    let data1 = data.sections[3].cards;
    append(data1);
  } catch (err) {
    console.log("err:", err);
  }
};
discount();

function append(data) {
  //   console.log("data:", data);
  var promo = document.getElementById("promo");
  data.forEach((element) => {
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.src = element.content_data.image_url;
    div.append(img);
    promo.append(div);
  });
}

///////////refer div///////

let refer = async () => {
  try {
    let res = await fetch(
      `https://api.zoomcar.com/v4/home/referral?platform=web&version=2&device_id=000&device_name=000&city=mumbai&country_code=IND&locale=en`
    );
    // console.log(res);
    let data = await res.json();
    let inner_refer = document.getElementById("inner_refer");
    let div1 = document.createElement("div");

    let friend = document.createElement("img");
    friend.src = data.referral.img;
    div1.append(friend);

    let h4 = document.createElement("h4");
    h4.innerHTML = data.referral.header;

    let p = document.createElement("p");
    p.innerHTML = data.referral.text;
    let div2 = document.createElement("div");
    div2.append(h4, p);
    div2.id = "refer_text";
    inner_refer.append(div1, div2);
    // console.log("data:", data);
    // let data1 = data.sections[3].cards;
    // append(data1);
  } catch (err) {
    console.log("err:", err);
  }
};
refer();

///////stop slider
let stop = async () => {
  try {
    let res = await fetch(
      `https://api.zoomcar.com/v4/home/offers?platform=web&version=2&device_id=000&device_name=000&city=mumbai&country_code=IND&locale=en`
    );
    let data = await res.json();

    let data1 = data.offers;
  } catch (e) {
    console.log("e:", e);
  }
};
stop();
let appendStopSlider = (data) => {
  let stop_slider = document.getElementById("stop_slider");
  data.forEach((element) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = element.url;
    div.append(img);
    stop_slider.append(div);
  });
};

var drop_down = document.getElementById("show_drop");
let drop = document.getElementById("improve");
let improve = () => {
  drop.style = "display:none";
};
improve();
var i = 0;
drop_down.addEventListener("click", function () {
  i++;
  if (i % 2 == 0) {
    drop.style.display = "none";
    drop_down.style = "  border-bottom: solid 1px rgba(0, 0, 0, 0.12)";
  } else {
    drop.style.display = "flex";
  }
});
/////////////////find cars
let search = document.getElementById("search");
let local = localStorage.getItem("location");

if (local != null) {
  search.innerText = local+","+local+", India";
}

search.addEventListener("click", function () {
  location.href = "./chaithyanya/Zoom_car.Com/ProductPage/choose_location.html";
});

let findCar = document.getElementById("find_cars");
findCar.addEventListener("click", function () {
  // if(local)
  // console.log(local);
  let login = document.getElementById("login&signup");

  if (local != null && login.innerHTML != "Login?sign") {
    location.href = "./chaithyanya/Zoom_car.Com/ProductPage/product.html";
  } else {
    setTimeout(() => {
      location.href = "./aakash/signsignup/login_signup.html";
    }, 1500);
    let img = document.createElement("img");
    img.src =
      "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921";
    let div = document.createElement("div");

    div.append(img);
    div.id = "loder";
    console.log("div:", div);

    document.getElementById("top_page").append(div);
  }
});
