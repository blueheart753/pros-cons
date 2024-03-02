export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center gap-10 bg-zinc-900 flex-col">
      <button type="button" className="basis-1/8 w-96 h-32 bg-slate-300 rounded-md shadow-mg flex items-center justify-center cursor-pointer transition-all duration-105 hover:scale-110">
        <p className="font-semibold text-lg">
          다른 사람들의 <br/>pros&cons 보기
        </p>
      </button>
      <button type="button" className="basis-1/8 w-96 h-32 bg-slate-300 rounded-md shadow-mg flex items-center justify-center cursor-pointer transition-all duration-105 hover:scale-110">
      <p className="font-semibold text-lg">
          나의 pros&cons <br/> 작성하기
        </p>
      </button>
    </main>
  );
}
