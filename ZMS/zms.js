var detail= document.getElementById("para")
var p=document.createElement("p")
p.innerText="All-in-one solution to reduce operating costs over 30% via advanced vehicle"
var p1=document.createElement("p")
p1.innerText="monitoring and management systems"
p.style.color="black"
p1.style.color="black"
detail.append(p,p1)




// slider part start here.............................................//
var slider=document.getElementById("slider")
var tab1=document.getElementById("tabs1")
tab1.style.backgroundColor="#10a310"
var fig = document.createElement("figure")
var img1= document.createElement("img")
var img2= document.createElement("img")
var img3= document.createElement("img")
img1.src="https://www.zoomcar.com/assets/component-images/ZMS_Slide-Banner_201_A.06f7fa208212fb4dc92e611fdf69304e.jpg"
img2.src="https://www.zoomcar.com/assets/component-images/ZMS_Slide-Banner_201_C.c9d9a766c44e0796bce6e3bdcc65d589.jpg"
img3.src="https://www.zoomcar.com/assets/component-images/ZMS_Slide-Banner_201_E.43c8d28a91111b0eb44831b1d040bc79.jpg"
fig.append(img1,img2,img3)
let line=document.createElement("h2")
line.innerText="Features"
line.setAttribute("id","line")
slider.append(fig,line)
// slider end here.......................................................//


var dataArr=[
    {
        head:"Vehicle Tracking & Safety",
        para:"Geo-fencing, Real time alerts, immobilization to manage 24x7",
    },
    {
        head:'Driver Score',
        para:'Improved fuel efficiency and cost benefits from better driving behavior',
    },
    {
        head:'Vehicle Health Monitoring',
        para:'Real-time Asset health monitoring systems for reduced downtime',
    },
    {
        head:'Fuel Management',
        para:'Real time fuel level monitoring and fuel theft detection mechanisms',
    },
    {
        head:'Operations Automation',
        para:'Automate routine operational tasks and increase uptime over 25%',
    }
]
var container=document.getElementById("para1")

    dataArr.map(function(el){

        let div=document.createElement("div")

        let h4=document.createElement("h4")
        h4.innerText=el.head

        let p=document.createElement("p")
        p.innerText=el.para

        div.append(h4,p)
        container.append(div)


    })
   


let mainContainer=document.getElementById('details')
var tab2=document.getElementById("tabs2")
// ?function............container.............?
const tab=()=>{
// mainContainer.innerHTML=""
tab2.style.backgroundColor=""
tab1.style.backgroundColor="#10a310"
tab2.style.color="black"
tab1.style.color="#fff"

// // starting dataaaa/..............
// var p=document.createElement("p")
// p.innerText="All-in-one solution to reduce operating costs over 30% via advanced vehicle"
// var p1=document.createElement("p")
// p1.innerText="monitoring and management systems"
// p.style.color="black"
// p1.style.color="black"
// detail.append(p,p1)
// //  end of data...................


// // slider part start here.............................................//
// // let slider=document.getElementById("slider")

// tab1.style.backgroundColor="#10a310"
// var fig = document.createElement("figure")
// var img1= document.createElement("img")
// var img2= document.createElement("img")
// var img3= document.createElement("img")
// img1.src="https://www.zoomcar.com/assets/component-images/ZMS_Slide-Banner_201_A.06f7fa208212fb4dc92e611fdf69304e.jpg"
// img2.src="https://www.zoomcar.com/assets/component-images/ZMS_Slide-Banner_201_C.c9d9a766c44e0796bce6e3bdcc65d589.jpg"
// img3.src="https://www.zoomcar.com/assets/component-images/ZMS_Slide-Banner_201_E.43c8d28a91111b0eb44831b1d040bc79.jpg"
// fig.append(img1,img2,img3)
// let line=document.createElement("h2")
// line.innerText="Features"
// line.setAttribute("id","line")
// slider.append(fig,line)
// // slider end here.......................................................//


// // data after slider. srart here...............
//     dataArr.map(function(el){

//         let div=document.createElement("div")

//         let h4=document.createElement("h4")
//         h4.innerText=el.head

//         let p=document.createElement("p")
//         p.innerText=el.para

//         div.append(h4,p)
//         container.append(div)


//     })
// end here.........................................................
}
// tab()



// .....................................................................................
const tabx=()=>{
// mainContainer.innerHTML=""
tab1.style.backgroundColor=null
tab2.style.color="#fff"
tab1.style.color="black"
tab2.style.backgroundColor="#10a310"

// var p=document.createElement("p")
// p.innerText="Suite of connected technologies offering fleet agnostic solutions aimed at driving    expand customer base"
// var p1=document.createElement("p")
// p1.innerText="higher revenue through better yield management and dual fleet utilisation to"

// var p2=document.createElement("p")
// p2.innerText="expand customer base"
// p.style.color="black"
// p1.style.color="black"
// p2.style.color="black"
// detail.append(p,p1,p2)


// // slider part start here.............................................//
// // let slider=document.getElementById("slider")

// tab1.style.backgroundColor="#10a310"
// var fig = document.createElement("figure")
// var img1= document.createElement("img")
// var img2= document.createElement("img")
// var img3= document.createElement("img")
// img1.src="https://www.zoomcar.com/assets/component-images/ZMS_Slide-Banner_201_F.c6cae2c0c2d78e980c507982bab4c1b9.jpg"
// img2.src="https://www.zoomcar.com/assets/component-images/ZMS_Slide-Banner_201_D.c564a1d96dd9b4b03806837bbc51ca52.jpg"
// img3.src="https://www.zoomcar.com/assets/component-images/ZMS_Slide-Banner_201_B.a4d19a95cb4faa68b9c0cdd1bf6e703e.jpg"
// fig.append(img1,img2,img3)
// let line=document.createElement("h2")
// line.innerText="Features"
// line.setAttribute("id","line")
// slider.append(fig,line)
// // slider end here.......................................................//


// // data after slider. srart here...............
//     dataArr.map(function(el){

//         let div=document.createElement("div")

//         let h4=document.createElement("h4")
//         h4.innerText=el.head

//         let p=document.createElement("p")
//         p.innerText=el.para

//         div.append(h4,p)
//         container.append(div)


//     })
// end here.........................................................
}
// tabx()