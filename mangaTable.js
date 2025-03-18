document.addEventListener('DOMContentLoaded', () => {
    const columns = ['no', 'chapter', 'vol', 'arc', 'battle'];
    const firstChapter = 1;
    const lastChapter = 100;
    
    // Create table headers
    const headerRow = document.querySelector('.table-header');
    columns.forEach(col => {
        const th = document.createElement('th');
        th.textContent = col.charAt(0).toUpperCase() + col.slice(1);
        headerRow.appendChild(th);
    });

    // Create table rows
    const tbody = document.querySelector('.table-body');
    for (let i = firstChapter; i <= lastChapter; i++) {
        const tr = document.createElement('tr');
        
        columns.forEach(col => {
            const td = document.createElement('td');
            td.textContent = col === 'no' ? i : '';
            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    }
});
