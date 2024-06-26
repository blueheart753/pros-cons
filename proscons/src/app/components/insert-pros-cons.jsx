'use client'
import React, { useState } from 'react'
import CompleteModal from './complete'

const ProsAndConsInsert = (props, { onClose }) => {
  const { pros_or_cons } = props

  const [keywords, setKeywords] = useState([''])

  const allKeywords = [
    '긍정적인',
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
    '고집',
    '인내력 부족',
    '자기 중심적',
    '걱정이 많음',
    '비판적 태도',
    '충동적',
    '예민함',
    '표현 부족',
    '변덕 스러움',
    '신뢰감 부족',
    '소통 부족',
    '의견 경시',
    '자기 희생',
    '완벽 주의',
    '쉽게 짜증냄',
    '예의 부족',
    '쉽게 의심함',
    '무관심',
    '쉽게 낙담',
    '자기 비하',
    '시기',
    '쉽게 포기',
    '의견 수용 불가',
    '개인주의',
    '공감력 부족',
    '실용성 부족',
    '무책임함',
    '자기자랑이 심함',
    '성급한 결정',
    '타인을 무시함',
    '쉽게 낙심함',
    '관용력 부족',
    '목표가 없음',
    '오만함',
    '부정적인 태도',
    '불평등한 태도',
    '변덕이 심함',
    '꾸준함이 부족함',
    '독립적인 척 함',
    '통제력 부족',
    '남의 일에 간섭함',
    '고민이 많음',
    '쉽게 동요함',
    '질투가 심함',
    '쉽게 흥분함',
    '관대하지 못함',
    '신뢰를 쉽게 잃음',
    '적응력이 부족함',
    '꼼꼼하지 못함',
    '무모한 행동',
    '쉽게 좌절함',
    '남의 의견을 듣지 않음',
    '통제욕이 강함',
    '소극적인 태도',
    '타인을 이해하지 못함',
    '남의 일에 간섭함',
    '남을 쉽게 의심함',
    '현실감각 부족',
  ]

  const handleKeywordChange = (index, value) => {
    const newKeywords = [...keywords]
    newKeywords[index] = value
    setKeywords(newKeywords)
  }

  const OpenCompleteModal = () => {
    const CompleteModalBox = document.querySelector('#complete-modal-box')
    const InsertFrom = document.querySelector('#insert_from')
    CompleteModalBox.classList.replace('opacity-0', 'opacity-1')
    CompleteModalBox.classList.replace('z-0', 'z-20')
    InsertFrom.classList.add('opacity-0')
  }

  const insertKeyword = () => {
    const content = document.querySelector('textarea').value

    const data = {
      keyword_name: keywords,
      keyword_type: pros_or_cons === '장점' ? true : false,
      keyword_description: content,
    }

    fetch('/api/insert_pros_cons', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then(data => {
        console.log('Data sent successfully:', data)
        OpenCompleteModal()
      })
      .catch(error => {
        console.error('Error sending data:', error)
      })
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center  ">
      <div className="bg-white px-10 p-4 rounded-xl relative">
        <form
          method="POST"
          className="flex flex-col relative z-10"
          id="insert_from"
        >
          <div className="mb-5">
            <p className="text-black text-2xl text-center">
              {pros_or_cons}을 작성해주세요
            </p>
            <p className="text-gray-500 text-center p-2">
              자신의{pros_or_cons}을 키워드를 통해 작성해주세요!
              <br />
              이제부터 자신의 {pros_or_cons}를 알아가요!
            </p>
          </div>
          {keywords.map((keyword, index) => (
            <div key={index} className="mb-2 flex justify-between items-center">
              <input
                className="w-full text-black border-2 border-gray-500 p-2 rounded-md"
                type="text"
                list="keywordList"
                placeholder="키워드를 입력하세요"
                value={keyword}
                onChange={e => handleKeywordChange(index, e.target.value)}
              />
            </div>
          ))}
          <textarea
            className="h-80 text-black border-2 border-gray-500 p-2 rounded-md"
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
              onClick={insertKeyword}
              className="mt-4 bg-green-500 text-white p-2 rounded-md"
            >
              계시하기
            </button>
            <button
              onClick={onClose}
              className="mt-4 bg-blue-500 text-white p-2 rounded-md"
            >
              닫기
            </button>
          </div>
        </form>
        <div
          className="opacity-0 absolute top-0 bottom-0 left-0 right-0 z-0"
          id="complete-modal-box"
        >
          <CompleteModal />
        </div>
      </div>
    </div>
  )
}

export default ProsAndConsInsert
