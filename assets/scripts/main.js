const lightTheme = {
    '--bg-primary': '#f5f5f5',
    '--bg-secondary': '#e8e8e8',
    '--bg-tertiary': '#dddddd',
    '--bg-card': '#ffffff',
    '--border-primary': '#ff3300',
    '--border-secondary': '#cccccc',
    '--text-primary': '#000000',
    '--text-secondary': '#222222',
    '--text-tertiary': '#555555',
};

const darkTheme = {
    '--bg-primary': '#0a0a0a',
    '--bg-secondary': '#111111',
    '--bg-tertiary': '#1a1a1a',
    '--bg-card': '#080808',
    '--border-primary': '#ff3300',
    '--border-secondary': '#2a2a2a',
    '--text-primary': '#ffffff',
    '--text-secondary': '#cccccc',
    '--text-tertiary': '#888888',
};

function setTheme(theme) {
    const root = document.documentElement;
    const colors = theme === 'light' ? lightTheme : darkTheme;
    Object.entries(colors).forEach(([key, value]) => {
        root.style.setProperty(key, value);
    });
    localStorage.setItem('brutalTheme', theme);
}

const savedTheme = localStorage.getItem('brutalTheme') || 'dark';
setTheme(savedTheme);

function updateThemeUI(theme) {
    const isLight = theme === 'light';
    const icon = isLight ? '' : '';
    const text = isLight ? 'DARK' : 'LIGHT';

    document.getElementById('themeIcon').textContent = icon;
    document.getElementById('themeText').textContent = text;
    document.getElementById('mobileThemeIcon').textContent = icon;
    document.getElementById('mobileThemeText').textContent = text;
}

updateThemeUI(savedTheme);

function handleThemeToggle() {
    const currentTheme = localStorage.getItem('brutalTheme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    updateThemeUI(newTheme);
}

document.getElementById('themeToggle').addEventListener('click', handleThemeToggle);
document.getElementById('mobileThemeToggle').addEventListener('click', handleThemeToggle);

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');
const closeMenuBtn = document.getElementById('closeMenuBtn');

function openMenu() {
    mobileMenu.classList.add('active');
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    mobileMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

mobileMenuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        closeMenu();
    }
});