import Quill from "quill";
import "quill/dist/quill.snow.css";
import { forwardRef, useEffect, useLayoutEffect, useRef } from "react";

const QuillEditor = forwardRef(
  (
    { readOnly, defaultValue, onTextChange, onSelectionChange, className },
    ref,
  ) => {
    const editorRef = useRef(null);
    const defaultValueRef = useRef(defaultValue);
    const onTextChangeRef = useRef(onTextChange);
    const onSelectionChangeRef = useRef(onSelectionChange);

    // 在 DOM 变更后，但在浏览器绘制前
    useLayoutEffect(() => {
      onTextChangeRef.current = onTextChange;
      onSelectionChangeRef.current = onSelectionChange;
    });

    useEffect(() => {
      ref?.current?.enable(!readOnly);
    }, [ref, readOnly]);

    useEffect(() => {
      const container = editorRef.current;
      const editorContainer = container.appendChild(
        container.ownerDocument.createElement("div"),
      );
      const toolbarOptions = {
        container: [
          [{ font: [] }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline"], // toggled buttons
          ["blockquote", "code-block"],
          // 重定义 uploadImage  { uploadImage: true }
          ["link", "image"],
          [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
          [{ indent: "-1" }, { indent: "+1" }],
          [{ align: [] }],
        ],
        handlers: {
          uploadImage: function () {
            let fileInput = document.createElement("input");
            fileInput.setAttribute("type", "file");
            fileInput.setAttribute("accept", "image/*");
            fileInput.click();
          },
        },
      };
      const quill = new Quill(editorContainer, {
        theme: "snow",
        modules: {
          toolbar: toolbarOptions,
          imageResize: {},
        },
      });
      // document.querySelector(".ql-toolbar").style.border =
      //   "1px solid #33333342";
      document.querySelector(".ql-toolbar").style.borderTopLeftRadius = "5px";
      document.querySelector(".ql-toolbar").style.borderTopRightRadius = "5px";
      document.querySelector(".ql-container").style.borderBottomLeftRadius =
        "5px";
      document.querySelector(".ql-container").style.borderBottomRightRadius =
        "5px";
      // const customButton = toolbar.container.querySelector('.ql-uploadImage');
      // customButton.innerHTML = '<span>🌄</span>';
      ref.current = quill;
      if (defaultValueRef.current) {
        quill.setContents(defaultValueRef.current);
      }

      quill.on(Quill.events.TEXT_CHANGE, (...args) => {
        onTextChangeRef.current?.(...args);
      });

      quill.on(Quill.events.SELECTION_CHANGE, (...args) => {
        onSelectionChangeRef.current?.(...args);
      });

      return () => {
        ref.current = null;
        container.innerHTML = "";
      };
    }, [ref]);

    return <div ref={editorRef} className={"h-4/5 w-full"}></div>;
  },
);
export default QuillEditor;
