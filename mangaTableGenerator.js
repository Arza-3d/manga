function getVolume(chapterNumber) {
    for (let i = mangaData.volumes.length - 1; i >= 0; i--) {
        if (chapterNumber >= mangaData.volumes[i][0]) {
            return mangaData.volumes[i][1];
        }
    }
    return 1;
}

function generateArcHTML(arc, index) {
    const startChapter = arc[0];
    const nextArcStart = mangaData.arcs[index + 1] ? mangaData.arcs[index + 1][0] : Infinity;
    
    return `
        <div class="arc-container">
            <div class="arc-header ${index > 0 ? 'collapsed' : ''}" onclick="toggleArc(this)">
                Arc ${index + 1}: ${arc[1]}
            </div>
            <div class="chapter-list" style="max-height: ${index === 0 ? '500px' : '0'}">
                ${mangaData.chapters
                    .filter(([num]) => num >= startChapter && num < nextArcStart)
                    .map(([num, title]) => `
                        <a href="/manga/made-in-abyss/${num}" class="chapter-link">
                            <span class="chapter-number">Ch.${num}</span>
                            <span class="chapter-title">${title}</span>
                            <span class="volume-info">Volume ${getVolume(num)}</span>
                        </a>
                    `).join('')}
            </div>
        </div>
    `;
}

function toggleArc(header) {
    const arcContainer = header.parentElement;
    const chapterList = arcContainer.querySelector('.chapter-list');
    const isCollapsed = header.classList.contains('collapsed');
    
    if (isCollapsed) {
        header.classList.remove('collapsed');
        chapterList.style.maxHeight = chapterList.scrollHeight + 'px';
    } else {
        header.classList.add('collapsed');
        chapterList.style.maxHeight = '0';
    }
}

// Render all arcs
document.getElementById('arcs-container').innerHTML = mangaData.arcs
    .map((arc, index) => generateArcHTML(arc, index))
    .join('');
