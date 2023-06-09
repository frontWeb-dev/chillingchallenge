import { ImageURISource } from "react-native/types";

interface bedgesTypes {
  id: number;
  type: string;
  text: string;
  default: ImageURISource;
  active: ImageURISource;
}

const bedges: bedgesTypes[] = [
  {
    id: 1,
    type: "active",
    text: "첫 챌링 성공",
    default: require("@assets/bedge/mission.png"),
    active: require("@assets/bedge/logo_1.png"),
  },
  {
    id: 2,
    type: "active",
    text: "챌링 5개 성공",
    default: require("@assets/bedge/mission.png"),
    active: require("@assets/bedge/logo_2.png"),
  },
  {
    id: 3,
    type: "default",
    text: "챌링 10개 성공",
    default: require("@assets/bedge/mission.png"),
    active: require("@assets/bedge/logo_3.png"),
  },
  {
    id: 4,
    type: "default",
    text: "챌링 20개 성공",
    default: require("@assets/bedge/mission.png"),
    active: require("@assets/bedge/logo_4.png"),
  },
  {
    id: 5,
    type: "default",
    text: "챌링 30개 성공",
    default: require("@assets/bedge/mission.png"),
    active: require("@assets/bedge/logo_5.png"),
  },
  {
    id: 6,
    type: "active",
    text: "3일 연속 출석",
    default: require("@assets/bedge/attendance.png"),
    active: require("@assets/bedge/logo_6.png"),
  },
  {
    id: 7,
    type: "default",
    text: "5일 연속 출석",
    default: require("@assets/bedge/attendance.png"),
    active: require("@assets/bedge/logo_7.png"),
  },
  {
    id: 8,
    type: "default",
    text: "7일 연속 출석",
    default: require("@assets/bedge/attendance.png"),
    active: require("@assets/bedge/logo_8.png"),
  },
  {
    id: 9,
    type: "default",
    text: "10일 연속 출석",
    default: require("@assets/bedge/attendance.png"),
    active: require("@assets/bedge/logo_9.png"),
  },
];

export default bedges;
