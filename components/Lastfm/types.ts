export interface TrackProps {
  artist: {
    '#text': string;
  };
  image: {
    'size': string;
    '#text': string;
  }[];
  name: string;
  url: string;
}

export interface RecentTrackProps {
  recenttracks: {
    track: TrackProps[];
  };
}

export interface LastFmTrackProps {
  lastFm: RecentTrackProps;
}
