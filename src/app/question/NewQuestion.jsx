import { PageContainer } from "@/components/ui/pageContainer";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { QuestionType } from "@/Enum.js";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import QuillEditor from "@/components/common/quillEditor.jsx";
import { Delta } from "quill";
import QuestionOptions from "@/components/question/QuestionOptions.jsx";
import { useToast } from "@/hooks/use-toast.ts";
import { Input } from "@/components/ui/input";

const NewQuestion = () => {
  const { toast } = useToast();
  const location = useLocation();
  const editorRef = useRef();

  const [questionType, setQuestionType] = useState(QuestionType.gapFill);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const questionType = searchParams.get("questionType");
    switch (questionType) {
      case QuestionType.gapFill:
        break;
      case QuestionType.choice:
        break;
    }
  }, []);

  return (
    <PageContainer>
      <div className={"flex flex-row  h-16 items-center p- rounded-xl gap-4"}>
        <Button
          className={`${questionType === QuestionType.gapFill ? "text-white" : "bg-gray-50 text-black hover:text-white"}`}
          onClick={() => {
            setQuestionType(QuestionType.gapFill);
          }}
        >
          填空题
        </Button>
        <Button
          className={`${questionType === QuestionType.choice ? "text-white" : "bg-gray-50 text-black hover:text-white"}`}
          onClick={() => {
            setQuestionType(QuestionType.choice);
            toast({
              variant: "destructive",
              title: "暂不支持",
              description: "选择题功能暂未开放",
            });
          }}
        >
          选择题
        </Button>
      </div>
      <Separator className={"mb-5"} />
      <div className={"w-1/2 my-4"}>
        <p className={"text-sm mb-2 font-bold"}>题目标题(必填)</p>
        <Input></Input>
      </div>
      <div className={"w-1/2 my-4"}>
        <p className={"text-sm font-bold mb-2"}>题目描述(必填)</p>
        <div className={"h-60 mb-5"}>
          <QuillEditor
            ref={editorRef}
            readOnly={false}
            defaultValue={new Delta()}
          ></QuillEditor>
        </div>
      </div>
      <div className={"w-1/2 my-4"}>
        <div className={"flex flex-row justify-between"}>
          <span className={"text-sm font-bold mb-2"}>
            设置选项和正确答案(必填)
          </span>
          <div className={"flex text-sm"}>
            多选<Switch className={"ml-1"}></Switch>
          </div>
        </div>
        <QuestionOptions></QuestionOptions>
      </div>
    </PageContainer>
  );
};
export default NewQuestion;
