export async function generateMetadata({ params, searchParams }) {
  console.log(searchParams.delivery_city);

  return {
    title: `?delivery_city=${searchParams.delivery_city}`,
  };
}

export default async function Page({ searchParams }) {
  return <p>hello, {searchParams.delivery_city}!</p>;
}
