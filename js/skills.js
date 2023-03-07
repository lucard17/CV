const skillsWell = [
    {icon: 'speaking', name: 'English B1 (Intermediate)'},
    {icon: 'html', name: 'HTML'},
    {icon: 'css', name: 'CSS'},
    {icon: 'js', name: 'JS'},
    {icon: 'bem', name: 'БЭМ'},
    {icon: 'git', name: 'git'},
    {icon: 'less', name: null},
    {icon: 'sass', name: null},
    {icon: 'jQuery', name: 'jQuery'},
]
const skillsBasic = [
    {icon: 'ts', name: 'TS'},
    {icon: 'react', name: 'ReactJS'},
    {icon: 'angular', name: 'Angular'},
    {icon: 'php', name: 'php'},
    {icon: 'mysql', name: 'mySQL'},
]
const skillsDivWell = document.querySelector('.skills-block-well');
skillsWell.forEach(skill => {
    addSkill(skill,skillsDivWell)
})
const skillsDivBasic = document.querySelector('.skills-block-basic');
skillsBasic.forEach(skill => {
    addSkill(skill,skillsDivBasic)
})
function addSkill(skill, skillBlock) {
    const skillItem = document.createElement('div');
    skillItem.className = 'skill-item';
    skillItem.innerHTML = `<img src="icons/${skill.icon}.svg" class="skill-item__icon">` +
        (skill.name === null ? '' : `<span>${skill.name}</span>`)
    skillBlock.appendChild(skillItem);
}