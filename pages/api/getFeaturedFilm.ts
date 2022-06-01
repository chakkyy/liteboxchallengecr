const urlFeaturedFilm = `${process.env.NEXT_PUBLIC_FEATURED_API_URL}api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

export const getFeaturedFilm = async () => {
  try {
    const resFeaturedFilm = await fetch(urlFeaturedFilm);
    const dataFeaturedFilm = await resFeaturedFilm.json();
    return dataFeaturedFilm;
  } catch (error) {
    alert(error);
  }
};
