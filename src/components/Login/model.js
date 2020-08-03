import { Schema } from "rsuite";

const { StringType } = Schema.Types;

const model = Schema.Model({
  password: StringType().isRequired("Contraseña requerida."),
  email: StringType()
    .isEmail("Escribe un correo valido")
    .isRequired("Correo es requerido"),
});

export default model;
