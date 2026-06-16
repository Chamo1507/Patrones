namespace sqlbuilder {
  class querybuilder {
    private table: string;
    private columns: string[] = [];
    private values: string[] = [];

    constructor(table: string) {
      this.table = table;
    }

    // Agrega el campo y su valor (le pone comillas si es texto)
    private add(column: string, value: string | number): querybuilder {
      this.columns.push(column);
      this.values.push(typeof value === "string" ? `'${value}'` : `${value}`);
      return this;
    }

    // set para la tabla Roles
    setNombreRol(val: string) {
      return this.add("nombre_rol", val);
    }
    setDescripcion(val: string) {
      return this.add("descripcion", val);
    }
    setEstatusRol(val: number) {
      return this.add("estatus", val);
    }

    // set para la tabla Usuarios
    setNombre(val: string) {
      return this.add("nombre", val);
    }
    setApellidoPaterno(val: string) {
      return this.add("apellido_paterno", val);
    }
    setApellidoMaterno(val: string) {
      return this.add("apellido_materno", val);
    }
    setCorreo(val: string) {
      return this.add("correo", val);
    }
    setContrasena(val: string) {
      return this.add("contraseña", val);
    }
    setTelefono(val: string) {
      return this.add("telefono", val);
    }
    setFechaRegistro(val: string) {
      return this.add("fecha_registro", val);
    }
    setEstatusUsuario(val: number) {
      return this.add("estatus", val);
    }
    setIdRol(val: number) {
      return this.add("id_rol", val);
    }

    execute(): string {
      return `INSERT INTO "${this.table}" (${this.columns.join(", ")}) VALUES (${this.values.join(", ")});`;
    }
  }

  function main() {
    // crea el rol administrador
    const queryRol = new querybuilder("Roles")
      .setNombreRol("Administrador")
      .setDescripcion("Acceso total")
      .setEstatusRol(1)
      .execute();

    console.log(queryRol);

    // inserta el usuario Juan Pérez Gómez con el rol de administrador
    const queryUsuario = new querybuilder("Usuarios")
      .setNombre("Juan")
      .setApellidoPaterno("Pérez")
      .setApellidoMaterno("Gómez")
      .setCorreo("juan@email.com")
      .setContrasena("pass123")
      .setTelefono("5551234")
      .setFechaRegistro("2026-06-16")
      .setEstatusUsuario(1)
      .setIdRol(1)
      .execute();

    console.log(queryUsuario);
  }

  main();
}
