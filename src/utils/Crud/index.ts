import { AxiosError, AxiosRequestConfig } from "axios";
import axios, { api } from "config/axios";
import * as z from "zod";

type ServiceShape<Data extends z.ZodFirstPartySchemaTypes = any> = {
  name: string;
  path: string;
  type: "put" | "get" | "post";
  errorResponseSchema: z.ZodFirstPartySchemaTypes;
  successResponseSchema: z.ZodFirstPartySchemaTypes;
  params?: Data;
  config?: AxiosRequestConfig<z.infer<Data>>;
};

const SERVICE_KEYS = {
  TESTE_1: "teste_1",
  TESTE_2: "teste_2",
} as const;

type ServiceKey = (typeof SERVICE_KEYS)[keyof typeof SERVICE_KEYS];

const serviceSchema: Record<ServiceKey, ServiceShape> = {
  teste_1: {
    name: "createLocation",
    path: "/location/path",
    type: "put",
    errorResponseSchema: z.object({ messages: z.array(z.string()) }),
    successResponseSchema: z.object({ response_1: z.string() }),
    params: z.object({
      teste: z.string(),
    }),
  },
  teste_2: {
    name: "createLocation",
    path: "/location/path",
    type: "put",
    errorResponseSchema: z.object({ messages: z.array(z.string()) }),
    successResponseSchema: z.object({ response_2: z.string() }),
    params: z.object({}),
  },
};

export function createServices(schema = serviceSchema) {
  let createdServices: {
    [key in keyof typeof schema]?: (
      params: z.infer<(typeof schema)[key]["params"]>
    ) => Promise<
      | {
          success: true;
          data: z.infer<(typeof schema)[key]["successResponseSchema"]>;
        }
      | {
          success: false;
          data: z.infer<(typeof schema)[key]["errorResponseSchema"]>;
        }
    >;
  } = {};

  let schemaKey: keyof typeof schema;
  for (schemaKey in schema) {
    const { type, path, successResponseSchema, errorResponseSchema } =
      schema[schemaKey];

    const serviceFunction = async (params: any) => {
      try {
        const { data } = await api[type as "put" | "get" | "post" | "delete"]<
          z.infer<typeof successResponseSchema>
        >(path);
        return {
          success: true,
          data,
        };
      } catch (err) {
        return {
          success: false,
          data: err as AxiosError<z.infer<typeof errorResponseSchema>>,
        };
      }
    };

    createdServices[schemaKey] = serviceFunction as any;
  }

  return createdServices as Required<typeof createdServices>;
}

const service = createServices();

async () => {
  const response = await service.teste_1({ teste: "teste" });

  if (response.success) {
    response.data;

    return;
  }

  response.data.messages;
};

async () => {
  const response = await service.teste_2({ teste: "teste" });

  if (response.success) {
    response.data;
    return;
  }

  response.data.messages;
};
