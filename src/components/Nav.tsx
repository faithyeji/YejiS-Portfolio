export default function Nav() {
  return (
    <nav className="mx-20 mt-12">
      <div className="font-serif text-xl flex justify-between content-center items-center">
        <div className="flex gap-5">
          <div>
            <a href="/playground" aria-label="Yeji's sandbox">
              playground
            </a>
          </div>
          <div>
            <a href="/about">about</a>
          </div>
        </div>
        <div>
          <a href="/" aria-label="Yeji's portfolio home">
            <img
              src="/yejiLogo.svg"
              className="w-7 pb-2"
              alt="yeji seo logo"
            ></img>
          </a>
        </div>
        <div>
          <div className="flex gap-3 text-lg">
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
