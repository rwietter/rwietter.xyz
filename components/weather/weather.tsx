import { RiSunCloudyLine } from 'react-icons/ri';
import { FC } from 'react';
import * as S from './styled';

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
  const data = weather[0];

  return (
    <div>
      {data?.Temperature && (
        <S.Weather>
          <RiSunCloudyLine size={18} />
          <span> &nbsp; Its currently &nbsp;</span>
          <strong>
            {data?.Temperature?.Metric?.Value}
            {' '}
            °C &nbsp;
          </strong>
          <span>{data?.WeatherText && `( ${data.WeatherText} )`}</span>
          <span> &nbsp; in Constantina.</span>
        </S.Weather>
      )}
    </div>
  );
};
