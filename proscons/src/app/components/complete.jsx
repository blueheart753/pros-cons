import { useEffect } from 'react'
import Image from 'next/image'

const CompleteModal = () => {
  useEffect(() => {
    const check_box = document.querySelector('#check_box')
    const check_image = document.querySelector('#checkImg')
    const closeBtn = document.querySelector('#closeBtn')
    setTimeout(() => {
      if (check_box) {
        check_box.classList.replace('border-y-4', 'border-4')
        check_box.classList.replace('opacity-0', 'opacity-1')
      }
      if (check_image) {
        check_image.classList.replace('opacity-0', 'opacity-1')
      }
      if (closeBtn) {
        closeBtn.classList.replace('opacity-0', 'opacity-1')
      }
    }, 500)
  }, [])

  return (
    <div className="w-full h-full flex flex-col items-center absolute top-0 bottom-0 left-0 right-0 p-4 gap-36 z-10">
      <div>
        <p className="text-black text-2xl">
          <span className="font-semibold">장점</span> 작성이 완료됬습니다.
        </p>
      </div>
      <div
        className="p-4 rounded-full ease-in duration-200 border-solid border-y-4 border-black opacity-0"
        id="check_box"
      >
        <Image
          src={'/check-mark-svgrepo-com.svg'}
          alt="upload complete image"
          width={100}
          height={100}
          id="checkImg"
          className="opacity-0"
        />
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
