export const fetchProfiles = () => (
    $.ajax({
        method: 'GET',
        url: 'api/profiles'
    })
);

