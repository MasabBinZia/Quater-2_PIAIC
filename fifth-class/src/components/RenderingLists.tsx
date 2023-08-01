type Products = {
  id: number;
  title: string;
};

const products: Products[] = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

export default function RenderingLists() {
  return (
    <div className="px-12">
      Name : {products[2].title}
      {products.map((item, i) => {
        return (
          <div className="flex flex-col" key={item.id}>
            Name: {item.title}
          </div>
        );
      })}
    </div>
  );
}
