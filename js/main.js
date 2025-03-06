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

let isLoading = false;

function isAtBottom() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight - 10; 
}

async function loadMorePosts() {
    if (isLoading) return; 
    isLoading = true;

    try {
        const data = await fetchData(url);
        const startIndex = loadedPosts;
        const endIndex = loadedPosts + postsPerPage;
        displayDataInHTML(data.slice(startIndex, endIndex));
        loadedPosts += postsPerPage;
    } catch (error) {
        console.error("Error loading more posts:", error);
    } finally {
        isLoading = false;
    }
}

// Initial data fetch
fetchData(url)
    .then(data => {
        displayDataInHTML(data.slice(0, postsPerPage));
        loadedPosts += postsPerPage;
    })
    .catch(error => {
        console.error("Error fetching initial data:", error);
    });

// Debounced scroll event listener
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        if (isAtBottom()) {
            loadMorePosts();
        }
    }, 200); // 200ms delay to prevent excessive calls
});


let header = document.getElementsByClassName("header__content");
let sticky = header.offsetTop;

function stickHeader() {
    if (window.scrollY > 
        sticky) {
            header.classList.add("sticky")
        } else
        header.classList.remove("sticky")
}
