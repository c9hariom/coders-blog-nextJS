import React from 'react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    txtName: '',
    txtEmail: '',
    txtPhone: '',
    txtMsg: ''
  })

  const [errors, setErrors] = useState('')

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (formData.txtName.length < 3) {
      setErrors('Name Should be atleast 3 characters long')
      return
    }
    if (formData.txtEmail.length < 3 || !formData.txtEmail.includes('@')) {
      setErrors('Invalid Email')
      return
    }
    if (formData.txtMsg.length < 5) {
      setErrors('Message should be atlest 5 characters long')
      return
    }
    try {
      setErrors('')
      const response = await fetch('http://localhost:3000/api/contact/', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const data = await response.json()
      if (data.status === '200') {
        alert('message sent')
        setFormData({
          txtName: '',
          txtEmail: '',
          txtPhone: '',
          txtMsg: ''
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='container contact-form'>
      <div className='contact-image'>
        <img src='/rocket-contact.png' alt='rocket_contact' />
      </div>
      <form method='post'>
        <h3>Drop Us a Message</h3>
        <center>
          <p className='my-5' style={{ color: 'red' }}>
            {errors}
          </p>
        </center>
        <div className='row'>
          <div className='col-md-6'>
            <div className='form-group'>
              <input
                type='text'
                name='txtName'
                className='form-control'
                placeholder='Your Name *'
                value={formData.txtName}
                onChange={handleChange}
                required
                minLength={3}
              />
            </div>
            <div className='form-group mt-1'>
              <input
                type='email'
                name='txtEmail'
                className='form-control'
                placeholder='Your Email *'
                value={formData.txtEmail}
                onChange={handleChange}
                required
                minLength={3}
              />
            </div>
            <div className='form-group mt-1'>
              <input
                type='text'
                name='txtPhone'
                className='form-control'
                placeholder='Your Phone Number *'
                value={formData.txtPhone}
                onChange={handleChange}
              />
            </div>
            <div className='form-group mt-2'>
              <input
                onClick={handleSubmit}
                type='submit'
                name='btnSubmit'
                className='btnContact'
              />
            </div>
          </div>
          <div className='col-md-6'>
            <div className='form-group'>
              <textarea
                name='txtMsg'
                className='form-control'
                placeholder='Your Message *'
                style={{ width: '100%', height: '150px' }}
                value={formData.txtMsg}
                onChange={handleChange}
                required
                minLength={5}
              ></textarea>
            </div>
          </div>
        </div>
      </form>
      <style jsx>
        {`
          body {
            background: -webkit-linear-gradient(left, #0072ff, #00c6ff);
          }
          .contact-form {
            background: #fff;
            margin-top: 10%;
            margin-bottom: 5%;
            width: 70%;
          }
          .contact-form .form-control {
            border-radius: 1rem;
          }
          .contact-image {
            text-align: center;
          }
          .contact-image img {
            border-radius: 6rem;
            width: 11%;
            margin-top: -3%;
            transform: rotate(29deg);
          }
          .contact-form form {
            padding: 14%;
          }
          .contact-form form .row {
            margin-bottom: -7%;
          }
          .contact-form h3 {
            margin-bottom: 8%;
            margin-top: -10%;
            text-align: center;
            color: #0062cc;
          }
          .contact-form .btnContact {
            width: 50%;
            border: none;
            border-radius: 1rem;
            padding: 1.5%;
            background: #dc3545;
            font-weight: 600;
            color: #fff;
            cursor: pointer;
          }
          .btnContactSubmit {
            width: 50%;
            border-radius: 1rem;
            padding: 1.5%;
            color: #fff;
            background-color: #0062cc;
            border: none;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  )
}

export default Contact
