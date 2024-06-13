const portfolio = document.getElementById("portfolio");
const portfolioBtn = document.getElementById("portfolio-btn");
const skill = document.getElementById("skills");
const skillsBtn = document.getElementById("skills-btn");

// Hide the skills section initially
skill.style.display = "none";

portfolioBtn.addEventListener("click", (event) => {
    // Hide the skills section and show the portfolio section
    skill.style.display = "none";
    portfolio.style.display = "flex";
    // Update button styles
    skillsBtn.classList.remove("active-btn");
    portfolioBtn.classList.add("active-btn");
});

skillsBtn.addEventListener("click", (event) => {
    // Hide the portfolio section and show the skills section
    portfolio.style.display = "none";
    skill.style.display = "flex";
    // Update button styles
    portfolioBtn.classList.remove("active-btn");
    skillsBtn.classList.add("active-btn");
});

document.addEventListener("DOMContentLoaded", () => {
    const toggleThemeButton = document.getElementById("toggleTheme");
    const themeIcon = document.querySelector('img[alt="theme icon"]');
    const githubLogo = document.querySelector('img[alt="github logo"]');
    const linkedinLogo = document.querySelector('img[alt="linkedin logo"]');
    const emailLogo = document.querySelector('img[alt="email logo"]');

    const lightLogos = {
        github: "assets/github_light.png",
        linkedin: "assets/linkedin_light.png",
        email: "assets/email_light.png",
        theme: "assets/theme_light.png",
    }

    const darkLogos = {
        github: "assets/github_dark.png",
        linkedin: "assets/linkedin_dark.png",
        email: "assets/email_dark.png",
        theme: "assets/theme_dark.png",
    }

    function setTheme(isDark){
        githubLogo.src = isDark ? darkLogos.github : lightLogos.github;
        linkedinLogo.src = isDark ? darkLogos.linkedin : lightLogos.linkedin;
        emailLogo.src = isDark ? darkLogos.email : lightLogos.email;
        themeIcon.src = isDark ? darkLogos.theme : lightLogos.theme;
    }
    toggleThemeButton.addEventListener("click",() => {
        const isDark = document.body.classList.toggle("dark-theme");
        localStorage.setItem("isDark", isDark);
        setTheme(isDark);
    });

    

    const loadTheme = () => {
        const isDark = localStorage.getItem("isDark") === "true";
        document.body.classList.toggle("dark-theme", isDark);
        
        setTheme(isDark);
    };

    loadTheme();

});
