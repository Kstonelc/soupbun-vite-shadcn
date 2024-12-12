import { PageContainer } from "@/components/ui/pageContainer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProDialog, ProTable } from "@/components/common";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import soupBunHelper from "@/SoupBunHelper.js";

const Question = () => {
  return (
    <PageContainer>
      <Tabs defaultValue="teamQuestion">
        <div className={"flex flex-row justify-between"}>
          <TabsList className="grid w-1/5 grid-cols-2">
            <TabsTrigger value="teamQuestion">团队题库</TabsTrigger>
            <TabsTrigger value="globalQuestion">公共题库</TabsTrigger>
          </TabsList>
          <ProDialog
            title={"创建笔试题"}
            subTitle={"请选择题目类型"}
            className={"w-1/3"}
            trigger={<Button>新增题目</Button>}
          >
            <Tabs defaultValue="teamQuestion">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="teamQuestion">基础理论</TabsTrigger>
                <TabsTrigger value="globalQuestion">基础编程能力</TabsTrigger>
              </TabsList>
              <TabsContent value="teamQuestion">
                <Card
                  onClick={() => {
                    soupBunHelper.navigate("question/new");
                  }}
                  className={
                    "p-5 flex flex-row justify-between items-center hover:bg-blue-50"
                  }
                >
                  <div className={"flex flex-row justify-center items-center"}>
                    <Avatar className={"h-10 w-10 p-2 bg-gray-100"}>
                      <AvatarImage
                        src="/public/icon/gap-fill.svg"
                        alt="@shadcn"
                      />
                      <AvatarFallback>SoupBun</AvatarFallback>
                    </Avatar>
                    <p className={"ml-5 font-bold"}>填空题</p>
                  </div>
                  <ArrowRight></ArrowRight>
                </Card>
                <Card
                  onClick={() => {}}
                  className={
                    "p-5 flex flex-row justify-between items-center hover:bg-blue-50"
                  }
                >
                  <div className={"flex flex-row justify-center items-center "}>
                    <Avatar className={"h-10 w-10 p-2 bg-gray-100"}>
                      <AvatarImage
                        src="/public/icon/gap-fill.svg"
                        alt="@shadcn"
                      />
                      <AvatarFallback>SoupBun</AvatarFallback>
                    </Avatar>
                    <p className={"ml-5 font-bold"}>选择题</p>
                  </div>
                  <ArrowRight></ArrowRight>
                </Card>
              </TabsContent>
              <TabsContent value="globalQuestion"></TabsContent>
            </Tabs>
          </ProDialog>
        </div>
        <TabsContent value="teamQuestion">
          <ProTable></ProTable>
        </TabsContent>
        <TabsContent value="globalQuestion"></TabsContent>
      </Tabs>
    </PageContainer>
  );
};
export default Question;
