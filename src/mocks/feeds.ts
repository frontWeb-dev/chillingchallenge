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
      "한달 뒤에 나에게 \n 한달 뒤에는 제발 취업도 하고 다이어트도 꾸준히 하렴 \n 알겠니?",
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
