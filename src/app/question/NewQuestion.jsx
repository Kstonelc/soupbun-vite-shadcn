import { PageContainer } from "@/components/ui/pageContainer";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { QuestionType } from "@/Enum.js";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import QuillEditor from "@/components/common/quillEditor.jsx";
import { Delta } from "quill";
import QuestionOptions from "@/components/question/QuestionOptions.jsx";
import { useToast } from "@/hooks/use-toast.ts";
import { ToastAction } from "@/components/ui/toast";
import soupBunHelper from "@/SoupBunHelper.js";

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
            soupBunHelper.toastInfo("hahahha");
            // toast({
            //   title: "Scheduled: Catch up ",
            //   description: "Friday, February 10, 2023 at 5:57 PM",
            // });
          }}
        >
          选择题
        </Button>
      </div>
      <Separator className={"mb-5"} />
      <div>
        <p className={"text-sm mb-2 font-bold"}>题目描述</p>
        <div className={"h-60 w-1/2 mb-5"}>
          <QuillEditor
            ref={editorRef}
            readOnly={false}
            defaultValue={new Delta()}
          ></QuillEditor>
        </div>
        <div className={"mb-2 w-1/2 text-sm font-bold"}>
          设置选项和正确答案(必填)
        </div>
        <QuestionOptions></QuestionOptions>
      </div>
    </PageContainer>
  );
};
export default NewQuestion;
