document.addEventListener("DOMContentLoaded", function () {
  const statistics = {
    "totalBlogs": 3,
    "totalViews": 3200
  };

  const totalBlogsElement = document.getElementById('total-blogs');
  const totalViewsElement = document.getElementById('total-views');

  totalBlogsElement.textContent = statistics.totalBlogs;
  totalViewsElement.textContent = statistics.totalViews;

  const blogs = [
    {
      "id": 1,
      "title": "Avocado",
      "category": "Fruits",
      "content": "Lorem ipsum...",
      "author": "John Doe",
      "views": 1200
    },
    {
      "id": 2,
      "title": "Phad Thai",
      "category": "Thai food",
      "content": "Lorem ipsum...",
      "author": "Jane Doe",
      "views": 800
    },
    {
      "id": 3,
      "title": "Cup cake",
      "category": "Dessert",
      "content": "Lorem ipsum...",
      "author": "John Doe",
      "views": 1200
    }
  ];

  const blogList = document.querySelector('.blog-list');

  blogs.forEach(blog => {
    const blogItem = document.createElement('div');
    blogItem.classList.add('blog-item');

    blogItem.innerHTML = `
      <div class="blog-title">${blog.title}</div>
      <div class="blog-category">${blog.category}</div>
      <div class="blog-content">${blog.content}</div>
      <div class="blog-author">By: ${blog.author}</div>
      <div class="blog-views">Views: ${blog.views}</div>
    `;

    blogList.appendChild(blogItem);
  });

  const searchBlogs = (keyword, blogs) => {
    return blogs.filter(blog => blog.title.toLowerCase().includes(keyword.toLowerCase()));
  };

  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  const searchResults = document.getElementById('search-results');

  searchButton.addEventListener('click', () => {
    const keyword = searchInput.value.trim();
    const results = searchBlogs(keyword, blogs);
    displayResults(results);
  });

  function displayResults(results) {
    const searchResults = document.getElementById('search-results');

    if (results.length === 0) {
      searchResults.innerHTML = "<p>No results found.</p>";
      searchResults.style.display = 'none';
      return;
    }

    const resultList = results.map(blog => `
    <div class="blog-title">${blog.title}</div>
    <div class="blog-category">${blog.category}</div>
    <div class="blog-content">${blog.content}</div>
    <div class="blog-author">By: ${blog.author}</div>
    <div class="blog-views">Views: ${blog.views}</div>
    `).join('');

    searchResults.innerHTML = resultList;
    searchResults.style.display = 'block';
  };

  const blogForm = document.getElementById('blog-form');
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const contentInput = document.getElementById('content');
  const categoryInput = document.getElementById('category');

  blogForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get input values
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const content = contentInput.value.trim();
    const category = categoryInput.value;

    // Create a new blog object
    const newBlog = {
      id: blogs.length + 1, // Generate a unique ID for the new blog post
      title: title,
      category: category,
      content: content,
      author: author,
      views: 0 // Set initial views to 0
    };

    // Add the new blog to the blogs array
    blogs.push(newBlog);

    // Reset form fields
    titleInput.value = '';
    authorInput.value = '';
    contentInput.value = '';
    categoryInput.value = 'thaifood'; // Reset category to default value

    // Display the newly added blog
    const blogItem = document.createElement('div');
    blogItem.classList.add('blog-item');

    blogItem.innerHTML = `
      <div class="blog-title">${newBlog.title}</div>
      <div class="blog-category">${newBlog.category}</div>
      <div class="blog-content">${newBlog.content}</div>
      <div class="blog-author">By: ${newBlog.author}</div>
      <div class="blog-views">Views: ${newBlog.views}</div>
    `;

    blogList.appendChild(blogItem);

    console.log('New blog added:', newBlog);
    console.log('Updated blogs:', blogs);
  });
});
