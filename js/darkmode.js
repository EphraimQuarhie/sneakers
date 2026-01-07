// ========================================
// DARK MODE FUNCTIONALITY
// Persists across pages using localStorage
// ========================================

(function() {
    'use strict';
    
    const STORAGE_KEY = 'element9DarkMode';
    
    // Check for saved preference or system preference
    function getPreferredTheme() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved !== null) {
            return saved === 'true';
        }
        // Check system preference
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    
    // Apply theme
    function applyTheme(isDark) {
        if (isDark) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        
        // Update toggle button
        const toggleBtn = document.getElementById('dark-mode-toggle');
        if (toggleBtn) {
            toggleBtn.textContent = isDark ? '☀️' : '🌙';
            toggleBtn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
        }
        
        // Save preference
        localStorage.setItem(STORAGE_KEY, isDark);
    }
    
    // Toggle theme
    function toggleTheme() {
        const isDark = !document.body.classList.contains('dark-mode');
        applyTheme(isDark);
    }
    
    // Initialize on page load
    function init() {
        // Apply saved theme immediately (before DOM fully loads)
        const isDark = getPreferredTheme();
        applyTheme(isDark);
        
        // Set up toggle button
        document.addEventListener('DOMContentLoaded', function() {
            const toggleBtn = document.getElementById('dark-mode-toggle');
            if (toggleBtn) {
                toggleBtn.addEventListener('click', toggleTheme);
            }
        });
        
        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
            if (localStorage.getItem(STORAGE_KEY) === null) {
                applyTheme(e.matches);
            }
        });
    }
    
    // Run initialization
    init();
    
    // Expose toggle function globally
    window.toggleDarkMode = toggleTheme;
})();
