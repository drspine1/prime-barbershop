import FooterImage from "../component/footerImage";
import Header from "../aboutComponents/header";
import ContactBody from "../contactComponents/contactBody";
const Contact = () => {
  return ( 
    <>
    
    <div className="contact-page">
    <Header  img="/images/contactbg.jpg" tittle="contact" span="us">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos repellat
      </Header>
      <ContactBody/>
    <FooterImage image="/images/barber3.jpg" tittle="we're here for you"/>
    </div>
    </>
   );
}
 
export default Contact;