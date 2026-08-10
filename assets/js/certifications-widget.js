const CERTIFICATIONS_DATA = {
    'pt-BR': [
        {
            title: 'Large Language Models Bootcamp',
            issuer: 'Data Science Dojo',
            period: '2025',
            description: '- Fundamentos de LLM aplicados à arquitetura de soluções de grade empresarial.<br>- Construção de pipelines de RAG em produção usando bases de dados vetoriais.<br>- Design e implantação de sistemas multi-agente com LangGraph.<br>- Ajuste fino e avaliação de LLMs para desempenho em produção.',
            credential_url: 'https://verify.datasciencedojo.com/verify/2457c96b445883'
        },
    ],
    'en-US': [
        {
            title: 'Large Language Models Bootcamp',
            issuer: 'Data Science Dojo',
            period: '2025',
            description: '- Apply LLM fundamentals to architect enterprise-grade solutions.<br>- Build production RAG pipelines using vector databases.<br>- Design and deploy multi-agent systems with LangGraph.<br>- Fine-tune and evaluate LLMs for production performance.',
            credential_url: 'https://verify.datasciencedojo.com/verify/2457c96b445883'
        },
    ]
};

const CERTIFICATIONS_NOT_AVAILABLE_ERROR = ['/', '/home/'].includes(window.location.pathname) ? 'Not available right now...' : 'Indisponível no momento....';

function isPortuguesePage() {
    return window.location.pathname.toLowerCase().includes('/pt-br') || document.documentElement.lang?.toLowerCase().includes('pt');
}

function getCertifications() {
    const localeKey = isPortuguesePage() ? 'pt-BR' : 'en-US';
    return CERTIFICATIONS_DATA[localeKey] || [];
}

function buildCertificationMarkup(certification) {
    const credentialLabel = isPortuguesePage() ? 'Ver credencial' : 'Show credential';
    const credentialButton = certification.credential_url
        ? `<a href="${certification.credential_url}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-secondary mt-2">${credentialLabel}</a>`
        : '';

    return `
        <li class="experience-item">
            <div class="title">${certification.period}</div>
            <div class="details">
                <h5>${certification.title}</h5>
                <small class="fg-theme">${certification.issuer}</small>
                <p>${certification.description}</p>
                ${credentialButton}
            </div>
        </li>`;
}

function displayCertification(certification, isHidden) {
    const $item = $(buildCertificationMarkup(certification));

    if (isHidden) {
        $item.hide().attr('data-collapsed', 'true');
    }

    $('#certifications-widget').append($item);
}

$(document).ready(function () {
    const certifications = getCertifications();

    if (certifications.length > 0) {
        const visibleCount = 3;
        const hiddenCertifications = certifications.slice(visibleCount);

        certifications.slice(0, visibleCount).forEach(function (certification) {
            displayCertification(certification, false);
        });

        if (hiddenCertifications.length > 0) {
            hiddenCertifications.forEach(function (certification) {
                displayCertification(certification, true);
            });

            const toggleLabel = isPortuguesePage() ? 'Ver mais certificações' : 'Show more certifications';
            const collapseLabel = isPortuguesePage() ? 'Mostrar menos' : 'Show less';

            $('<button type="button" class="btn btn-theme mt-3 d-block mx-auto">')
                .text(toggleLabel)
                .attr('id', 'toggle-certifications')
                .insertAfter('#certifications-widget')
                .on('click', function () {
                    const $hiddenItems = $('#certifications-widget .experience-item[data-collapsed="true"]');
                    const isExpanded = $(this).data('expanded') === true;

                    $hiddenItems.toggle(!isExpanded);
                    $(this).text(isExpanded ? toggleLabel : collapseLabel).data('expanded', !isExpanded);
                });
        }
    } else {
        $('#certifications-widget').css('display', 'none');
        $('#certifications-widget').append("<h3 class='text-center wow fadeInUp'>" + CERTIFICATIONS_NOT_AVAILABLE_ERROR + "</h3>");
    }
});
