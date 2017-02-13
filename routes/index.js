var express = require('express');
var router = express.Router();

/* GET home page. - Donde iran todos los datos a compartir en el archivo /views/index.hbs*/
router.get('/', function(req, res, next) {
  let body_page = {

    titulo:'Team - Workout-Remote',

    items_menu: {
      about: "Quienes somos",
      services: "Servicios",
      portfolio: "Trabajos",
      contact: "Contacto"
    },

    header:{
      start_title:"Node + Handlebars + Bootstrap",
      description:"Somos un equipo de trabajo de alta gama técnologica, visionarios en obtener siempre el mejor performance para tu empresa",
      boton_text: "Leer más"
    },

    about:{
      title:"Soy titulo",
      description:"Unidos en Argentina y visionarios en el Mundo",
      services:"Nuestros Servicios"
    },

    services:[
      {   title: "service 1",
          description: "description service 1",
          icono: "fa-diamond"
      },
      {
          title: "service 2",
          description: "description service 2",
          icono: "fa-paper-plane"
      },
      {
        title: "service 2",
        description: "description service 2",
        icono: "fa-newspaper-o"
      },
      {
          title: "service 4",
          description: "description service 4",
          icono: "fa-heart"
      }

    ],

    portfolio:[
      {
        image_href:"img/portfolio/fullsize/1.jpg",
        image:"img/portfolio/thumbnails/1.jpg",
        category:"Categoría",
        project_name: "Nombre del Proyecto",
      },
      {
        image_href:"img/portfolio/fullsize/2.jpg",
        image:"img/portfolio/thumbnails/2.jpg",
        category:"Categoría",
        project_name: "Nombre del Proyecto",
      },
      {
        image_href:"img/portfolio/fullsize/3.jpg",
        image:"img/portfolio/thumbnails/3.jpg",
        category:"Categoría",
        project_name: "Nombre del Proyecto",
      },
      {
        image_href:"img/portfolio/fullsize/4.jpg",
        image:"img/portfolio/thumbnails/4.jpg",
        category:"Categoría",
        project_name: "Nombre del Proyecto",
      },
      {
        image_href:"img/portfolio/fullsize/5.jpg",
        image:"img/portfolio/thumbnails/5.jpg",
        category:"Categoría",
        project_name: "Nombre del Proyecto",
      },
      {
        image_href:"img/portfolio/fullsize/6.jpg",
        image:"img/portfolio/thumbnails/6.jpg",
        category:"Categoría",
        project_name: "Nombre del Proyecto",
      }

    ],

    contact:
      {
        title:"Titulo del Contacto",
        description: "Describir el contacto",
        phone: "##### - Telefóno",
        email:"Team_Development@testing.com"
      }
  }
  res.render('index', body_page);

});

module.exports = router;
