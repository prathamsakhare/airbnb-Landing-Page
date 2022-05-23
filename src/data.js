// this is the data file where we can update data and it will show on the main page


// so the process happens as follows =>
// we fill the data here => according to name of the props
// we go into the App.js and then make one constant their inside the item function , so in that item function => inside that constant => we return the all props but we use dynamic properties by using the keys from which we have filled the data inside data.js after that we call the cards constant only once inside the render function 

export default[
    {
        id:1,
        img:"./Components/sundar.jfif",
        name:'Sundar Pichai',
        country:"USA",
        origin:'India',
        post:"CEO, Google",
        email:"sundarpichai@gmail.com",
        openSpots:0,
        location : "offline"
    },
    {
        id:2,
        img:"./Components/sundar.jfif",
        name:'Satya Nadella',
        country:"USA",
        origin:'India',
        post:"CEO, Microsoft",
        email:"satyanadella@gmail.com",
        openSpots:27,
        location : "online"
    },
    {
        id:3,
        img:"./Components/sundar.jfif",
        name:'S Agrawal',
        country:"USA",
        origin:'India',
        post:"CEO, Twitter",
        email:"sagrawal@gmail.com",
        openSpots:8,
        location : "offline"
    },
    {
        id:4,
        img:"./Components/sundar.jfif",
        name:'Sundar Pichai',
        country:"USA",
        origin:'India',
        post:"CEO, Google",
        email:"sundarpichai@gmail.com",
        openSpots:0,
        location : "online"
    },
    {
        id:5,
        img:"./Components/smlogo.png",
        name:'Unknown',
        country:"Unknown",
        origin:'Unknown',
        post:"Unknown",
        email:"Unknown@gmail.com",
        openSpots:9,
        location : "online"
    }
]