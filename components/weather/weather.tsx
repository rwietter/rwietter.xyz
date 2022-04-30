import { RiSunCloudyLine } from 'react-icons/ri';
import { FC } from 'react';

export interface WeatherProps {
  HasPrecipitation: boolean;
  WeatherIcon: number;
  WeatherText: string;
  Temperature: {
    Imperial: {
      Unit: 'F';
      UnitType: number;
      Value: number;
    };
    Metric: {
      Unit: 'C';
      UnitType: number;
      Value: number;
    };
  };
}

interface WeatherConditionsProps {
  weather: any;
}

export const WeatherConditions: FC<WeatherConditionsProps> = ({ weather }) => {
  if (weather) return <div> </div>;

  const [data]: [WeatherProps] = weather;

  return (
    <div>
      {data?.Temperature && (
      <p>
        <RiSunCloudyLine size={18} />
        <span>Its currently &nbsp;</span>
        <strong>
          {data?.Temperature?.Metric?.Value}
          {' '}
          °C &nbsp;
        </strong>
        <span>
          {data?.WeatherText && `( ${data.WeatherText} )`}
          &nbsp;
        </span>
        <span>in Constantina.</span>
      </p>
      )}
    </div>
  );
};
