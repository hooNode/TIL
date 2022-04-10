function solution(genres, plays) {
  var genresArr = [];
  var genreSort = [...new Set(genres)];
  var genreSortArr = [];
  var resultArr = [];

  genres.forEach((genre, index) => {
    genresArr.push({
      id: index,
      genre: genre,
      plays: plays[index],
    });
  });
  genresArr.sort((a, b) => b.plays - a.plays);

  // 2. 각 장르별 play 목록들의 조회수 합
  genreSort.forEach((sort) => {
    var tempPlay = 0;
    genresArr.forEach((genre) => {
      if (sort === genre.genre) tempPlay += genre.plays;
    });
    genreSortArr.push({
      genre: sort,
      plays: tempPlay,
    });
  });
  genresArr = genres.map((genre, index) => {
    return { id: index, genre: genre, plays: plays[index] };
  });
  // 랭킹
  genreSortArr.sort((a, b) => b.plays - a.plays);

  // 장르 안의 곡들 수록 방법 (2개)
  genreSortArr.forEach((sort) => {
    var tempLimit = 0;
    genresArr.forEach((genre, index) => {
      if (sort.genre === genre.genre && tempLimit < 2) {
        tempLimit += 1;
        resultArr.push(genre.id);
      }
    });
    tempLimit = 0;
  });

  return resultArr;
}
