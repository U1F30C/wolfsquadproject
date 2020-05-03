'use strict';

/*
|--------------------------------------------------------------------------
| QuestionSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Database = use('Database');

const questionStrings = [
  '¿Eres arrogante?',
  '¿Has tenido dificultades porque consumes drogas o bebidass alcohólicas en la escuela?',
  '¿Se aburren tus amigos en las fiestas donde no sirven bebidas alcohólicas?',
  '¿Discuten demasiado tus padres o tutores?',
  '¿Te cansas con frecuencia?',
  '¿Te asustas con facilidad?',
  '¿Tienes menos energía de la que crees que deberías tener?',
  '¿Te sientes frustado(a) con facilidad?',
  '¿Amenazas a otros con hacerles daño?',
  '¿Te sientes solo(a) la mayor parte del tiempo?',
  '¿Dices groserias y vulgaridades?',
  '¿Escuchas cuidadosamente cuando alguien te habla?',
  '¿Son tus amigos (as) del agrado de tus padres o tutores?',
  '¿Se niegan tus padres o tutores a havlaarte cuando se enfadan contigo?',
  '¿Actúas impulsivamente y sin pensar en las consecuencias que tendrán tus actos?',
  '¿Has tenido algún trabajo eventeual con sueldo?',
  '¿Te has hecho daño o les has hecho daño a otra par…e, estando bajo los efectos del alcohol o drogas?',
  '¿Tienes buena ortografia?',
  '¿Tienes amigos que causan daño o destrucción intencioanlmente?',
  'La mayoria de las veces, ¿saben tus padres o tutores dónde estás y lo que estás haciendo?',
  '¿Sueles perderte actividades o acontecimientos por…demasiado dinero en drogas o bebidas alcohólicas?',
  '¿Participas en muchas actividades en compañía de tus padres o tutores?',
  '¿Te sientes nervioso (a) al alcohol o a las drogas?',
  '¿Has robado alguna vez?',
  '¿Has sentido que eres adicto (a) al alcohol o a las drogas?',
  '¿Sabes leer bien?',
  '¿Has estado ausente o llegado tarde a tu trabajo o escuela con frecuencia?',
  '¿Sientes que la gente está en contra tuya?',
  '¿Tus amigos llevan drogas a las fiestas?',
  '¿Peleas con frecuencia?',
  '¿Tienes mal genio?',
  '¿Te prestan atención tus padres o tutores cuando les hablas?',
  '¿Has comenzado a consumir mayores cantitades de drogas o alcohol para obtener el efecto que deseas?',
  '¿Te dice la gente que eres descuidado (a)?',
  '¿Eres terco (a) o testarudo (a)?',
  '¿Has tenido alguna vez o tienes actualmente un empleo?',
  '¿Has amenazado alguna vezz a alguien con un arma?',
  '¿A veces te vas de las fiestas porque en ellas no hay bebidas alcohólicas o drogas?',
  '¿Saben tus padres o tutores cómo piensas o te sientes realmente?',
  '¿Actúas impulsivamente con frecuencia?',
  '¿Sientes un deseo constante de consumir bebidas alcohólicas o drogas?',
  '¿Pierdes el hilo del pensamiento con mucha frecuencia?',
  '¿Tienes dificultades para concentrarte?',
  '¿Has tenido alguna vez un empleo con sueldo que haya durado por lo menos un mes?',
  '¿Discutes frecuentemente con tus padres o tutores, levantando la voz y gritando?',
  '¿Has tenido un accidente autmovilístico estando bajo los efectos del alcohol o drogas?',
  '¿Olvidas lo que haces cuando bebes o te drogas?',
  'El mes pasado, ¿manejaste un automóvil estando borracho (a) o drogado (a)?',
  '¿Levantas la voz más que los demás muchachos de tu edad?',
  '¿Has ocasionado daños a propiedad ajena intencionalmente?',
  '¿Has dejado un empleo sencillamente porque no te interesaban las consecuencias de dejarlo?',
  '¿A tus padres o tutores les gusta hablar y estar contigo?',
  '¿Has pasado alguna noche fuera de tu casa sin que tus padres o tutores supieran donde estabas?',
  '¿El uso del alcool o las drogas te produce cambios…e estar contento (a) a estar triste, o viceversa?',
  '¿Te sientes triste la mayor parte del tiempo?',
  '¿Pierdes días de clase o llegas tarde a la escuela por haber consumido bebidas alcohólicas o drogas?',
  '¿Te han dicho alguna vez tus familiares o amigos q…s reducir el uso de bebidas alcohólicas o drogas?',
  '¿Discutes seriamente con tus amigos o familiares p…el uso quue haces de bbidas alcohólicas o drogas?',
  '¿Molestas mucho a tus amigos?',
  '¿Tienes dificultades para dormir?',
  '¿Tienes dificultades con trabajos escritos?',
  'Las bebidas alcohólicas o drogas, ¿te han inducido… a casa, o tener relaciones sexuales con alguien?',
  '¿Sientes que a veces pierdes control de ti mismo(a) y terminas peleando?',
  '¿Faltaste a la escuela sin autorización el mes pasado?',
  '¿Tienes dificultades en tuus relaciones con alguno… a las bebidas alcohólicas o drogas que consumes?',
  '¿Tienes dificultad para seguir instrucciones?',
  '¿Tienes amigos que han golpeado o amenazado a alguien sin razón?',
  '¿Has sentido que no puedes controlar el deseo de consumir bebidas alcohólicas o drogas?',
  '¿Tienes buena memoria?',
  '¿Tienen tus padres o tutores una idea relativamente buena de lo que te interesa?',
  '¿Están tus padres o tutores de acuerdo en cuanto a la forma en que te deben educar?',
  '¿Se te hace difícil hacer planes u organizar tus actividades?',
  '¿Tus amigos faltan a la escuela sin autorización con mucha frecuencia?',
  '¿A veces la escuela te hace sentirte como tonto?',
  '¿Frecuentemente sientes deseos de llorar?',
  '¿Te da miedo estar con la gente?',
  '¿Tienes amigos que han robado?',
  '¿Has reprobado algún año en la escuela?',
  '¿Es difícil la escuela para ti?',
  '¿Eres una persona nerviosa, de las que no pueden estar sentadas mucho tiempo?',
  '¿Gritas mucho?',
];

class QuestionSeeder {
  async run() {
    let questions = questionStrings.map(
      async (question) =>
        await Factory.model('App/Models/Question').create({
          description: question,
        })
    );
    Database.table('questions').insert(questions);
  }
}

module.exports = QuestionSeeder;
