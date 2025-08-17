document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const body = document.body;

    // Function to apply the saved theme
    const applyTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            toggleSwitch.checked = true;
        } else {
            body.classList.remove('dark-mode');
            toggleSwitch.checked = false;
        }
    };

    // Function to switch theme
    function switchTheme(e) {
        if (e.target.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        }
        else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    }

    // Add event listener
    toggleSwitch.addEventListener('change', switchTheme, false);

    // Apply theme on initial load
    applyTheme();
});