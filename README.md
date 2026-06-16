Patrón Builder - Query builder
Problema a resolver
El problema es la necesidad de construir consultas SQL de inserción de forma dinámica, segura y legible, evitando errores de sintaxis al mapear manualmente columnas y valores de forma desordenada en un string. Al escribir queries directamente, es fácil equivocarse en el orden de los datos o en el formateo de los tipos (como olvidar poner comillas simples a las cadenas de texto).

Al utilizar el patrón de diseño Builder con métodos específicos (setters semánticos), se encapsula la lógica de asignación de datos. Esto garantiza que las columnas coincidan exactamente con sus respectivos valores y automatiza el formateo de tipos de datos en tiempo de ejecución, ofreciendo una interfaz fluida (fluent interface) y limpia.

Estructura de clases
querybuilder
Se encarga de recolectar de manera estructurada las columnas y sus respectivos valores para construir una sentencia de inserción precisa para la base de datos.

Propiedades privadas:

table: El nombre de la tabla sobre la cual se ejecutará la acción.

columns: Arreglo que almacena secuencialmente los nombres de los campos.

values: Arreglo que almacena los valores formateados (con comillas si son textos).

Métodos principales:

add(column, value): Método privado centralizador que registra el campo, evalúa su tipo de dato para añadir comillas si es un string y retorna la instancia del builder.

Setters de Roles: setNombreRol(val), setDescripcion(val), setEstatusRol(val).

Setters de Usuarios: setNombre(val), setApellidoPaterno(val), setCorreo(val), entre otros específicos de la entidad.

execute(): Compila las columnas y los valores ordenados para retornar la sentencia INSERT INTO final estructurada para PostgreSQL.
