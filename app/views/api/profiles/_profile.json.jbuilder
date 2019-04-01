json.extract! profile, :id, :name, :image_url
# json.myList do 
#     profile.my_list_videos.each do |video| 
#         json.set! video.id  do
#             json.extract! video, :id, :title, :year, :description
#             json.image_url url_for(video.image) 
#         end
#     end
# end