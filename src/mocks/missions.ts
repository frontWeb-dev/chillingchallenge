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

export const editedMissions = [
  {
    id: 1,
    title: "책 읽기",
    comment: "어떤 책을 읽든,\n얼마나 읽든 다 괜찮아요.",
    desc: "항상 가까이 하려고 하지만\n생각처럼 잘 안되는 책읽기,\n오늘 칠링챌링에서 해보는 건 어때요?\n\n꼭 한 권을 다 읽지 않아도 괜찮아요.\n어떤 책이라도 상관 없어요.\n그저 시끄러운 바깥 세상과 떨어져,\n고요한 책속 세상에 잠시 머물러봐요.",
    method:
      "책을 다 읽었다면\n책의 표지나, 마음에 드는 구절을\n찍어 올려주세요.\n당신의 마음이 조금이라도\n평화로워지는 시간이었길 바라요.",
    bgImage: require("@assets/illustrations/logo_1.png"),
    type: 1,
  },
  {
    id: 2,
    title: "셀프 선물하기",
    comment: "당신의 취향을 가장 잘 아는 건\n바로 당신이니까",
    desc: "그간 필요했거나 갖고 싶었던 것을\n스스로 선물해봐요.\n평소에 하던 쇼핑이 아닌\n진짜 선물을 고른다는 마음을 가지고 해봐요.\n기왕이면 밖에 나가 둘러보는 건 어때요?\n생각지도 못한 것들을\n발견할 수도 있어요!",
    method:
      "이 선물을 고르면서 스스로의 취향에 대해\n얼마나 많은 고민을 했나요?\n항상 기억해 주세요,\n나를 가장 잘 알고 가장 사랑하는 사람은\n자기 자신이어야 한다는 것을",
    bgImage: require("@assets/illustrations/logo_2.png"),
    type: 1,
  },
  {
    id: 3,
    title: "예쁜 구름 찾기",
    comment: "구름처럼 몽글몽글해지는\n마음",
    desc: "바깥에 나가서 하늘을 유심히 관찰해요.\n오늘은 구름이 많은 날인가요,\n구름 없이 맑은 날인가요?\n예쁜 구름을 찾아 거닐다가\n맘에 드는 구름을 발견하면\n사진을 찍어주세요.",
    method:
      "찍은 사진을 보여주세요!\n마음에 드는 구름을 찾았나요?\n생각이 복잡할 땐\n오늘처럼 천천히 흘러가는 구름을 보며\n잠시 머리를 비워보는 것도 좋아요.",
    bgImage: require("@assets/illustrations/logo_3.png"),
    type: 1,
  },
  {
    id: 4,
    title: "하늘 사진 찍어오기",
    comment: "가만히 하늘을 바라보아요.\n오늘의 날씨는 어떤가요?",
    desc: "하늘을 자주 바라보았나요?\n이리저리 바쁘게 살다 보면\n탁 트인 하늘을 마주하는 게\n생각보다 쉽지 않더라구요.\n오늘은 바깥에 나가\n아득히 높고 넓은 하늘을 바라보며\n잠시 힐링하는 시간을 가져요!",
    method:
      "사진을 올리며, 오늘 날씨는 어땠는지,\n하늘의 색깔은 무슨 색이었는지,\n바깥공기의 냄새와 온도는 어땠는지 떠올려요.\n이 모든 것들이 당신에게\n편안한 기억으로 남았으면 좋겠어요.",
    bgImage: require("@assets/illustrations/logo_4.png"),
    type: 1,
  },
  {
    id: 5,
    title: "만보 걷기",
    comment: "걷기는 최고의 운동,\n생각보다 힘들지도!",
    desc: "평소에 얼마나 많이 걷나요?\n걷기는 최고의 운동이라고 하는데,\n생각보다 일상 속에서 만 보 채우기가\n쉽지 않은 것 같아요.\n좋아하는 산책로가 있나요?\n아니면 좋아하는 장소가 있나요?\n오늘은 그곳을 걸으며 만보를 달성해봐요!",
    method:
      "휴대폰으로 측정된 걸음 수를\n찍어 인증해주세요!\n많이 힘들진 않았나요?\n혹은 생각보다 금방 끝났나요?\n한 층 더 건강해진 하루, 수고했어요!",
    bgImage: require("@assets/illustrations/logo_5.png"),
    type: 1,
  },
  {
    id: 6,
    title: "영화관에서 영화보기",
    comment: "영화관에서만 느낄 수 있는\n분위기가 있잖아요.",
    desc: "이젠 누구나 집에서도 쉽게\n영화를 볼 수 있게 되었지만\n영화관만의 분위기는 절대 흉내낼 수 없죠.\n오늘 영화관에서 영화 한 편 어때요?\n누군가와 함께 봐도 좋고, 혼영도 좋아요.\n맛있는 팝콘도 먹는 걸로!",
    method:
      "오늘 본 영화는 어땠나요?\n영화표나 혹은 영화관의 사진을 올려주세요.\n마음에 들었던 장면을 캡쳐해와도 돼요.",
    bgImage: require("@assets/illustrations/logo_6.png"),
    type: 1,
  },
  {
    id: 7,
    title: "나만의 공간 꾸미기",
    comment: "나만의 취향을 가득 담은\n공간을 만들어 가요.",
    desc: "당신의 취향이 가득 담긴 공간을 꾸며 봐요.\n마땅히 생각나는 곳이 없다면\n아주 작은 공간이라도 괜찮아요.\n방 한 켠, 책상, 침대, 선반 등등\n어디든 좋은걸요!",
    method:
      "내 맘에 쏙 들게 꾸며놓은 공간은\n엄청난 힘을 가진답니다.\n이제 당신은 그 곳을 마주할 때마다\n기분이 좋아질 거예요!\n작은 일이 주는 큰 힘을 믿어보아요.",
    bgImage: require("@assets/illustrations/logo_7.png"),
    type: 1,
  },
  {
    id: 8,
    title: "30분 동안 산책하기",
    comment: "맑은 공기를 마시며\n마음 속의 걱정을 덜어요.",
    desc: "오늘은 산책을 떠나볼까요?\n기왕이면 맑은 공기를 쐴 수 있는 곳으로요.\n그 어떤 다른 목적도 없이\n그저 여유롭게 거니는 거예요.\n주변을 둘러보며 산책하다 보면\n소소한 행복을 만날지도 몰라요!!",
    method:
      "마음에 드는 산책 시간이었나요?\n산책을 간 장소나\n산책 도중 마주친 작은 행복거리들을\n공유해주세요!",
    bgImage: require("@assets/illustrations/logo_8.png"),
    type: 1,
  },
  {
    id: 9,
    title: "맘에 드는\n카페 탐방하기",
    comment: "좋아하는 카페나\n새로운 카페를 소개해주세요.",
    desc: "좋아하는 카페가 있나요?\n취향에 딱 맞는 카페를 발견하면\n그 곳에서 뭘 해도 기분 좋기 마련이죠.\n오늘 그 곳에서 커피 한 잔 어때요?\n만약 좋아하는 카페가\n아직 없다면, 오늘 한 번 찾으러 나가는 것도\n아주 좋은 선택인걸요!",
    method:
      "오늘 간 카페는 어떤 곳이었나요?\n어떤 점이 마음에 들었고\n먹은 메뉴의 맛은 어땠고\n카페까지 가는 길엔 뭐가 있었는지\n사진을 올리며 다시 생각해봐요.",
    bgImage: require("@assets/illustrations/logo_9.png"),
    type: 1,
  },
  {
    id: 10,
    title: "이불 정리하기",
    comment: "하루의 시작을 상쾌하게 만드는\n아주 사소한 일",
    desc: "",
    method: "",
    bgImage: require("@assets/illustrations/logo_10.png"),
    type: 1,
  },
  {
    id: 11,
    title: "집 청소하기",
    comment: "깨끗한 방은 곧\n정돈된 마음가짐이 될 거예요.",
    desc: "",
    method: "",
    bgImage: require("@assets/illustrations/logo_11.png"),
    type: 1,
  },
  {
    id: 12,
    title: "한 달 후의\n나에게 편지 쓰기",
    comment: "미래의 나에게\n하고 싶은 말이 있나요?",
    desc: "",
    method: "",
    bgImage: require("@assets/illustrations/logo_12.png"),
    type: 2,
  },
  {
    id: 13,
    title: "좋아하는 시 필사하기",
    comment: "당신에게 위안을 가져다 준\n시가 있나요?",
    desc: "",
    method: "",
    bgImage: require("@assets/illustrations/logo_13.png"),
    type: 2,
  },
  {
    id: 14,
    title: "스스로에게\n응원의 문구 쓰기",
    comment: "스스로 하는 응원은\n큰 힘이 된답니다.",
    desc: "스스로에게 하는 긍정적인 말은\n생각보다 더 큰 힘을 가지고 있어요.\n최근에 마음이 지칠 만한 일이 있었나요?\n혹은 응원이 필요한 일이 있나요?\n지금 당신에게 가장 힘이 될 말이\n무엇인지 고민해보는 시간을 가져봐요!",
    method: "스스로에게 던지는 응원의 문구를 써주세요.\n여러 개를 써봐도 좋아요.",
    bgImage: require("@assets/illustrations/logo_14.png"),
    type: 2,
  },
  {
    id: 15,
    title: "감정일기 쓰기",
    comment: "언제, 어떤 감정을,\n얼마나 느끼나요?",
    desc: "",
    method: [
      "1단계. 걱정을 글로 써보아요",
      "2단계. 걱정을 글로 써보아요",
      "3단계. 걱정을 글로 써보아요",
      "4단계. 걱정을 글로 써보아요",
    ],
    bgImage: require("@assets/illustrations/logo_15.png"),
    type: 3,
  },
  {
    id: 16,
    title: "행복일기 쓰기",
    comment: "행복은 언제나 가까이\n있다는 걸 잊지 말아요.",
    desc: "",
    method: "",
    bgImage: require("@assets/illustrations/logo_16.png"),
    type: 3,
  },
  {
    id: 17,
    title: "걱정하는 시간 갖기",
    comment: "걱정을 다스리는\n아이러니한 방법",
    desc: "평소에 걱정이 많나요?\n오늘은 ‘걱정하는 시간’을 가져볼 거예요.\n역설적이게도 따로 시간을 정해서\n걱정하게 되면,\n평소에 하는 자잘한 걱정들이 줄어든답니다.\n‘나중에 걱정시간에 고민해보자!’ 라고\n생각하면서요.\n‘걱정하는 시간’, 지금 한 번 가져볼까요?",
    method: [
      "1단계. 걱정을 써보기\n\n평소 하는 걱정을 구체적으로 생각해보고,\n이 걱정을 문장으로 정리해 적어보세요.\n예를 들어, “생각대로 되지 않는 인간관계\n때문에 힘들어” 같은 현실적인 문제가 있겠죠?",
      "2단계. 통제 가능한 부분과 통제 불가능한 부분 구분하기\n\n예를 들어, 전자는 “나에게 남아있는\n인연과는 더 안정적 관계를 유지할 수 있다”가\n될 수 있고, 통제 불가능한 부분은 “이미\n떠나간 연을 되돌릴 수는 없다”가 될 수 있죠.",
      "3단계. 해결방안 생각하고 적어보기\n\n통제 가능한 부분에 있어서 해결방안을\n떠올려 보세요. 그리고 통제 불가능한 부분은\n걱정을 과감하게 포기하도록 하세요.\n걱정을 더 한다고 해서 더 좋은 해결책이\n떠오르는 건 아니니까요.",
      "4단계. 걱정 멈추기\n\n통제 가능한 부분에서는 3단계에서 해결책을\n찾았으니 걱정을 멈출 수 있어요.\n그리고 통제 불가능한 부분은\n걱정을 과감하게 포기하도록 하세요.\n당신은 이미 최선을 다했으니까요.",
    ],
    bgImage: require("@assets/illustrations/logo_17.png"),
    type: 3,
  },
  {
    id: 18,
    title: "부정적인 생각 바꿔쓰기",
    comment: "당신도 모르게 스쳐 지나가는\n생각들을 되짚어 보아요.",
    desc: "",
    method: "",
    bgImage: require("../assets/illustrations/logo_18.png"),
    type: 3,
  },
];
