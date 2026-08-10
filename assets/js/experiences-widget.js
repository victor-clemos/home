const EXPERIENCES_DATA = {
    'pt-BR': [
         {
            title: 'Cientista de Dados Especialista',
            company: 'Globo',
            period: '03/2025 - Hoje',
            job_description: 'Cientista de Dados responsável por:<br>- Liderando o desenvolvimento de um framework de Multi-Agent Generative AI projetado para automatizar a criação de Personas publicitárias de alta performance;<br>- Arquitetou e executou uma estratégia de first-party data, utilizando análise estatística de pesquisas em produtos internor (G1, GE, GShow, Globoplay) para construir um dataset proprietário para predizer estruturas familiares via Machine Learning;<br>- A frente de iniciativas de data fusion, realizando o merge de pesquisas públicas anonimizadas com bancos de dados internos para enriquecer os dados domésticos de mais de 50% da base de usuários;<br>- Direcionou avaliações de vendors e estudos de viabilidade técnica com parceiros externos (ex: CrewAI), gerenciando stakeholders,  desde desenvolvedores de IA até executivos de alto escalão, para alinhar capacidades técnicas com os objetivos de negócio.'
        },
        {
            title: 'Cientista de Dados Sênior',
            company: 'Consolide',
            period: '10/2022 - 03/2025',
            job_description: "Trabalhei como Cientista de Dados Sênior (Consultor) alocado na Globo:</br>- Projetou e implementou uma solução escalável em PySpark & LightGBM para simular a performance  de campanhas publicitárias, permitindo a comparação precisa entre estratégias de audiência segmentada e não segmentada; </br>- Arquitetou pipelines automatizados no Google Cloud Platform (GCP) utilizando Dataform e Cloud Functions para enriquecer a base de conhecimento de usuários com features avançadas, como perfis de atividade digital e hábitos de consumo; </br>- Entregou insights de nível executivo por meio de relatórios no Looker/Data Studio, transformando datasets complexos em dashboards de analytics de alto nível, apoiando diretamente a tomada de decisão estratégica para a liderança."
        },
        {
            title: 'Engenheiro de Machine Learning Pleno',
            company: 'Consolide',
            period: '06/2021 - 10/2022',
            job_description: 'Engenheiro de Machine Learning liderando time de AI/Python em projetos envolvendo:<br>- Aplicar soluções de NLP para realizar matching de marcas<br>- Aplicar BERT para a classificação de texto<br>- Transcrição de Fala para Texto<br>- Desenvolvimento de modelo de Scoring usando métrica de similaridade Fonética e Gramatical<br>- Cuidar do ciclo de vida de um modelo de Machine Learning<br><b>Stack</b>: Python, PyTorch, Tensorflow, Scikit-learn, Pandas, Dask, MLFlow, Django MySQL e Docker'
        },
        {
            title: 'Pesquisador de Machine Learning',
            company: 'Vision and Image Processing Lab (VIPLab)',
            period: '03/2019 - 06/2021',
            job_description: 'Trabalhando em pesquisa sobre previsão de séries temporais usando uma abordagem de rede convolucional. Esta pesquisa foi parte do meu mestrado e resultou em uma publicação na 2020 IEEE International Conference on Systems, Man, and Cybernetics (SMC) denominada Temporal Convolutional Network applied for Forecasting Individual Monthly Electric Energy Consumption.<br><b>Stack</b>: Tensorflow, Keras, hyperopt, scikit-learn, Pandas, Numpy e Oracle'
        },
        {
            title: 'Cientista de Dados',
            company: 'Equatorial Energia',
            period: '02/2021 - 05/2021',
            job_description: 'Cientista de Dados responsável por:<br>- Reconhecimento e Análise de Pardões<br>- Modelo de segmentação clientes<br>- Modelos de Scoring<br>- Criação e manuteção de modelos de Aprendizado de Máquina<br>- Pipelines de ETL para automação em ambientes de produção<br><b>Stack</b>: Python, C#, Scikit-learn, Pandas, Dask, Numpy, Oracle, SQLite, Jenkins and SAP Data Services'
        },
        {
            title: 'Desenvolvedor Back-end',
            company: 'SAMCORP Solutions',
            period: '09/2020 - 02/2021',
            job_description: 'Desenvolvedor back-end terceirizado da Cargill em projeto internacional para criação de sistema de gestão de contratos de compra e venda de grãos.<br>- Colaborando com a equipe internacional<br>- Desenvolvimento de micro-serviços <br>- Fazer apresentação das conquistas do sprint para os clientes<br><b>Stack</b>: C#, .NET Core, Swagger, MySQL e SQL Server.'
        },
        {
            title: 'Desenvolvedor/Pesquisador ML',
            company: 'P&D SISHCO (NCA - Equaltorial Energia)',
            period: '03/2019 - 09/2021',
            job_description: 'Trabalhei como Cientista de P&D no projeto SISHCO, colaboração entre NCA e Equatorial Energia. O objetivo com o SISHCO foi desenvolver uma ferramenta de definição de parâmetros adaptativos para a crítica da função de consumo de energia elétrica usando Deep Learning e Survival Analysis.<br>- Previsão mensal do consumo de energia utilizando o estado da arte em métodos de regressão<br>- Meta-classificador para determinar o modelo de previsão de melhor desempenho para cada cliente<br>- Abordagem para prever o consumo quando o cliente tem poucos ou nenhum dado histórico<br><b>Stack</b>: Tensorflow, Keras, Oracle, Pandas, Numpy e Django'
        },
        {
            title: 'Desenvolvedor/Pesquisador ML',
            company: 'P&D SAUL (NCA - Equaltorial Energia)',
            period: '11/2017 - 03/2019',
            job_description: 'Atuei como Estagiária de P&D no projeto SAUL, colaboração entre NCA e Equatorial Energia para o desenvolvimento de uma ferramenta de construção auto-organizada de clusters de leitura utilizando métodos de inteligência computacional e Sistemas de Informação Geográfica.<br>- Desenvolvimento de uma aplicação WebGIS para realizar uma organização manual de grupos de unidades consumidoras para leitura de consumo.<br>- Desenvolvimento de um módulo de otimização integrado como serviço através do framework Django.<br>- Modelo de ML responsável pela geração automática de clusters e organização de unidades consumidoras.<br><b>Stack</b>: Python, C#, Keras, Scikit-learn, Django, Pandas, Numpy, Anaconda e Oracle'
        }
    ],
    'en-US': [
        {
            title: 'Data Scientist Specialist',
            company: 'Globo',
            period: '03/2025 - Hoje',
            job_description: 'Data Scientist responsible for:<br>- Leading the development of a Multi-Agent Generative AI framework designed to automate the creation of high-performance advertising personas;<br>- Architecting and executing a first-party data strategy, utilizing statistical analysis of internal surveys (G1, GE, GShow, Globoplay) to build a proprietary dataset for predicting family structures via Machine Learning;<br>- Overseeing data fusion initiatives, merging anonymized public surveys with internal databases to enrich household data for over 50% of the user base;<br>- Directing vendor evaluations and technical feasibility studies with external partners (e.g., CrewAI), managing stakeholders from AI developers to senior executives, to align technical capabilities with business objectives.'
        },
        {
            title: 'Senior Data Scientist',
            company: 'Consolide',
            period: '10/2022 - 03/2025',
            job_description: "Worked as a Senior Data Scientist (Consultant) allocated at Globo:</br>- Designed and implemented a scalable solution in PySpark & LightGBM to simulate the performance of advertising campaigns, enabling accurate comparisons between segmented and non-segmented audience strategies; </br>- Architected automated pipelines on Google Cloud Platform (GCP) using Dataform and Cloud Functions to enrich the knowledge base of users with advanced features, such as digital activity profiles and consumption habits; </br>- Delivered executive-level insights through Looker/Data Studio reports, transforming complex datasets into high-level analytics dashboards, directly supporting strategic decision-making for leadership."
        },
        {
            title: 'Mid-Level Machine Learning Engineer',
            company: 'Consolide',
            period: '06/2021 - Hoje',
            job_description: 'Machine Learning Engineer leading AI/Python team in projects involving:<br>- Applying NLP solutions for trademark matching<br>- Applying BERT for Text classification<br>- Speech to text transcription<br>- Development of Scoring model using Phonetic and grammatical similarity<br>- Handling Machine Learning model lifecycle<br><b>Stack</b>: Python, PyTorch, Tensorflow, Scikit-learn, Pandas, Dask, MLFlow, Django MySQL e Docker'
        },
        {
            title: 'Machine Learning Researcher',
            company: 'Vision and Image Processing Lab (VIPLab)',
            period: '03/2019 - 06/2021',
            job_description: 'Working in research on time series prediction using a convolutional network approach. This research resulted in a publication in the 2020 IEEE International Conference on Systems, Man, and Cybernetics (SMC) called Temporal Convolutional Network applied for Forecasting Individual Monthly Electric Energy Consumption and also was part of my Master`s dissertation.<br><b>Stack</b>: Tensorflow, Keras, hyperopt, scikit-learn, Pandas, Numpy and Oracle'
        },
        {
            title: 'Mid-Level Data Scientist',
            company: 'Equatorial Energia',
            period: '02/2021 - 05/2021',
            job_description: 'Data Scientist working in the collection`s department of one of the largest power companies in LATAM responsible for doing:<br>- Pattern recognition and analytics<br>- Employing Customer Segmentation and Scoring models<br>- Building and management of Machine Learning models<br>- Creating and management of ETL Pipelines<br><b>Stack</b>: Python, C#, Scikit-learn, Pandas, Dask, Numpy, Oracle, SQLite, Jenkins and SAP Data Services'
        },
        {
            title: 'Back-end Developer',
            company: 'SAMCORP Solutions',
            period: '09/2020 - 02/2021',
            job_description: 'Outsourced back-end developer at Cargill in an international project to create a system for managing grain purchase and sale contracts.<br>- Collaborating with international team<br>- Developing micro-services <br>- Making presentation of sprint achievements to the clients<br><b>Stack</b>: C#, .NET Core, Swagger, MySQL and SQL Server.'
        },
        {
            title: 'Developer/ML Researcher',
            company: 'R&D SISHCO (NCA - Equaltorial Energia)',
            period: '03/2019 - 09/2021',
            job_description: 'I worked as a R&D Scientist in a project project called SISHCO, collaboration between NCA and Equatorial Energia. The objective with SISHCO was to develop an adaptive parameter definition tool for the critique of the electrical energy consumption function using Deep Learning and Survival Analysis. <br>- Monthly prediction of power consumption using state-of-the-art regression methods. <br>- Meta-classifier to determine the best performing forecasting model for each costumer<br>- Approach for predicting consumption when costumer has small or lack of historical data<br><b>Stack</b>: Tensorflow, Keras, Oracle, Pandas, Numpy and Django'
        },
        {
            title: 'Developer/ML Researcher',
            company: 'R&D SAUL (NCA - Equaltorial Energia)',
            period: '11/2017 - 03/2019',
            job_description: 'I worked as a R&D Intern in a project called SAUL, collaboration between NCA and Equatorial Energia for the development of a tool for self-organizing construction of reading clusters using methods of computational intelligence and Geographic Information Systems. <br>- A WebGIS application was developed for performing a manual organization of groups of consumer units for consumption reading. <br>- An optimization module was then developed that was integrated as a service through the Django framework.<br>- ML model responsible for the automatic generation of clusters and organization of consumer units.<br><b>Stack</b>: Python, C#, Keras, Scikit-learn, Django, Pandas, Numpy, Anaconda and Oracle'
        }
    ]
};

