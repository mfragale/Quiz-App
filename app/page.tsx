import QuizSettings from "@/components/quiz-settings";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white shadow-md p-3 md:rounded-lg w-full md:w-[90%] lg:w-[70%] max-w-4xl">
      <h1 className="py-2 font-bold text-primary text-2xl lg:text-4xl text-center uppercase tracking-wider">
        Welcome to Quizy
      </h1>
      <Separator />
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 p-2 md:px-6 py-3">
        <div className="relative h-full">
          <Image
            src={"/hero.webp"}
            alt="hero-image"
            priority
            width={450}
            height={450}
            className="mx-auto object-center object-cover"
          />
        </div>
        <QuizSettings />
      </div>
    </div>
  );
}
