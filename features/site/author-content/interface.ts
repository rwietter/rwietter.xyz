export interface SoundProps {
  is_playing: boolean;
  item: {
    album: {
      images: {
        url: string;
      }[];
    };
    artists: {
      name: string;
    }[];
    external_urls: {
      spotify: string;
    };
    name: string;
  };
}
