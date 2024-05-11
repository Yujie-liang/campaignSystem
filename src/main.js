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
;(function () {
    for(let i = 0; i < 15; i++){
      table.innerHTML += `
          <tr>
            <td>${tableData[0].id}<td>
            <td>${tableData[0].name}<td>
            <td>${tableData[0].advertiser}<td>
            <td>${tableData[0].description}<td>
            <td>${tableData[0].price}<td>
            <td>${tableData[0].startTime}<td>
            <td>${tableData[0].endTime}<td>
            <td><img src="./src/icons/menu.svg" alt="menu" class="menu-icon"></img><td>
          </tr>
       `
    }
  })()