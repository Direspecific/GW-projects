const toggleButton = document.getElementById('toggle-button');

toggleButton.addEventListener('click', function() {
  sidebar.classList.toggle('expanded');

  // Update for the icon radius logic
  const navLinks = sidebar.querySelectorAll('.nav-list li a');
  navLinks.forEach(link => {
    link.style.borderRadius = sidebar.classList.contains('expanded') ? '15px' : '100%';
  });
});

const overlay = document.getElementById('overlay');

// Add a click event to the overlay to close the sidebar
overlay.addEventListener('click', function() {
  sidebar.classList.remove('expanded');
});

function closeNavbar() {
  sidebar.classList.remove('expanded');
}

// Click on overlay to close
overlay.addEventListener('click', closeNavbar);

// Click outside the navbar to close
document.addEventListener('click', function(event) {
  const isClickInsideSidebar = sidebar.contains(event.target);
  const isClickInsideOverlay = overlay.contains(event.target);

  if (!isClickInsideSidebar && !isClickInsideOverlay && sidebar.classList.contains('expanded')) {
    closeNavbar();
  }
});

document.addEventListener('DOMContentLoaded', function() {
    const topics = ['HTML', 'CSS', 'JavaScript']; // Example topics

    const topicListContainer = document.getElementById('topics');

    // Populate topics list
    topics.forEach(topic => {
        const topicContainer = document.createElement('div');
        topicContainer.classList.add('topic-container');
        const ul = document.createElement('ul');
        const listItem = document.createElement('li');
        listItem.textContent = topic;
        ul.appendChild(listItem);
        topicContainer.appendChild(ul);
        topicListContainer.appendChild(topicContainer);
    });
        // Clear previous content
        contentArea.innerHTML = '';
    }

    
);
