'use client'

import Select from 'react-select'

import useCountry from '@/app/hooks/useCountry'

export type CountrySelectValue = {
  flag: string
  label: string
  latlng: number[]
  region: string
  value: string
}

interface ICountrySelectProps {
  value?: CountrySelectValue
  onChange: (value: CountrySelectValue) => void
}

const CountrySelect: React.FC<ICountrySelectProps> = ({ value, onChange }) => {
  const { getAll } = useCountry()
  return (
    <div>
      <Select
        placeholder='Anywhere'
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as CountrySelectValue)}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        formatOptionLabel={(option: any) => (
          <div className='flex flex-row items-center gap-3'>
            <div>{option.flag}</div>
            <div>
              {option.label}, <span className='ml-1 text-neutral-500'>{option.region}</span>
            </div>
          </div>
        )}
        classNames={{
          control: () => 'p-3 border-2',
          input: () => 'text-lg',
          option: () => 'text-lg'
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: 'black',
            primary25: '#ffe4e6'
          }
        })}
      />
    </div>
  )
}

export default CountrySelect
