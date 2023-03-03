const skills = [
    {icon: 'speaking', name: 'English B1 (Intermediate)'},
    {icon: 'html', name: 'HTML'},
    {icon: 'css', name: 'CSS'},
    {icon: 'js', name: 'JS'},
    {icon: 'bem', name: 'БЭМ'},
    {icon: 'git', name: 'git'},
    {icon: 'less', name: null},
    {icon: 'sass', name: null},
    {icon: 'jQuery', name: 'jQuery'},
    {icon: 'ts', name: 'TS'},
    {icon: 'react', name: 'ReactJS'},
    {icon: 'angular', name: 'Angular'},
]
const skillsDiv = document.querySelector('.skills-block');
skills.forEach(skill => {
    addSkill(skill)
})

function addSkill(skill) {
    const skillItem = document.createElement('div');
    skillItem.className = 'skill-item';
    skillItem.innerHTML = `<img src="icons/${skill.icon}.svg" class="skill-item__icon">` +
        (skill.name === null ? '' : `<span>${skill.name}</span>`)
    skillsDiv.appendChild(skillItem);
}