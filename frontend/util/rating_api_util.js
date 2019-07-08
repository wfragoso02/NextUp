export const updateRating = (rating) => (
    $.ajax({
      url: `api/ratings/${rating.id}`,
      method: 'PATCH',
      data: { rating }
    })
);
