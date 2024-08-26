import type { Metadata } from "next";

export async function generateMetadata({
  params,
  searchParams,
}): Promise<Metadata> {
  console.log(searchParams.delivery_city); // causes `DYNAMIC_SERVER_USAGE` error

  return {
    title: `?delivery_city=${searchParams.delivery_city}`,
  };
}

export default async function Page() {
  return <p>hello, Dave!</p>;
}
