export const fetchCurrentlyPlaying = async (): Promise<any> => {
  try {
    const response = await fetch(
      'https://api.spotify.com/v1/me/player/currently-playing',
      {
        headers: {
          Authorization: `Bearer ${process.env.SPOTIFY_OAUTH_TOKEN}`,
        },
      },
    );
    return await response.json();
  } catch (error: any) {
    return Promise.reject(error.message);
  }
};
