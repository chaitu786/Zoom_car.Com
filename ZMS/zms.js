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

var dataArr2=[
    {
        head:"Renter Platform",
        para:"Customisable stack to launch station based & free-floating keyless renter services",
    },
    {
        head:'Subscription Platform',
        para:'Whitelabel Subscription platform that works across all vehicle types for higher utilization',
    },
    {
        head:'Dynamic Pricing',
        para:'Plug and play module matching demand-supply and maximizing ROI',
    },
    {
        head:'Analytics & Reporting',
        para:'Empower decision making through advanced Data Science and Analytics capabilities',
    },
    {
        head:'Real-Time Monitoring',
        para:'Connectivity and Real-time monitoring features to bring more transparency and reliability',
    }
]


//.....................All Ids calling.............................//
var detail= document.getElementById("para")
let tab2=document.getElementById("tabs2")
var slider=document.getElementById("slider")
var tab1=document.getElementById("tabs1")
let paraa=document.getElementById("para")
let paraa1=document.getElementById("slider")
let paraa2=document.getElementById("para1")
let button = document.getElementById("button")
let button1 = document.getElementById("button2")
var container=document.getElementById("para1")
// ...............................................................//

//custom data which shoing in wesite when we are oprn the pirticular website... the data is start here

var p=document.createElement("p")
p.innerText="All-in-one solution to reduce operating costs over 30% via advanced vehicle"
var p1=document.createElement("p")
p1.innerText="monitoring and management systems"
p.style.color="black"
p1.style.color="black"
detail.append(p,p1)

// slider part start here.............................................//
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

    dataArr.map(function(el){

        let div=document.createElement("div")

        let h4=document.createElement("h4")
        h4.innerText=el.head

        let p=document.createElement("p")
        p.innerText=el.para

        div.append(h4,p)
        container.append(div)
    })
    let btn=document.createElement("button")
    btn.innerText="More Details"
   
    button.append(btn)

//custom data which shoing in wesite when we are oprn the pirticular website... the data is end here


//.......................... All functions start Here....................................
// function ------->1
const tab=()=>{
paraa.innerHTML=""
paraa1.innerHTML=""
paraa2.innerHTML=""
button.innerHTML=""
button1.innerHTML=""

tab2.style.backgroundColor=""
tab1.style.backgroundColor="#10a310"
tab2.style.color="black"
tab1.style.color="#fff"

// starting dataaaa/..............
var p=document.createElement("p")
p.innerText="All-in-one solution to reduce operating costs over 30% via advanced vehicle"
var p1=document.createElement("p")
p1.innerText="monitoring and management systems"
p.style.color="black"
p1.style.color="black"
detail.append(p,p1)
//  end of data...................
// // slider part start here.............................................//
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

// // data after slider. srart here...............
    dataArr.map(function(el){

        let div=document.createElement("div")

        let h4=document.createElement("h4")
        h4.innerText=el.head

        let p=document.createElement("p")
        p.innerText=el.para

        div.append(h4,p)
        container.append(div)
    })
// end here.........................................................

    let btn=document.createElement("button")
    btn.innerText="More Details"
  
    button.append(btn)
}


// function ------->2
const tabx=()=>{
    
    paraa.innerHTML=""
    paraa1.innerHTML=""
    paraa2.innerHTML=""
    button.innerHTML=""

    tab1.style.backgroundColor=""
    tab2.style.backgroundColor="#10a310"
    tab1.style.color="black"
    tab2.style.color="#fff"

    var p=document.createElement("p")
    p.innerText="Suite of connected technologies offering fleet agnostic solutions aimed at driving    expand customer base"
    var p1=document.createElement("p")
    p1.innerText="higher revenue through better yield management and dual fleet utilisation to"
    var p2=document.createElement("p")
    p2.innerText="expand customer base"
    p.style.color="black"
    p1.style.color="black"
    p2.style.color="black"
    detail.append(p,p1,p2)
 // slider part start here.............................................//
var fig = document.createElement("figure")
var img1= document.createElement("img")
var img2= document.createElement("img")
var img3= document.createElement("img")
img1.src="https://www.zoomcar.com/assets/component-images/ZMS_Slide-Banner_201_F.c6cae2c0c2d78e980c507982bab4c1b9.jpg"
img2.src="https://www.zoomcar.com/assets/component-images/ZMS_Slide-Banner_201_D.c564a1d96dd9b4b03806837bbc51ca52.jpg"
img3.src="https://www.zoomcar.com/assets/component-images/ZMS_Slide-Banner_201_B.a4d19a95cb4faa68b9c0cdd1bf6e703e.jpg"
fig.append(img1,img2,img3)
let line=document.createElement("h2")
line.innerText="Features"
line.setAttribute("id","line")
slider.append(fig,line)
// // slider end here.......................................................//

// data after slider. srart here...............
    dataArr2.map(function(el){

        let div=document.createElement("div")

        let h4=document.createElement("h4")
        h4.innerText=el.head

        let p=document.createElement("p")
        p.innerText=el.para

        div.append(h4,p)
        container.append(div)
    })
// end here.........................................................

    let btn=document.createElement("button")
    btn.innerText="More Details"
    button1.append(btn)

    // function for button to get mor details ------->1

    
}
 // function ------->3

 const moredetails=()=>{
    window.location.href="https://zoomcar.s3.ap-southeast-1.amazonaws.com/ZS-Zoomcar-Mobility-Services-ZMS-Subscription02"
}
 // function ------->4
const moredetails1=()=>{
    window.location.href="https://zoomcar.s3.ap-southeast-1.amazonaws.com/ZS-Zoomcar-Mobility-Services-ZMS-Subscription01"
}
 // function ------->5
const gooo=()=>{
    window.location.href="#input"
}