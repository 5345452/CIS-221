function highlight() {
  const skills = document.querySelectorAll("section:nth-of-type(3) li");
  skills.forEach(skill => {
    skill.style.background = "#ffeeba";
    skill.style.padding = "5px";
    skill.style.borderRadius = "5px";
  });
  alert("Skills highlighted!");
}