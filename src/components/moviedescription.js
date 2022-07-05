//import all the movie images
import lightyear from '../Movie-Posters/lightyear.jpg' 
import luca from '../Movie-Posters/luca.jpg'
import coco from '../Movie-Posters/coco.jpg'

 export const data = [
  {   
      id: 1,
      img: lightyear,
      title: "Lightyear",
      text: "Lightyear tells the story of young astronaut Buzz Lightyear, who, after being marooned on a hostile planet with his commander and crew, tries to find a way back home while confronting a threat in the form of Zurg.",
      reviews: [
        {
           "stars": 4,
           "comment": "Too Infinity and Beyond! Great animation. Bigger fan of Toy Story though. "
         }
       ]
  },
  {
      id: 2,
      img: luca,
      title: "Luca",
      text: "Set in a beautiful seaside town on the Italian Riviera, Disney and Pixar's original feature film 'Luca' is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides.",
      reviews: [
        {
           "stars": 4,
           "comment": "LOVED IT! Such a cute movie about bravery."
         }
       ]
  },
  {
      id: 3,
      img: coco,
      title: "Coco",
      text: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer. Despite his family's baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz.",
      reviews: [
        {
           "stars": 5,
           "comment": "I cried so much, but this has been my favorite Pixar film. Loved the attention to detail into the Dia De Los Muertos holiday."
         }
       ]
  },
]