// prisma.config.ts
import { defineConfig } from "@prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // Aquí es donde se vincula la variable de entorno
    url: "postgresql://roborage_mndx_user:4KGSWM6xamZAzkumxDnDQFuhXMKVSmjZ@dpg-d7or111o3t8c7386liog-a/roborage_mndx"
  },
});