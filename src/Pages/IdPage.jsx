import React, { useRef ,useEffect,useState, useReducer} from "react";
import html2pdf from "html2pdf.js";
import IdBg from "../Assets/Id.svg";
import Bg from "../Assets/bg.svg";
import axios from "axios";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import badge from "../Assets/badge.png"
import badge2 from "../Assets/badge2.png"
import image from "../Assets/SignUppageImage.png";
import { useNavigate } from "react-router-dom";
import { Button} from "@material-tailwind/react";
import QRCode from 'qrcode-generator';




function IdCard() {
  const idCardRef = useRef(null);
  const navigate =useNavigate()
  const [qrCode, setQRCode] = useState(null);
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
  if (user.id) {
    const qr = QRCode(0, 'M');
    qr.addData(`${user.id}`);
    qr.make();

    setQRCode(qr.createDataURL());
  } else {
    setQRCode(null);
  }
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
      className=" bg-no-repeat lg:w-[893px] lg:h-[1127px];  flex flex-col place-items-center justify-center "
    >


      <div
      ref={idCardRef}
        style={{
          backgroundImage: `url(${Bg})`,
        }}
        className="bg-cover bg-center lg:w-[378px] lg:h-[529px] w-[303px] h-[424px] flex lg:mt-52 mt-80 flex-col items-center justify-center "
      >
      <div className="flex flex-row justify-between space-x-56">
      <img
          src={badge}
          alt="img"
          className="lg:w-9 lg:h-9 w-7 h-7  mt-5 ml-2 lg:mt-0" 
          
          />
           <img
          src={badge2}
          alt="img"
          className="lg:w-9 lg:h-9 w-7 h-7 mt-5 mr-2 lg:mt-0"
          
          />
      </div>

        <div>
         
          <img
          
            src={userDetail.image}
            alt="this is the image"
            className="rounded-full lg:w-28 lg:h-28 w-[90px] h-[90]"
          />
        </div>
        <div className="cardName flex justify-center">{userDetail.name}</div>
        <div className="lg:w-[332px] lg:h-[283px] w-[266px] h-[266px] small flex flex-col items-center  mt-4">
          <div className="volunteer lg:text-3xl text-base font-extrabold">VOLUNTEER</div>
        <div className="items-start lg:mt-4 mt-0 ">
          <div className="text-sm font-k2d text-[#0A093F] pt-2" >Email:<span className="text-black text-sm"> {userDetail.email}</span></div>
          <div className="text-sm font-k2d text-[#0A093F] pt-2">Colledge:<span className="text-black text-sm"> {userDetail.college_name}</span></div>
          <div className="text-sm font-k2d text-[#0A093F] pt-2">Contact No:<span className="text-black text-sm"> {userDetail.number}</span></div>
          {qrCode&&<img src={qrCode} alt="QR Code" className="mt-6 ml-8"/>}

        </div>
        </div>

      </div>
      <Button
          onClick={downloadAsPDF}
          className="mt-6 bg-blue-950 text-white rounded-lg signUp"
          fullWidth
          color="white"
          type="submit"
        >
          DownLoad
        </Button>
    </div>

    <div className=" h-screen hidden md:block w-1/2" style={flagStyle}></div>

    
    </>
  );
}

export default IdCard;
