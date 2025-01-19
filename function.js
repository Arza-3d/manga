
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

