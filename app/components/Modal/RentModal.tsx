'use client'

import { useMemo, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'

import useRentModal from '@/app/hooks/useRentModal'

import { categories } from '../Navbar/Categories'
import Modal from './Modal'
import Heading from '../Heading'
import CategoryInput from '../Input/CategoryInput'
import CountrySelect from '../Input/CountrySelect'
import dynamic from 'next/dynamic'

interface IRentModalProps {}

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5
}

const RentModal: React.FC<IRentModalProps> = ({}) => {
  const rentModal = useRentModal()
  const [step, setStep] = useState(STEPS.CATEGORY)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset
  } = useForm<FieldValues>({
    defaultValues: {
      category: '',
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: '',
      price: 1,
      title: '',
      description: ''
    }
  })

  const category = watch('category')
  const location = watch('location')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Map = useMemo(() => dynamic(() => import('../Map'), { ssr: false }), [location])

  const setCustomValue = (id: string, value: unknown) =>
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true
    })

  const onBack = () => {
    setStep((prev) => prev - 1)
  }

  const onNext = () => {
    setStep((prev) => prev + 1)
  }

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return 'Create'
    }

    return 'Next'
  }, [step])

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined
    }

    return 'Back'
  }, [step])

  let bodyContent = (
    <div className='flex flex-col gap-8'>
      <Heading title='Which of these best describes your places?' subtitle='Pick a category' />
      <div className='grid max-h-[50vh] grid-cols-1 gap-3 overflow-y-auto md:grid-cols-2'>
        {categories.map((item) => (
          <div className='col-span-1' key={item.label}>
            <CategoryInput
              onClick={(category) => setCustomValue('category', category)}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  )

  if (step === STEPS.LOCATION) {
    bodyContent = (
      <div className='flex flex-col gap-8'>
        <Heading title='Where is your place located?' subtitle='Pick a location!' />
        <CountrySelect onChange={(value) => setCustomValue('location', value)} value={location} />
        <Map center={location?.latlng} />
      </div>
    )
  }

  return (
    <Modal
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={onNext}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      title='Airbnb your home!'
      body={bodyContent}
    />
  )
}

export default RentModal