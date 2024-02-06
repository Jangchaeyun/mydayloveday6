import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const navigationMenu = [
  {
    title: "홈",
    icon: <HomeIcon />,
    path: "/",
  },
  {
    title: "릴스",
    icon: <ExploreIcon />,
    path: "/reels",
  },
  {
    title: "릴스 만들기",
    icon: <ControlPointIcon />,
    path: "/create-reels",
  },
  {
    title: "알림",
    icon: <NotificationsIcon />,
    path: "/",
  },
  {
    title: "메시지",
    icon: <MessageIcon />,
    path: "/",
  },
  {
    title: "리스트",
    icon: <ListAltIcon />,
    path: "/",
  },
  {
    title: "커뮤니티",
    icon: <GroupIcon />,
    path: "/",
  },
  {
    title: "프로필",
    icon: <AccountCircleIcon />,
    path: "/profile/:id",
  },
];
