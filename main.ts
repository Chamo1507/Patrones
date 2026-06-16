namespace sqlbuilder {
  class querybuilder {
    private table: string;
    private fields: string[] = [];
    private conditions: string[] = [];
    private orderField: string[] = [];

    private insertValues: string = "";

    constructor(table: string) {
      this.table = table;
    }

    insert(values: string): querybuilder {
      this.insertValues = values;
      return this;
    }

    select(...fields: string[]): querybuilder {
      this.fields = fields;
      return this;
    }

    where(condition: string): querybuilder {
      this.conditions.push(condition);
      return this;
    }

    execute(): string {
      return `INSERT INTO "${this.table}" VALUES (${this.insertValues});`;
    }
  }

  function main() {
    //rol del administrador
    const queryRol = new querybuilder("Roles")
      .insert("'Administrador', 'Acceso total', 1")
      .execute();

    console.log(queryRol);

    //usuario al cual se le asignará el rol de administrador
    const queryUsuario = new querybuilder("Usuarios")
      .insert(
        "'Juan', 'Pérez', 'Gómez', 'juan@email.com', 'pass123', '5551234', '2026-06-16', 1, 1",
      )
      .execute();

    console.log(queryUsuario);
  }

  main();
}
