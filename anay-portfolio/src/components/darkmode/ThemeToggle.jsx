import React from 'react';

const ThemeToggle = () => {
  const handleThemeToggle = () => {
    document.body.classList.toggle('dark-mode');
  };

  return (
    <button className="theme-toggle" onClick={handleThemeToggle}>
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
