import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

import Layout from "../components/Layout"
import Seo from "../components/Seo"

function ContactPage() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    sent: false,
  })

  const onChange = (e) => {
    const value = e.target.value;
    const name = e.target.getAttribute("name");
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    
    try {
      const templateParams = {
        name,
        email,
        subject,
        message
      };
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      reset();
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Layout pageTitle="Contact">
      <Seo title="Contact" />
      <header class="post-header inner-sm">
        <h1 class="post-title underline">📧 Contact</h1>
      </header>
      <section id="contact-form" class="block block-form">
        <div class="block-content inner-sm">
          <p>문의할 내용을 보내주세요.</p>
          <form name='contactForm' id='contactForm' onSubmit={handleSubmit(onSubmit)} noValidate>
            <div class="screen-reader-text">
              <label>
                Don't fill this out if you're human:
                <input name="bot-field" />
              </label>
            </div>
            <input type="hidden" name="form-name" value="contactForm" />
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type='text'
                name='name'
                {...register('name', {
                  required: { value: true, message: 'Please enter your name' },
                  maxLength: {
                    value: 30,
                    message: 'Please use 30 characters or less'
                  }
                })}
                className='form-control formInput'
                placeholder='Name'
              ></input>
              {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type='email'
                name='email'
                {...register('email', {
                  required: true,
                  pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                })}
                className='form-control formInput'
                placeholder='Email address'
              ></input>
              {errors.email && (
                <span className='errorMessage'>Please enter a valid email address</span>
              )}
            </div>
            <div class="form-group">
              <label for="subject">Subject</label>
              <input
                type='text'
                name='subject'
                {...register('subject', {
                  required: { value: true, message: 'Please enter a subject' },
                  maxLength: {
                    value: 75,
                    message: 'Subject cannot exceed 75 characters'
                  }
                })}
                className='form-control formInput'
                placeholder='Subject'
              ></input>
              {errors.subject && (
                <span className='errorMessage'>{errors.subject.message}</span>
              )}
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                rows={3}
                name='message'
                {...register('message', {
                  required: true
                })}
                className='form-control formInput'
                placeholder='Message'
              ></textarea>
              {errors.message && <span className='errorMessage'>Please enter a message</span>}
            </div>
            <div class="form-submit">
              <button type="submit" class="button">Send Message</button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage;
