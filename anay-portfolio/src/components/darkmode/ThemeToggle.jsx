import React, { useEffect } from 'react';
import './themetoggle.css';

const ThemeToggle = () => {
  // Function to handle theme toggling and reload the page
  const handleThemeToggle = () => {
    const currentTheme = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', currentTheme ? 'dark' : 'light');
    // window.location.reload(); // Reload the page to apply the theme
  };

  // Use effect to set the theme on initial load based on local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      document.getElementById('theme-switch-checkbox').checked = true;
    }
  }, []);

  return (
    <label className="theme-switch" htmlFor="theme-switch-checkbox">
      <input 
        type="checkbox"
        id="theme-switch-checkbox"
        onChange={handleThemeToggle}
      />
      <div className="theme-switch-slider"></div>
    </label>
  );
};

export default ThemeToggle;
