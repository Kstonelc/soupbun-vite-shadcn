import { PageContainer } from "@/components/ui/pageContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProDialog, ProTable } from "@/components/common";
import { useState } from "react";

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
          ></ProDialog>
        </div>
        <TabsContent value="teamQuestion">
          <ProTable></ProTable>
        </TabsContent>
        <TabsContent value="globalQuestion"></TabsContent>
      </Tabs>
    </PageContainer>
  );
};
export { Question };
