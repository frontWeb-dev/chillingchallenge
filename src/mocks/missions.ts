import { ImageURISource } from "react-native";

export interface MissionData {
  id: number;
  title: string;
  comment: string;
  method: string | string[];
  desc: string;
  bgImage: ImageURISource;
  type: number;
}

export const missions: MissionData[] = [
  {
    id: 1,
    title: "책 읽기",
    comment: "어떤 책을 읽든,\n얼마나 읽든 다 괜찮아요.",
    desc: "책은 마음의 양식이라고들 하죠. \n 책을 읽어볼까요? \n",
    method:
      "책을 다 읽었나요? \n 어땠나요, 도움이 되었나요?\n 자 그럼 사진을 찍어 올려볼까요. \n 책의 표지나 마음에 드는 구절이 있는 부분을 찍어서 올려주세요.\n",
    bgImage: require("../assets/illustrations/logo_1.png"),
    type: 1,
  },
  {
    id: 2,
    title: "한달 후의 \n나에게 편지쓰기",
    comment: "미래의 나에게\n하고 싶은 말이 있나요?",
    desc: "요즘 어떤 생각을 가지고 있나요, \n 어떤 감정을 느끼고 있나요, \n 무엇 떄문에 힘든가요, \n 한 달 뒤 현재의 당신을 돌아볼 때 이러한 것들이 어떤 기억으로 남을 지 생각하면서 한 달 뒤 자신에게 편지를 남겨요",
    method:
      "편지에 많은 내용을 담지 않아도 괜찮아요. \n 나에게만 전달하고 싶은 진솔한 이야기를 적어요!",
    bgImage: require("../assets/illustrations/logo_12.png"),
    type: 2,
  },
  {
    id: 3,
    title: "좋아하는 시 필사하기",
    comment: "당신에게 위안을 가져다 준\n시가 있나요?",
    desc: "",
    method: ["1단계", "2단계", "3단계", "4단계"],
    bgImage: require("../assets/illustrations/logo_13.png"),
    type: 3,
  },
];

// 나중에 이걸로 반영할 것
export const editedMissions = [
  {
    id: 1,
    title: "책 읽기",
    comment: "어떤 책을 읽어볼까요?\n꼭 한 권을 다 읽지 않아도 괜찮아요. ",
    desc: "",
    method: "",
    bgImage: "",
    type: 1,
  },
  {
    id: 2,
    title: "쇼핑하기",
    comment: "가끔은 나를 위한 셀프 선물 어때요?",
    desc: "",
    method: "",
    bgImage: "",
    type: 1,
  },
  {
    id: 3,
    title: "예쁜 구름 찾기",
    comment: "구름처럼 몽글몽글해지는 마음",
    desc: "",
    method: "",
    bgImage: "",
    type: 1,
  },
  {
    id: 4,
    title: "하늘 사진 찍어오기",
    comment: "가만히 하늘을 바라보아요.\n오늘의 날씨는 어떤가요?",
    desc: "",
    method: "",
    bgImage: "",
    type: 1,
  },
  {
    id: 5,
    title: "만보 걷기",
    comment: "걷기는 최고의 운동,\n생각보다 힘들 수도 있어요!",
    desc: "",
    method: "",
    bgImage: "",
    type: 1,
  },
  {
    id: 6,
    title: "영화관 가서 영화보기",
    comment: "오직 영화관에서만\n느낄 수 있는 분위기를 누리러",
    desc: "",
    method: "",
    bgImage: "",
    type: 1,
  },
  {
    id: 7,
    title: "나만의 공간 꾸미기",
    comment: "내 취향만을 가득 담은\n공간을 만들어 가요.",
    desc: "",
    method: "",
    bgImage: "",
    type: 1,
  },
  {
    id: 8,
    title: "30분 동안 산책하기",
    comment: "맑은 공기를 마시며\n마음 속의 걱정을 덜어요.",
    desc: "",
    method: "",
    bgImage: "",
    type: 1,
  },
  {
    id: 9,
    title: "맘에 드는\n카페 탐방하기",
    comment: "좋아하는 카페 혹은\n새로운 카페를 소개해주세요. ",
    desc: "",
    method: "",
    bgImage: "",
    type: 1,
  },
  {
    id: 10,
    title: "이불 정리하기",
    comment: "하루의 시작을 상쾌하게 만드는, 아주 사소한 일",
    desc: "",
    method: "",
    bgImage: "",
    type: 1,
  },
  {
    id: 11,
    title: "집 청소하기",
    comment: "깨끗한 방은 곧 정돈된 마음가짐이 될 거예요.",
    desc: "",
    method: "",
    bgImage: "",
    type: 1,
  },
  {
    id: 12,
    title: "한 달 후의\n나에게 편지 쓰기",
    comment: "미래의 나에게 하고 싶은 말이 있나요?",
    desc: "",
    method: "",
    bgImage: "",
    type: 1,
  },
  {
    id: 13,
    title: "좋아하는 시 적기",
    comment: "당신에게 위안을 가져다 준 시가 있나요?",
    desc: "",
    method: "",
    bgImage: "",
    type: 1,
  },
  {
    id: 14,
    title: "스스로에게\n응원의 문구 쓰기",
    comment: "스스로 하는 응원은 큰 힘이 된답니다.",
    desc: "",
    method: "",
    bgImage: "",
    type: 1,
  },
  {
    id: 15,
    title: "감정일기 쓰기",
    comment: "언제, 어떤 감정을, 얼마나 느끼나요?",
    desc: "",
    method: "",
    bgImage: "",
    type: 1,
  },
  {
    id: 16,
    title: "행복일기 쓰기",
    comment: "행복은 언제나 가까이 있다는 걸 잊지 말아요.",
    desc: "",
    method: "",
    bgImage: "",
    type: 1,
  },
  {
    id: 17,
    title: "걱정하는 시간 갖기",
    comment: "걱정을 다스리는 아이러니한 방법",
    desc: "",
    method: "",
    bgImage: "",
    type: 1,
  },
  {
    id: 18,
    title: "부정적인 생각 바꿔쓰기",
    comment: "당신도 모르게 스쳐 지나가는\n생각들을 되짚어 보아요.",
    desc: "",
    method: "",
    bgImage: "",
    type: 1,
  },
];
