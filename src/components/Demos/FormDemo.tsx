import { Box, Button, Input } from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("El nombre es obligatorio"),
  email: yup.string().email("Debe ser un correo válido").required("El correo es obligatorio"),
  password: yup.string().min(6, "La contraseña debe tener al menos 6 caracteres").required("La contraseña es obligatoria"),
});

export const FormDemo = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log("Datos enviados:", data);
  };

  return (
    <Box p="20px" borderRadius="10px" boxShadow="md" bg="white">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Nombre */}
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Box mb="4">
              <Input {...field} placeholder="Nombre" />
              {/* {errors.name && <FormErrorMessage>{errors.name.message}</FormErrorMessage>} */}
            </Box>
          )}
        />

        {/* Email */}
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Box mb="4">
              <Input {...field} placeholder="Correo" />
              {errors.email && <FormErrorMessage>{errors.email.message}</FormErrorMessage>}
            </Box>
          )}
        />

        {/* Contraseña */}
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Box mb="4">
              <Input {...field} placeholder="Contraseña" type="password" />
              {errors.password && <FormErrorMessage>{errors.password.message}</FormErrorMessage>}
            </Box>
          )}
        />

        <Button type="submit" colorScheme="blue">Registrarse</Button>
      </form>
    </Box>
  );
};