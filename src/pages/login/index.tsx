import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { UserSignIn } from "@/types";
import { Icons } from "@/components/ui/icons";
import { useUserAuth } from "@/context/UserAuthContext";

const initialValue: UserSignIn = {
  email: "",
  password: "",
};

interface ISignUpProps {
  email: string;
  password: string;
}

// form submission handler

const Login: React.FunctionComponent<ISignUpProps> = () => {
  const { googleSignIn, logIn } = useUserAuth();
  const navigate = useNavigate();
  const [userLoninInfo, setUserLoninInfo] = useState<UserSignIn>(initialValue);

  const handleGoogleSignIn = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.log("first error", error);
    }
  };
  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("User info is", userLoninInfo);
      await logIn(userLoninInfo.email, userLoninInfo.password);
      navigate("/");
    } catch (error) {
      console.log("first error", error);
    }
  };
  return (
    <Card className="w-full h-screen flex justify-center items-center bg-[#ffffff]">
      <form action="" onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Welcome Back</CardTitle>
          <CardDescription className="text-center">Enter your credentials below to access your account</CardDescription>
        </CardHeader>

        <CardContent className="grid gap-4">
          <div className="grid grid-cols-1 gap-6">
            {/* <Button variant="outline">
              <Icons.gitHub className="mr-2 h-4 w-4" />
              Github
            </Button> */}
            <Button variant="outline" onClick={handleGoogleSignIn}>
              <Icons.google className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={userLoninInfo.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setUserLoninInfo({ ...userLoninInfo, email: e.target.value });
              }}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={userLoninInfo.password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setUserLoninInfo({ ...userLoninInfo, password: e.target.value });
              }}
            />
          </div>
        </CardContent>

        <CardFooter className="flex flex-col items-center space-y-2">
          <Button className="w-full bg-[#3742fa] text-white font-medium hover:bg-[#3741fadb]" type="submit">
            Login
          </Button>
          <p>
            Dont have account already ?{" "}
            <Link to="/signup" className="text-primary">
              Signup
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
};

export default Login;
