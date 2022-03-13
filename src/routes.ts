import { Router } from "express";
import { CreateCustomerController } from "./modules/customers/usecases/CreateCustomer/CreateCustomerController";

const routes = Router();

const createCustomerController = new CreateCustomerController();

routes.post("/customers", createCustomerController.handle);

routes.use((_, response) => {
  return response.status(404).json({
    status: 404,
    message: "Route not found!"
  });
});

export { routes };
