import { FC } from 'react'
import { RiSunCloudyLine } from 'react-icons/ri'
import styles from './styles.module.css'

export interface WeatherProps {
  HasPrecipitation: boolean
  WeatherIcon: number
  WeatherText: string
  Temperature: {
    Imperial: {
      Unit: 'F'
      UnitType: number
      Value: number
    }
    Metric: {
      Unit: 'C'
      UnitType: number
      Value: number
    }
  }
}

interface WeatherConditionsProps {
  weather: WeatherProps[]
}

export const WeatherConditions: FC<WeatherConditionsProps> = ({ weather }) => {
  if (weather === null) return <span />

  const data = weather[0]

  return (
    <div>
      {data?.Temperature && (
        <p className={styles.weather}>
          <span>
            <RiSunCloudyLine size={18} />
            <strong>
              &nbsp;
              {data?.Temperature?.Metric?.Value}
              °C &nbsp;
            </strong>
          </span>
          <span>
            <span>{data?.WeatherText && `( ${data.WeatherText} )`}</span>
            <span> &nbsp; in Constantina.</span>
          </span>
        </p>
      )}
    </div>
  )
}
