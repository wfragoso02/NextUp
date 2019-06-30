export const fetchVideo = (id) => (
    $.ajax({
        method: "GET",
        url: `api/videos/${id}`
    })
);

export const fetchVideos = (filter) => (
    $.ajax({
        method: "GET",
        url: `api/videos`,
        data: filter
    })
);

export const updateVideo = (video) => (
    $.ajax({
      url: `api/videos/${video.id}`,
      method: 'PATCH',
      data: { video }
    })
);