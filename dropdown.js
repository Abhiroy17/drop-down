const selectBtn = document.querySelector('.select-btn');
const downIcon = document.querySelector('.chevron-down');
const upIcon = document.querySelector('.chevron-up');
const itemContainer = document.querySelector('.item-container');
const dropdownToggle = function(e){
    console.log(e);
    downIcon.classList.toggle('hidden');
    upIcon.classList.toggle('hidden');
    itemContainer.classList.toggle('hidden');
}
selectBtn.addEventListener('click',dropdownToggle)