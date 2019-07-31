export const updateRating = (rating) => (
  $.ajax({
    url: `api/ratings/${rating.id}`,
    method: 'PATCH',
    data: { rating }
  })
);

export const createRating = (rating) => (
  $.ajax({
    url: `api/ratings`,
    method: 'POST',
    data: { rating }
  })
);