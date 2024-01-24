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
      <div className="flex justify-center items-center p-6 lg:p-8">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="white" className="text-center text-2xl lg:text-5xl font-Play">
            CONTACT US
          </Typography>
          <div className="ml-6 mr-6  ">
          <form className="mt-8 mb-2 max-w-screen-lg w-96 lg:w-98">
            <div className="mb-6 flex flex-col gap-8">
              <div className="flex flex-col relative">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-white dark:text-gray-300 absolute top-2 left-2 transition-all pointer-events-none "
                >
                  {name === "" ? "Name*" : ""}
                </label>
                <Input
                  size="2xl"
                  placeholder=""
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900 lg:w-full pl-1"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <div className="flex flex-row  gap-[0.2] lg:gap-0.5">
                <div className="flex flex-col relative">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-white dark:text-gray-300 absolute top-2 left-2 transition-all pointer-events-none"
                  >
                    {phone === "" ? "Phone*" : ""}
                  </label>
                  <Input
                    size="xl"
                    placeholder=""
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-[180px] lg:w-[180px] pl-1"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <div className="flex flex-col relative">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-white dark:text-gray-300 absolute top-2 left-2 transition-all pointer-events-none"
                  >
                    {email === "" ? "Email*" : ""}
                  </label>
                  <Input
                    type="text"
                    size="xl"
                    placeholder=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-[184px] lg:w-[185px] pl-2"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col relative">
                <label
                  htmlFor="query"
                  className="text-sm font-medium text-white dark:text-gray-300 absolute top-2 left-2 transition-all pointer-events-none"
                >
                  {query === "" ? "Write your query here" : ""}
                </label>
                <Textarea
                  size="2xl"
                  placeholder=""
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900 lg:w-full pl-2"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
            </div>
  
            <Button className="bg-blue-600 text-xl lg:text-xl lg:px-6 lg:py-2 ">submit</Button>
          </form>
          </div>
        </Card>
      </div>
    );
  }
  
  export default QueryContactPage;
  