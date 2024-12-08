// Definisikan tipe data untuk data API
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// Fungsi untuk fetch data dari API
async function fetchPosts(): Promise<Post[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

// Fungsi untuk menampilkan data ke HTML
function displayPosts(posts: Post[]): void {
    const postsContainer = document.getElementById('posts');
    if (!postsContainer) return;

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