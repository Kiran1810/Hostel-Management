import React, { useEffect, useRef, useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import axios from "axios";
import Cookies from "js-cookie";
import { Select, Option } from "@material-tailwind/react";

function Id() {
    const user = useSelector((state) => state.auth.userData);
    const [checkNit, setCheckNit] = useState(true);
    const fileInputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [detail, setDetail] = useState({
        number: "678678678",
        is_NT: "true",
        image: "https://docs.material-tailwind.com/img/face-2.jpg",
        college_name: "nit-h",
    });

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setCheckNit(selectedValue === "Nit Hamirpur");
    };

    useEffect(() => {
        const authToken = Cookies.get("myToken");

        console.log("My token ", authToken);

        const headers = {
            Authorization: `Bearer ${authToken}`,
        };
        if (user.id) {
            axios
                .patch(
                    `https://e-cell-backend2k24.onrender.com/esummit/update/user/${user.id}/`,
                    { ...detail, is_NIT: false },
                    { headers }
                )
                .then((response) => {
                    console.log("From id", response);
                })
                .catch((error) => {
                    console.error("Error approving :", error);
                });
        }
    }, [detail.image]);
    function handleImageUpload() {
        fileInputRef.current.click();
    }

    function handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(file);
        }
        console.log("image stated to upload");
        handleUpload();
        console.log("image has upload");

        console.log("Selected file:", file);
    }

    const handleUpload = async () => {
        try {
            if (!selectedImage) {
                console.error("No image selected.");
                return;
            }

            const formData = new FormData();
            formData.append("file", selectedImage);
            formData.append("upload_preset", "karanUpload");

            const response = await axios.post(
                "https://api.cloudinary.com/v1_1/dha8atrgz/image/upload",
                formData
            );

            const imageUrl = response.data.secure_url;
            setDetail((prevDetail) => ({ ...prevDetail, image: imageUrl }));
            console.log("the uploaded image", imageUrl);
        } catch (error) {
            console.error("Error uploading image:", error);
        } finally {
        }
    };

    return (
        <form>
            <div className="flex flex-col h-screen justify-center items-center px-4 space-y-8">
                <div className="relative items-center p-2">
                    <img
                        src={detail.image}
                        alt="img"
                        className="w-52 h-52 rounded-full"
                    />
                    {console.log(detail.image)}
                    <svg
                        width="61"
                        height="61"
                        viewBox="0 0 61 61"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2"
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
                        className="  !border !border-gray-300 rounded bg-gray-200 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                        labelProps={{
                            className: "hidden",
                        }}
                        containerProps={{ className: "min-w-[100px]" }}
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
                        onChange={(event) => {
                            console.log("Selected value:", event);
                            if (event && event.target && event.target.value) {
                                const selectedValue = event.target.value;
                                console.log("Selected value:", selectedValue);
                                setCheckNit(selectedValue === "Nit Hamirpur");
                            } else {
                                console.error("Invalid event or value");
                            }
                        }}
                    >
                        <Option>NIT HAMIRPUR</Option>
                    </Select>
                </div>
                {checkNit && (
                    <div className="text-slate-500 w-full">
                        <label>Name of Institution</label>
                        <Input
                            type="text"
                            className="  !border !border-gray-300 rounded bg-gray-200 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                            labelProps={{
                                className: "hidden",
                            }}
                            containerProps={{ className: "min-w-[100px]" }}
                        />
                    </div>
                )}

                <Button
                    className="mt-6 bg-blue-950 text-black rounded-lg"
                    fullWidth
                    color="white"
                    type="submit"
                >
                    Sign Up
                </Button>
            </div>
        </form>
    );
}

export default Id;
