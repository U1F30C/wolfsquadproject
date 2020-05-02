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

class QuestionSeeder {
  async run() {
    const questions = await Database.table('questions');
    console.log(questions);

    const question_1 = await Factory.model('App/Models/Question').create({
      description: '¿Eres arrogante?',
    });
    Database.table('questions').insert(question_1);

    const question_2 = await Factory.model('App/Models/Question').create({
      description:
        '¿Has tenido dificultades porque consumes drogas o bebidass alcohólicas en la escuela?',
    });
    Database.table('questions').insert(question_2);

    const question_3 = await Factory.model('App/Models/Question').create({
      description:
        '¿Se aburren tus amigos en las fiestas donde no sirven bebidas alcohólicas?',
    });
    Database.table('questions').insert(question_3);

    const question_4 = await Factory.model('App/Models/Question').create({
      description: '¿Discuten demasiado tus padres o tutores?',
    });
    Database.table('questions').insert(question_4);

    const question_5 = await Factory.model('App/Models/Question').create({
      description: '¿Te cansas con frecuencia?',
    });
    Database.table('questions').insert(question_5);

    const question_6 = await Factory.model('App/Models/Question').create({
      description: '¿Te asustas con facilidad?',
    });
    Database.table('questions').insert(question_6);

    const question_7 = await Factory.model('App/Models/Question').create({
      description: '¿Tienes menos energía de la que crees que deberías tener?',
    });
    Database.table('questions').insert(question_7);

    const question_8 = await Factory.model('App/Models/Question').create({
      description: '¿Te sientes frustado(a) con facilidad?',
    });
    Database.table('questions').insert(question_8);

    const question_9 = await Factory.model('App/Models/Question').create({
      description: '¿Amenazas a otros con hacerles daño?',
    });
    Database.table('questions').insert(question_9);

    const question_10 = await Factory.model('App/Models/Question').create({
      description: '¿Te sientes solo(a) la mayor parte del tiempo?',
    });
    Database.table('questions').insert(question_10);

    const question_11 = await Factory.model('App/Models/Question').create({
      description: '¿Dices groserias y vulgaridades?',
    });
    Database.table('questions').insert(question_11);

    const question_12 = await Factory.model('App/Models/Question').create({
      description: '¿Escuchas cuidadosamente cuando alguien te habla?',
    });
    Database.table('questions').insert(question_12);

    const question_13 = await Factory.model('App/Models/Question').create({
      description: '¿Son tus amigos (as) del agrado de tus padres o tutores?',
    });
    Database.table('questions').insert(question_13);

    const question_14 = await Factory.model('App/Models/Question').create({
      description:
        '¿Se niegan tus padres o tutores a havlaarte cuando se enfadan contigo?',
    });
    Database.table('questions').insert(question_14);

    const question_15 = await Factory.model('App/Models/Question').create({
      description:
        '¿Actúas impulsivamente y sin pensar en las consecuencias que tendrán tus actos?',
    });
    Database.table('questions').insert(question_15);

    const question_16 = await Factory.model('App/Models/Question').create({
      description: '¿Has tenido algún trabajo eventeual con sueldo?',
    });
    Database.table('questions').insert(question_16);

    const question_17 = await Factory.model('App/Models/Question').create({
      description:
        '¿Te has hecho daño o les has hecho daño a otra parsona accidentalmente, estando bajo los efectos del alcohol o drogas?',
    });
    Database.table('questions').insert(question_17);

    const question_18 = await Factory.model('App/Models/Question').create({
      description: '¿Tienes buena ortografia?',
    });
    Database.table('questions').insert(question_18);

    const question_19 = await Factory.model('App/Models/Question').create({
      description:
        '¿Tienes amigos que causan daño o destrucción intencioanlmente?',
    });
    Database.table('questions').insert(question_19);

    const question_20 = await Factory.model('App/Models/Question').create({
      description:
        'La mayoria de las veces, ¿saben tus padres o tutores dónde estás y lo que estás haciendo?',
    });
    Database.table('questions').insert(question_20);

    const question_21 = await Factory.model('App/Models/Question').create({
      description:
        '¿Sueles perderte actividades o acontecimientos porque has gastado demasiado dinero en drogas o bebidas alcohólicas?',
    });
    Database.table('questions').insert(question_21);

    const question_22 = await Factory.model('App/Models/Question').create({
      description:
        '¿Participas en muchas actividades en compañía de tus padres o tutores?',
    });
    Database.table('questions').insert(question_22);

    const question_23 = await Factory.model('App/Models/Question').create({
      description: '¿Te sientes nervioso (a) al alcohol o a las drogas?',
    });
    Database.table('questions').insert(question_23);

    const question_24 = await Factory.model('App/Models/Question').create({
      description: '¿Has robado alguna vez?',
    });
    Database.table('questions').insert(question_24);

    const question_25 = await Factory.model('App/Models/Question').create({
      description:
        '¿Has sentido que eres adicto (a) al alcohol o a las drogas?',
    });
    Database.table('questions').insert(question_25);

    const question_26 = await Factory.model('App/Models/Question').create({
      description: '¿Sabes leer bien?',
    });
    Database.table('questions').insert(question_26);

    const question_27 = await Factory.model('App/Models/Question').create({
      description:
        '¿Has estado ausente o llegado tarde a tu trabajo o escuela con frecuencia?',
    });
    Database.table('questions').insert(question_27);

    const question_28 = await Factory.model('App/Models/Question').create({
      description: '¿Sientes que la gente está en contra tuya?',
    });
    Database.table('questions').insert(question_28);

    const question_29 = await Factory.model('App/Models/Question').create({
      description: '¿Tus amigos llevan drogas a las fiestas?',
    });
    Database.table('questions').insert(question_29);

    const question_30 = await Factory.model('App/Models/Question').create({
      description: '¿Peleas con frecuencia?',
    });
    Database.table('questions').insert(question_30);

    const question_31 = await Factory.model('App/Models/Question').create({
      description: '¿Tienes mal genio?',
    });
    Database.table('questions').insert(question_31);

    const question_32 = await Factory.model('App/Models/Question').create({
      description:
        '¿Te prestan atención tus padres o tutores cuando les hablas?',
    });
    Database.table('questions').insert(question_32);

    const question_33 = await Factory.model('App/Models/Question').create({
      description:
        '¿Has comenzado a consumir mayores cantitades de drogas o alcohol para obtener el efecto que deseas?',
    });
    Database.table('questions').insert(question_33);

    const question_34 = await Factory.model('App/Models/Question').create({
      description: '¿Te dice la gente que eres descuidado (a)?',
    });
    Database.table('questions').insert(question_34);

    const question_35 = await Factory.model('App/Models/Question').create({
      description: '¿Eres terco (a) o testarudo (a)?',
    });
    Database.table('questions').insert(question_35);

    const question_36 = await Factory.model('App/Models/Question').create({
      description: '¿Has tenido alguna vez o tienes actualmente un empleo?',
    });
    Database.table('questions').insert(question_36);

    const question_37 = await Factory.model('App/Models/Question').create({
      description: '¿Has amenazado alguna vezz a alguien con un arma?',
    });
    Database.table('questions').insert(question_37);

    const question_38 = await Factory.model('App/Models/Question').create({
      description:
        '¿A veces te vas de las fiestas porque en ellas no hay bebidas alcohólicas o drogas?',
    });
    Database.table('questions').insert(question_38);

    const question_39 = await Factory.model('App/Models/Question').create({
      description:
        '¿Saben tus padres o tutores cómo piensas o te sientes realmente?',
    });
    Database.table('questions').insert(question_39);

    const question_40 = await Factory.model('App/Models/Question').create({
      description: '¿Actúas impulsivamente con frecuencia?',
    });
    Database.table('questions').insert(question_40);

    const question_41 = await Factory.model('App/Models/Question').create({
      description:
        '¿Sientes un deseo constante de consumir bebidas alcohólicas o drogas?',
    });
    Database.table('questions').insert(question_41);

    const question_42 = await Factory.model('App/Models/Question').create({
      description: '¿Pierdes el hilo del pensamiento con mucha frecuencia?',
    });
    Database.table('questions').insert(question_42);

    const question_43 = await Factory.model('App/Models/Question').create({
      description: '¿Tienes dificultades para concentrarte?',
    });
    Database.table('questions').insert(question_43);

    const question_44 = await Factory.model('App/Models/Question').create({
      description:
        '¿Has tenido alguna vez un empleo con suueldo que haya durado por lo menos un mes?',
    });
    Database.table('questions').insert(question_44);

    const question_45 = await Factory.model('App/Models/Question').create({
      description:
        '¿Discutes frecuentemente con tus padres o tutores, levantando la voz y gritando?',
    });
    Database.table('questions').insert(question_45);

    const question_46 = await Factory.model('App/Models/Question').create({
      description:
        '¿Has tenido un accidente autmovilístico estando bajo los efectos del alcohol o drogas?',
    });
    Database.table('questions').insert(question_46);

    const question_47 = await Factory.model('App/Models/Question').create({
      description: '¿Olvidas lo que haces cuando bebes o te drogas?',
    });
    Database.table('questions').insert(question_47);

    const question_48 = await Factory.model('App/Models/Question').create({
      description:
        'El mes pasado, ¿manejaste un automóvil estando borracho (a) o drogado (a)?',
    });
    Database.table('questions').insert(question_48);

    const question_49 = await Factory.model('App/Models/Question').create({
      description: '¿Levantas la voz más que los demás muchachos de tu edad?',
    });
    Database.table('questions').insert(question_49);

    const question_50 = await Factory.model('App/Models/Question').create({
      description: '¿Has ocasionado daños a propiedad ajena intencionalmente?',
    });
    Database.table('questions').insert(question_50);

    const question_51 = await Factory.model('App/Models/Question').create({
      description:
        '¿Has dejado un empleo sencillamente porque no te interesaban las consecuencias de dejarlo?',
    });
    Database.table('questions').insert(question_51);

    const question_52 = await Factory.model('App/Models/Question').create({
      description: '¿A tus padres o tutores les gusta hablar y estar contigo?',
    });
    Database.table('questions').insert(question_52);

    const question_53 = await Factory.model('App/Models/Question').create({
      description:
        '¿Has pasado alguna noche fuera de tu casa sin que tus padres o tutores supieran donde estabas?',
    });
    Database.table('questions').insert(question_53);

    const question_54 = await Factory.model('App/Models/Question').create({
      description:
        '¿El uso del alcool o las drogas te produce cambios repentinos de humor, como pasar de estar contento (a) a estar triste, o viceversa?',
    });
    Database.table('questions').insert(question_54);

    const question_55 = await Factory.model('App/Models/Question').create({
      description: '¿Te sientes triste la mayor parte del tiempo?',
    });
    Database.table('questions').insert(question_55);

    const question_56 = await Factory.model('App/Models/Question').create({
      description:
        '¿Pierdes días de clase o llegas tarde a la escuela por haber consumido bebidas alcohólicas o drogas?',
    });
    Database.table('questions').insert(question_56);

    const question_57 = await Factory.model('App/Models/Question').create({
      description:
        '¿Te han dicho alguna vez tus familiares o amigos que debes reducir el uso de bebidas alcohólicas o drogas?',
    });
    Database.table('questions').insert(question_57);

    const question_58 = await Factory.model('App/Models/Question').create({
      description:
        '¿Discutes seriamente con tus amigos o familiares por el uso quue haces de bbidas alcohólicas o drogas?',
    });
    Database.table('questions').insert(question_58);

    const question_59 = await Factory.model('App/Models/Question').create({
      description: '¿Molestas mucho a tus amigos?',
    });
    Database.table('questions').insert(question_59);

    const question_60 = await Factory.model('App/Models/Question').create({
      description: '¿Tienes dificultades para dormir?',
    });
    Database.table('questions').insert(question_60);

    const question_61 = await Factory.model('App/Models/Question').create({
      description: '¿Tienes dificultades con trabajos escritos?',
    });
    Database.table('questions').insert(question_61);

    const question_62 = await Factory.model('App/Models/Question').create({
      description:
        'Las bebidas alcohólicas o drogas, ¿te han inducido a hacer algo que normalmente no harías, como desobedecer alguna regla o ley, o a la hora de llegar a casa, o tener relaciones sexuales con alguien?',
    });
    Database.table('questions').insert(question_62);

    const question_63 = await Factory.model('App/Models/Question').create({
      description:
        '¿Sientes que a veces pierdes control de ti mismo(a) y terminas peleando?',
    });
    Database.table('questions').insert(question_63);

    const question_64 = await Factory.model('App/Models/Question').create({
      description: '¿Faltaste a la escuela sin autorización el mes pasado?',
    });
    Database.table('questions').insert(question_64);

    const question_65 = await Factory.model('App/Models/Question').create({
      description:
        '¿Tienes dificultades en tuus relaciones con alguno de tus amigos debido a las bebidas alcohólicas o drogas que consumes?',
    });
    Database.table('questions').insert(question_65);

    const question_66 = await Factory.model('App/Models/Question').create({
      description: '¿Tienes dificultad para seguir instrucciones?',
    });
    Database.table('questions').insert(question_66);

    const question_67 = await Factory.model('App/Models/Question').create({
      description:
        '¿Tienes amigos que han golpeado o amenazado a alguien sin razón?',
    });
    Database.table('questions').insert(question_67);

    const question_68 = await Factory.model('App/Models/Question').create({
      description:
        '¿Has sentido que no puedes controlar el deseo de consumir bebidas alcohólicas o drogas?',
    });
    Database.table('questions').insert(question_68);

    const question_69 = await Factory.model('App/Models/Question').create({
      description: '¿Tienes buena memoria?',
    });
    Database.table('questions').insert(question_69);

    const question_70 = await Factory.model('App/Models/Question').create({
      description:
        '¿Tienen tus padres o tutores una idea relativamente buena de lo que te interesa?',
    });
    Database.table('questions').insert(question_70);

    const question_71 = await Factory.model('App/Models/Question').create({
      description:
        '¿Están tus padres o tutores de acuerdo en cuanto a la forma en que te deben educar?',
    });
    Database.table('questions').insert(question_71);

    const question_72 = await Factory.model('App/Models/Question').create({
      description:
        '¿Se te hace difícil hacer planes u organizar tus actividades?',
    });
    Database.table('questions').insert(question_72);

    const question_73 = await Factory.model('App/Models/Question').create({
      description:
        '¿Tus amigos faltan a la escuela sin autorización con mucha frecuencia?',
    });
    Database.table('questions').insert(question_73);

    const question_74 = await Factory.model('App/Models/Question').create({
      description: '¿A veces la escuela te hace sentirte como tonto?',
    });
    Database.table('questions').insert(question_74);

    const question_75 = await Factory.model('App/Models/Question').create({
      description: '¿Frecuentemente sientes deseos de llorar?',
    });
    Database.table('questions').insert(question_75);

    const question_76 = await Factory.model('App/Models/Question').create({
      description: '¿Te da miedo estar con la gente?',
    });
    Database.table('questions').insert(question_76);

    const question_77 = await Factory.model('App/Models/Question').create({
      description: '¿Tienes amigos que han robado?',
    });
    Database.table('questions').insert(question_77);

    const question_78 = await Factory.model('App/Models/Question').create({
      description: '¿Has reprobado algún año en la escuela?',
    });
    Database.table('questions').insert(question_78);

    const question_79 = await Factory.model('App/Models/Question').create({
      description: '¿Es difícil la escuela para ti?',
    });
    Database.table('questions').insert(question_79);

    const question_80 = await Factory.model('App/Models/Question').create({
      description:
        '¿Eres una persona nerviosa, de las que no pueden estar sentadas mucho tiempo?',
    });
    Database.table('questions').insert(question_80);

    const question_81 = await Factory.model('App/Models/Question').create({
      description: '¿Gritas mucho?',
    });
    Database.table('questions').insert(question_81);
  }
}

module.exports = QuestionSeeder;
