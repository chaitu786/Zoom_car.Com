// // https://api.zoomcar.com/v6/search?platform=web&version=2&device_id=000&device_name=000&starts_epoch=1648631700000&ends_epoch=1648660500000&city=mumbai&bracket=no_fuel&zap=true&type=normal&country_code=IND&locale=en&lat=19.0759837&lng=72.8776559

// let product_car = async () => {
//   try {
//     let res = await fetch(
//       `https://api.zoomcar.com/v6/search?platform=web&version=2&device_id=000&device_name=000&starts_epoch=1648642500000&ends_epoch=1648671300000&city=mumbai&bracket=no_fuel&zap=true&type=normal&country_code=IND&locale=en&lat=19.0759837&lng=72.8776559`
//     );

//     let data = await res.json();
//     console.log("data:", data);
//     // let seats = data.filters;
//     // console.log("seats:", seats);
//     // appendseats(seats);
//   } catch (err) {
//     console.log("err:", err);
//   }
// };
// product_car();

// function appendseats(data) {
//   console.log("data:", data);
//   // let changesCars = document.getElementById("changesCars");
//   // data.forEach((element) => {
//   //   console.log(element);

//   //   let div = document.createElement("div");

//   //   let h1 = document.createElement("h1");
//   //   h1.innerHTML = element.header;

//   //   let type = document.createElement("div");
//   //   type.id = "filters";
//   //   element.filter_items.forEach((el) => {
//   //     let p = document.createElement("p");
//   //     p.innerHTML = el.id;
//   //     type.append(p);
//   //     div.append(h1, type);
//   //   });
//   // });

//   // changesCars.append(div);
// }
// // https://api.zoomcar.com/v5/home/sections?platform=web&version=2&device_id=000&device_name=000&city=mumbai&country_code=IND&locale=en
