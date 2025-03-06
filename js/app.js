import { LikeButton, ShareButton, CommentButton, BookmarkButton } from "./Button.js";

const apiKey = '99f67340';
const schemaID = 'id';
const url = `MOCK_DATA.json`;

export class Post{
  header;
  main;
  htmlElement;
  data;
  parent;

  constructor(data, parent){
    this.parent = parent; 
    this.data = data; 
    console.log(this.data);

    this.htmlElement = document.createElement("article")
    this.htmlElement.classList = "post";
    this.createHeader();
    this.createBody();
    this.createFooter();
    this.render();
  }

  createHeader(){
    this.header = document.createElement("header");
    this.header.classList = "post__header";
    let postUser = document.createElement("div");
    postUser.classList = "post__user";

    let userName = document.createElement("h3");
    userName.classList = "user__name";
    userName.innerText = this.data.first_name + " " + this.data.last_name;
    postUser.appendChild(userName);
    this.header.appendChild(postUser);
    let postFollow = document.createElement("button");
    postFollow.classList = "post__follow";
    postFollow.innerText = "Follow";
    this.header.appendChild(postFollow);
  }
  createBody(){
    this.main = document.createElement("main");
    this.main.classList = "post__img";
    let bodyimg = document.createElement("img");
    bodyimg.classList = "post__img";
    bodyimg.src = this.data.img;
    bodyimg.alt = "twitter img";
    this.main.appendChild(bodyimg);

    let bodyDiv = document.createElement("div");
    bodyDiv.classList = "post__div";
    this.main.appendChild(bodyDiv);
}

  createFooter(){
    this.footer = document.createElement("footer");
    this.footer.classList = "post__footer";
    let likeButton = new LikeButton(this.footer);
    let commentButton = new CommentButton(this.footer);
    let shareButton = new ShareButton(this.footer);
    let bookmarkButton = new BookmarkButton(this.footer);
  }

  render(){
    this.htmlElement.appendChild(this.header);
    this.htmlElement.appendChild(this.main);
    this.htmlElement.appendChild(this.footer);
    this.main.classList = "post__text";
    let bodytext = document.createElement("p");
    bodytext.classList = "post__text";
    bodytext.innerText = "Hallo allemaal";
    // bodyimg.alt = "twitter img"
    this.main.appendChild(bodytext)
    this.parent.appendChild(this.htmlElement);
  }
}