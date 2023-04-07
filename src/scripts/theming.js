const root = document.firstElementChild;
const body = document.body;

const toggleTheme = () => {
  // prettier-ignore
  root.style.colorScheme = root.style.colorScheme === 'dark'
    ? 'light'
    : 'dark';

  body.classList.toggle('light');
  body.classList.toggle('dark');
};

window.onload = () => {
  document
    .querySelector('#theme-toggle')
    .addEventListener('change', toggleTheme);
};

// Keep in sync with potential system config changes
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', ({ matches: isDark }) => {
    if (isDark) {
      root.style.colorScheme = 'dark';
    }
  });
