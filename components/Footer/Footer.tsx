import Link from "next/link";

function Footer() {
  return (
    <footer className="  mt-aut p-5 text-center border-t border-zinc-700">
      <div className="">
        <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div className="container  flex justify-center gap-5">
          <p>Developer: Vitalii Savchuk</p>
          <p>
            Contact us:
            <Link
              className="hover:underline transition-all"
              href="mailto:student@notehub.app"
            >
              vetalsavchuk@23gmail.com
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
