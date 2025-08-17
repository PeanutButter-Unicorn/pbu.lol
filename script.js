// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Get the theme toggle button and the body element
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Function to apply the saved theme or the system preference
    const applyTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        // Check for saved theme, otherwise check for system preference for dark mode
        if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    };

    // Add a click event listener to the toggle button
    themeToggleButton.addEventListener('click', () => {
        // Toggle the 'dark-mode' class on the body
        body.classList.toggle('dark-mode');

        // Save the user's preference to localStorage
        const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
    });

    // Apply the theme when the page loads
    applyTheme();
});