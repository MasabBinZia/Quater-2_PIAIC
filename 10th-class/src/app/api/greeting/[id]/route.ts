import { NextRequest } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  console.log(params.id);
  return new NextRequest("Hello to dynamic segments");
};
