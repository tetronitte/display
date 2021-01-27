// ========================================
//                 TAILLE
// ========================================

var header = document.getElementById('header_cv');
var main = document.getElementById('main_cv');
var row_section_about = document.getElementById('row_section_about');
var col_section_about = document.getElementById('col_section_about');
var row_section_education = document.getElementById('row_section_education');
var col_section_education = document.getElementById('col_section_education');
var row_section_experience = document.getElementById('row_section_experience');
var col_section_experience = document.getElementById('col_section_experience');
var row_section_skills = document.getElementById('row_section_skills');
var col_section_skills = document.getElementById('col_section_skills');

var heightWindow = window.innerHeight;
var calculHeight = heightWindow - header.offsetHeight;
main.style.minHeight = ""+calculHeight+"px";
row_section_about.style.height = ""+calculHeight+"px";
col_section_about.style.height = ""+calculHeight+"px";
row_section_education.style.height = ""+calculHeight+"px";
col_section_education.style.height = ""+calculHeight+"px";
row_section_experience.style.height = ""+calculHeight+"px";
col_section_experience.style.height = ""+calculHeight+"px";
row_section_skills.style.height = ""+calculHeight+"px";
col_section_skills.style.height = ""+calculHeight+"px";

// ========================================
//                  MENU
// ========================================

var about = document.getElementById('about');
var aboutIcon = document.getElementById('about_icon');
var aboutSection = document.getElementById('row_section_about');
var education = document.getElementById('education');
var educationIcon = document.getElementById('education_icon');
var educationSection = document.getElementById('row_section_education');
var experience = document.getElementById('experience');
var experienceIcon = document.getElementById('experience_icon');
var experienceSection = document.getElementById('row_section_experience');
var skills = document.getElementById('skills');
var skillsIcon = document.getElementById('skills_icon');
var skillsSection = document.getElementById('row_section_skills');
var sectionActive = aboutSection;
var menuActive = about;

//ABOUT
about.onclick = function() {
    switchMenuActive(about,aboutSection);
}
aboutIcon.onclick = function(about) {
    switchMenuActive(about,aboutSection);
}
//EDUCATION
education.onclick = function() {
    switchMenuActive(education,educationSection);
}
educationIcon.onclick = function() {
    switchMenuActive(education,educationSection);
}
//EXPERIENCE
experience.onclick = function() {
    switchMenuActive(experience,experienceSection);
}
experienceIcon.onclick = function() {
    switchMenuActive(experience,experienceSection);
}
//SKILLS
skills.onclick = function() {
    switchMenuActive(skills,skillsSection);
}
skillsIcon.onclick = function() {
    switchMenuActive(skills,skillsSection);
}

function switchMenuActive(newMenu,newSection) {
    //Modifier couleur des liens du menu
    menuActive.classList.remove("menu-active");
    menuActive = newMenu;
    menuActive.classList.add("menu-active");
    //Display les sections
    sectionActive.classList.remove("section-active");
    sectionActive.style.display = "none";
    sectionActive = newSection;
    sectionActive.classList.add("section-active");
    sectionActive.style.display = "block";
}