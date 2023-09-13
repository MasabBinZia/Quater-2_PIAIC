import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      name: "products",
      title: "Products",
      type: "document",
      fields: [
        {
          name: "product_name",
          title: "Product Name",
          type: "string",
        },
        {
          name: "price",
          title: "Price",
          type: "number",
        },
        {
          name: "description",
          title: "Description",
          type: "array",
          of: [{ type: "block" }],
        },
        {
          name: "image",
          title: "Image",
          type: "image",
        },
      ],
    },
  ],
};
