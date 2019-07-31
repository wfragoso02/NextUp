# frozen_string_literal: true

json.extract! list, :id, :profile

json.list_video_ids do
  mapped = (list.list_items.sort_by(&:created_at).reverse).map{ |list_item| list_item.video_id }
  json.array! mapped
end
json.videos do
  json.array! list.videos do |video|
    json.partial! 'api/videos/video', video: video
  end
end
