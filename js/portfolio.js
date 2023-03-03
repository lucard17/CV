const portfolioItems = [
    {
        link: 'https://lucard17.github.io/top.js.exam/',
        githubLink: 'https://github.com/lucard17/top.js.exam',
        header: 'Сайт Callmar',
        description: 'Экзаменационная работа по JS модулю.<br>' +
            'Верстка страницы сайта, модальныx окон и форм по макету в figma.<br>' +
            'Верстка - адаптивная. <br>' +
            'Валидация форм. <br>' +
            'Переходы плавные и анимированные.<br>',
        techs: ['HTML', 'CSS', 'SCSS', 'JS', 'БЭМ', 'PixelPerfect'],
    },
    {
        link: 'https://lucard17.github.io/top.js.hw11/',
        githubLink: 'https://github.com/lucard17/top.js.hw11',
        header: 'Сайт погоды',
        description: 'Погода - openweather API.<br>' +
            'Подсказки ввода - openstreetmap API + debounсe.<br>' +
            'XMLHttpRequest, fetch, promise.',
        techs: ['HTML', 'CSS', 'JS', 'AJAX'],
    },

    {
        link: 'https://lucard17.github.io/top.html-css.exam/',
        githubLink: 'https://github.com/lucard17/top.html-css.exam/',
        header: 'Верстка админ панели',
        description: 'Экзаменационное задание по HTML & CSS.<br>' +
            'Верскта - адаптивная.<br>' +
            'Верстку делал по возможности интерактивной.<br>' +
            'Для переключения вкладок использовал css селекторы и скрытые радиокнопки ' +
            '(потому как - почему бы и нет, js я тогда еще не знал).<br>' +
            'Так же в верстке сделал что-то вроде собственного PefrectPixel\'a<br>' +
            'Верскта - адаптивная.',
        techs: ['HTML', 'CSS', 'LESS', 'PixelPerfect', 'Figma']
    },
    {
        link: 'https://lucard17.github.io/top.html-css.exam.v2/',
        githubLink: 'https://github.com/lucard17/top.html-css.exam.v2',
        header: 'Лендинг TOUR-GUIDE',
        description: 'Второй вариант экзаменационного по HTML & CSS.<br>' +
            'Решил сделать его в дополнение к первому.<br>' +
            'Потому как практики много не бывает)<br>' +
            'В процессе выполнения решил вспомнить figma и за одно помочь будущим студентам.<br>' +
            `Сделал <a href='https://www.figma.com/file/ivw7HetApuhvsOfziDSQPJ/WEB-211.-HTML%26CSS.-ExAM-v2?node-id=0%3A1&t=1RGrqhhqgZyJSJPC-1' ` +
            `target='_blank' style="font-size: inherit">макет <i class="fa-solid fa-link" style="font-size: 0.75em"></i></a>` +
            ', и отправил вместе с выполненным заданием :-)<br>' +
            'Верскта - адаптивная.',
        techs: ['HTML', 'CSS', 'LESS', 'PixelPerfect', 'Figma'],
    },

    {
        link: 'https://lucard17.github.io/top.js.hw17/',
        githubLink: 'https://github.com/lucard17/top.js.hw17/',
        header: 'MemoryGame',
        description: 'Ставил цель сделать минималистично и с приятной анимацией. <br>' +
            'И сыну чтоб понравилось !)',
        techs: ['HTML', 'CSS', 'JS', 'jQuery']
    }, {
        link: 'https://top-angular-todo-list.vercel.app/',
        githubLink: 'https://github.com/lucard17/top.angular.todo-list',
        header: 'TodoList на Angular',
        description: 'ng new app, ngModules, Services, Input, Output, EventEmitter',
        techs: ['HTML', 'CSS', 'SCSS', 'TS', 'Angular'],
    },
    {
        link: 'https://top-react-todo-list.vercel.app/',
        githubLink: 'https://github.com/lucard17/top.react.todo-list',
        header: 'TodoList на React',
        description: 'Функциональные компоненты, хуки, Props Drilling.',
        techs: ['HTML', 'CSS', 'JSX', 'React'],
    },
    {
        link: 'https://lucard17.github.io/top.js.hw15/',
        githubLink: 'https://github.com/lucard17/top.js.hw15/',
        header: 'Верстка блока с отзывами клиентов.',
        description: 'Задача - сделать блок отзывов с каруселью.<br>' +
            'Необходимо использовать стороннюю библиотеку.<br>' +
            'Верстка - адаптивная.',
        techs: ['HTML', 'CSS', 'JS', 'jQuery', 'owlCarousel', 'PixelPerfect']
    },
    {
        link: 'https://lucard17.github.io/top.js.hw13/',
        githubLink: 'https://github.com/lucard17/top.js.hw13/',
        header: 'Страница - презентация',
        description: 'Задача - реализовать страницу презентацию, c привычными элементами управления, ' +
            'функцией автовоспроизведения, fullscreen режимом.<br>' +
            'Переходы дожны быть анимированными.<br><br>' +
            'Решил написать логику работы самостоятельно.<br>' +
            'Изображения - случайные из галереи Unsplash.',
        techs: ['HTML', 'CSS', 'JS', 'jQuery']
    },
    {
        link: 'https://lucard17.github.io/top.html-css.hw16/',
        githubLink: 'https://github.com/lucard17/top.html-css.hw16/',
        header: 'Верстка страницы блога Pecode',
        description: 'Задача:<br>' +
            'Верстка страницы - по макету выполненному в figma.<br>' +
            'Верстка - адаптивная. <br>Использовать bootstrap.',
        techs: ['HTML', 'LESS', 'Bootstrap 5', 'PixelPerfect']
    },
    {
        link: 'https://lucard17.github.io/top.html-css.hw12/',
        githubLink: 'https://github.com/lucard17/top.html-css.hw12/',
        header: 'Верстка личного кабинета студента',
        description: 'Задача - сверстать несколько страниц используя bootstrap.<br>' +
            'Верстка - адаптивная.',
        techs: ['HTML', 'CSS', 'Bootstrap 5', 'PixelPerfect']
    },
    {
        link: 'https://lucard17.github.io/top.html-css.hw5/',
        githubLink: 'https://github.com/lucard17/top.html-css.hw5/',
        header: 'Верстка лендинга по макету Photoshop',
        description: 'Мой первый опыт верстки целой страницы.<br>' +
            'От себя постарался сделать так чтобы страница была максимально "живой".',
        techs: ['HTML', 'CSS', 'Photoshop']
    },
    {
        link: 'https://lucard17.github.io/ItLogia-cars/',
        githubLink: 'https://github.com/lucard17/ItLogia-cars/',
        header: 'Проект выполненный на интенсиве ItLogia',
        description: 'Первый опыт знакомства с Angular (в рамках интенсива).<br>'+
            'Первый опыт использования БЭМ методологии (личное любопыство).',
        techs: ['HTML', 'CSS', 'JS', 'БЭМ', 'Angular']
    },
]
const portfolioItemsElement = document.querySelector('.portfolio__items');
portfolioItems.forEach((item, index) => {
    addPortfolioItem(item, portfolioItemsElement, index);
})


