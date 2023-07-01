import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Fade from 'react-reveal/Fade';


export default function Contact() {


  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
  });
  
  const handleSubmit = (values) => {
    const { name, email, message } = values;
  const subject = 'New Message from Portfolio';
  const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

  const mailtoLink = `mailto:andorfulmichaelebo@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
  };


    return (
      <div>
      <header  className="pt-[200px] flex items-center">
      <h2 className="w-24 text-sm uppercase tracking-wider ">
      Contact
    </h2>
      <div className="h-[1px] flex-1 bg-teal-500 ">
     </div>
       </header> 
       
<div className=" mt-[100px] md:ml-20 text-gray-600 flex flex-col lg:flex lg:flex-row gap-y-12 md:flex  md:justify-center md:items-center">

<Fade  bottom>
<div className="lg:w-1/2 leading-loose w-full"><p>Have an idea for a web application? Do you require a professional website or online store for your company?

 Whatever your requirements are, I am here to assist you in developing and realizing your ideas. Please feel free to contact me .</p>

<p className="md:py-6 py-4">Tel:+233(0)502489254 .</p>


OR

<p className="md:py-6 py-4">
        Email: <a href="mailto:andorfulmichaelebo@gmail.com" className='hover:text-teal-400'>andorfulmichaelebo@gmail.com</a>
      </p>
</div>
</Fade>

<Fade  bottom>
<div className="lg:w-1/2 w-full lg:flex  lg:justify-center ">
<Formik
      initialValues={{ name: '', email: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className='flex flex-col  pb-8'>
          <label htmlFor="name">Whats your name?</label>
          <Field type="text" id="name" name="name"  className="md:w-[400px] bg-transparent border-b border-gray-500  h-[40px]"  />
          <ErrorMessage name="name" component="div" className="error text-red-500 pt-2" />
        </div>

        <div className='flex flex-col  py-8'>
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email"  className="md:w-[400px]  h-[40px] bg-transparent border-b border-gray-500 "/>
          <ErrorMessage name="email" component="div" className="error text-red-500 pt-2" />
        </div>

        <div className='flex flex-col  pb-8'>
        <label htmlFor="message">Message</label>
          <Field as="textarea" id="message" name="message" className="h-[100px] bg-transparent border-b border-gray-500 "  />
          <ErrorMessage name="message" component="div" className="error text-red-800 " />
        </div>


        <button type="submit" className='bg-teal-500 w-[80px]  p-2' disabled={true} >Send</button>
      </Form>
    </Formik>


</div></Fade>
</div>
</div>


        
    );
  }
  
  
    