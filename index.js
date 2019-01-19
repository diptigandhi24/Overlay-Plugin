//Todo
/*
1.Create a simple modal
2.Allow developer to give the custom width and height of the modal
*/
class overlay {
  constructor() {
    this.modalBtn = document.getElementsByClassName("modal");

    this.createModalContainer = () => {
      let modalContainer = document.createElement("div");
      modalContainer.classList.add("overlay");
      return modalContainer;
    };
    this.openModal = () => {
      document
        .getElementById("overlayWrapper")
        .appendChild(this.createModalContainer());
    };
    this.modalBtn[0].addEventListener("click", this.openModal);
  }
}

new overlay();
