type Maybe<T> = T | null;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

type City = {
  __typename?: 'City';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  coord?: Maybe<Coordinates>;
  weather?: Maybe<Weather>;
};

type Coordinates = {
  __typename?: 'Coordinates';
  lon?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
};

type Summary = {
  __typename?: 'Summary';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
};

type Temperature = {
  __typename?: 'Temperature';
  actual?: Maybe<Scalars['Float']>;
  feelsLike?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
};

type Wind = {
  __typename?: 'Wind';
  speed?: Maybe<Scalars['Float']>;
  deg?: Maybe<Scalars['Int']>;
};

type Clouds = {
  __typename?: 'Clouds';
  all?: Maybe<Scalars['Int']>;
  visibility?: Maybe<Scalars['Int']>;
  humidity?: Maybe<Scalars['Int']>;
};

type Weather = {
  __typename?: 'Weather';
  summary?: Maybe<Summary>;
  temperature?: Maybe<Temperature>;
  wind?: Maybe<Wind>;
  clouds?: Maybe<Clouds>;
  timestamp?: Maybe<Scalars['Int']>;
};

type ConfigInput = {
  units?: Maybe<Unit>;
  lang?: Maybe<Language>;
};

type Query = {
  __typename?: 'Query';
  getCityByName?: Maybe<City>;
  getCityById?: Maybe<Array<Maybe<City>>>;
};

type QueryGetCityByNameArgs = {
  name: Scalars['String'];
  country?: Maybe<Scalars['String']>;
  config?: Maybe<ConfigInput>;
};

type QueryGetCityByIdArgs = {
  id?: Maybe<Array<Scalars['String']>>;
  config?: Maybe<ConfigInput>;
};

enum Unit {
  Metric = 'metric',
  Imperial = 'imperial',
  Kelvin = 'kelvin',
}

enum Language {
  Af = 'af',
  Al = 'al',
  Ar = 'ar',
  Az = 'az',
  Bg = 'bg',
  Ca = 'ca',
  Cz = 'cz',
  Da = 'da',
  De = 'de',
  El = 'el',
  En = 'en',
  Eu = 'eu',
  Fa = 'fa',
  Fi = 'fi',
  Fr = 'fr',
  Gl = 'gl',
  He = 'he',
  Hi = 'hi',
  Hr = 'hr',
  Hu = 'hu',
  Id = 'id',
  It = 'it',
  Ja = 'ja',
  Kr = 'kr',
  La = 'la',
  Lt = 'lt',
  Mk = 'mk',
  No = 'no',
  Nl = 'nl',
  Pl = 'pl',
  Pt = 'pt',
  PtBr = 'pt_br',
  Ro = 'ro',
  Ru = 'ru',
  Sv = 'sv',
  Se = 'se',
  Sk = 'sk',
  Sl = 'sl',
  Sp = 'sp',
  Es = 'es',
  Sr = 'sr',
  Th = 'th',
  Tr = 'tr',
  Ua = 'ua',
  Uk = 'uk',
  Vi = 'vi',
  ZhCn = 'zh_cn',
  ZhTw = 'zh_tw',
  Zu = 'zu',
}

enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE',
}
