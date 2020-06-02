

(function() {
    var a=8;
    var b=2;

    console.log("Problema 1 ");
    console.log('La suma de '+ a+ '+'+ b +' es= ' + (a+b)); // undefined
    console.log('La resta de '+ a+ '-'+ b +' es= ' + (a-b));
    console.log('La multiplicacion '+ a+ '*'+ b +' es= ' + (a*b));
    console.log('La division de '+ a+ '/'+ b +' es= ' + (a/b));
    console.log(" ");
  })();


  (function(){
    let cad1='Omar';
    let cad2=' Gonzalez';

    console.log(" Problema 2");
    console.log('La concatenacion es = '+ cad1+cad2);
    console.log(" ");
})();


(function(){
  const c1='Omar';
  const c2=3.14;

  console.log("Problema 3");
  console.log('la variable '+c1 +' es de tipo '+ typeof(c1));
  console.log('la variable '+c2+' es de tipo '+ typeof(c2));
  console.log(" ");
})();


(function(){
  var Persona = {Edad:24,Nombre:'Omar',Donador:true,Estado:[,]};
  

  console.log("Problema 4");
  console.log(Persona);
  console.log(" ");
})();