function addPortfolioItem(pItem, portfolioItems, i) {
    const newPItem = document.createElement('div');
    newPItem.className = 'portfolio-item';

    const newPItemHeader = document.createElement('h2');
    newPItemHeader.className = 'portfolio-item__header';

    const newPItemLink = document.createElement('a');
    newPItemLink.className = 'portfolio-item__link';
    newPItemLink.setAttribute('href', pItem.link);
    newPItemLink.setAttribute('target', "_blank");
    newPItemLink.innerHTML = i + ". " + pItem.header + "";
    newPItemHeader.appendChild(newPItemLink);

    const newPItemGithubLink = document.createElement('a');
    newPItemGithubLink.setAttribute('href', pItem.githubLink);
    newPItemGithubLink.setAttribute('target', "_blank");
    newPItemGithubLink.innerHTML = '<i class="portfolio-item__icon fa-brands fa-square-github">';
    newPItemHeader.appendChild(newPItemGithubLink);
    const newPItemDescription = document.createElement('p');
    newPItemDescription.className = 'portfolio-item__description';
    newPItemDescription.innerHTML = pItem.description;
    const newPItemTechs = document.createElement('div');
    newPItemTechs.className = 'portfolio-item__tech-items';
    pItem.techs.forEach(item => {
        const newPItemTechItem = document.createElement('div');
        newPItemTechItem.className = 'portfolio-item__tech-item';
        newPItemTechItem.innerText = item;
        newPItemTechs.appendChild(newPItemTechItem);

    })
    newPItem.appendChild(newPItemHeader);
    newPItem.appendChild(newPItemDescription);
    newPItem.appendChild(newPItemTechs);

    portfolioItems.appendChild(newPItem);

}

const portfolioButton = document.querySelector('.portfolio__button');
portfolioButton.addEventListener('click', (e) => {
    if (!portfolioItemsElement.classList.contains('show')) {
        portfolioButton.classList.add('show');
        portfolioItemsElement.classList.remove('hide');
        portfolioItemsElement.classList.add('show');
    } else {
        portfolioItemsElement.classList.remove('show');
        portfolioButton.classList.remove('show');
        portfolioItemsElement.classList.add('hide');
    }
})