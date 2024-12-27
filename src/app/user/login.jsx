// import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-3xl flex flex-col md:flex-row overflow-hidden">
        {/* Left side with image */}
        <div className="md:w-1/2 relative h-64 md:h-auto">
          {/*<Image*/}
          {/*  src="/placeholder.svg?height=400&width=400"*/}
          {/*  alt="Login visual"*/}
          {/*  layout="fill"*/}
          {/*  objectFit="cover"*/}
          {/*/>*/}
        </div>

        {/* Right side with login form */}
        <div className="md:w-1/2 p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
            <CardDescription>Please sign in to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Sign In</Button>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
}
