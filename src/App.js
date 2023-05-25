
// import { useState } from 'react';
// import './App.css';

//  Image slider
// const img = ["https://images.pexels.com/photos/2775835/pexels-photo-2775835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   "https://images.pexels.com/photos/593655/pexels-photo-593655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   "https://images.pexels.com/photos/2775835/pexels-photo-2775835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
// ];

// function App() {

//   const [currImg, setCurrImg] = useState(0);

//   const next = () => {
//     setCurrImg(currImg === img.length - 1 ? 0 : currImg + 1);
//   }

//   const pre = () => {
//     setCurrImg(currImg === 0 ? img.length - 1 : currImg - 1);
//   }

//   return (
//     <div>
//       <h1>Images</h1>
//       <div className='slider'>
//         <button className='right-arrow' onClick={next}>Next</button>
//         <button className='left-arrow' onClick={pre}>Pre</button>

//         {img.map((pic, index) =>
//           currImg === index && (
//             <div key={pic} className="slider">
//               <img src={pic} alt="Images" />
//             </div>
//             )
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;
// ****image slider ****


import React from "react";
import './App.css';
import Question from './Question'

const questions = [
  {
    id:1,
    ques:"where is your home?",
    info:"here you enter your home address.."
    
  },
  {
    id:2,
    ques:"what is your age?",
    info:"here you enter your current age.."
  },
  {
    id:3,
    ques:"whit whom are you work?",
    info:"here you enter your work member names"
  },
  {
    id:4,
    ques:"where is your home",
    info:"here you enter your home address"
  },
]
const App=()=>{
  return(
    <div className="container">
      <h2>Asked your Question</h2>

      <div className="questions">
        {questions.map((question)=> (
          < Question key={question.id} props={question} />
        ))}
      </div>
        
    </div>
  );
}
export default App;



