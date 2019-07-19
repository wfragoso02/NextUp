# frozen_string_literal: true

json.extract! list, :id, :profile, :video_ids
json.videos do
  json.array! list.videos do |video|
    json.partial! 'api/videos/video', video: video
  end
end
