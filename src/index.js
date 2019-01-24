import getProductData from "./getProductData";

class overlay {
  //default modal setting
  constructor(
    { closeBtn, content, width, height } = {
      closeBtn: false,
      content: "TEST",
      width: "100%",
      height: "100%"
    }
  ) {
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
    this.openModal = async () => {
      let data = await getProductData();

      this.modalWrapper = document.createDocumentFragment();
      this.modalWrapper.appendChild(this.modalContainer);
      document.getElementById("overlayWrapper").appendChild(this.modalWrapper);
      //check for the user setting to open the modal
      if (this.closeBtn) {
        this.closeX = document.createElement("button");
        this.closeX.innerHTML = "X";
        this.modalContainer.appendChild(this.closeX);
      }
      if (this.content) {
        this.contentWrapper = document.createElement("div");
        if (data.productName) {
          this.productName = document.createElement("h4");
          this.productName.innerHTML = data.productName;
          this.contentWrapper.appendChild(this.productName);
        }
        this.modalContainer.appendChild(this.contentWrapper);
      }
    };

    Object.keys(this.modalBtn).forEach(el => {
      this.modalBtn[el].addEventListener("click", this.openModal);
    });

    this.closeModal = () => {
      this.modalContainer.removeChild(this.contentWrapper);
      this.modalContainer.removeChild(this.closeX);

      document
        .getElementById("overlayWrapper")
        .removeChild(this.modalContainer);
    };
    this.modalContainer.addEventListener("click", this.closeModal);
  }
}
new overlay();
