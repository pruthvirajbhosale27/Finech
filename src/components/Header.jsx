const Header = () => {
  return (
    <header class="site-header">
      <div clasName="logo">
        <img src="/Logo.png" alt="Logo" />
      </div>

      <nav class="main-nav">
        <a href="#">Home</a>
        <a href="#">Solutions</a>
        <a href="#">Integrations</a>
        <a href="#">Pricing</a>
        <a href="#">Resources</a>
      </nav>

      <div class="header-buttons">
        <button class="login-btn">Login</button>

        <button class="get-started-btn">
          Get Started
          <img src="/ArrowUpRight.png" class="arrow-upright" alt="" />
        </button>
      </div>

      <div class="mobile-menu">
        <img src="/Vector.png" alt="menu icon" />
      </div>
    </header>
  );
};

export default Header;
