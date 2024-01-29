const openPopUp = document.querySelector(".openPopUp")
const closePopUp = document.querySelector(".closePopUp")
const popup = document.querySelector(".popup")


openPopUp.addEventListener("click",()=>{
  popup.classList.add("active")
})


closePopUp.addEventListener("click",()=>{
    popup.classList.remove("active")
  })