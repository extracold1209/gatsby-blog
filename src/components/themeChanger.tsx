import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

type ThemeTogglerParams = {
  theme: 'dark' | 'light';
  toggleTheme: (nextTheme: 'dark' | 'light') => void;
}

const ThemeChanger: React.FC = () => (
  <ThemeToggler>
    {({ theme, toggleTheme }: ThemeTogglerParams) => (
      <label>
        <input
          type="checkbox"
          className="theme-changer"
          onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
          checked={theme === 'dark'}
        />{' '}
        <div className="mode-container">
          <i className="gg-sun"/>
          <i className="gg-moon"/>
        </div>
      </label>
    )}
  </ThemeToggler>
);

export default ThemeChanger;
