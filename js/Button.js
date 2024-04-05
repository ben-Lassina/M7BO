

export class Button{
  htmlElement;
  parent;
  logos;
  constructor(parent){
    this.parent = parent;
    this.htmlElement = document.createElement("div");
    this.htmlElement.classList = "button";

    this.logos = this.createLogo();
    
    this.htmlElement.appendChild(this.logos[0]);
    this.htmlElement.appendChild(this.logos[1]);
    this.htmlElement.addEventListener("click", this.onButtonClick);
    this.render();
  }

  createLogo(classList){
    let iconFig = document.createElement("figure");
    let icon = document.createElement("i");
    icon.classList = classList;
    iconFig.appendChild(icon);
    return iconFig;
  }
  render(){
    this.parent.appendChild(this.htmlElement)
  }
  onButtonClick = (e)=>{
    this.logos[0].classList.toggle("--invisible");
    this.logos[1].classList.toggle("--invisible");
  }
}


/* misschien dat je de button class opnieuw gebruikt, om vervolgens een nieuwe functie erin te stoppen */
export class CommentButton extends Button{
  createBothLogos(){
    let logos = [];
    logos[0] = this.createLogo("fa-regular fa-comment");
    logos[1] = this.createLogo("fa-solid fa-comment");
    logos[1].classList.add("--invisible");
    return logos;
  }
}


export class ShareButton extends Button{
  createBothLogos(){
    let logos = [];
    logos[0] = this.createLogo("fa-regular fa-paper-plane");
    logos[1] = this.createLogo("fa-solid fa-paper-plane");
    logos[1].classList.add("--invisible");
    return logos;
  }
}


export class BookmarkButton extends Button{
  createBothLogos(){
    let logos = [];
    logos[0] = this.createLogo("fa-regular fa-bookmark");
    logos[1] = this.createLogo("fa-solid fa-bookmark");
    logos[1].classList.add("--invisible");
    return logos;
  }
}


export class LikeButton extends Button{
  constructor(parent){
    super(parent);
    this.htmlElement.addEventListener("click", this.onButtonClickLike);
  }
  createBothLogos(){
    let logos = [];
    logos[0] = this.createLogo("fa-regular fa-heart");
    logos[1] = this.createLogo("fa-solid fa-heart");
    logos[1].classList.add("--invisible");
    return logos;
  }

  onButtonClickLike = (e)=>{
    alert("Are you sure you want to like this post?")
    alert("Your friends and family will disaprove")
  }
}


