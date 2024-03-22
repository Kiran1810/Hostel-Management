import {
    Card,
    Input,
    Button,
    Typography,
    Textarea,
} from "@material-tailwind/react";
import { useState } from "react";

export function QueryContactPage() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [query, setQuery] = useState("");

    return (
        <div className="flex justify-center items-center p-1 lg:p-8 contact ">
            <Card color="transparent" shadow={false}>
                <div className="ml-6 mr-6  ">
                    <form className="mt-8 mb-2 max-w-screen-lg w-100% lg:w-98 lg:h-98">
                        <div className="mb-6 flex flex-col gap-8 ">
                            <div className="flex flex-col relative ">
                                <label
                                    htmlFor="name"
                                    className="text-sm font-medium text-white dark:text-gray-300 absolute top-2 left-2 transition-all pointer-events-none "
                                >
                                    {name === "" ? "Name*" : ""}
                                </label>
                                <Input
                                    size=""
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="!border-t-blue-gray-200 focus:!border-t-gray-900 lg:w-full w-[300px] pl-1 h-8 text-white"
                                    labelProps={{
                                        className:
                                            "before:content-none after:content-none",
                                    }}
                                />
                            </div>
                            <div className="flex lg:flex-row flex-col gap-[0.2] space-y-8 lg:space-y-0 lg:gap-0.5">
                                <div className="flex flex-col relative">
                                    <label
                                        htmlFor="phone"
                                        className="text-sm font-medium absolute top-2 left-2 transition-all pointer-events-none h-8 text-white"
                                    >
                                        {phone === "" ? "Phone*" : ""}
                                    </label>
                                    <Input
                                        size=""
                                        value={phone}
                                        onChange={(e) =>
                                            setPhone(e.target.value)
                                        }
                                        className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-[90px] lg:w-[180px] pl-1 h-8 text-white"
                                        labelProps={{
                                            className:
                                                "before:content-none after:content-none",
                                        }}
                                    />
                                </div>
                                <div className="flex flex-col relative">
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-medium text-white dark:text-gray-300 absolute top-2 left-2 transition-all pointer-events-none h-8"
                                    >
                                        {email === "" ? "Email*" : ""}
                                    </label>
                                    <Input
                                        type="text"
                                        size=""
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-[90px] lg:w-[185px] pl-2 h-8 text-white"
                                        labelProps={{
                                            className:
                                                "before:content-none after:content-none",
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col relative">
                                <label
                                    htmlFor="query"
                                    className="text-sm font-medium text-white dark:text-gray-300 absolute top-2 left-2 transition-all pointer-events-none h-8"
                                >
                                    {query === ""
                                        ? "Write your query here"
                                        : ""}
                                </label>
                                <Textarea
                                    size=""
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-[300px] lg:w-full pl-2 text-white"
                                    labelProps={{
                                        className:
                                            "before:content-none after:content-none",
                                    }}
                                />
                            </div>
                        </div>

                        <Button className="bg-blue-600 text-sm ml-8 lg:ml-0 lg:text-xl lg:px-6 lg:py-2  px-10">
                            submit
                        </Button>
                    </form>
                </div>
            </Card>
        </div>
    );
}

export default QueryContactPage;
