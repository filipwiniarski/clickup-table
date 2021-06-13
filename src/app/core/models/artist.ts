export interface Artist {
  name: string;
  popularity: number;
  type: 'artist';
  uri: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
  id: string;
  href: string;
  genres: string[];
  followers: {
    href: string | null;
    total: number;
  }
  external_urls: {
    [key: string]: string;
  }
}
