var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Fungsi untuk fetch data dari API
function fetchPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return yield response.json();
    });
}
// Fungsi untuk menampilkan data ke HTML
function displayPosts(posts) {
    const postsContainer = document.getElementById('posts');
    if (!postsContainer)
        return;
    postsContainer.innerHTML = posts
        .map(post => `<div>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        </div>`)
        .join('');
}
// Panggil fungsi fetch dan tampilkan data
fetchPosts()
    .then(posts => displayPosts(posts))
    .catch(error => console.error('Error fetching posts:', error));
