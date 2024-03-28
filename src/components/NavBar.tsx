import { ModeToggle } from "@/components/ModeToggle";

function NavBar() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="font-jose tracking-[0.5em] font-extrabold uppercase text-xl sm:text-2xl text-white">
        Todo
      </h1>
      <ModeToggle />
    </div>
  );
}

export default NavBar;
