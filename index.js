class overlay {
  constructor(width = 200, height = 400) {
    this.width = width;
    this.height = height;
    console.log("Width and Height", this.width, this.height);
    this.test = () => {
      console.log("Helloe you clicked me");
    };
  }
}

new overlay();
