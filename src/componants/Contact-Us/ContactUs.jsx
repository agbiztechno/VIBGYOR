import React from 'react'
import './Style/ContactUs.css';
import ContactBorder from './Componant/ContactBorder';
import Form from './Componant/Form';
import ContentBorder from './Content/ContentBorder';
import ContentForm from './Content/ContentForm';
import MapForm from './Componant/MapForm';
const ContactUs = () => {
  return (
    <div>
      <ContactBorder data={ContentBorder}/>
      <Form data={ContentForm}/>
      <MapForm />
    </div>
  )
}

export default ContactUs