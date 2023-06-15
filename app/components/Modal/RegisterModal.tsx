'use client'

import axios from 'axios'
import { FC, useCallback, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'

import useRegisterModal from '@/app/hooks/useRegisterModal'

interface IRegisterModalProps {}

const RegisterModal: FC<IRegisterModalProps> = ({}) => {
  const registerModal = useRegisterModal()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)
    axios
      .post('/api/register', data)
      .then(() => {
        registerModal.onClose()
      })
      .catch(() => {
        console.log('error')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return <div>RegisterModal</div>
}

export default RegisterModal
