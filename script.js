function toggleCategory(category) {
    const categoryLinks = document.getElementById(`${category}-links`);
    const categoryButton = document.querySelector(`[onclick="toggleCategory('${category}')"]`);
    
    if (!categoryLinks.classList.contains('active')) {
      showLinks(category);
      categoryLinks.classList.add('active');
      categoryButton.classList.add('active');
    } else {
      categoryLinks.innerHTML = '';
      categoryLinks.classList.remove('active');
      categoryButton.classList.remove('active');
    }
  }
  
  function showLinks(category) {
    const linksContainer = document.getElementById(`${category}-links`);
    linksContainer.innerHTML = '';
  
    const links = getLinksByCategory(category);
    links.forEach(link => {
      const linkElement = createLinkElement(link);
      linksContainer.appendChild(linkElement);
    });
  }
  
  function getLinksByCategory(category) {
    
    const allLinks = {
      social: [
        { title: 'Twitter', url: 'https://www.twitter.com', icon: 'twitter-icon.png' },
        { title: 'Instagram', url: 'https://www.instagram.com', icon: 'instagram-icon.png' },
        
      ],
      blogs: [
        { title: 'Tech Blog', url: 'https://www.techblog.com', icon: 'blog-icon.png' },
        { title: 'Fashion Blog', url: 'https://www.fashionblog.com', icon: 'blog-icon.png' },
        
      ],
      portfolio: [
        { title: 'Projekt 1', url: 'https://www.project1.com', icon: 'portfolio-icon.png' },
        { title: 'Projekt 2', url: 'https://www.project2.com', icon: 'portfolio-icon.png' },
        
      ],
    };
  
    return allLinks[category] || [];
  }
  
  function createLinkElement(link) {
    const linkElement = document.createElement('a');
    linkElement.className = 'link';
    linkElement.href = link.url;
  
    const iconElement = document.createElement('img');
    iconElement.src = link.icon;
    iconElement.alt = link.title;
    iconElement.classList.add('link-icon');
  
    const titleElement = document.createElement('span');
    titleElement.textContent = link.title;
  
    linkElement.appendChild(iconElement);
    linkElement.appendChild(titleElement);
  
    return linkElement;
  }
  