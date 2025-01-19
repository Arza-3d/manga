
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

function generateHTML(lastVol) {
  let html = "";
  let startNum = 1;

  for (let i = 0; i < lastVol.length; i++) {
    html += `<h3>vol ${i + 1}</h3>\n`;
    html += "<section>\n";

    for (let j = startNum; j < startNum + lastVol[i]; j++) {
      html += `${j}\n`;
    }

    html += "</section>\n\n";
    startNum += lastVol[i];
  }

  return html;
}

const lastVol3 = [3, 12, 15];