type Profile = {
  name: string;
  imageUrl: string;
  text: string;
};
const profile: Profile = {
  name: "Julia",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  text: "Lorem ipsum dolor sit amet.",
};

export default function Profile() {
  return (
    <main className="px-10 py-10">
      <div className="bg-red-600 w-[300px] h-[100px] px-4 flex space-x-4 rounded-xl">
        <img className="h-20 w-20 rounded-full mt-2" src={profile.imageUrl} />
        <div className="flex flex-col">
          <h1 className="text-white text-3xl font-bold">{profile.name}</h1>
          <p className="text-sm">{profile.text}</p>
        </div>
      </div>
    </main>
  );
}
