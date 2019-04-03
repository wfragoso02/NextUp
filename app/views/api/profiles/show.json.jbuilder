json.profile do 
    json.partial! 'api/profiles/profile', profile: @profile
end
json.list do
    json.partial! 'api/lists/list', list: @profile.list
end