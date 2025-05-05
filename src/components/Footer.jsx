import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card relative border-t border-border mt-12 pt-2 pb-2 pl-3 pr-3 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-center " style={{ textAlign: "center" }}>
        {" "}
        &copy; {new Date().getFullYear()} Avaneesh. All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={15} />
      </a>
    </footer>
  );
};
