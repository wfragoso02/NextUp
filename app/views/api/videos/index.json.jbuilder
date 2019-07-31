# frozen_string_literal: true

@videos.each do |video|
  json.set! video.id do
    json.extract! video, :id, :title, :year, :description, :rating
    hash = {}
    video.video_ratings.each do |video_rating|
      id = video_rating.profile_id
      hash[id] = video_rating if current_user.profile_ids.include?(id)
    end
    json.video_ratings hash
    json.image_url url_for(video.image)
    json.video_url url_for(video.movie)
  end
end
