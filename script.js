function changeTheme() {
    const theme = document.getElementById("theme").value;
    const root = document.documentElement;

    if (theme === "dark") {
        root.style.setProperty("--nav-background", "#333");
        root.style.setProperty("--primary-background", "#222");
        root.style.setProperty("--highlight", "#FFD700");
        root.style.setProperty("--text-color", "#FFF");
    } else if (theme === "light") {
        root.style.setProperty("--nav-background", "#FFF");
        root.style.setProperty("--primary-background", "#FAFAFA");
        root.style.setProperty("--highlight", "#007BFF");
        root.style.setProperty("--text-color", "#000");
    } else {
        // Default theme
        root.style.setProperty("--nav-background", "#1B1B1B");
        root.style.setProperty("--primary-background", "#F5F5F5");
        root.style.setProperty("--highlight", "#A52A2A");
        root.style.setProperty("--text-color", "#333");
    }
}
