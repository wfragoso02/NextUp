export const fetchProfiles = () => (
    $.ajax({
        method: 'GET',
        url: 'api/profiles'
    })
);

export const fetchProfile = (id) => {
    return  $.ajax({
        method: 'GET',
        url: `api/profiles/${id}`
    })
}
   


