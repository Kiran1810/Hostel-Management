import React, { useRef ,useEffect,useState, useReducer} from "react";
import html2pdf from "html2pdf.js";
import IdBg from "../Assets/Id.svg";
import Bg from "../Assets/bg.svg";
import axios from "axios";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import badge from "../Assets/badge.png"
import badge2 from "../Assets/badge2.png"
import image from "../Assets/SignUppageImage.png"
import { useNavigate } from "react-router-dom";


function IdCard() {
  const idCardRef = useRef(null);
  const navigate =useNavigate()
  const [userDetail,setUserDetail]=useState({
    name:"",
    image:"https://docs.material-tailwind.com/img/face-2.jpg",  
    college_name:"",
    number:"",
   

  })
  const flagStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
  };
  const user=useSelector((state)=>state.auth.userData)

  const downloadAsPDF = () => {
    const input = idCardRef.current;
  
  
    let opt = {
      margin: [10, 0, 10, 0],
      filename: 'IDcard.pdf',
      image: { type: 'jpeg' },
      html2canvas: { useCORS: true, scale: 2 }
    }
    html2pdf().from(input).set(opt).save()
    navigate("/")
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
<>



    <div
    

      style={{
        backgroundImage: `url(${IdBg})`,
      }}
      className=" bg-no-repeat lg:w-10/12 h-screen  flex flex-col place-items-center justify-center "
    >


      <div
      ref={idCardRef}
        style={{
          backgroundImage: `url(${Bg})`,
        }}
        className="bg-cover bg-center InId flex lg:mt-96 flex-col items-center justify-center "
      >
      <div className="flex flex-row justify-between space-x-56">
      <img
          src={badge}
          alt="img"
          className="w-9 h-9"
          
          />
           <img
          src={badge2}
          alt="img"
          className="w-9 h-9"
          
          />
      </div>

        <div>
         
          <img
          
            src={userDetail.image}
            alt="this is the image"
            className="rounded-full w-28 h-28"
          />
        </div>
        <div className="cardName flex justify-center">{userDetail.name}</div>
        <div className="small flex flex-col items-center h-screen mt-4">
          <div className="volunteer">VOLUNTEER</div>
          <div >Email: {userDetail.email}</div>
          <div>Colledge: {userDetail.college_name}</div>
          <div>Contact No: {userDetail.number}</div>
        </div>
      </div>
      <button
        className="downLoad  lg:p-4 72  mt-20 text-white font-K2D font-normal text-2xl p-0 "
        onClick={downloadAsPDF}
      >
        Download
      </button>
    </div>

   
    
    </>
  );
}

export default IdCard;
