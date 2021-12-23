"use strict"


window.addEventListener("load", function(){

    $(document).ready(function(){


        var sesion = 0;
        if (localStorage.getItem("sesion") == null){ //corrobora sesion activa.
            localStorage.setItem("contador",contador); // si efectivamente no hay nada entonces guarda el primer valor en el localstorage, con key contador y el valor 0
        }



        //fomrulario que permite añadir peliculas. --- victor robles

        //formulario para comprar ticket de peliculas  ---yo


        //--------------------------Link-login-------------------------------

        var status_login = 0;

        var formlogin_ = document.querySelector("#formlogin");

        formlogin_.addEventListener(`submit`, function(){

                window.open("html/login.html", "Login", "width=500,height=400,resizable=NO,scrollbars=NO");
                
        });

        

        

        
        
        //----------------------guardar en localstorage-------------------------------

        var sesion = 0;
        if (localStorage.getItem("sesion") == null){ //corrobora sesion activa.
        // alert("Debe iniciar sesión para comprar una entrada");
        // localStorage.setItem("contador",contador); // si efectivamente no hay nada entonces guarda el primer valor en el localstorage, con key contador y el valor 0
        }


        var contador = 0;
        if (localStorage.getItem("contador") == null){ //corrobora si no hay nada ingresado en el local storage, o sea si es el primer registro.
            localStorage.setItem("contador",contador); // si efectivamente no hay nada entonces guarda el primer valor en el localstorage, con key contador y el valor 0
        }
        var formulario = document.querySelector("#formpeliculas");


        formulario.addEventListener(`submit`, function(){

            contador = localStorage.getItem("contador");
            contador ++;
            localStorage.setItem("contador",contador);

            var pelicula = document.querySelector("#addpelicula").value;
            var cine = document.querySelector("#addcine").value;
            var fecha = document.querySelector("#addfecha").value;
            var hora = document.querySelector("#addhora").value;

            if (pelicula == "default" || cine == "default" || fecha == "default" || hora == "default"){
                alert("Error valor en default");
            }else{

                var entrada = [
                    {pelicula, cine, fecha, hora,},
                ];


                localStorage.setItem(contador, JSON.stringify(entrada));

                alert("Entrada comprada, aceptar para visualizar datos");


                var datos = localStorage.getItem(contador);
                console.log(datos);

                alert("datos:"+datos);


            }

        });


    

        //---------------------click button----------

        var sel_btn_ticket = $("#ticket");
        var sel_btn_snacks = $("#snacks");
        var frm_peliculas = $("#formpeliculas");
        var frm_snacks = $("#formsnacks");
        var btn_snacks = $("#btn_snack");
        
        var flag_ticket;
        var flag_snacks;

        function btn_over(){
            $(this).css("background", "#E91E63");
            $(this).css("opacity", "0.6");
        }

        function btn_out(){
            $(this).css("background", "transparent");
            
        }

        
        
        
        sel_btn_snacks.click(function(){
            let that = $(this);
            
            if (!that.hasClass("sel_btn")){
                that.addClass("sel_btn");
                sel_btn_ticket.removeClass("sel_btn");
                
                frm_peliculas.hide();
                frm_snacks.show();
                btn_snacks.show();
                

            }
        });


        sel_btn_ticket.click(function(){
            let that = $(this);
            
            if (!that.hasClass("sel_btn")){
                that.addClass("sel_btn");
                sel_btn_snacks.removeClass("sel_btn");
                
                frm_snacks.hide();
                frm_peliculas.show();
                

                
            } 

        
    
                    
        });

        

        /*sel_btn_snacks.click(function(){

            flag_snacks = "snacks_on";
            console.log(flag_snacks);

            if (!that.hasClass("sel_btn")){
                that.addClass("sel_btn");
            }else{
                that.removeClass("sel_btn");
    
            }
            
        });*/

    });

});