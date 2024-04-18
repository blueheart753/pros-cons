import Image from 'next/image';
import { useEffect } from 'react';

const CompleteModal = ({ onClose }) => {
  useEffect(() => {
    const check_box = document.querySelector('#check_box');
    const check_image = document.querySelector('#checkImg');

    setTimeout(() => {
      if (check_box) {
        check_box.classList.remove('animate-spin');
        check_image.classList.replace('opacity-0', 'opacity-1');
      }
    }, 1500);

    setTimeout(() => {
      document.querySelector('#closeBtn').classList.remove('opacity-0');
    }, 2500);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center absolute top-0 bottom-0 left-0 right-0 p-4 gap-36 z-10">
      <div>
        <p className="text-black text-2xl text-center">
          <span className="font-semibold">장점</span> 작성이 완료됬습니다.
        </p>
      </div>
      <div
        className="p-4 rounded-full duration-75 border-solid border-y-2 border-black"
        id="check_box"
      >
        <Image
          src={'/check-mark-svgrepo-com.svg'}
          alt="upload complete image"
          width={100}
          height={100}
          id="checkImg"
          className="duration-700 opacity-0"
        />
      </div>
      <button
        className="w-3/6 mt-4 bg-blue-500 text-white p-2 rounded-md opacity-0 duration-500 pointer-events-auto"
        id="closeBtn"
        onClick={onClose}
      >
        닫기
      </button>
    </div>
  );
};

export default CompleteModal;
