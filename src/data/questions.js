const questions = [
  // E/I 지표 질문 (5개)
  {
    id: 1,
    question:
      "당신은 사람들과 함께 있을 때 에너지가 생기나요, 아니면 혼자 있을 때 에너지가 생기나요?",
    category: "EI",
    options: [
      { optionText: "사람들과 함께 있을 때", value: "E" },
      { optionText: "혼자 있을 때", value: "I" },
    ],
  },
  {
    id: 2,
    question:
      "주말에는 사람들과 어울리는 것이 더 좋으신가요, 아니면 혼자 시간을 보내는 것이 좋으신가요?",
    category: "EI",
    options: [
      { optionText: "사람들과 어울리는 것이 더 좋아요", value: "E" },
      { optionText: "혼자 시간을 보내는 것이 더 좋아요", value: "I" },
    ],
  },
  {
    id: 3,
    question: "여러 사람들 앞에서 말하는 것이 편안한가요?",
    category: "EI",
    options: [
      { optionText: "네, 편안해요", value: "E" },
      { optionText: "아니요, 불편해요", value: "I" },
    ],
  },
  {
    id: 4,
    question: "큰 모임에서 많은 사람들과 대화하는 것을 즐기시나요?",
    category: "EI",
    options: [
      { optionText: "네, 즐겨요", value: "E" },
      { optionText: "아니요, 피하고 싶어요", value: "I" },
    ],
  },
  {
    id: 5,
    question: "새로운 사람들과 쉽게 친해지나요?",
    category: "EI",
    options: [
      { optionText: "네, 쉽게 친해져요", value: "E" },
      { optionText: "아니요, 어려워요", value: "I" },
    ],
  },

  // S/N 지표 질문 (5개)
  {
    id: 6,
    question: "세부 사항보다는 전체적인 그림에 더 집중하시나요?",
    category: "SN",
    options: [
      { optionText: "네, 전체적인 그림에 더 집중해요", value: "N" },
      { optionText: "아니요, 세부 사항에 더 집중해요", value: "S" },
    ],
  },
  {
    id: 7,
    question:
      "사실과 데이터를 기반으로 의사결정을 하나요, 아니면 직관에 의존하나요?",
    category: "SN",
    options: [
      { optionText: "사실과 데이터를 기반으로 결정해요", value: "S" },
      { optionText: "직관에 의존해요", value: "N" },
    ],
  },
  {
    id: 8,
    question: "상상력보다는 실용적인 것에 더 집중하나요?",
    category: "SN",
    options: [
      { optionText: "실용적인 것에 더 집중해요", value: "S" },
      { optionText: "상상력을 중요하게 생각해요", value: "N" },
    ],
  },
  {
    id: 9,
    question:
      "현실적인 문제에 집중하기보다 미래 가능성을 더 중요하게 생각하나요?",
    category: "SN",
    options: [
      { optionText: "미래 가능성을 더 중요하게 생각해요", value: "N" },
      { optionText: "현실적인 문제에 집중해요", value: "S" },
    ],
  },
  {
    id: 10,
    question: "과거 경험보다 새로운 아이디어에 더 중점을 두나요?",
    category: "SN",
    options: [
      { optionText: "네, 새로운 아이디어에 중점을 둬요", value: "N" },
      { optionText: "아니요, 과거 경험이 중요해요", value: "S" },
    ],
  },

  // T/F 지표 질문 (5개)
  {
    id: 11,
    question: "의사결정을 할 때 감정보다 논리에 더 의존하시나요?",
    category: "TF",
    options: [
      { optionText: "네, 논리에 더 의존해요", value: "T" },
      { optionText: "아니요, 감정에 더 의존해요", value: "F" },
    ],
  },
  {
    id: 12,
    question:
      "타인의 감정에 영향을 받기보다는 객관적인 판단을 더 중요하게 생각하나요?",
    category: "TF",
    options: [
      { optionText: "객관적인 판단이 더 중요해요", value: "T" },
      { optionText: "타인의 감정도 중요해요", value: "F" },
    ],
  },
  {
    id: 13,
    question: "논리적으로 옳지 않다면 감정보다는 논리에 따라 행동하나요?",
    category: "TF",
    options: [
      { optionText: "네, 논리에 따라 행동해요", value: "T" },
      { optionText: "아니요, 감정도 고려해요", value: "F" },
    ],
  },
  {
    id: 14,
    question: "결정을 내릴 때 타인의 감정보다 사실에 더 집중하나요?",
    category: "TF",
    options: [
      { optionText: "사실에 더 집중해요", value: "T" },
      { optionText: "타인의 감정도 중요해요", value: "F" },
    ],
  },
  {
    id: 15,
    question: "갈등 상황에서 감정보다 해결책에 집중하시나요?",
    category: "TF",
    options: [
      { optionText: "해결책에 집중해요", value: "T" },
      { optionText: "감정적인 부분도 중요해요", value: "F" },
    ],
  },

  // J/P 지표 질문 (5개)
  {
    id: 16,
    question: "계획을 세워서 체계적으로 일하는 것을 선호하시나요?",
    category: "JP",
    options: [
      { optionText: "네, 계획을 세워서 일해요", value: "J" },
      { optionText: "아니요, 즉흥적으로 일해요", value: "P" },
    ],
  },
  {
    id: 17,
    question: "마감일을 중요하게 생각하시나요?",
    category: "JP",
    options: [
      { optionText: "네, 마감일을 지키는 것이 중요해요", value: "J" },
      { optionText: "아니요, 융통성 있게 생각해요", value: "P" },
    ],
  },
  {
    id: 18,
    question: "작업을 시작하기 전에 계획을 철저히 세우나요?",
    category: "JP",
    options: [
      { optionText: "네, 계획을 세운 후에 시작해요", value: "J" },
      { optionText: "아니요, 즉흥적으로 시작해요", value: "P" },
    ],
  },
  {
    id: 19,
    question: "결과보다는 과정이 더 중요하다고 생각하나요?",
    category: "JP",
    options: [
      { optionText: "아니요, 결과가 더 중요해요", value: "J" },
      { optionText: "네, 과정이 중요해요", value: "P" },
    ],
  },
  {
    id: 20,
    question: "예측 가능한 상황보다 변화를 더 선호하나요?",
    category: "JP",
    options: [
      { optionText: "아니요, 예측 가능한 상황을 선호해요", value: "J" },
      { optionText: "네, 변화를 선호해요", value: "P" },
    ],
  },
];

export default questions;
