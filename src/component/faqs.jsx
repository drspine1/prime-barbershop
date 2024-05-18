import SingleFaq from "./singleFaq";

const Faqs = ({askQuestions}) => {
  return ( 
    <>
     <div className="faqs-container">
      {askQuestions.map((questions) =>{
        return <SingleFaq key={questions.id} {...questions}/>
      })}
     </div>
    </>
   );
}
 
export default Faqs;