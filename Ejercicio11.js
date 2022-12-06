class MiGeolocalizacion {
    constructor (){
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this),this.verErrores.bind(this));
    }
    getPosicion(posicion){
        this.mensaje          = "Cargada la geolocalización de forma correcta";
        this.longitud         = posicion.coords.longitude; 
        this.latitud          = posicion.coords.latitude;  
        this.precision        = posicion.coords.accuracy;
        this.altitud          = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo            = posicion.coords.heading;
        this.velocidad        = posicion.coords.speed;       
    }

    verErrores(error){
        switch(error.code) {
        case error.PERMISSION_DENIED:
            this.mensaje = "No se ha permitido la geolocalización.";
            break;
        case error.POSITION_UNAVAILABLE:
            this.mensaje = "Error,información no disponible";
            break;
        case error.TIMEOUT:
            this.mensaje = "La petición de geolocalización ha caducado";
            break;
        case error.UNKNOWN_ERROR:
            this.mensaje = "Se ha producido un error desconocido";
            break;
        }
    }

    getLongitud(){
        return this.longitud;
    }
    getPrecision(){
        return this.precision;
    }
    getPrecisionAltitud(){
        return this.precisionAltitud;
    }
    getLatitud(){
        return this.latitud;
    }
    getAltitud(){
        return this.altitud;
    }
    getRumbo(){
        return this.rumbo;
    }
    getVeloc(){
        return this.velocidad;
    }


    verTodo(elemento){
        var ubicacion=document.getElementById(elemento);
        var datos = this.mensaje;
        datos+='<p>Longitud: '+ this.getLongitud() +' grados</p>'; 
        datos+='<p>Latitud: '+this.getLatitud() +' grados</p>';
        datos+='<p>Precisión de la latitud y longitud: '+ this.getPrecision() +' metros</p>';
        datos+='<p>Altitud: '+ this.getAltitud() +' metros</p>';
        datos+='<p>Precisión de la altitud: '+ this.getPrecisionAltitud() +' metros</p>'; 
        datos+='<p>Rumbo: '+ this.getRumbo() +' grados</p>'; 
        datos+='<p>Velocidad: '+ this.getVeloc() +' metros/segundo</p>';
        ubicacion.innerHTML = datos;
    }
}

var posicion = new MiGeolocalizacion();