export default function getProductData() {
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
