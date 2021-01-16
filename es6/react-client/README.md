# React client

## 실행 방법

1. `npm install --global yarn` - yarn 사용할 수 있도록 global에 설치
2. `cd react-app-setup-secries`
3. `yarn` - 관련된 moudle 설치
4. `cp .env.test .env` - 접속할 서버 환경변수 파일 설정 (`https://localhost:4000/graphql`)
5. `yarn linst` - lint 작업
6. `yarn codegen` - 서버에 있는 graphql schema를 이용하여 typescript에서 사용하는 type 자동 생성
7. `yarn start` - React App 실행

## GraphQL API Server

- http://localhost:4000/graphql

### `https://graphql-weather-api.herokuapp.com/` 사용

```graphql
query {
  getCityByName(name: "Seattle") {
    id
    name
    country
    coord {
      lon
      lat
    }
    weather {
      summary {
        title
        description
        icon
      }
      temperature {
        actual
        feelsLike
        min
        max
      }
      wind {
        speed
        deg
      }
      clouds {
        all
        visibility
        humidity
      }
      timestamp
    }
  }
}
```

## Fragment로 확장하기

```javascript
// Weather.tsx
import { gql } from '@apollo/client';
import PropTypes from 'prop-types';
import React, { ReactElement } from 'react';

const WEATHER_FRAGMENT = gql`
  fragment WeatherFragment on City {
    weather {
      summary {
        title
        description
        icon
      }
      temperature {
        actual
        feelsLike
        min
        max
      }
      wind {
        speed
        deg
      }
      clouds {
        all
        visibility
        humidity
      }
      timestamp
    }
  }
`;

export default function Weather({ weather }) {
  return (
    <>
      <h2>Weather</h2>
      <pre>{JSON.stringify(weather, null, 2)}</pre>
    </>
  );
}
Weather.propTypes = {
  weather: PropTypes.any,
};

Weather.fragments = {
  weather: WEATHER_FRAGMENT,
};
```

```javascript
// City.tsx
import { gql, useQuery } from '@apollo/client';
import React, { ReactElement } from 'react';

import Weather from './Weather';

const GET_CITY_BY_NAME = gql`
  query {
    getCityByName(name: "Seattle") {
      id
      name
      country
      coord {
        lon
        lat
      }
      ...WeatherFragment
    }
  }
  ${Weather.fragments.weather}
`;

export default function City() {
  const { loading, error, data } = useQuery(GET_CITY_BY_NAME);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  if (!data) return <div>No data</div>;

  return <pre>{JSON.stringify(data.getCityByName, null, 2)}</pre>;
}
```
