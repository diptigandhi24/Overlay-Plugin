//Todo
/*
1.Create a simple modal
2.Allow developer to give the custom width and height of the modal
*/
class overlay {
  constructor() {
    this.modalBtn = document.getElementsByClassName("modal");
    this.modalContainer = document.createElement("div");
    this.modalContainer.classList.add("overlay");
    this.openModal = () => {
      document
        .getElementById("overlayWrapper")
        .appendChild(this.modalContainer);
    };

    Object.keys(this.modalBtn).forEach(el => {
      this.modalBtn[el].addEventListener("click", this.openModal);
    });

    this.closeModal = () => {
      document
        .getElementById("overlayWrapper")
        .removeChild(this.modalContainer);
    };
    this.modalContainer.addEventListener("click", this.closeModal);
  }
}

new overlay();
