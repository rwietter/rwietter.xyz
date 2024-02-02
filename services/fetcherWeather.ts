const API_WEATHER = `https://dataservice.accuweather.com/currentconditions/v1/${process.env.ACCUWEATHER_CITY_ID}?apikey=${process.env.ACCUWEATHER_API_KEY}`;
export const fetcherWeather = () =>
	fetch(API_WEATHER).then((res) => res.json());
