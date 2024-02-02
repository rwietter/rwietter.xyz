const USERNAME = process.env.LASTFM_USERNAME || 'rwietter'
const API_KEY = process.env.LASTFM_API_KEY || null

const API_LAST_FM = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json&limit=1`
export const fetcherLastFm = () => fetch(API_LAST_FM).then((res) => res.json())
