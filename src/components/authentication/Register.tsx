"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";

// Form datatype define
type FormData = {
  name: string;
  email: string;
  password: string;
};

export const Register = () => {
  // Handle Register
  const form = useForm<FormData>();
  const { register, handleSubmit } = form;
  const onSubmit = (data: FormData) => {
    console.log("Form Submitted", data);
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-[350px]">
        <CardHeader className="text-center">
          <CardTitle>Register</CardTitle>
          <CardDescription>Create your account now.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  {...register("name")}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  {...register("email")}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Your password"
                  {...register("password")}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Button className="w-full">Register</Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
