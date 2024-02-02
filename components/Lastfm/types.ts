export interface TrackProps {
  '@attr'?: {
    nowplaying?: 'true' | 'false'
  }
  artist: {
    '#text': string
  }
  image: {
    size: string
    '#text': string
  }[]
  name: string
  url: string
}

export interface RecentTrackProps {
  recenttracks: {
    track: TrackProps[]
  }
}

export interface LastFmTrackProps {
  lastFm: RecentTrackProps
}
