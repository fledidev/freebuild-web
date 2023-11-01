import Image from 'next/image'

export default function Page({ params }: { params: { name: string } }) {
  return (
    <>
      <main className="inline-flex min-h-screen w-screen flex-col items-center justify-start gap-8 bg-slate-950 px-5 pb-8 pt-5 ">
        <div className="inline-flex items-center justify-center gap-3 self-stretch rounded bg-sky-950 px-6 py-3 lg:bg-transparent lg:py-6 ">
          <Image className="h-20 w-20" src={`https://mc-heads.net/avatar/${params.name}`} alt="User Avatar" height={400} width={400} />
          <div className="inline-flex flex-col items-center justify-center gap-1">
            <p className="text-3xl font-normal text-white">{params.name}</p>
            <p className="text-xl font-normal text-yellow-400">Squad Yellow</p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-1 self-stretch rounded bg-sky-950 px-1.5 py-2 lg:self-center lg:px-6">
          <div className="flex flex-col items-start justify-start gap-1.5 px-1.5 py-1">
            <h2 className="text-xl font-normal text-zinc-500">Information</h2>
          </div>
          <div className="flex flex-col items-start justify-start gap-1.5 px-1.5 py-2">
            <p className="text-xl text-white">
              <span className="font-semibold">Kills: </span>21
            </p>
            <p className="text-xl text-white">
              <span className="font-semibold">Deaths: </span>3
            </p>
            <p className="text-xl text-white">
              <span className="font-semibold">Last Login: </span>30.10.23 22:00
            </p>
            <p className="text-xl text-white">
              <span className="font-semibold">Current XP: </span>Level 34
            </p>
            <p className="text-xl text-white">
              <span className="font-semibold">Playtime: </span>4 hours
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
