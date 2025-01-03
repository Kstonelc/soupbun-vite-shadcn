import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/Separator";
import { AiFillWechat } from "react-icons/ai";
import soupBunHelper from "@/SoupBunHelper.js";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary p-4 bg-grid">
      <div
        className={
          "flex flex-row justify-center items-center absolute top-10 right-10"
        }
      >
        <span className="text-sm mr-2">没有账号?</span>
        <Button
          size={"xs"}
          className={"px-2 py-1"}
          onClick={() => {
            soupBunHelper.navigate("/register");
          }}
        >
          去注册
        </Button>
      </div>
      <Card className="w-full max-w-xl flex flex-col md:flex-row overflow-hidden">
        <div className="md:w-full p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              欢迎来到 <span className={"text-3xl ml-2"}>SoupBun</span>
            </CardTitle>
            <CardDescription>欢迎使用汤包笔面试系统</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">邮箱</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="输入您的邮箱"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">密码</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="输入您的密码"
                    required
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className={"flex-col"}>
            <Button className="w-full mb-8">立即登录</Button>
            <div className="flex flex-row items-center justify-center">
              <Separator className="flex-grow" />
              <span className="mx-2 whitespace-nowrap text-sm text-gray-600">
                第三方登录
              </span>
              <Separator className="flex-grow" />
            </div>
            <AiFillWechat className={"w-8 h-8 text-green-600"} />
          </CardFooter>
        </div>
      </Card>
    </div>
  );
};

export default Login;
