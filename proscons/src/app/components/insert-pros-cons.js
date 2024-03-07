'use client';
import React, { useState } from 'react';

const ProsAndConsInsert = (props, { onClose }) => {
  const { pros_or_cons } = props;

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

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="w-96 bg-white p-4 rounded-md">
        <form method="POST" className="flex flex-col">
          <p className="text-black text-xl mb-5 font-semibold">
            {pros_or_cons}
          </p>
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
