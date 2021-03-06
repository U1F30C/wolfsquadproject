const questionStrings = {
  1: '¿Eres arrogante?',
  2: '¿Has tenido dificultades porque consumes drogas o bebidas alcohólicas en la escuela?',
  3: '¿Se aburren tus amigos en las fiestas donde no sirven bebidas alcohólicas?',
  4: '¿Discuten demasiado tus padres o tutores?',
  5: '¿Te cansas con frecuencia?',
  6: '¿Te asustas con facilidad?',
  7: '¿Tienes menos energía de la que crees que deberías tener?',
  8: '¿Te sientes frustrado(a) con facilidad?',
  9: '¿Amenazas a otros con hacerles daño?',
  10: '¿Te sientes solo(a) la mayor parte del tiempo?',
  11: '¿Dices groserías y vulgaridades?',
  12: '¿Escuchas cuidadosamente cuando alguien te habla?',
  13: '¿Son tus amigos (as) del agrado de tus padres o tutores?',
  14: '¿Se niegan tus padres o tutores a hablarte cuando se enfadan contigo?',
  15: '¿Actúas impulsivamente y sin pensar en las consecuencias que tendrán tus actos?',
  16: '¿Has tenido algún trabajo eventual con sueldo?',
  17: '¿Te has hecho daño o les has hecho daño a otra persona accidentalmente, estando bajo los efectos del alcohol o drogas?',
  18: '¿Tienes buena ortografía?',
  19: '¿Tienes amigos que causan daño o destrucción intencionalmente?',
  20: 'La mayoría de las veces, ¿saben tus padres o tutores dónde estás y lo que estás haciendo?',
  21: '¿Sueles perderte actividades o acontecimientos porque has gastado demasiado dinero en drogas o bebidas alcohólicas?',
  22: '¿Participas en muchas actividades en compañía de tus padres o tutores?',
  23: '¿Te sientes nervioso (a) la mayor parte del tiempo?',
  24: '¿Has robado alguna vez?',
  25: '¿Has sentido que eres adicto (a) al alcohol o a las drogas?',
  26: '¿Sabes leer bien?',
  27: '¿Has estado ausente o llegado tarde a tu trabajo o escuela con frecuencia?',
  28: '¿Sientes que la gente está en contra tuya?',
  29: '¿Tus amigos llevan drogas a las fiestas?',
  30: '¿Peleas con frecuencia?',
  31: '¿Tienes mal genio?',
  32: '¿Te prestan atención tus padres o tutores cuando les hablas?',
  33: '¿Has comenzado a consumir mayores cantidades de drogas o alcohol para obtener el efecto que deseas?',
  34: '¿Te dice la gente que eres descuidado (a)?',
  35: '¿Eres terco (a) o testarudo (a)?',
  36: '¿Has tenido alguna vez o tienes actualmente un empleo?',
  37: '¿Has amenazado alguna vez a alguien con un arma?',
  38: '¿A veces te vas de las fiestas porque en ellas no hay bebidas alcohólicas o drogas?',
  39: '¿Saben tus padres o tutores cómo piensas o te sientes realmente?',
  40: '¿Actúas impulsivamente con frecuencia?',
  41: '¿Sientes un deseo constante de consumir bebidas alcohólicas o drogas?',
  42: '¿Pierdes el hilo del pensamiento con mucha frecuencia?',
  43: '¿Tienes dificultades para concentrarte?',
  44: '¿Has tenido alguna vez un empleo con sueldo que haya durado por lo menos un mes?',
  45: '¿Discutes frecuentemente con tus padres o tutores, levantando la voz y gritando?',
  46: '¿Has tenido un accidente automovilístico estando bajo los efectos del alcohol o drogas?',
  47: '¿Olvidas lo que haces cuando bebes o te drogas?',
  48: 'El mes pasado, ¿manejaste un automóvil estando borracho (a) o drogado (a)?',
  49: '¿Levantas la voz más que los demás muchachos de tu edad?',
  50: '¿Has ocasionado daños a propiedad ajena intencionalmente?',
  51: '¿Has dejado un empleo sencillamente porque no te interesan las consecuencias de dejarlo?',
  52: '¿A tus padres o tutores les gusta hablar y estar contigo?',
  53: '¿Has pasado alguna noche fuera de tu casa sin que tus padres o tutores supieran dónde estabas?',
  54: '¿El uso del alcohol o las drogas te produce cambios repentinos de humor, como pasar de estar contento (a) a estar triste, o viceversa?',
  55: '¿Te sientes triste la mayor parte del tiempo?',
  56: '¿Pierdes días de clase o llegas tarde a la escuela por haber consumido bebidas alcohólicas o drogas?',
  57: '¿Te han dicho alguna vez tus familiares o amigos que debes reducir el uso de bebidas alcohólicas o drogas?',
  58: '¿Discutes seriamente con tus amigos o familiares por el uso que haces de bebidas alcohólicas o drogas?',
  59: '¿Molestas mucho a tus amigos?',
  60: '¿Tienes dificultades para dormir?',
  61: '¿Tienes dificultades con trabajos escritos?',
  62: 'Las bebidas alcohólicas o drogas, ¿te han inducido a hacer algo que normalmente no harías, como desobedecer alguna regla o ley a la hora de llegar a casa, o tener relaciones sexuales con alguien?',
  63: '¿Sientes que a veces pierdes control de ti mismo(a) y terminas peleando?',
  64: '¿Faltaste a la escuela sin autorización el mes pasado?',
  65: '¿Tienes dificultades en tus relaciones con alguno de tus amigos debido a las bebidas alcohólicas o drogas que consumes?',
  66: '¿Tienes dificultad para seguir instrucciones?',
  67: '¿Tienes amigos que han golpeado o amenazado a alguien sin razón?',
  68: '¿Has sentido que no puedes controlar el deseo de consumir bebidas alcohólicas o drogas?',
  69: '¿Tienes buena memoria?',
  70: '¿Tienen tus padres o tutores una idea relativamente buena de lo que te interesa?',
  71: '¿Están tus padres o tutores de acuerdo en cuanto a la forma en que te deben educar?',
  72: '¿Se te hace difícil hacer planes u organizar tus actividades?',
  73: '¿Tus amigos faltan a la escuela sin autorización con mucha frecuencia?',
  74: '¿A veces la escuela te hace sentirte como tonto?',
  75: '¿Frecuentemente sientes deseos de llorar?',
  76: '¿Te da miedo estar con la gente?',
  77: '¿Tienes amigos que han robado?',
  78: '¿Has reprobado algún año en la escuela?',
  79: '¿Es difícil la escuela para ti?',
  80: '¿Eres una persona nerviosa, de las que no pueden estar sentadas mucho tiempo?',
  81: '¿Gritas mucho?',
};

module.exports = questionStrings;
