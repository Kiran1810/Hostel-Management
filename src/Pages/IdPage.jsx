import React, { useRef ,useEffect,useState, useReducer} from "react";
import html2pdf from "html2pdf.js";
import IdBg from "../Assets/Id.svg";
import Bg from "../Assets/bg.svg";
import axios from "axios";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

function IdCard() {
  const idCardRef = useRef(null);
  const [userDetail,setUserDetail]=useState({
    name:"",
    image:"https://docs.material-tailwind.com/img/face-2.jpg",
    college_name:"",
    number:"",
   

  })
  const user=useSelector((state)=>state.auth.userData)

 
    



  const downloadAsPDF = () => {
    const input = idCardRef.current;
  
  
    let opt = {
      margin:       [10, 0, 10, 0],
      filename: 'IDcard.pdf',
      image: { type: 'jpeg' },
      html2canvas: { useCORS: true, scale: 2 }
    }
    html2pdf().from(input).set(opt).save()
  };
  
  useEffect(()=>{

    const token=Cookies.get('myToken');
    const headers = {
      Authorization: `Bearer ${token}`,
  };
      try{
        axios.get(`https://e-cell-backend2k24.onrender.com/esummit/user/${user.id}/`,{headers})
        .then((response)=>setUserDetail({
          name:response.data.name,
          image:response.data.image,
          college_name:response.data.college_name,
          email:response.data.email,
          number:response.data.number


        }))

      }catch{

      }
  },[])

  return (
    <div
    
      
      style={{
        backgroundImage: `url(${IdBg})`,
      }}
      className="h-screen Id flex flex-col items-center justify-center"
    >
      <div
      ref={idCardRef}
        style={{
          backgroundImage: `url(${Bg})`,
        }}
        className="bg-cover bg-center InId flex flex-col items-center justify-center"
      >
        <div>
          <img
          
            src={userDetail.image}
            alt="this is the image"
            className="rounded-full w-28 h-28"
          />
        </div>
        <div className="cardName">{userDetail.name}</div>
        <div className="small flex flex-col items-center h-screen">
          <div className="volunteer">VOLUNTEER</div>
          <div >Email: {userDetail.email}</div>
          <div>Colledge: {userDetail.college_name}</div>
          <div>Contact No: {userDetail.number}</div>
        </div>
      </div>
      <button
        className="downLoad mt-20 text-white font-K2D font-normal text-2xl"
        onClick={downloadAsPDF}
      >
        Download
      </button>
    </div>
  );
}

export default IdCard;