const EXPERIENCES_NOT_AVAILABLE_ERROR = ['/', '/home/'].includes(window.location.pathname) ? 'Not available right now...' : 'Indisponível no momento....';

function isPortuguesePage() {
    return window.location.pathname.toLowerCase().includes('/pt-br') || document.documentElement.lang?.toLowerCase().includes('pt');
}

function getExperiences() {
    const localeKey = isPortuguesePage() ? 'pt-BR' : 'en-US';
    return EXPERIENCES_DATA[localeKey] || [];
}

function buildExperienceMarkup(experience) {
    return `
        <li class="experience-item">
            <div class="title">${experience.period}</div>
            <div class="details">
                <h5>${experience.title}</h5>
                <small class="fg-theme">${experience.company}</small>
                <p>${experience.job_description}</p>
            </div>
        </li>`;
}

function displayExperiences(experience, isHidden) {
    const $item = $(buildExperienceMarkup(experience));

    if (isHidden) {
        $item.hide().attr('data-collapsed', 'true');
    }

    $('#experiences-widget').append($item);
}

$(document).ready(function () {
    const experiences = getExperiences();

    if (experiences.length > 0) {
        const visibleCount = 3;
        const hiddenExperiences = experiences.slice(visibleCount);

        experiences.slice(0, visibleCount).forEach(function (experience) {
            displayExperiences(experience, false);
        });

        if (hiddenExperiences.length > 0) {
            hiddenExperiences.forEach(function (experience) {
                displayExperiences(experience, true);
            });

            const toggleLabel = isPortuguesePage() ? 'Ver mais experiências' : 'Show more experiences';
            const collapseLabel = isPortuguesePage() ? 'Mostrar menos' : 'Show less';

            $('<button type="button" class="btn btn-theme mt-3 d-block mx-auto">')
                .text(toggleLabel)
                .attr('id', 'toggle-experiences')
                .insertAfter('#experiences-widget')
                .on('click', function () {
                    const $hiddenItems = $('#experiences-widget .experience-item[data-collapsed="true"]');
                    const isExpanded = $(this).data('expanded') === true;

                    $hiddenItems.toggle(!isExpanded);
                    $(this).text(isExpanded ? toggleLabel : collapseLabel).data('expanded', !isExpanded);
                });
        }
    } else {
        $('#experiences-widget').css('display', 'none');
        $('#experiences-widget').append("<h3 class='text-center wow fadeInUp'>" + EXPERIENCES_NOT_AVAILABLE_ERROR + "</h3>");
    }
});