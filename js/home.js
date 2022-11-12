
const profileName = document.querySelector(".header-name").innerHTML = `${localStorage.getItem("name")}`
const profileImg = document.querySelector(".profile-img-small")

async function setImg () {
    if (localStorage.getItem("avatar") !== ""){
        profileImg.src = localStorage.getItem("avatar");
        console.log("inside if")
    }else{
        profileImg.src = "img/user-profile.png"
    } 
}

setImg();


console.log(localStorage.getItem("avatar") !== "")



// profileImg.addEventListener("error", () =>{
//   const defaultImage =
//     "img/user-profile.png";

//   img.src = defaultImage;
//   img.alt = 'default';
// });

