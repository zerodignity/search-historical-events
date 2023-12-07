const events = {
    2000: [
      { date: '20.01.2000', name: 'Событие 1', description: 'Описание события 1' },
      { date: '21.01.2000', name: 'Событие 2', description: 'Описание события 2' }
    ],
    2001: [
        { date: '10.02.2001', name: 'событие 3', description: 'описание события 3' },
        { date: '11.02.2001', name: 'событие 4', description: 'описание события 4' },
        { date: '12.02.2001', name: 'событие 5', description: 'описание события 5' }
    ],
    2002: [
        { date: '01.03.2002', name: 'событие 6', description: 'описание события 6' },
        { date: '02.04.2002', name: 'событие 7', description: 'описание события 7' },
        { date: '03.05.2002', name: 'событие 8', description: 'описание события 8' },
        { date: '04.06.2002	', name: 'событие 9', description: 'описание события 9' }
    ]
  };

  let input = document.getElementById('input');
  let table = document.getElementById('table');

  input.addEventListener('keyup', function (event) {

    if (event.key === 'Enter') {
      let year = +input.value;
      table.innerHTML = '';

      if (events.hasOwnProperty(year)) {
        const eventsArr = events[year];

        eventsArr.forEach(event => {
          let row = document.createElement('tr');
          let dateCell = document.createElement('td');
          let nameCell = document.createElement('td');
          let descriptionCell = document.createElement('td');

          dateCell.textContent = event.date;
          nameCell.textContent = event.name;
          descriptionCell.textContent = event.description;

          row.appendChild(dateCell);
          row.appendChild(nameCell);
          row.appendChild(descriptionCell);

          table.appendChild(row);
        });

      } else {
        let row = document.createElement('tr');
        let messageCell = document.createElement('td');

        messageCell.textContent = 'В указанном году нет событий';

        row.appendChild(messageCell);
        table.appendChild(row);
      }
    }
  });