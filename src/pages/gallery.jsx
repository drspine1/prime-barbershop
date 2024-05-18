import FooterImage from "../component/footerImage";
import Header from "../aboutComponents/header";
import GalleryBody from "../galleryComponent/galleryBody";
const Gallery = () => {
  return ( 
    <>
      <div className="gallery-page">
      <Header  img="/images/gallerybg.jpg" tittle="our" span="gallery">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos repell
      </Header>
      <GalleryBody/>
    <FooterImage image="/images/barber3.jpg" tittle="we're here for you"/>
      </div>
    </>
   );
}
 
export default Gallery;