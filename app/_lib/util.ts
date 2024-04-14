import { MediaTitle } from "../_ graphql/queries/anilist";

export const isInteger = (str: string | null): boolean => {
  if (str === null) return false;
  const regex = /^\s*-?[0-9]+$/;
  return regex.test(str);
}

export const isBrowser = (): boolean => typeof window !== 'undefined'

export const getImageAlt = (title: MediaTitle) => title.english || title.romaji || title.native