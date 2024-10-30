'use client'

import { submitForm } from '@/utils/submitForm'
import { useState } from 'react'

export const ContactMe: React.FC = () => {

  
  // State for form fields and error handling
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState<{ email?: string; message?: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const validateEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailPattern.test(email)
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError({})
    setIsSubmitting(true)

    // Validate fields
    const newErrors: { email?: string; message?: string } = {}
    if (!validateEmail(email)) {
      newErrors.email = 'Invalid Email'
    }
    if (message.trim().length === 0) {
      newErrors.message = "Message Required"
    }
    
    if (Object.keys(newErrors).length > 0) {
      setError(newErrors)
      setIsSubmitting(false)
      return
    }

    // Submit form data
    try {
      // const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_URL || '', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ email, message }),
      // })
      const response = await submitForm({email,message})
      if (!response) throw new Error("Something Went wrong!")

      // Optionally handle successful submission, e.g., show a toast or alert
      alert('Submitted Succesfully')
      // Reset form fields
      setEmail('')
      setMessage('')
    } catch (error:any) {
      alert(error.message || 'Something went wrong')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id='contact' className='py-20 px-4 w-full grid border-t border-black md:flex md:px-8'>
      <h2 className='md:text-4xl text-2xl mb-4 uppercase font-hanson md:w-1/2'>
        {/* {t('contact-me')} */}
        contact me
        </h2>
      <form onSubmit={onSubmit} className='flex md:w-1/2 flex-col space-y-6'>
        <div>
          <label className='block mb-1'>Email</label>
          <input
            type='email'
            placeholder={'yabba_dabba_doo@yahoo.com'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`border ${error.email ? 'border-red-500' : 'border-gray-300'} p-2 w-full`}
          />
          {error.email && <span className='text-red-500'>{error.email}</span>}
        </div>
        <div>
          <label className='block mb-1'>Message</label>
          <textarea
            minLength={1}
            placeholder={'Lets work to gether.'}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`border ${error.message ? 'border-red-500' : 'border-gray-300'} p-2 w-full min-h-[160px]`}
          />
          {error.message && <span className='text-red-500'>{error.message}</span>}
        </div>
        <button type='submit' disabled={isSubmitting} className="relative inline-block px-4 py-2 font-medium group">
    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
    <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
    <span className="relative text-black group-hover:text-white flex justify-center items-center">{isSubmitting ? 'Submitting...' : 'Submit'}</span>
</button>
      </form>
    </section>
  )
}
