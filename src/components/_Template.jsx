import { useEffect } from "react";

const _Template = () => {
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

  //endregion

  return <div></div>;
};

export { _Template };
