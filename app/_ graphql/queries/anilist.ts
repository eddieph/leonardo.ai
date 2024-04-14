import { gql } from "@apollo/client";

export const GET_ANI_LIST = gql`
query ($id: Int, $page: Int, $perPage: Int, $search: String) {
  Page (page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    media (id: $id, search: $search) {
      id
      title {
        romaji
        english
        native
      }
      coverImage {
        medium
        large
      }
    }
  }
}`;

export interface Media {
  id: number;
  title: MediaTitle;
  coverImage: {
    medium: string;
    large: string;
  }
}

export interface MediaTitle {
  english: string;
  native: string;
  romaji: string;
}

export interface AniListData {
  Page: {
    pageInfo: {
      total: number;
      currentPage: number;
      lastPage: number;
      hasNextPage: boolean;
      perPage: number;
    };
    media: Media[];
  };
}
