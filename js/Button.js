export class Button {
  htmlElement;
  parent;
  logos;

  constructor(parent) {
    this.parent = parent;
    this.htmlElement = document.createElement("div");
    this.htmlElement.classList = "button";

    this.logos = this.createBothLogos(); // Ensure subclass method is called
    if (this.logos && this.logos.length === 2) { // Check both icons are available
      this.htmlElement.appendChild(this.logos[0]);
      this.htmlElement.appendChild(this.logos[1]);
    }
    this.htmlElement.addEventListener("click", this.onButtonClick);
    this.render();
  }

  createLogo(classList) {
    const iconFig = document.createElement("figure");
    const icon = document.createElement("i");
    icon.classList = classList;
    iconFig.appendChild(icon);
    return iconFig;
  }

  onButtonClick = (e) => {
    this.logos[0].classList.toggle("--invisible");
    this.logos[1].classList.toggle("--invisible");
  };

  render() {
    this.parent.appendChild(this.htmlElement);
  }
}

export class CommentButton extends Button {
  createBothLogos() {
    const logos = [];
    logos[0] = this.createLogo("fa-regular fa-comment");
    logos[1] = this.createLogo("fa-solid fa-comment");
    logos[1].classList.add("--invisible");
    return logos;
  }
}

export class ShareButton extends Button {
  createBothLogos() {
    const logos = [];
    logos[0] = this.createLogo("fa-regular fa-paper-plane");
    logos[1] = this.createLogo("fa-solid fa-paper-plane");
    logos[1].classList.add("--invisible");
    return logos;
  }
}

export class BookmarkButton extends Button {
  createBothLogos() {
    const logos = [];
    logos[0] = this.createLogo("fa-regular fa-bookmark");
    logos[1] = this.createLogo("fa-solid fa-bookmark");
    logos[1].classList.add("--invisible");
    return logos;
  }
}

export class LikeButton extends Button {
  createBothLogos() {
    const logos = [];
    logos[0] = this.createLogo("fa-regular fa-heart");
    logos[1] = this.createLogo("fa-solid fa-heart");
    logos[1].classList.add("--invisible");
    return logos;
  }

  onButtonClickLike = (e) => {
    alert("Are you sure you want to like this post?");
    alert("Your friends and family will disapprove");
  };

  constructor(parent) {
    super(parent);
    this.htmlElement.addEventListener("click", this.onButtonClickLike);
  }
}
