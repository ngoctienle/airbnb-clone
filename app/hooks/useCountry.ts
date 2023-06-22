import countries from 'world-countries'

const formattedCountry = countries.map((country) => ({
  value: country.cca2,
  label: country.name.common,
  flag: country.flag,
  latlng: country.latlng,
  region: country.region
}))

const useCountry = () => {
  const getAll = () => formattedCountry

  const getByValue = (value: string) => formattedCountry.find((item) => item.value === value)

  return {
    getAll,
    getByValue
  }
}

export default useCountry
