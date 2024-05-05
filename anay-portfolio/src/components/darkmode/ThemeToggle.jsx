import React from 'react';
import './themetoggle.css';

const ThemeToggle = () => {
  const handleThemeToggle = () => {
    document.body.classList.toggle('dark-mode');
  };

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
