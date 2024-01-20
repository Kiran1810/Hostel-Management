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
      <div className="flex justify-center items-center h-screen">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="white" className="text-center text-6xl">
            CONTACT US
          </Typography>
          <form className="mt-8 mb-2 w-96 max-w-screen-lg sm:w-96">
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
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full pl-2"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <div className="flex flex-row gap-4">
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
                    className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full pl-2"
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
                    className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full pl-2"
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
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full pl-2"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
            </div>
  
            <Button className="bg-blue-600 text-2xl px-8 py-3">Submit</Button>
          </form>
        </Card>
      </div>
    );
  }
  
  export default QueryContactPage;
  