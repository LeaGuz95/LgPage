/**
 * DYNAMIC CONTENT LOADER
 * Carga el contenido dinamicamente desde data.js
 */

class DynamicContentLoader {
    constructor() {
        this.init();
    }
    
    init() {
        this.loadProjects();
        this.loadArtGallery();
      //  this.loadTimeline();
        this.setupImageErrorHandling();      
        
    }
    
    // Cargar proyectos dinamicamente
    loadProjects() {
    const grid = document.getElementById('projectsGrid');
    console.log("grid:", grid);

    if (!grid) return;

    grid.innerHTML = '';

    portfolioData.projects.forEach(project => {      
        const card = this.createProjectCard(project);
        grid.appendChild(card);
    });
}

    
    createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-category', project.category);
        
        card.innerHTML = `
            <div class="card-image">
                <img src="${project.image}" 
                     alt="${project.title}"
                     onerror="this.src='${portfolioData.placeholder}'">
                <div class="card-overlay">
                    <div class="overlay-content">
                        ${project.github ? `
                            <a href="${project.github}" class="overlay-btn" target="_blank" rel="noopener">
                                <span class="material-symbols-outlined">code</span>
                            </a>
                        ` : ''}
                        ${project.demo ? `
                            <a href="${project.demo}" class="overlay-btn" target="_blank" rel="noopener">
                                <span class="material-symbols-outlined">open_in_new</span>
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
            <div class="card-content">
                <div class="card-category">${this.getCategoryName(project.category)}</div>
                <h3 class="card-title">${project.title}</h3>
                <p class="card-description">${project.description}</p>
                <div class="card-tech">
                    ${project.technologies.map(tech => 
                        `<span class="tech-tag">${tech}</span>`
                    ).join('')}
                </div>
            </div>
        `;
        
        return card;
    }
    
    // Cargar galeria de arte dinamicamente
    loadArtGallery() {
        const gallery = document.getElementById('artGallery');
        if (!gallery) return;
        
        gallery.innerHTML = '';
        
        portfolioData.artGallery.forEach(art => {
            const item = this.createArtItem(art);
            gallery.appendChild(item);
        });
    }
    
   createArtItem(art) {
    const isPixelArt = art.category === 'pixelart';

    const item = document.createElement('div');
    item.className = `art-item ${isPixelArt ? 'is-pixelart' : ''}`;
    item.dataset.category = art.category;

    // HTML de la imagen según tipo
    const imgHTML = isPixelArt
        ? `
            <img
                src="${art.image}"
                alt="${art.title}"
                loading="lazy"
                class="loading"
            >
        `
        : `
            <img
                src="${art.thumb}"
                srcset="
                    ${art.thumb} 480w,
                    ${art.thumb2x} 960w
                "
                sizes="447px"
                alt="${art.title}"
                loading="lazy"
                class="loading"
                data-full="${art.full}"
            >
        `;

    item.innerHTML = `
        ${imgHTML}
        <div class="art-info">
            <span class="art-category">
                ${this.getArtCategoryName(art.category)}
            </span>
            <h3>${art.title}</h3>
            <p>${art.description}</p>
        </div>
    `;

    const img = item.querySelector('img');

    // Estado visual de carga
    img.addEventListener('load', () => {
        img.classList.remove('loading');
        img.classList.add('loaded');
    });

    // Abrir modal
    img.addEventListener('click', () => {
        const src = isPixelArt ? art.image : img.dataset.full;
        window.artGalleryInstance?.open(
            src,
            art.title,
            art.category
        );
    });

    return item;
}




  


    
    // Cargar timeline para futuro
    loadTimeline() {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;

    if (!Array.isArray(portfolioData.timeline)) {
        console.warn("Timeline no definida en portfolioData");
        return;
    }

    timeline.innerHTML = '<div class="timeline-line"></div>';

    portfolioData.timeline.forEach(item => {
        const timelineItem = this.createTimelineItem(item);
        timeline.appendChild(timelineItem);
    });
}

    
    createTimelineItem(item) {
        const div = document.createElement('div');
        div.className = `timeline-item ${item.active ? 'active' : ''}`;
        
        div.innerHTML = `
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="timeline-year">${item.year}</div>
                <div class="timeline-title">${item.title}</div>
                <p>${item.description}</p>
            </div>
        `;
        
        return div;
    }
    

    // Manejo de errores de imagenes
    setupImageErrorHandling() {
        document.addEventListener('error', (e) => {
            if (e.target.tagName === 'IMG') {
                e.target.src = portfolioData.placeholder;
            }
        }, true);
    }
    
    getCategoryName(category) {
        const names = {
            'web': 'Web App',
            'software': 'Software',
            'games': 'Videojuego',
            'mobile': 'Mobile App'
        };
        return names[category] || category;
    }

    getArtCategoryName(category) {
    const names = {
        fanart: 'Fan Art',
        pixelart: 'Pixel Art / Assets',
        original: 'Original'
    };
    return names[category] || category;
}

}

// Inicializar cuando el DOM este listo
document.addEventListener('DOMContentLoaded', () => {
    new DynamicContentLoader();
});