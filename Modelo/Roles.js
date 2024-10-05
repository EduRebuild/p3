class Rol {
    constructor(id, nombres, apellidos, nombreUsuario, rol, estado, fechaLimiteAcceso) {
        this.id = id;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.nombreUsuario = nombreUsuario;
        this.rol = rol;
        this.estado = estado;
        this.fechaLimiteAcceso = new Date(fechaLimiteAcceso);
        this.fechaRegistro = new Date();
    }

    calcularDiasRestantes() {
        const hoy = new Date();
        const diferencia = this.fechaLimiteAcceso - hoy;
        return Math.ceil(diferencia / (1000 * 60 * 60 * 24));
    }
}

class ListaDeRoles {
    constructor() {
        this.roles = [];
        this.idActual = 0;
    }

    agregarRol(nombres, apellidos, nombreUsuario, rol, estado, fechaLimiteAcceso) {
        if (this.roles.some(r => r.nombreUsuario === nombreUsuario)) {
            return false;
        }
        const nuevoRol = new Rol(this.idActual++, nombres, apellidos, nombreUsuario, rol, estado, fechaLimiteAcceso);
        this.roles.push(nuevoRol);
        return true;
    }

    eliminarRol(id) {
        this.roles = this.roles.filter(rol => rol.id !== id);
    }

    obtenerRoles() {
        return this.roles;
    }
}