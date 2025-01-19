
function parseRange(inputStr) {
  const result = [];

  inputStr.split(',').forEach((part) => {
    part = part.trim();

    if (part.includes('-')) {
      const [start, end] = part.split('-').map(Number);
      for (let i = start; i <= end; i++) {
        result.push(i);
      }
    } else {
      result.push(Number(part));
    }
  });

  return result;
}

function generateMangaLink(title, mangaIndex, chapter) {
  const baseUrl = "https://mangapill.com/chapters/";
  const mangaIndexChapter = `${mangaIndex}-${mangaIndex * 10000 + chapter}`;
  const formattedTitle = title.replace(/\s+/g, "-").toLowerCase();
  return `${baseUrl}${mangaIndexChapter}/${formattedTitle}-chapter-${chapter}`;
}

function generateVolumeHTML(lastVol) {
    let html = '';
    let chapter = 1;

    for (let i = 0; i < lastVol.length; i++) {
        html += `<h3>Vol ${i + 1}</h3><section>`;
        for (let j = 1; j <= lastVol[i]; j++) {
            html += `${chapter} `;
            chapter++;
        }
        html += `</section>`;
    }

    return html;
}
