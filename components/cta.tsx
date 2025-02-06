import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Cta() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-white md:text-4xl pb-8">
              If you have any doubts, connect with
            </h2>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:ojaswakesharwani@gmail.com"
                className="bg-indigo-600 text-white px-4 py-2 rounded-full text-lg hover:bg-indigo-700"
              >
                ojaswakesharwani@gmail.com
              </a>
              <a
                href="mailto:ayushtiwari7473@gmail.com"
                className="bg-indigo-600 text-white px-4 py-2 rounded-full text-lg hover:bg-indigo-700"
              >
                ayushtiwari7473@gmail.com
              </a>
              <a
                href="mailto:gtmchdhry@gmail.com"
                className="bg-indigo-600 text-white px-4 py-2 rounded-full text-lg hover:bg-indigo-700"
              >
                gtmchdhry@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
