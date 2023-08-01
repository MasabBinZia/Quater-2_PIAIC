import Logic from "@/components/conditionalRendering";
import Logic1 from "@/components/conditionalRendering1";
import Logic2 from "@/components/conditionalRendering2";
import EventResponse from "@/components/EventResponse";

import Profile from "@/components/Profile";
import RenderingLists from "@/components/RenderingLists";
import UpdatingScreen from "@/components/UpdatingScreen";

export default function Home() {
  return (
    <>
      <Profile />
      <Logic />
      <Logic1 />
      <Logic2 />
      <RenderingLists/>
      <EventResponse/>
      <UpdatingScreen/>
    </>
  );
}
