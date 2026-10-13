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
import { useLanguage } from "@/i18n/languageContext";

export const FormDemo = () => {
  const { t } = useLanguage();
  const f = t.demos.form;

  // Esquema de validación con Yup (se construye por render para traducir mensajes)
  const schema = yup.object().shape({
    nombre: yup.string().required(f.errors.name),
    apellido: yup.string().required(f.errors.lastName),
    correo: yup.string().email(f.errors.emailInvalid).required(f.errors.email),
    contraseña: yup.string().min(6, f.errors.passwordMin).required(f.errors.password),
    telefono: yup.string().matches(/^[0-9]+$/, f.errors.phoneDigits).required(f.errors.phone),
  });

  type User = {
    id: number;
    nombre: string;
    apellido: string;
    correo: string;
    telefono: string;
  };

  const [users, setUsers] = useState<User[]>([]);

  const initialValues = {
    nombre: '',
    apellido: '',
    correo: '',
    contraseña: '',
    telefono: ''
  };

  type FormValues = yup.InferType<typeof schema>;

  const { control, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
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
              <Field.Label>{f.name}</Field.Label>
              <Controller
                name="nombre"
                control={control}
                render={({ field }) => <Input {...field} placeholder={f.placeholders.name} />}
              />
              <p style={{ color: "red" }}>{errors.nombre?.message}</p>
            </Field.Root>

            {/* Apellido */}
            <Field.Root invalid={!!errors.apellido}>
              <Field.Label>{f.lastName}</Field.Label>
              <Controller
                name="apellido"
                control={control}
                render={({ field }) => <Input {...field} placeholder={f.placeholders.lastName} />}
              />
              <p style={{ color: "red" }}>{errors.apellido?.message}</p>
            </Field.Root>

            {/* Correo */}
            <Field.Root invalid={!!errors.correo}>
              <Field.Label>{f.email}</Field.Label>
              <Controller
                name="correo"
                control={control}
                render={({ field }) => <Input {...field} type="email" placeholder={f.placeholders.email} />}
              />
              <p style={{ color: "red" }}>{errors.correo?.message}</p>
            </Field.Root>

            {/* Contraseña */}
            <Field.Root invalid={!!errors.contraseña}>
              <Field.Label>{f.password}</Field.Label>
              <Controller
                name="contraseña"
                control={control}
                render={({ field }) => <Input {...field} type="password" placeholder={f.placeholders.password} />}
              />
              <p style={{ color: "red" }}>{errors.contraseña?.message}</p>
            </Field.Root>

            {/* Teléfono */}
            <Field.Root invalid={!!errors.telefono}>
              <Field.Label>{f.phone}</Field.Label>
              <Controller
                name="telefono"
                control={control}
                render={({ field }) => <Input {...field} type="tel" placeholder={f.placeholders.phone} />}
              />
              <p style={{ color: "red" }}>{errors.telefono?.message}</p>
            </Field.Root>
          </Fieldset.Content>

          {/* Mensaje de error general */}
          {Object.keys(errors).length > 0 && (
            <Fieldset.ErrorText>
              {f.errors.general}
            </Fieldset.ErrorText>
          )}

          {/* Botón de envío */}
          <Button type="submit" colorScheme="blue" mt={4}>
            {f.submit}
          </Button>
        </Fieldset.Root>
      </form>

      {/* Tabla de usuarios */}
      {
        users.length > 0 && (
          <Table.Root size="md" mt={2}>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>{f.name}</Table.ColumnHeader>
                <Table.ColumnHeader>{f.lastName}</Table.ColumnHeader>
                <Table.ColumnHeader>{f.email}</Table.ColumnHeader>
                <Table.ColumnHeader>{f.phone}</Table.ColumnHeader>
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
