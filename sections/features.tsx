import Image from 'next/image';
import { features } from '../constants/index'

const Features = () => {
 return (
  <section>
   <div className="element">
    <div className="container">
     <div className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3">
      {features.map(({id, icon, caption, title, text, button}) => (
       <div key={id} className='relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320'>
        <div className='w-full flex justify-start items-start'>
         <div className='-ml-3 mb-12 flex items-center justify-center flex-col'>
          <div className='w-0.5 h-16 bg-s3' />
          <Image src={icon} alt={title} width={112} height={112} className='object-contain' />
         </div>
        </div>
        <p className=''>{caption}</p>
       </div>
      ))}
     </div>
    </div>
   </div>
  </section>
 )
}

export default Features;