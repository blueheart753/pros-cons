import { useEffect } from 'react'
import Image from 'next/image'

const CompleteModal = props => {
  const { pros_cons, is_modal } = props
  useEffect(() => {
    const completeImg = document.querySelector('#completeImg')
    const failedImg = document.querySelector('#failedImg')
    const closeBtn = document.querySelector('#closeBtn')
    setTimeout(() => {
      is_modal
        ? completeImg.classList.remove('opacity-0')
        : failedImg.classList.remove('opacity-0')
      closeBtn.classList.replace('opacity-0', 'opacity-1')
    }, 500)
  }, [])

  return (
    <div className="w-full h-full flex flex-col items-center p-4 gap-28">
      <div>
        <p className="text-black text-xl whitespace-pre-wrap text-center">
          <span className="font-semibold">{pros_cons}을 </span>
          {is_modal
            ? '작성하였습니다!'
            : `작성하지 못하엿습니다. 
확인 후 다시 작성을 해주세요!`}
        </p>
      </div>
      <div
        className="p-4 rounded-full ease-in duration-200"
        id="isComplete_box"
      >
        {is_modal ? (
          <Image
            src={'/check-mark-svgrepo-com.svg'}
            alt="upload complete image"
            id="completeImg"
            width={150}
            height={150}
            className="opacity-0 ease-in duration-200"
          />
        ) : (
          <Image
            src={'/failed_image.png'}
            alt="upload failed image"
            id="failedImg"
            width={150}
            height={150}
            className="opacity-0 ease-in duration-200"
          />
        )}
      </div>
      <button
        id="closeBtn"
        type="button"
        className="w-3/6 mt-4 bg-green-500 text-white p-2 rounded-md opacity-0"
        onClick={() => (location.href = '/')}
      >
        닫기
      </button>
    </div>
  )
}

export default CompleteModal
