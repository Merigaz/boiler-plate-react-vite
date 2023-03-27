
import { BugFilled } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Link } from "react-router-dom";

export const items: MenuProps["items"] = [
  {
    label: "Tasks",
    key: "Tasks",
    icon: <BugFilled />,
  },
  {
    label: "Poke",
    key: "Poke",
    icon: <BugFilled />,
  },
  {
    label: "/Theme",
    key: "Theme",
    icon: <BugFilled />,
  }
];