function nowbottons(section,button) {
    document.querySelector(`#${section}`).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    for (let index = 0; index < button.parentElement.children.length; index++) {
        const element = button.parentElement.children[index];
        element.setAttribute('class','now-buttons');
    }
    button.setAttribute('class','liquid-glass-card now-buttons');
}