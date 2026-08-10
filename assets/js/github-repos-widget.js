// Get projetcs from the Github API to display in the projects section
const PROJECTS_TO_DISPLAY = ['Classification-Score', 'MaxCliqueGrasp', 'RooftopSegmentation', 'PI-Projects', 'Power-Load-Predictor']
const MAX_DESCRIPTION_LENGTH = 43
const GITHUB_API_ENDPOINT = "https://api.github.com/users/victor-clemos/repos"

// this solves the issue with the assests path changing depending on the current html file
const IS_PORTUGUESE_PAGE = /\/pt-BR(\/|$)/i.test(window.location.pathname) || /\/pt-BR(\/|$)/i.test(document.baseURI);
const IMG_ASSETS_PATH = new URL(IS_PORTUGUESE_PAGE ? '../assets/img/' : './assets/img/', document.baseURI).toString();
const GITHUB_NOT_AVAILABLE_ERROR = ['/', '/home/'].includes(window.location.pathname) ? 'Not available right now...' : 'Indisponível no momento....';

function displayRepo(repo) {
    const repository_url = repo.html_url;
    const repository_full_name = repo.full_name;
    const repository_description = (repo.description ?? '');
    const repository_programing_language = repo.language || 'default';
    const normalized_language = repository_programing_language.toLowerCase();
    const repository_programing_language_img = `${IMG_ASSETS_PATH}logo/programing_languages/${normalized_language}.svg`;
    const repository_cover_img = `${IMG_ASSETS_PATH}banner_github.png`;
    const new_card_div = `<div class='grid-item wow zoomIn'>
                            <div class='img-place'>
                                <a href='${repository_url}' target='_blank'>
                                    <img src='${repository_cover_img}' alt=''>
                                    <div style='height: 65px'></div>
                                    <div class='img-caption'>
                                        <h5 class='fg-theme overflow'>${repository_full_name}</h5>
                                        <p style='display:${repository_description.length > 0 ? 'block' : 'none'};'>${repository_description}</p>
                                        <p style='position: absolute;'><img style='width: 5%;' src='${repository_programing_language_img}' alt=''> ${repository_programing_language}</p>
                                    </div>
                                </a>
                            </div>
                        </div>`;
    $('#github-projects').append(new_card_div);
}

$(document).ready( () => {
    $.ajax({
        url: GITHUB_API_ENDPOINT,
        type: 'GET',
        dataType: 'json', 
        statusCode: {
            403: function() { 
                $('#github-projects').append("<h3 class='text-center wow fadeInUp'>" + GITHUB_NOT_AVAILABLE_ERROR + "</h3>");
                $('#github-projects').css("height", "100px")
            },
            200: function(repositories) {
                if (repositories){
                    repositories = repositories.filter((repo) => PROJECTS_TO_DISPLAY.includes(repo.name))
                    repositories.forEach(displayRepo); 
                }
            }
        }
    });
});