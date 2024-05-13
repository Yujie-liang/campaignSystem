import './scss/main.scss'
console.log('JS loaded!')

const tableData = [
    {
        id: 1,
        name: 'Christimas 2020',
        advertiser: 'Food Market',
        description: 'holiday night during chr...',
        price: '$2000',
        startTime: '2020/12/24 19:30',
        endTime: '2021/01/02 23:00'
    }
]
const table = document.querySelector('.table');
const navbar = document.querySelector('.functions');

;(function () {
    for(let i = 0; i < 25; i++){
      table.lastElementChild.innerHTML += `
          <tr>
            <td class="checkbox"><img src="./src/icons/checkbox.svg" alt="checkbox" class="checkbox-icon"></img></td>
            <td>${tableData[0].id}</td>
            <td>${tableData[0].name}</td>
            <td class="ad">${tableData[0].advertiser}</td>
            <td>${tableData[0].description}</td>
            <td>${tableData[0].price}</td>
            <td>${tableData[0].startTime}</td>
            <td>${tableData[0].endTime}</td>
            <td class="actions">
                <img src="./src/icons/menu.svg" alt="menu" class="menu-icon"></img>
                <div class="popup">
                    <div class="popup-item duplicate">
                        <img src="./src/icons/duplicate.svg" alt="duplicate" class="duplicate-icon"></img>
                        <p>Duplicate</p>
                    </div>
                    <div class="popup-item edit">
                        <img src="./src/icons/edit.svg" alt="edit" class="edit-icon"></img>
                        <p>Edit</p>
                    </div>
                    <div class="popup-item delete">
                        <img src="./src/icons/delete.svg" alt="delete" class="delete-icon"></img>
                        <p>Delete</p>
                    </div>
                </div>
            </td>
          </tr>
       `
    }
  })();

navbar.addEventListener('click', (event) => {
    if (event.target.closest('.function')) {
        const actived = document.querySelector('.function.active');
        actived.classList.remove('active');
        event.target.closest('.function').classList.add('active');
    } 
})


table.addEventListener('click', (event) => {
    if (event.target.closest('.checkbox')) {
        //console.log(event.target);
        event.target.closest('.checkbox').classList.toggle('checked');
        //console.log(event.target.closest('.checkbox').classList);
    } else if (event.target.closest('.actions')){
        //console.log(event.target);
        const popup = event.target.closest('.actions').lastElementChild;
        popup.classList.toggle('show');
        //console.log(event.target.closest('.checkbox').classList);
    }
});