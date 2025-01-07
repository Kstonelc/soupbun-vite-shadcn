import {
  Form,
  Button,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Input,
  CardHeader,
  CardTitle,
  CardContent,
  Card,
} from "@/components/ui";
import { AiOutlineMail, AiOutlineKey } from "react-icons/ai";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { registerUser } from "../../apis/user";

const Register = () => {
  //region 定义表单字段校验
  const formSchema = z
    .object({
      email: z.string().email({
        message: "请输入有效的电子邮件地址。",
      }),
      password: z.string().min(8, {
        message: "密码至少需要8个字符。",
      }),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "密码不匹配,尝试重新输入?",
      path: ["confirmPassword"],
    });
  //endregion

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  //region 初始化

  useEffect(() => {
    initialize();
    return () => {
      destroy();
    };
  }, []);

  const initialize = () => {};

  const destroy = () => {};

  //endregion

  //region 方法

  const onSubmit = async (values) => {
    // TODO 密码加密
    console.log(values);
    await registerUser(values);
  };

  //endregion

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary p-4 bg-grid">
      <Card className="w-full max-w-xl flex flex-col md:flex-row overflow-hidden">
        <div className="md:w-full p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              欢迎注册 <span className={"text-3xl ml-2"}>SoupBun🎉🎉</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={"flex flex-row gap-2"}>
                        <AiOutlineMail />
                        邮箱地址
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="请输入您的邮箱" {...field} />
                      </FormControl>
                      <FormDescription>
                        我们将不会分享您的电子邮件。
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={"flex flex-row gap-2"}>
                        <AiOutlineKey />
                        密码
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="请输入您的密码"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>密码应至少包含8个字符。</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>确认密码</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="请重新输入您的密码"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className={"mt-8"}>
                  提交注册
                </Button>
              </form>
            </Form>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};
export default Register;
