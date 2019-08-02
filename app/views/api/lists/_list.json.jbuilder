# frozen_string_literal: true

json.extract! list, :id, :profile

json.list_video_ids do
  mapped = list.list_items.sort_by(&:created_at).reverse.map(&:video_id)
  json.array! mapped
end
