/**
 * DATA CONFIGURATION
 * Configuracion centralizada de datos para el portfolio
 * Aca podes cambiar todas las imagenes, proyectos y arte sin tocar el HTML
 */

const portfolioData = {
    // ============================================
    // TODO PROYECTOS
    // ============================================
    projects: [
        {
            
            title: "Portfolio Interactivo",
            category: "web",
            description: "Portfolio web interactivo para mostrar todo",
            image: "assets/images/proyectos/Portfolio.png", 
            technologies: ["JavaScript", "CSS3"],
            github: "https://github.com/LeaGuz95/LgPage",
            demo: null,
            featured: true
        },
        {
           
            title: "Ultra Dragon Ball Z (Ikemen) W.I.P",
            category: "games",
            description: "Todavia en desarrollo (Privado pero paso link de YT) ",
            image: "assets/images/proyectos/Ultra.png", 
            technologies: ["M.U.G.E.N", "I.K.E.M.E.N", "fighter factory 3"],
            github: "https://www.youtube.com/elguzyooo",
            demo: null,
            featured: true
        },
        {
         
            title: "Doom Page (Diseño de pag web proyecto)",
            category: "web",
            description: "Mi viejo proyecto de diseño para la facultad",
            image: "assets/images/proyectos/Doom.png", 
            technologies: ["HTML", "CSS3","JS"],
            github: "https://github.com/LeaGuz95/DoomPage.github.io",
            demo: null,
            featured: true
        },
         {
       
            title: "PulseBoard W.I.P",
            category: "software",
            description: "Barra de sonidos para streamers",
            image: "assets/images/proyectos/Pulseboard.png", 
            technologies: ["python"],
            github: "https://github.com/LeaGuz95/PulseBoard", 
            featured: true
        },
         {
      
            title: "Pilsen Rock page (proyecto)",
            category: "web",
            description: "Pagina del pilsen rock para una tarea",
            image: "assets/images/proyectos/pilsen.png", 
            technologies: ["HTML", "CSS3"],
            github: "https://github.com/LeaGuz95/Pilsen-rock-Page", 
            demo: null,
            featured: true
        },
         {
     
            title: "Obligatorio Algoritmos (facultad)",
            category: "software",
            description: "Obligatorio de la materia algoritmos 1 de la facultad",
            image: "assets/images/proyectos/Algoritmos.png", 
            technologies: ["Java", ],
            github: "https://github.com/LeaGuz95/Obl-AED-ago25", 
            featured: true
        },
         {
    
            title: "Obligatorio Programacion 2 (facultad)",
            category: "web",
            description: "Obligatorio de la materia Programacion 2 de la facultad",
            image: "assets/images/proyectos/Prog2.png", 
            technologies: ["C#",".Net","Patron Singleton" ],
            github: "https://github.com/LeaGuz95/ObligatorioP2", 
            demo: null,
            featured: true
        },
         {
   
            title: "Obligatorio Programacion 3 (facultad)",
            category: "web",
            description: "Obligatorio de la materia Programacion 3 de la facultad",
            image: "assets/images/proyectos/prog3.png", 
            technologies: ["C#",".Net","Api ","Swagger","Patron Repositorio" ],
            github: "https://github.com/LeaGuz95/N3B-Obligatorio-321788", //pendente
            demo: null,
            featured: true
        },
        // Agrega mas proyectos facilmente
    ],

    // ============================================
    // TODO GALERIA DE ARTE
    // ============================================

   
    artGallery: [

        {
            title: "Goku ",
            description: "Poster de Goku ",
            thumb: "assets/images/arte/FanArts/thumbs/Goku.webp",
            thumb2x: "assets/images/arte/FanArts/thumbs/Goku-960.webp",
            full: "assets/images/arte/FanArts/Full/GokuFULL.webp",
            category: "fanart",
            year: 2025
        },

       
         {
     
            title: "Goku Super Sayayin  ",
            description: "Poster de Goku en SSJ",
            thumb: "assets/images/arte/FanArts/thumbs/GokuSSJ.webp",
            thumb2x: "assets/images/arte/FanArts/thumbs/GokuSSJ-960.webp",
            full: "assets/images/arte/FanArts/Full/GokuSSJFULL.webp",
            category: "fanart",
            year: 2025
        },
        {
        
            title: "Goku Super Sayayin 2 ",
            description: "Poster de Goku En Fase 2",
            thumb: "assets/images/arte/FanArts/thumbs/GokuSSJ2.webp",
            thumb2x: "assets/images/arte/FanArts/thumbs/GokuSSJ2-960.webp",
            full: "assets/images/arte/FanArts/Full/GokuSSJ2FULL.webp",
            category: "fanart",
            year: 2026
        },
        {
        
            title: "Goku Super Sayayin 3 ",
            description: "Poster de Goku En Fase 3 (omg esto va a ser epico papus)",
            thumb: "assets/images/arte/FanArts/thumbs/GokuSSJ3.webp",
            thumb2x: "assets/images/arte/FanArts/thumbs/GokuSSJ3-960.webp",
            full: "assets/images/arte/FanArts/Full/GokuSSJ3FULL.webp",
            category: "fanart",
            year: 2026
        },
         {
       
            title: "Vegeta Explorador  ",
            description: "Poster de Vegeta recien llegado a la tierra",
            thumb: "assets/images/arte/FanArts/thumbs/Vegeta.webp",
            thumb2x: "assets/images/arte/FanArts/thumbs/Vegeta-960.webp",
            full: "assets/images/arte/FanArts/Full/VegetaFULL.webp",
            category: "fanart",
            year: 2025
        },
        {
          
            title: "Super Vegeta ",
            description: "Poster de SUPA VEGITA",
            thumb: "assets/images/arte/FanArts/thumbs/SuperVegeta.webp",
            thumb2x: "assets/images/arte/FanArts/thumbs/SuperVegeta-960.webp",
            full: "assets/images/arte/FanArts/Full/SuperVegetaFULL.webp",
            category: "fanart",
            year: 2025
        },
        {
     
            title: "Majin Vegeta ",
            description: "Kakaroto tablos esta controlando mi mentee",
            thumb: "assets/images/arte/FanArts/thumbs/MajinVegeta.webp",
            thumb2x: "assets/images/arte/FanArts/thumbs/MajinVegeta-960.webp",
            full: "assets/images/arte/FanArts/Full/MajinVegetaFULL.webp",
            category: "fanart",
            year: 2026
        },
        {
       
            title: "Picoro  ",
            description: "Poster de la niñera",
            thumb: "assets/images/arte/FanArts/thumbs/Picoro.webp",
            thumb2x: "assets/images/arte/FanArts/thumbs/Picoro-960.webp",
            full: "assets/images/arte/FanArts/Full/PicoroFULL.webp",
            category: "fanart",
            year: 2026
        },
        {
          title: "Gohan Super Sayayin 2  ",
            description: "Poster del mejor gohan",
            thumb: "assets/images/arte/FanArts/thumbs/TeenGohan.webp",
            thumb2x: "assets/images/arte/FanArts/thumbs/TeenGohan-960.webp",
            full: "assets/images/arte/FanArts/Full/TeenGohanFULL.webp", 
            category: "fanart",
            year: 2026
        },
         {
          title: "Gohan Definitivo ",
            description: "Poster del vende humo",
            thumb: "assets/images/arte/FanArts/thumbs/GohanDefinitivo.webp",
            thumb2x: "assets/images/arte/FanArts/thumbs/GohanDefinitivo-960.webp",
            full: "assets/images/arte/FanArts/Full/GohanDefinitivoFULL.webp",
            category: "fanart",
            year: 2026
        },

         {
        
            title: "Gohan Bestia ",
            description: "Poster de pelos locos",
            thumb: "assets/images/arte/FanArts/thumbs/GohanBestia.webp",
            thumb2x: "assets/images/arte/FanArts/thumbs/GohanBestia-960.webp",
            full: "assets/images/arte/FanArts/Full/GohanBestiaFULL.webp", 
            category: "fanart",
            year: 2026
        },
        {
       
            title: "Yamcha ",
            description: "Poster de yamcha antes de que explote",
            thumb: "assets/images/arte/FanArts/thumbs/Yamcha.webp",
            thumb2x: "assets/images/arte/FanArts/thumbs/Yamcha-960.webp",
            full: "assets/images/arte/FanArts/Full/YamchaFULL.webp",
            category: "fanart",
            year: 2025
        },


        {
      
            title: "Spiderman ",
            description: "Poster del hombre que araña",
            thumb: "assets/images/arte/FanArts/thumbs/Spiderman.webp",
            thumb2x: "assets/images/arte/FanArts/thumbs/Spiderman-960.webp",
            full: "assets/images/arte/FanArts/Full/SpidermanFULL.webp",
            category: "fanart",
            year: 2026
        },
        {
          
            title: "Spiderman Traje Negro ",
            description: "Poster del hombre que araña pero mas oscuro",
            thumb: "assets/images/arte/FanArts/thumbs/SpidermanBlacksuit.webp",
            thumb2x: "assets/images/arte/FanArts/thumbs/SpidermanBlacksuit-960.webp",
            full: "assets/images/arte/FanArts/Full/SpidermanBlacksuitFULL.webp",
            category: "fanart",
            year: 2026
        },
         {
        
            title: "Venom ",
            description: "Poster del Venoso",
            thumb: "assets/images/arte/FanArts/thumbs/Venom.webp",
            thumb2x: "assets/images/arte/FanArts/thumbs/Venom-960.webp",
            full: "assets/images/arte/FanArts/Full/VenomFULL.webp", 
            category: "fanart",
            year: 2025
        },
         {
           
            title: "Carnage ",
            description: "Poster del Carnoso",
            thumb: "assets/images/arte/FanArts/thumbs/Carnage.webp",
            thumb2x: "assets/images/arte/FanArts/thumbs/Carnage-960.webp",
            full: "assets/images/arte/FanArts/Full/CarnageFULL.webp", 
            category: "fanart",
            year: 2026
        },
       
        {
           
            title: "Capitan America ",
            description: "Poster Del capi (trate de mesclar la estetica de civil war con la de comic)",
            thumb: "assets/images/arte/FanArts/thumbs/CapAmerica.webp",
            thumb2x: "assets/images/arte/FanArts/thumbs/CapAmerica-960.webp",
            full: "assets/images/arte/FanArts/Full/CapAmericaFULL.webp",
            category: "fanart",
            year: 2026
        },
        {
            
            title: "Ironman ",
            description: "Poster del hombre de Fierro",
            thumb: "assets/images/arte/FanArts/thumbs/Ironman.webp",
            thumb2x: "assets/images/arte/FanArts/thumbs/Ironman-960.webp",
            full: "assets/images/arte/FanArts/Full/IronmanFULL.webp",
            category: "fanart",
            year: 2026
        },
        {
            
            title: "Hulk ",
            description: "Poster del Hulk",
            thumb: "assets/images/arte/FanArts/thumbs/Hulk.webp",
            thumb2x: "assets/images/arte/FanArts/thumbs/Hulk-960.webp",
            full: "assets/images/arte/FanArts/Full/HulkFULL.webp",
            category: "fanart",
            year: 2026
        },
         {
          
            title: "Ciclope ",
            description: "Poster de ciclope",
            thumb: "assets/images/arte/FanArts/thumbs/Ciclople.webp",
            thumb2x: "assets/images/arte/FanArts/thumbs/Ciclople-960.webp",
            full: "assets/images/arte/FanArts/Full/CiclopleFULL.webp", 
            category: "fanart",
            year: 2025
        },
        {
            
            title: "Wolverine ",
            description: "Poster de aguja dinamica",
            thumb: "assets/images/arte/FanArts/thumbs/Wolverine.webp",
            thumb2x: "assets/images/arte/FanArts/thumbs/Wolverine-960.webp",
            full: "assets/images/arte/FanArts/Full/WolverineFULL.webp",
            category: "fanart",
            year: 2025
        },
        {
        
            title: "Magneto (x Men)",
            description: "Poster de magneto preso",
            thumb: "assets/images/arte/FanArts/thumbs/Magneto-2.webp",
            thumb2x: "assets/images/arte/FanArts/thumbs/Magneto-2-960.webp",
            full: "assets/images/arte/FanArts/Full/Magneto-2FULL.webp", 
            category: "fanart",
            year: 2025
        },
        {
     
            title: "Magneto ",
            description: "Poster de magneto",
            thumb: "assets/images/arte/FanArts/thumbs/Magneto.webp",
            thumb2x: "assets/images/arte/FanArts/thumbs/Magneto-960.webp",
            full: "assets/images/arte/FanArts/Full/MagnetoFULL.webp",
            category: "fanart",
            year: 2025
        },
         {
    
            title: "Nanami",
            description: "Poster de Nanami ",
            thumb: "assets/images/arte/FanArts/thumbs/Nanami.webp",
            thumb2x: "assets/images/arte/FanArts/thumbs/Nanami-960.webp",
            full: "assets/images/arte/FanArts/thumbs/NanamiFULL.webp", 
            category: "fanart",
            year: 2025
        },
          {
        
            title: "Iconos ",
            description: "Iconos de dbz",
            image:"assets/images/arte/PixelArt/Iconos Dragon Ball.png", 
           category: "pixelart",
            year: 2021
        },
          {
          
            title: "Team Sonic",
             description: "Pixel art del team sonic",
             image:"assets/images/arte/PixelArt/Sonic.png", 
            category: "pixelart",
             year: 2021
         },

        {
            
            title: "Team Megaman /Megaman X",
            description: "Pixel art de Megaman team",
            image:"assets/images/arte/PixelArt/Megaman.png", 
            category: "pixelart",
            year: 2021
        },
         {
        
            title: "Robot master original",
            description: "Diseño de robot master para concurso (ojala salga jeje)",
            image:"assets/images/arte/PixelArt/megaman concurso.png", 
            category: "pixelart",
            year: 2021
        },

         {
       
            title: "Ultra ego y Ultra Instinto ",
            description: "Basado en el manga",
            image:"assets/images/arte/PixelArt/UIUE.gif", 
            category: "pixelart",
            year: 2021
        },
         {
         
            title: "SSJ3 Walk",
            description: "Pixel caminante",
            image:"assets/images/arte/PixelArt/ssj3walk.gif", 
            category: "pixelart",
            year: 2021
        },
        {
         
            title: "Yamcha gif",
            description: "ROGAFUFUKEN",
            image:"assets/images/arte/PixelArt/yamcha.gif", 
            category: "pixelart",
            year: 2024
        },

        {
         
            title: "Vegeta SSJ3",
            description: "ALFIN",
            image:"assets/images/arte/PixelArt/Vegeta ssj3.gif", 
            category: "pixelart",
            year: 2024
        },

         {
        
            title: "Goku blue",
            description: "Goku cargando kii",
            image:"assets/images/arte/PixelArt/Goku BLUE.gif", 
            category: "pixelart",
            year: 2024
        },
          {
   
            title: "Rock lee",
            description: "Pixel del rock ",
            image:"assets/images/arte/PixelArt/rocklee.png", 
            category: "pixelart",
            year: 2024
        },

         {
   
            title: "Goku SSJ3",
            description: "Goku Con alto pelo",
            image:"assets/images/arte/PixelArt/Goku SS3.gif", 
            category: "pixelart",
            year: 2024
        },

           {
   
            title: "Emotes ",
            description: "Unos emotes que me pidio un compa",
            image:"assets/images/arte/PixelArt/beto.png", 
            category: "pixelart",
            year: 2024
        },
        {
          
            title: "Goku SSJ2",
            description: "Goku Con pelo mas aprado",
            image:"assets/images/arte/PixelArt/Gokussj2.gif", 
            category: "pixelart",
            year: 2024
        },
        {

            title: "Yamcha Flip",
            description: "Saltitos",
            image:"assets/images/arte/PixelArt/YamchaFlip.gif", 
            category: "pixelart",
            year: 2024
        },
        {
       
            title: "Super Vegeta",
            description: "Pixel art de el vegeta mr musculo",
            image:"assets/images/arte/PixelArt/supa.gif", 
            category: "pixelart",
            year: 2021
        },
         {
  
            title: "Baby Vegeta",
            description: "Pixel art de Baby vegeta de db GT",
            image:"assets/images/arte/PixelArt/Baby Vegeta.png", 
            category: "pixelart",
            year: 2021
        },
        {
      
            title: "Kakaroto",
            description: "Pixel art de kakaroto de db multiverse",
            image:"assets/images/arte/PixelArt/kakarot.png", 
            category: "pixelart",
            year: 2020
        },
          {
      
            title: "Xicor",
            description: "Pixel art de Xicor de AF",
            image:"assets/images/arte/PixelArt/xicor.png", 
            category: "pixelart",
            year: 2020
        },
         {
         
            title: "Goku UI",
            description: "Pixel art de goku peli blanco",
            image:"assets/images/arte/PixelArt/Goku UI.png", 
            category: "pixelart",
            year: 2020
        },
         {
  
            title: "Goku Black",
            description: "Pixel art de goku rosita",
            image:"assets/images/arte/PixelArt/black.png", 
            category: "pixelart",
            year: 2020
        },
        {
         
            title: "Ippo",
            description: "Pixel art de Ippo makanauchi",
            image:"assets/images/arte/PixelArt/ippo.png", 
            category: "pixelart",
            year: 2020
        },

        {
        
            title: "Sendo",
            description: "Pixel art de sendo",
            image:"assets/images/arte/PixelArt/Sendo.png", 
            category: "pixelart",
            year: 2020
        },
         {
    
            title: "Sawamura",
            description: "Pixel art de Sawamura",
            image:"assets/images/arte/PixelArt/sawamura.png", 
            category: "pixelart",
            year: 2020
        },
        {
      
            title: "Majin Vegeta",
            description: "Pixel art de Majin vegeta",
            image:"assets/images/arte/PixelArt/majinVegeta.png", 
            category: "pixelart",
            year: 2021
        },
        {
     
            title: "Yasuo",
            description: "Pixel art de Yasuo del lol",
            image:"assets/images/arte/PixelArt/yasuo.png", 
            category: "pixelart",
            year: 2021
        },
         {
          
            title: "Lux",
            description: "Pixel art de Lux del lol",
            image:"assets/images/arte/PixelArt/lux.png", 
            category: "pixelart",
            year: 2021
        },
        {
   
            title: "Omniman",
            description: "Pixel art de super vigote",
            image:"assets/images/arte/PixelArt/Omniman.png", 
            category: "pixelart",
            year: 2022
        },
         {
      
            title: "Broly",
            description: "Pixel art de Broly super",
            image:"assets/images/arte/PixelArt/Broly.png", 
            category: "pixelart",
            year: 2022
        },

         {
     
            title: "kazuki kazama",
            description: "Pixel art de kazuki kazama",
            image:"assets/images/arte/PixelArt/kazuki.png", 
            category: "pixelart",
            year: 2023
        },
           {
          
            title: "Trunks",
            description: "El papu misterioso",
            image:"assets/images/arte/PixelArt/Trunks.png", 
            category: "pixelart",
            year: 2024
        },
        {
        
            title: "Black Goku",
            description: "Pixel art de Black goku",
            image:"assets/images/arte/PixelArt/Blackgoku.png", 
            category: "pixelart",
            year: 2024
        },
        //  {
       
        //     title: "Goku",
        //     description: "Pixel art de Goku",
        //     image:"assets/images/arte/PixelArt/goku ssj.png", 
        //     category: "pixelart",
        //     year: 2024
        // },
        //  {
      
        //     title: "Guerrero ",
        //     description: "Dibujo random de un guerrero",
        //     image:"assets/images/arte/original/guerrero.png", 
        //     category: "original",
        //     year: 2025
        // },
        //  {
          
        //     title: "Guerrero 2",
        //     description: "Dibujo random de un guerrero ",
        //     image:"assets/images/arte/original/guerrero 2.png", 
        //     category: "original",
        //     year: 2025
        // },

        // {
        
        //     title: "Guerrero 3",
        //     description: "Dibujo random de un guerrero  ",
        //     image:"assets/images/arte/original/Guerrero 3.png", 
        //     category: "original",
        //     year: 2025
        // },
         
        // {
   
        //     title: "Diablo",
        //     description: "Dibujo random de un demonio  ",
        //     image:"assets/images/arte/original/Demonio.png", 
        //     category: "original",
        //     year: 2025
        // },
        //  {
        
        //     title: "Bicho",
        //     description: "un bichito  ",
        //     image:"assets/images/arte/original/cria.png", 
        //     category: "original",
        //     year: 2025
        // },
        //  {
         
        //     title: "Alien ",
        //     description: "un alien ",
        //     image:"assets/images/arte/original/Alien.png", 
        //     category: "original",
        //     year: 2025
        // },
        // {
      
        //     title: "Araña ",
        //     description: "Alien araña ponele  ",
        //     image:"assets/images/arte/original/Alien2.png", 
        //     category: "original",
        //     year: 2025
        // },
        //   {
       
        //     title: "Araña 2 ",
        //     description: "Alien araña con esteroides  ",
        //     image:"assets/images/arte/original/alien araña fase 2.png", 
        //     category: "original",
        //     year: 2025
        // },
        //   {
       
        //     title: "Tanke ",
        //     description: "bicho para tankear  ",
        //     image:"assets/images/arte/original/Alien Tanque.png", 
        //     category: "original",
        //     year: 2025
        // },
        // {
          
        //     title: "Tanke 2 ",
        //     description: "bicho para tankear plus  ",
        //     image:"assets/images/arte/original/Alien tanque fase 2.png", 
        //     category: "original",
        //     year: 2025
        // },
        //  {
         
        //     title: "Ghoul",
        //     description: "El ghoul de darkest dungeon a mi manera ",
        //     image:"assets/images/arte/original/necro.png", 
        //     category: "original",
        //     year: 2025
        // },
        // {
         
        //     title: "Bestia ",
        //     description: "Un Bicho grande",
        //     image:"assets/images/arte/original/Bestia.png", 
        //     category: "original",
        //     year: 2025
        // },
        //  {
         
        //     title: "Volador",
        //     description: "un Bicho que vuela ",
        //     image:"assets/images/arte/original/Monstruo Volador.png", 
        //     category: "original",
        //     year: 2025
        // },
        // {
           
        //     title: "Samurai planta ",
        //     description: "un samurai ecologico ",
        //     image:"assets/images/arte/original/hombre planta samurai.png", 
        //     category: "original",
        //     year: 2025
        // },
        //  {
          
        //     title: "Sasuke fase 2 (a mi manera)",
        //     description: "El sasuke pero a mi manera ",
        //     image:"assets/images/arte/original/sasuki.png", 
        //     category: "original",
        //     year: 2025
        // },
        // {
          
        //     title: "Mago en moto",
        //     description: "Un mago motorizado ",
        //     image:"assets/images/arte/original/mago en moto.png", 
        //     category: "original",
        //     year: 2025
        // },
        //  {
           
        //     title: "Rata",
        //     description: "Una rata ",
        //     image:"assets/images/arte/original/rata.png", 
        //     category: "original",
        //     year: 2025
        // },
        // Mas arte aca.



    ],

    // Placeholder 
    placeholder: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23190b21' width='800' height='600'/%3E%3Ctext fill='%23ff0055' font-family='monospace' font-size='24' x='50%25' y='50%25' text-anchor='middle'%3ENo disponible%3C/text%3E%3C/svg%3E"
};


