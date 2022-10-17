const tabs = document.querySelectorAll('.tab');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        if(tab.classList.contains('selected')) return;

        selectTab(tab);
        showInfo(tab);
    });
});

const selectTab = (tab) => {
    const tabSelected = document.querySelector('.tab.selected');
    
    tabSelected.classList.remove('selected');
    tab.classList.add('selected');
};

const showInfo = (tab) => {
    const infoSelected = document.querySelector('.info.selected');
    const idInfoSelected = `info-${tab.id}`;
    const infoShow = document.getElementById(idInfoSelected);

    infoSelected.classList.remove('selected')
    infoShow.classList.add('selected')
};