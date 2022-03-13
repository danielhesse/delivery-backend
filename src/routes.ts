import { Router } from "express";
import { AuthenticateCustomerController } from "./modules/accounts/usecases/AuthenticateCustomer/AuthenticateCustomerController";
import { CreateCustomerController } from "./modules/customers/usecases/CreateCustomer/CreateCustomerController";
import { CreateDeliverymanController } from "./modules/deliverymans/usecases/CreateDeliveryman/CreateDeliverymanController";

const routes = Router();

const createCustomerController = new CreateCustomerController();
const authenticateCustomerController = new AuthenticateCustomerController();
const createDeliverymanController = new CreateDeliverymanController();

routes.post("/customers", createCustomerController.handle);

routes.post("/login", authenticateCustomerController.handle);

routes.post("/deliverymans", createDeliverymanController.handle);

routes.use((_, response) => {
  return response.status(404).json({
    status: 404,
    message: "Route not found!"
  });
});

export { routes };
