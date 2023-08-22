import UseEffect from "@/HooksEd/UseEffect";
import UseLayoutEffect from "@/HooksEd/UseLayoutEffect";
import UseReducer from "@/HooksEd/UseReducer";
import UseRef from "@/HooksEd/UseRef";
import UseState from "@/HooksEd/UseState";

export default function Home() {
  return (
    <section className="py-24 px-24">
      <a href="/Hooks1" className="w-12 h-12 p-5 bg-slate-600 rounded-3xl">
        Hooks
      </a>
      <UseState />
      <UseEffect />
      <UseLayoutEffect />
      <UseReducer />
      <UseRef />
    </section>
  );
}
