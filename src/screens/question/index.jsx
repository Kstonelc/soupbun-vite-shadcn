import { PageContainer } from "@/components/ui/pageContainer";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProDialog, ProTable } from "@/components/common";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import soupBunHelper from "@/SoupBunHelper.js";
import { QuestionType } from "@/Enum.js";

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
                    soupBunHelper.navigate(
                      `question/new?questionType=${QuestionType.gapFill}`,
                    );
                  }}
                  className={
                    "p-5 mb-3 flex flex-row justify-between items-center"
                  }
                >
                  <div className={"flex flex-row justify-center items-center"}>
                    <Avatar className={"h-14 w-14 p-2  rounded-sm"}>
                      <AvatarImage
                        src="/public/icon/gapFill.svg"
                        alt="@shadcn"
                      />
                      <AvatarFallback>SoupBun</AvatarFallback>
                    </Avatar>
                    <div className={"ml-5"}>
                      <p className={"font-bold"}>填空题</p>
                      <span className={"text-gray-400 text-sm"}>
                        通过填空的方式考察其对知识的掌握程度
                      </span>
                    </div>
                  </div>
                  <ArrowRight></ArrowRight>
                </Card>
                <Card
                  onClick={() => {}}
                  className={"p-5 flex flex-row justify-between items-center "}
                >
                  <div className={"flex flex-row justify-center items-center"}>
                    <Avatar className={"h-14 w-14 p-2 rounded-sm"}>
                      <AvatarImage
                        src="/public/icon/choiceQuestion.svg"
                        alt="@shadcn"
                      />
                      <AvatarFallback>SoupBun</AvatarFallback>
                    </Avatar>
                    <div className={"ml-5"}>
                      <p className={"font-bold"}>选择</p>
                      <span className={"text-gray-400 text-sm"}>
                        通过单选或多选考察其对知识的掌握程度
                      </span>
                    </div>
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
        <Loader></Loader>
      </Tabs>
    </PageContainer>
  );
};
export default Question;
