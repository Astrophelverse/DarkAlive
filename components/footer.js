// components/footer.js

const footerHTML = `
  <footer class="footer">
    <div class="footer-content">
      <p>🌑 Built in the Void For the Brave Ones</p>
      <p>&copy; ${new Date().getFullYear()} DarkAlive. All rights reserved, and created by Astrophel haha.</p>
    </div>
  </footer>
`;

document.getElementById('footer').innerHTML = footerHTML;
