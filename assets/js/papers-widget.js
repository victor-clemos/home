const PAPERS_DATA = [
    {
        title: 'Método automático para geração de laudos médicos em imagens de retinografia utilizando Transformer',
        publisher: 'Simpósio Brasileiro de Computação Aplicada a Saúde - SBCAS',
        year: 2024,
        link: 'https://sol.sbc.org.br/index.php/sbcas/article/view/28844/28649'
    },
    {
        title: 'Forecasting of individual electricity consumption using Optimized Gradient Boosting Regression with Modified Particle Swarm Optimization',
        publisher: 'Engineering Applications of Artificial Intelligence',
        year: 2021,
        link: 'https://doi.org/10.1016/j.engappai.2021.104440'
    },
    {
        title: 'Temporal Convolutional Network applied for Forecasting Individual Monthly Electric Energy Consumption',
        publisher: '2020 IEEE International Conference on Systems, Man, and Cybernetics (SMC)',
        year: 2020,
        link: 'https://doi.org/10.1109/SMC42975.2020.9282960'
    },
    {
        title: 'Consumer units measurement planning using Simulated Annealing',
        publisher: '25th International Congress of Mechanical Engineering',
        year: 2019,
        link: 'https://www.researchgate.net/publication/337747560_CONSUMER_UNITS_MEASUREMENT_PLANNING_USING_SIMULATED_ANNEALING'
    },
    {
        title: 'Estimation of Individual Electricity Consumption Range Using Quantile Regression Forest',
        publisher: 'JIM 2018 - VII Jornada de Informática do Maranhão',
        year: 2018,
        link: '#'
    },
    {
        title: 'ConnectSteel: Um aplicativo móvel para verificação e dimensionamento de emendas parafusadas',
        publisher: 'JIM 2018 - VII Jornada de Informática do Maranhão',
        year: 2018,
        link: 'http://sistemas.deinf.ufma.br/anaisjim/artigos/2018/201812.pdf'
    },
    {
        title: 'Uma Aplicação em Realidade Aumentada para Visualização de uma Simulação Computacional de Parto Vaginal',
        publisher: 'JIM 2018 - VII Jornada de Informática do Maranhão',
        year: 2018,
        link: 'http://sistemas.deinf.ufma.br/anaisjim/artigos/2018/201805.pdf'
    },
    {
        title: 'Um Sistema WebGIS para auxiliar a organização da leitura do consumo em distribuidoras de energia',
        publisher: 'JIM 2018 - VII Jornada de Informática do Maranhão',
        year: 2018,
        link: 'http://sistemas.deinf.ufma.br/anaisjim/artigos/2018/201814.pdf'
    },
    {
        title: 'Uma proposta para classificação de equipes em esportos coletivos',
        publisher: 'JIM 2018 - VII Jornada de Informática do Maranhão',
        year: 2018,
        link: 'http://sistemas.deinf.ufma.br/anaisjim/artigos/2018/201819.pdf'
    },
    {
        title: 'A webGIS measurement and clustering planning system for electric power consumer units',
        publisher: '2018 13th Iberian Conference on Information Systems and Technologies (CISTI)',
        year: 2018,
        link: 'http://sistemas.deinf.ufma.br/anaisjim/artigos/2018/201805.pdf'
    },
    {
        title: 'Plataforma gamificada de auxílio para exames de POSCOMP e ENADE',
        publisher: 'XVI ENEPET',
        year: 2017,
        link: 'https://pet.ufma.br/comp/wp-content/uploads/sites/1/2017/11/Plataforma-gamificada-de-aux%C3%ADlio-para-exames-de-POSCOMP-e-ENADE.pdf'
    },
    {
        title: 'BodyRating: Uma proposta para anotação de silhueta corporal para avaliação de autopercepção',
        publisher: '2017: ANAIS DO XVII WORKSHOP DE INFORMÁTICA MÉDICA',
        year: 2017,
        link: 'https://doi.org/10.5753/sbcas.2017.3713'
    },
    {
        title: 'Uma proposta de ferramenta para anotação de silhueta corporal para avaliação autoperceptiva',
        publisher: 'VI Encontro Acadêmico de Computação - UFMA',
        year: 2017,
        link: 'https://pet-comp-ufma.github.io/EAComp_site/2017/anais%202017/NEWUma-proposta-de-ferramenta-para-anotac%C2%B8ao-de-silhueta.pdf'
    }
];

const PAPERS_NOT_AVAILABLE_ERROR = ['/', '/home/'].includes(window.location.pathname) ? 'Not available right now...' : 'Indisponível no momento....';
const VIEW_BTN_LABEL = ['/', '/home/'].includes(window.location.pathname) ? 'View' : 'Ver';

function displayPaper(paper) {
    const buttonClass = paper.link === '#' ? 'disabled' : '';
    const new_row = `
        <tr>
            <td>${paper.title}</td>
            <td>${paper.publisher}</td>
            <td>${paper.year}</td>
            <td>
                <a href="${paper.link}" target="_blank" class="btn btn-secondary btn-sm ${buttonClass}" tabindex="-1" role="button" aria-disabled="true">
                    <span class="icon ti-link"></span>${VIEW_BTN_LABEL}
                </a>
            </td>
        </tr>`;

    $('#papers-widget').append(new_row);
}

$(document).ready(function () {
    if (PAPERS_DATA.length > 0) {
        PAPERS_DATA.forEach(function (paper) {
            displayPaper(paper);
        });
    } else {
        $('#papers-table').css('display', 'none');
        $('#papers-error').append("<h3 class='text-center wow fadeInUp'>" + PAPERS_NOT_AVAILABLE_ERROR + "</h3>");
    }
});