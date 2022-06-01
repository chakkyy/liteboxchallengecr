const urlPopularFilms = `${process.env.NEXT_PUBLIC_POPULAR_API_URL}api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

export const getPopularFilms = async () => {
  try {
    const resPopularFilms = await fetch(urlPopularFilms);
    const dataPopularFilms = await resPopularFilms.json();
    return dataPopularFilms;
  } catch (error) {
    alert(error);
  }
};
