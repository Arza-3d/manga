function generateMangaTable() {
    const container = document.getElementById('mangaTable');
    const table = document.createElement('table');
    
    // Create header
    const header = table.createTHead();
    const headerRow = header.insertRow();
    ['Vol', 'Ch', 'Chapter', 'Arc', 'arc#', 'Link'].forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        headerRow.appendChild(th);
    });

    // Create body
    const tbody = document.createElement('tbody');
    
    mangaChapter.forEach(([chNum, chTitle], index) => {
        const row = tbody.insertRow();
        
        // Calculate volume
        let volume = 1;
        for(let i = mangaVolumes.length-1; i >= 0; i--) {
            if(chNum >= mangaVolumes[i][0]) {
                volume = mangaVolumes[i][1];
                break;
            }
        }
        
        // Calculate arc
        let arcTitle = '';
        let arcNumber = '';
        for(let i = mangaArcs.length-1; i >= 0; i--) {
            if(chNum >= mangaArcs[i][0]) {
                arcTitle = mangaArcs[i][1];
                arcNumber = i + 1;
                break;
            }
        }
        
        // Add classes for styling
        if(index === 0 || mangaArcs.find(a => a[0] === chNum)) {
            row.classList.add('arc-separator');
        }
        if(volume % 2 === 1) {
            row.classList.add('odd-volume');
        }
        if(volume % 5 === 0) {
            row.classList.add('round-volume');
        }
        
        // Create cells
        const cells = [
            volume,
            chNum,
            chTitle,
            arcTitle,
            arcNumber,
            `<a href="https://www.google.com/search?q=free+read+${encodeURIComponent(mangaTitle)}+chapter+${chNum}" 
               target="_blank" 
               rel="noopener">Chapter ${chNum}</a>`
        ];
        
        cells.forEach((content, i) => {
            const cell = row.insertCell(i);
            cell.innerHTML = content;
            if(i === 2) cell.classList.add('chapter-title');
        });
    });

    table.appendChild(tbody);
    container.appendChild(table);
    document.getElementById('mangaTitle').textContent = mangaTitle;
}
