import { Post } from "./app.js";

const url = './MOCK_DATA.json';
const main = document.querySelector("main");
const postsPerPage = 6; 
let loadedPosts = 0; 

function displayDataInHTML(data) {
    data.forEach(item => {
        const post = new Post(item, main);
        main.appendChild(post.htmlElement);
    });
}

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error;
    }
}

function isAtBottom() {
    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 1; 
}

async function loadMorePosts() {
    try {
        const data = await fetchData(url);
        const startIndex = loadedPosts;
        const endIndex = loadedPosts + postsPerPage;
        displayDataInHTML(data.slice(startIndex, endIndex));
        loadedPosts += postsPerPage;
    } catch (error) {
        console.error("Error loading more posts:", error);
    }
}

async function initialize() {
    try {
        const data = await fetchData(url);
        displayDataInHTML(data.slice(0, postsPerPage));
        loadedPosts += postsPerPage;
    } catch (error) {
        console.error("Error fetching initial data:", error);
    }
}

window.addEventListener('scroll', () => {
    if (isAtBottom()) {
        loadMorePosts();
    }
});

let header = document.querySelector(".header__content");
let sticky = header.offsetTop; 

function stickHeader() {
    if (window.scrollY > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

window.addEventListener('scroll', stickHeader);

initialize();
