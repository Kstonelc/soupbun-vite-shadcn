import {
  BookOpen,
  Bot,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  BookCheck,
} from "lucide-react";

const routes = {
  user: {
    name: "SoupBun",
    email: "2609753201@qq.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "登录",
      url: "/login",
      hide: true,
    },
    {
      title: "考场",
      url: "/exam",
      icon: BookCheck,
      isActive: true,
    },
    {
      title: "题库",
      url: "/question",
      icon: Bot,
      items: [
        {
          title: "newQuestion",
          url: "/question/new",
          hide: true, // 菜单隐藏
        },
      ],
    },
    {
      title: "试卷",
      url: "/exam-paper",
      icon: BookOpen,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "/settings/general",
        },
        {
          title: "General1",
          url: "/settings/general1",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "/support",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "/feedback",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export default routes;
