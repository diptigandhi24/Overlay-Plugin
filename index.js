//Todo
/*
1.Create a simple modal
2.Allow developer to give the custom width and height of the modal
*/
function getProductData() {
  let productJson = {
    productName: "Product_1",
    ProductDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ProductImage:
      "https://static-2.gumroad.com/res/gumroad/9432604211760/asset_previews/a9b5aa88921efa9310e359c8da44feb9/retina/demo.jpg",
    size: "410KB",
    length: "91 pages"
  };
  return new Promise(function(resolve, reject) {
    resolve(productJson);
  });
}
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
    this.openModal = async () => {
      let data = await getProductData();
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
      //   this.modalWrapper.removeChild(this.modalContainer);
      console.log("modal Container", this.modalContainer);
      console.log("modal Wrapper", this.modalWrapper);
      this.modalContainer.removeChild(this.contentWrapper);
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
