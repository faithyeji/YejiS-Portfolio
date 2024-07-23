export default function Nav() {
  return (
    <nav className="pt-12 pb-4 sm:pb-16 sticky top-0 z-20 bg-custom bg-opacity-60 backdrop-blur-md fade">
      <div className="font-serif text-xl mx-14 sm:mx-24 flex justify-between content-center items-center ">
        <div className="flex gap-5 items-center">
          <a
            href="/"
            aria-label="Yeji's portfolio home"
            className="block sm:hidden"
          >
            <img
              src="/yejiLogo.svg"
              className="min-w-7 pb-2 mr-6"
              alt="yeji seo logo"
            ></img>
          </a>
          <div>
            <a href="/playground" aria-label="Yeji's sandbox">
              playground
            </a>
          </div>
          <div className="sm:min-w-24">
            <a href="/about">about</a>
          </div>
        </div>
        <div className="hidden sm:block text-center">
          <a href="/" aria-label="Yeji's portfolio home">
            <img
              src="/yejiLogo.svg"
              className="min-w-7 pb-2 inline-block"
              alt="yeji seo logo"
            ></img>
          </a>
        </div>
        <div>
          <div className="gap-3 text-lg hidden sm:flex">
            <div>
              <a
                href="https://github.com/faithyeji"
                target="_blank"
                aria-label="Yeji Seo Github"
              >
                github
              </a>
            </div>
            <div>
              <a
                href="https://read.cv/seoyemilk"
                target="_blank"
                aria-label="Yeji Seo CV"
              >
                CV
              </a>
            </div>
            <div>hello@faithyejiseo↗&#xFE0E;</div>
          </div>
        </div>
      </div>
    </nav>
  );
}
