export const starsArray = (rating: number) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (rating <= i) stars.push(0);
    else if (rating < i + 1) stars.push(1);
    else if (rating >= i + 1) stars.push(2);
  }
  return stars;
};
