import {
  Button,
  Field,
  Fieldset,
  Input,
  Table
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

// Esquema de validación con Yup
const schema = yup.object().shape({
  nombre: yup.string().required("El nombre es obligatorio"),
  apellido: yup.string().required("El apellido es obligatorio"),
  correo: yup.string().email("El correo debe ser válido").required("El correo es obligatorio"),
  contraseña: yup.string().min(6, "La contraseña debe tener al menos 6 caracteres").required("La contraseña es obligatoria"),
  telefono: yup.string().matches(/^[0-9]+$/, "El número de teléfono debe contener solo números").required("El número de teléfono es obligatorio"),
});

export const FormDemo = () => {
  const [users, setUsers] = useState([]);

  const initialValues = {
    nombre: '',
    apellido: '',
    correo: '',
    contraseña: '',
    telefono: ''
  };

  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log("Datos enviados:", data);

    // Hacer una copia de los datos antes de que se reinicie el formulario
    const newUser = { ...data, id: users.length };

    setUsers((prevUsers) => [...prevUsers, newUser]);

    reset(initialValues);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Fieldset.Root size="lg">
          <Fieldset.Content>
            {/* Nombre */}
            <Field.Root invalid={!!errors.nombre}>
              <Field.Label>Nombre</Field.Label>
              <Controller
                name="nombre"
                control={control}
                render={({ field }) => <Input {...field} placeholder="Ingresa tu nombre" />}
              />
              <p style={{ color: "red" }}>{errors.nombre?.message}</p>
            </Field.Root>

            {/* Apellido */}
            <Field.Root invalid={!!errors.apellido}>
              <Field.Label>Apellido</Field.Label>
              <Controller
                name="apellido"
                control={control}
                render={({ field }) => <Input {...field} placeholder="Ingresa tu apellido" />}
              />
              <p style={{ color: "red" }}>{errors.apellido?.message}</p>
            </Field.Root>

            {/* Correo */}
            <Field.Root invalid={!!errors.correo}>
              <Field.Label>Correo Electrónico</Field.Label>
              <Controller
                name="correo"
                control={control}
                render={({ field }) => <Input {...field} type="email" placeholder="Ingresa tu correo electrónico" />}
              />
              <p style={{ color: "red" }}>{errors.correo?.message}</p>
            </Field.Root>

            {/* Contraseña */}
            <Field.Root invalid={!!errors.contraseña}>
              <Field.Label>Contraseña</Field.Label>
              <Controller
                name="contraseña"
                control={control}
                render={({ field }) => <Input {...field} type="password" placeholder="Ingresa tu contraseña" />}
              />
              <p style={{ color: "red" }}>{errors.contraseña?.message}</p>
            </Field.Root>

            {/* Teléfono */}
            <Field.Root invalid={!!errors.telefono}>
              <Field.Label>Teléfono</Field.Label>
              <Controller
                name="telefono"
                control={control}
                render={({ field }) => <Input {...field} type="tel" placeholder="Ingresa tu número de teléfono" />}
              />
              <p style={{ color: "red" }}>{errors.telefono?.message}</p>
            </Field.Root>
          </Fieldset.Content>

          {/* Mensaje de error general */}
          {Object.keys(errors).length > 0 && (
            <Fieldset.ErrorText>
              Algunos campos son inválidos. Por favor, verifica la información.
            </Fieldset.ErrorText>
          )}

          {/* Botón de envío */}
          <Button type="submit" colorScheme="blue" mt={4}>
            Registrarse
          </Button>
        </Fieldset.Root>
      </form>

      {/* Tabla de usuarios */}
      {
        users.length > 0 && (
          <Table.Root size="md" mt={2}>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>Nombre</Table.ColumnHeader>
                <Table.ColumnHeader>Apellido</Table.ColumnHeader>
                <Table.ColumnHeader>Correo Electrónico</Table.ColumnHeader>
                <Table.ColumnHeader>Teléfono</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {users.map((user) => (
                <Table.Row key={user.id}>
                  <Table.Cell>{user.nombre}</Table.Cell>
                  <Table.Cell>{user.apellido}</Table.Cell>
                  <Table.Cell>{user.correo}</Table.Cell>
                  <Table.Cell>{user.telefono}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        )
      }
    </>
  );
};