import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

function Footer() {
  let data = new Date().getFullYear();

  return (
    <>
      <div className="flex justify-center bg-indigo-900 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">
            Blog Pessoal com Generation | Copyright: {data}
          </p>
          <p className="text-lg">Acesse as redes do desenvolvedor</p>
          <div className="flex gap-2">
            <a
              href="https://www.facebook.com/luizhenriquemachado/"
              target="_blank"
              rel="noopener"
            >
              <FacebookLogoIcon size={48} weight="bold" />
            </a>
            <a
              href="https://www.linkedin.com/in/luiz-henrique-machado/"
              target="_blank"
              rel="noopener"
            >
              <InstagramLogoIcon size={48} weight="bold" />
            </a>
            <a
              href="https://www.linkedin.com/in/luiz-henrique-machado/"
              target="_blank"
              rel="noopener"
            >
              <LinkedinLogoIcon size={48} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
