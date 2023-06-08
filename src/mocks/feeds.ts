export interface FeedData {
  id: number;
  missionId: number;
  missionType: number;
  missionContents: string[];
}

export const feeds = [
  {
    id: 1,
    missionId: 1,
    missionType: 1, // 1: 사진, 2: 단순 텍스트, 3: 복합 텍스트
    missionContents: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/1200px-Google_Images_2015_logo.svg.png",
      "책 읽기, 다 못 읽고 잤다.\n책 재미없다.\n책은 냄비 받침이지",
    ],
  },
  {
    id: 2,
    missionId: 2,
    missionType: 2, // 1: 사진, 2: 단순 텍스트, 3: 복합 텍스트
    missionContents: [
      "450자를 넘겨서 적어보려고 아무말이나 적는중, 6시까지인데 자꾸 문열어보고 난리야 짜증나게, 매너좀요 진짜?? 아 어렵다 어려워, 에어컨 엄청 잘나옴 손시림, 배고파 오늘 저녁은 김치볶음밥",
      "450자를 넘겨서 적어보려고 아무말이나 적는중, 6시까지인데 자꾸 문열어보고 난리야 짜증나게, 매너좀요 진짜?? 아 어렵다 어려워, 에어컨 엄청 잘나옴 손시림, 배고파 오늘 저녁은 김치볶음밥",
      "450자를 넘겨서 적어보려고 아무말이나 적는중, 6시까지인데 자꾸 문열어보고 난리야 짜증나게, 매너좀요 진짜?? 아 어렵다 어려워, 에어컨 엄청 잘나옴 손시림, 배고파 오늘 저녁은 김치볶음밥",
      "450자를 넘겨서 적어보려고 아무말이나 적는중, 6시까지인데 자꾸 문열어보고 난리야 짜증나게, 매너좀요 진짜?? 아 어렵다 어려워, 에어컨 엄청 잘나옴 손시림, 배고파 오늘 저녁은 김치볶음밥",
      "현타가 온다",
    ],
  },
  {
    id: 3,
    missionId: 3,
    missionType: 3, // 1: 사진, 2: 단순 텍스트, 3: 복합 텍스트
    missionContents: ["step1", "step2", "step3", "소감"],
  },
];
