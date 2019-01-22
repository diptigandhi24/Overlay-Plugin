//Todo
/*
1.Create a simple modal
2.Allow developer to give the custom width and height of the modal
*/
class overlay {
  //default modal setting
  constructor({
    closeBtn = false,
    content = "TEST",
    width = "100%",
    height = "100%"
  }) {
    this.modalBtn = document.getElementsByClassName("modal");
    this.modalContainer = document.createElement("div");
    this.modalContainer.classList.add("overlay");
    this.closeBtn = closeBtn;
    this.content = content;
    this.width = width;
    this.height = height;
    console.log(
      "variables with default arg",
      this.closeBtn,
      this.content,
      this.width,
      this.height
    );
    //open the modal on button click
    this.openModal = () => {
      this.modalWrapper = document.createDocumentFragment();
      this.modalWrapper.appendChild(this.modalContainer);
      document.getElementById("overlayWrapper").appendChild(this.modalWrapper);
      //check for the user setting to open the modal
      if (this.closeBtn) {
        this.closeX = document.createElement("button");
        console.log("created button is", closeBtn, typeof closeBtn);
        this.closeX.innerHTML = "X";
        this.modalContainer.appendChild(this.closeX);
      }
      if (this.content) {
        this.modalContainer.appendChild(this.content);
      }
    };

    Object.keys(this.modalBtn).forEach(el => {
      this.modalBtn[el].addEventListener("click", this.openModal);
    });

    this.closeModal = () => {
      //   this.modalWrapper.removeChild(this.modalContainer);
      console.log("modal Container", this.modalContainer);
      console.log("modal Wrapper", this.modalWrapper);
      this.modalContainer.removeChild(this.closeX);
      //   this.modalWrapper.parentNode.removeChild(this.modalContainer);
      document
        .getElementById("overlayWrapper")
        .removeChild(this.modalContainer);
    };
    this.modalContainer.addEventListener("click", this.closeModal);
  }
}

new overlay({ content: document.getElementById("content"), closeBtn: true });
