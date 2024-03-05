'use client';
import React, { useState } from 'react';

const ProsAndConsInsert = ({ onClose }) => {
  const [keywords, setKeywords] = useState(['']);
  const [countKeywordsInput, setCountKeywordsInput] = useState(1);

  const handleAddKeyword = () => {
    setKeywords(prevKeywords => [...prevKeywords, '']);
    setCountKeywordsInput(prevCount => prevCount + 1);
  };

  const handleRemoveKeyword = index => {
    if (keywords.length === 1) {
      return;
    }
    const newKeywords = [...keywords];
    newKeywords.splice(index, 1);
    setKeywords(newKeywords);

    setCountKeywordsInput(prevCount => prevCount - 1);
  };

  const handleKeywordChange = (index, value) => {
    const newKeywords = [...keywords];
    newKeywords[index] = value;
    setKeywords(newKeywords);
  };

  const allKeywords = [
    '강직한',
    '고요한',
    '고운',
    '기특한',
    '깜찍한',
    '근면한',
    '귀여운',
    '관대한',
    '깔끔한',
    '꾸준한',
    '긍정적인',
    '깡이 있는',
    '겸손한',
    '검소한',
    '공손한',
    '기운찬',
    '놀라운',
    '나눌 줄 아는',
    '넉넉한',
    '남자다운',
    '느긋한',
    '넉살 좋은',
    '남을 잘 돌보는',
    '낙천적인',
    '낭만적인',
    '다정한',
    '당당한',
    '든든한',
    '다재다능한',
    '또렷한',
    '다양한',
    '단호한',
    '대담한',
    '리더십 있는',
    '로맨틱한',
    '믿음직한',
    '명랑한',
    '마음이 넓은',
    '매력적인',
    '맑은',
    '멋진',
    '말을 잘하는',
    '반듯한',
    '발랄한',
    '부드러운',
    '빼어난',
    '분별력 있는',
    '배려심 있는',
    '밝은',
    '배짱 있는',
    '부지런한',
    '바른',
    '붙임성 있는',
    '산뜻한',
    '수려한',
    '순진무구한',
    '순한',
    '싱그러운',
    '선한',
    '시원시원한',
    '사교적인',
    '섬세한',
    '사랑스러운',
    '성실한',
    '순수한',
    '소신있는',
    '섹시한',
    '사려깊은',
    '시간관념이 뚜렷한',
    '소탈한',
    '상냥한',
    '생기있는',
    '솔직한',
    '신중한',
    '싹싹한',
    '아리따운',
    '어여쁜',
    '예쁜',
    '용감한',
    '우아한',
    '위대한',
    '용기있는 유능한',
    '유쾌한',
    '이해심 많은',
    '아름다운',
    '여유로운',
    '원만한',
    '육감적인',
    '여성스러운',
    '입이 무거운',
    '에너지 넘치는',
    '유머러스한',
    '융통성있는',
    '적극적인',
    '직선적인',
    '정의로운',
    '조용한',
    '재미있는',
    '정직한',
    '존귀한',
    '지혜로운',
    '자애로운',
    '잘 웃는',
    '자신감 있는',
    '자유로운',
    '지적인',
    '절약하는',
    '정숙한',
    '진취적인',
    '착한',
    '청초한',
    '창의적인',
    '침착한',
    '책임감 있는',
    '차분한',
    '친숙한',
    '친절한',
    '쾌활한',
    '카리스마 있는',
    '튼튼한',
    '털털한',
    '편안한',
    '평화로운',
    '포근한',
    '포용력 있는',
    '훌륭한',
    '활동적인',
    '화사한',
    '화끈한',
    '합리적인',
    '헌신적인',
    '활달한',
    '호감이 가는',
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="w-96 bg-white p-4 rounded-md">
        <form method="POST" className="flex flex-col">
          <p className="text-black text-xl mb-5 font-semibold">자신의 장점</p>
          {keywords.map((keyword, index) => (
            <div key={index} className="mb-2 flex justify-between items-center">
              <input
                className="w-full text-black border-2 border-gray-700 p-2 rounded-md"
                type="text"
                list="keywordList"
                placeholder="키워드를 입력하세요"
                value={keyword}
                onChange={e => handleKeywordChange(index, e.target.value)}
              />
              <input
                type="button"
                onClick={() => handleRemoveKeyword(index)}
                className="w-24 ml-2 bg-red-500 text-white p-2 rounded-md cursor-pointer"
                value={'삭제'}
              />
            </div>
          ))}
          <textarea
            className="h-80 text-black border-2 border-gray-700 p-2 rounded-md"
            maxLength={401}
            placeholder="400자 이하로 적어주세요"
          ></textarea>
          <datalist id="keywordList">
            {allKeywords.map((keyword, index) => (
              <option key={index} value={keyword} />
            ))}
          </datalist>
          <div className="w-full flex justify-end gap-4">
            <button
              type="button"
              onClick={handleAddKeyword}
              className="mt-4 bg-gray-500 text-white p-2 rounded-md"
            >
              임시 저장
            </button>
            <button
              type="button"
              onClick={handleAddKeyword}
              className="mt-4 bg-green-500 text-white p-2 rounded-md"
            >
              키워드 추가
            </button>
            <button
              onClick={onClose}
              className="mt-4 bg-blue-500 text-white p-2 rounded-md"
            >
              닫기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProsAndConsInsert;
