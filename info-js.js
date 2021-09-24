const showInfo = () => {
    console.log("pequei o clique")
    const description = document.querySelector(".description")
    description.classList.add("-showdDescription")
    
    const photoCard = document.querySelector(".photo-card")
    photoCard.classList.add("-open")
}

