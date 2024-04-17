import Image from 'next/image'
import { useEffect } from 'react'

const CompleteModal = () => {
  useEffect(() => {
    const FadeInOut_Animation = () => {
      const check_box = document.querySelector('#check_box')
      if (check_box) {
        check_box.classList.add('border-solid', 'border-4', 'border-black')
      }
    }

    setTimeout(() => {
      Animation_checkBox()
    }, 1000)
  }, [])

  return (
    <div className="w-full h-full flex flex-col items-center absolute top-0 bottom-0 left-0 right-0 p-4 gap-36">
      <div>
        <p className="text-black text-2xl">
          <span className="font-semibold">장점</span> 작성이 완료됬습니다.
        </p>
      </div>
      <div className="p-4 rounded-full " id="check_box">
        <Image
          src={'/check-mark-svgrepo-com.svg'}
          alt="upload complete image"
          width={100}
          height={100}
        />
      </div>
    </div>
  )
}

export default CompleteModal
