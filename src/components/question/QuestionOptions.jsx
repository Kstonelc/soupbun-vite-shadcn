import { forwardRef, useEffect, useRef, useState } from "react";
import { Checkbox, Input, Button } from "@/components/ui";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";

const CustomOption = ({
  params,
  onDeleteOption,
  onUpdateOption,
  onConfirmTrueAnswer,
}) => {
  const name = params.name;
  const content = params.content;
  const key = params.key;
  const isChecked = params.isChecked;
  return (
    <div
      className={"border rounded-xl flex justify-start flex-col p-3 gap-2 mb-3"}
    >
      <div className={"flex justify-between px-2"}>
        <div>选项{name}</div>
        <div className={"flex flex-row items-center"}>
          <Checkbox
            defaultChecked={isChecked}
            className={"text-blue-500 mr-2"}
            onChange={() => onConfirmTrueAnswer(key)}
          >
            设置为正确答案
          </Checkbox>
          <div onClick={() => onDeleteOption(key)}>
            <AiOutlineDelete color={"red"} size={"20"} />
          </div>
        </div>
      </div>
      <Input
        value={content}
        onChange={(e) => onUpdateOption(key, e.target.value)}
      />
    </div>
  );
};

const QuestionOptions = forwardRef(({ ...props }, ref) => {
  const [options, setOptions] = useState([
    {
      name: "A",
      key: 1,
      content: "",
      isChecked: false,
    },
    {
      name: "B",
      key: 2,
      content: "",
      isChecked: false,
    },
    {
      name: "C",
      key: 3,
      content: "",
      isChecked: false,
    },
    {
      name: "D",
      key: 4,
      content: "",
      isChecked: false,
    },
  ]);
  const optionRef = useRef();
  useEffect(() => {
    initialize();
    return () => {
      destroy();
    };
  }, []);

  // region初始化
  const initialize = () => {};

  const destroy = () => {};
  // endregion

  // region 方法

  const deleteOption = (key) => {
    if (options.length === 1) {
      // message.warning("选项不可以少于一个");
      return;
    }
    for (let option of options) {
      if (option.key === key) {
        const newOptions = options.filter((item) => item.key !== key);
        for (let i = 0; i < newOptions.length; i++) {
          newOptions[i].key = i + 1;
          newOptions[i].name = String.fromCharCode(65 + i);
        }
        setOptions(newOptions);
        break;
      }
    }
  };

  const updateOption = (key, value) => {
    const newOptions = options.map((item) => {
      if (item.key === key) {
        item.content = value;
      }
      return item;
    });
    setOptions(newOptions);
  };
  // endregion
  return (
    <div>
      {options.map((option, index) => {
        return (
          <CustomOption
            key={index}
            ref={optionRef}
            params={{
              name: option.name,
              key: option.key,
              content: option.content,
            }}
            onDeleteOption={deleteOption}
            onUpdateOption={updateOption}
            onConfirmTrueAnswer={(key) => {
              const newOptions = options.map((item) => {
                if (item.key === key) {
                  item.isChecked = !item.isChecked;
                } else {
                  item.isChecked = false;
                }
                return item;
              });
              console.log(newOptions);
              setOptions(newOptions);
            }}
          ></CustomOption>
        );
      })}
      <div
        onClick={() => {
          if (options.length > 5) {
            // message.warning("设置的选项不可以超过5个");
            return;
          }
          // 取到当前 state 中 最新的一个字母的下一个
          const lastOption = options[options.length - 1];
          const lastOptionName = lastOption.name;
          const lastOptionKey = lastOption.key;
          const lastOptionNameCode = lastOptionName.charCodeAt(0);
          const nextOptionName = String.fromCharCode(lastOptionNameCode + 1);
          const nextOptionKey = lastOptionKey + 1;
          const nextOptionContent = "";
          setOptions([
            ...options,
            {
              name: `${nextOptionName}`,
              key: nextOptionKey,
              content: nextOptionContent,
              isChecked: false,
            },
          ]);
        }}
        className={
          "bg-secondary rounded-xl flex justify-center items-center p-3 gap-2 mb-5"
        }
      >
        <Button size={"sm"}>
          <AiOutlinePlus />
          新增选项
        </Button>
      </div>
    </div>
  );
});

export default QuestionOptions;
