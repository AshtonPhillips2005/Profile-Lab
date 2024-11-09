function fetchUserProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.2 ? resolve({ id: 1, name: "Ashton Phillips" }) : reject("Failed to fetch user profile");
        }, 1000);
    });
}

function fetchPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.2 ? resolve([{ id: 1, title: "Ashton with icecream at the beach" }, { id: 2, title: "Ashton looking outside the window" }]) : reject("Failed to fetch posts");
        }, 1000);
    });
}

function fetchComments() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.2 ? resolve([{ id: 1, comment: "Love this post!" }, { id: 2, comment: "Very good post!" }]) : reject("Failed to fetch comments");
        }, 1000);
    });
}

async function fetchSequentially() {
    try {
        const user = await fetchUserProfile();
        console.log("User profile retrieved:", user);

        const posts = await fetchPosts();
        console.log("Posts retrieved:", posts);

        const comments = await fetchComments();
        console.log("Comments retrieved:", comments);

        return { user, posts, comments };
    } catch (error) {
        console.error("Sequential fetch error:", error);
    }
}

async function fetchInParallel() {
    try {
        const [user, posts, comments] = await Promise.all([
            fetchUserProfile(),
            fetchPosts(),
            fetchComments()
        ]);

        console.log("User profile retrieved:", user);
        console.log("Posts retrieved:", posts);
        console.log("Comments retrieved:", comments);

        return { user, posts, comments };
    } catch (error) {
        console.error("Parallel fetch error:", error);
    }
}

async function getUserContent() {
    try {
        console.log("Fetching user profile...");
        const user = await fetchUserProfile();
        console.log("User profile retrieved:", user);

        console.log("Fetching posts...");
        const posts = await fetchPosts();
        console.log("Posts retrieved:", posts);

        console.log("Fetching comments...");
        const comments = await fetchComments();
        console.log("Comments retrieved:", comments);

        return { user, posts, comments };
    } catch (error) {
        console.error("Error in getUserContent:", error);
    }
}

console.log("Sequential fetch:");
fetchSequentially().then(result => console.log("Sequential result:", result));

console.log("\nParallel fetch:");
fetchInParallel().then(result => console.log("Parallel result:", result));

console.log("\nChained fetch (getUserContent):");
getUserContent().then(result => console.log("Combined result:", result));


