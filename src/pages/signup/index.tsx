import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { UserSignUp } from "@/types";
import { Icons } from "@/components/ui/icons";
import { useUserAuth } from "@/context/UserAuthContext";

const initialValue: UserSignUp = {
  email: "",
  password: "",
  confirmPassword: "",
};

interface ISignUpProps {
  email: string;
  password: string;
  confirmPassword: string;
}

// form submission handler

const SignUp: React.FunctionComponent<ISignUpProps> = () => {
  const { googleSignIn, signUp } = useUserAuth();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<UserSignUp>(initialValue);

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
      console.log("User info is", userInfo);
      await signUp(userInfo.email, userInfo.password);
      navigate("/login");
    } catch (error) {
      console.log("first error", error);
    }
  };
  return (
    <Card className="w-full h-screen flex justify-center items-center bg-[#ffffff]">
      <form action="" onSubmit={handleSubmit} className="container max-w-lg mx-auto">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Create an account</CardTitle>
          <CardDescription className="text-center">Enter your email below to create your account</CardDescription>
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
              value={userInfo.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setUserInfo({ ...userInfo, email: e.target.value });
              }}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={userInfo.password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setUserInfo({ ...userInfo, password: e.target.value });
              }}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Confirm Password</Label>
            <Input
              id="password2"
              type="password"
              value={userInfo.confirmPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setUserInfo({ ...userInfo, confirmPassword: e.target.value });
              }}
            />
          </div>
        </CardContent>

        <CardFooter className="flex flex-col items-center space-y-2">
          <Button className="w-full bg-[#3742fa] text-white font-medium hover:bg-[#3741fadb]" type="submit">
            Create account
          </Button>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-primary">
              Login
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
};

export default SignUp;
