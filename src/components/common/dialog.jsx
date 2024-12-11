import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProTable } from "@/components/common/table.jsx";

const ProDialog = ({
  title,
  subTitle,
  className,
  style,
  trigger,
  children,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen} style={style}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className={className}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{subTitle}</DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="teamQuestion">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="teamQuestion">基础理论</TabsTrigger>
            <TabsTrigger value="globalQuestion">基础编程能力</TabsTrigger>
          </TabsList>
          <TabsContent value="teamQuestion">{children}</TabsContent>
          <TabsContent value="globalQuestion"></TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export { ProDialog };
