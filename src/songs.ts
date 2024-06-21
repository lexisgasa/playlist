export const isTitleEmpty = (songTitle: string): boolean => {
  let isEmpty: boolean = songTitle ? false : true;

  return isEmpty;
};

export const doesTitleExist = (
  songTitle: string,
  songTitles: string[]
): boolean => {
  let doesExist: boolean = songTitles.includes(songTitle) ? true : false;

  return doesExist;
};

export const isTitleShort = (songTitle: string): boolean => {
  const minimumSongLength = 3;

  let isShort: boolean = songTitle.length < minimumSongLength ? true : false;

  return isShort;
};

export const isPlaylistFull = (songTitles: string[]): boolean => {
  const maximumElements = 5;

  let isFull: boolean = songTitles.length >= maximumElements ? true : false;

  return isFull;
};

export const addSong = (songTitle: string, songTitles: string[]): void => {
  songTitles.push(songTitle);
};

export const sortSongs = (songTitles: string[]): void => {
  songTitles.sort();
};

export const getSongsCount = (songTitles: string[]): number => {
  let songsCount: number = songTitles.length;

  return songsCount;
};

export const removeSongByPosition = (
  songTitles: string[],
  position: number
): void => {
  songTitles.splice(position, 1);
};

export const getErrorMessage = (errorCode: string): string => {
  let errorMessage: string;

  switch (errorCode) {
    case "required":
      errorMessage = "No has introducido ningún título";
      break;
    case "exists":
      errorMessage = "La canción ya existe";
      break;
    case "too-short":
      errorMessage = "El título es demasiado corto";
      break;
    case "limit":
      errorMessage = "La playlist está llena";
      break;
    default:
      errorMessage = "";
  }

  return errorMessage;
};
