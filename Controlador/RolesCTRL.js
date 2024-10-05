class RolesCTRL {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;

        this.vista.vincularAgregarRol(this.manejarAgregarRol.bind(this));
        this.vista.vincularEliminarRol(this.manejarEliminarRol.bind(this));

        this.mostrarRoles();
    }

    manejarAgregarRol(nombres, apellidos, nombreUsuario, rol, estado, fechaLimiteAcceso) {
        const rolAgregado = this.modelo.agregarRol(nombres, apellidos, nombreUsuario, rol, estado, fechaLimiteAcceso);
        if (rolAgregado) {
            this.mostrarRoles();
        } else {
            this.vista.mostrarError("El nombre de usuario ya está registrado.");
        }
    }

    manejarEliminarRol(id) {
        this.modelo.eliminarRol(id);
        this.mostrarRoles();
    }

    mostrarRoles() {
        this.vista.mostrarRoles(this.modelo.obtenerRoles());
    }
}
