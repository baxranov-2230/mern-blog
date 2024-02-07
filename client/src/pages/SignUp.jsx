import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left  */}
        <div className="flex-1">
          <Link to="/" className="      font-bold dark:text-white text-4xl">
            <span
              className="px-2 py-1 bg-gradient-to-r 
            from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white"
            >
              Ahror
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            aspernatur quas molestiae doloremque cumque omnis dolores tenetur id
            inventore architecto.
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div className="">
              <Label value="Your username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div className="">
              <Label value="Your email" />
              <TextInput type="email" placeholder="Email" id="email" />
            </div>
            <div className="">
              <Label value="Your password" />
              <TextInput type="password" placeholder="Password" id="password" />
            </div>
            <Button type="button" gradientDuoTone="purpleToPink">
              Sign up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <p>Have an account</p>
            <Link to="/sign-in" className="text-blue-500">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
