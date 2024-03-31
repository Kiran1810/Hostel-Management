import React, { useEffect, useRef, useState, useCallback } from "react";
import { Button, Input } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import axios from "axios";
import Cookies from "js-cookie";
import { Select, Option } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Id() {
    const user = useSelector((state) => state.auth.userData);
    console.log(user.id, "the user in the id card");
    const fileInputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [showInstituteName, setShowInstituteName] = useState(false);
    const navigate = useNavigate();
    const [detail, setDetail] = useState({
        image: "https://docs.material-tailwind.com/img/face-2.jpg",
        number: "",
        is_NIT: true,
        college_name: "nit-h",
    });
    const [uploading, setUploading] = useState(false);

    const handleSelectChange = (selectedValue) => {
        setShowInstituteName(selectedValue !== "Nit Hamirpur");
        setDetail((prevDetail) => ({
            ...prevDetail,
            is_NIT: selectedValue === "Nit Hamirpur",
        }));
    };

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();

            const authToken = Cookies.get("myToken");

            const headers = {
                Authorization: `Bearer ${authToken}`,
            };
            console.log("interaction with the code");
            // if (user.id) {
            //   setUploading(true);

            axios
                .patch(
                    `https://e-cell-backend2k24-tppt.onrender.com/esummit/update/user/${user.id}/`,
                    { ...detail },
                    { headers }
                )
                .then((response) => {
                    console.log("inside the idcard");
                    console.log("From id", response);
                    navigate("/downLoad");
                })
                .catch((error) => {
                    console.error("Error approving:", error);
                    toast.error("valid number is required"); // Display the error message in the toast
                })
                .finally(() => {
                    setUploading(false);
                });
        },
        [detail, user.id]
    );

    const handleImageUpload = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(file);
        }
    };
    useEffect(() => {
        if (selectedImage) {
            handleUpload();
        }
    }, [selectedImage]);

    const handleUpload = async () => {
        try {
            if (!selectedImage) {
                console.error("No image selected.");
                return;
            }

            const formData = new FormData();
            formData.append("file", selectedImage);
            formData.append("upload_preset", "karanUpload");

            setUploading(true);

            const response = await axios.post(
                "https://api.cloudinary.com/v1_1/dha8atrgz/image/upload",
                formData
            );

            const imageUrl = response.data.secure_url;
            setDetail((prevDetail) => ({ ...prevDetail, image: imageUrl }));

            setUploading(false);
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col h-screen justify-center items-center px-4 space-y-8">
                <div className="relative items-center p-2">
                    <img
                        src={detail.image}
                        alt="img"
                        className="w-52 h-52 rounded-full"
                    />
                    {/* {uploading && (
                        
                        // <img
                        //     src={ClipLoader}
                        //     alt="spinner"
                        //     className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        // />

                        <div><  <ClipLoader />/div>
                      
                    )} */}
                    {uploading && (
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <ClipLoader color=" #075488" size={50} />
                        </div>
                    )}
                    <svg
                        width="61"
                        height="61"
                        viewBox="0 0 61 61"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                        onClick={handleImageUpload}
                    >
                        <g clipPath="url(#clip0_664_944)">
                            <rect
                                x="0.152344"
                                y="0.152039"
                                width="60"
                                height="60"
                                rx="30"
                                fill="#002052"
                            />
                            <path
                                d="M15.1523 38.9029V45.152H21.4015L39.8323 26.7213L33.5831 20.4721L15.1523 38.9029ZM44.6649 21.8886C45.3148 21.2387 45.3148 20.1888 44.6649 19.5389L40.7655 15.6395C40.1155 14.9896 39.0657 14.9896 38.4158 15.6395L35.3662 18.689L41.6153 24.9382L44.6649 21.8886Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_664_944">
                                <rect
                                    x="0.152344"
                                    y="0.152039"
                                    width="60"
                                    height="60"
                                    rx="30"
                                    fill="white"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="text-slate-500 w-full">
                    <label>Contact Number</label>
                    <Input
                        type="text"
                        className="!border !border-gray-300 rounded bg-gray-200 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                        labelProps={{
                            className: "hidden",
                        }}
                        containerProps={{ className: "min-w-[100px]" }}
                        onChange={(e) =>
                            setDetail({
                                ...detail,
                                number: e.target.value,
                            })
                        }
                    />
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                    />
                </div>
                <div className="w-full">
                    <Select
                        variant="outlined"
                        color="black"
                        label="Select Institute"
                        className=""
                        value={detail.is_NIT ? "Nit Hamirpur" : "Others"}
                        onChange={(selectedValue) =>
                            handleSelectChange(selectedValue)
                        }
                    >
                        <Option value="Nit Hamirpur">NIT HAMIRPUR</Option>
                        <Option value="Others">Others</Option>
                    </Select>
                </div>
                {showInstituteName && (
                    <div className="text-slate-500 w-full">
                        <label>Name of Institution</label>
                        <Input
                            type="text"
                            className="!border !border-gray-300 rounded bg-gray-200 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                            labelProps={{
                                className: "hidden",
                            }}
                            containerProps={{ className: "min-w-[100px]" }}
                            onChange={(e) =>
                                setDetail({
                                    ...detail,
                                    college_name: e.target.value,
                                })
                            }
                        />
                    </div>
                )}
                <Button
                    onClick={handleSubmit}
                    className="mt-6 bg-blue-950 text-white rounded-lg signUp"
                    fullWidth
                    color="white"
                    type="submit"
                >
                    Sign Up
                </Button>
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </div>
        </form>
    );
}

export default Id;
