import { Router } from "express";
import { ensureAuthenticatedCustomer } from "./middlewares/ensureAuthenticatedCustomer";
import { AuthenticateCustomerController } from "./modules/accounts/usecases/AuthenticateCustomer/AuthenticateCustomerController";
import { AuthenticateDeliverymanController } from "./modules/accounts/usecases/AuthenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateCustomerController } from "./modules/customers/usecases/CreateCustomer/CreateCustomerController";
import { CreateDeliveryController } from "./modules/deliveries/usecases/CreateDelivery/CreateDeliveryController";
import { GetAllAvailableController } from "./modules/deliveries/usecases/GetAllAvailable/GetAllAvailableController";
import { CreateDeliverymanController } from "./modules/deliverymans/usecases/CreateDeliveryman/CreateDeliverymanController";

const routes = Router();

const createCustomerController = new CreateCustomerController();
const createDeliverymanController = new CreateDeliverymanController();

const authenticateCustomerController = new AuthenticateCustomerController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();

const createDeliveryController = new CreateDeliveryController();
const getAllAvailableController = new GetAllAvailableController();

routes.post("/customers", createCustomerController.handle);
routes.post("/customers/login", authenticateCustomerController.handle);

routes.post("/deliverymans", createDeliverymanController.handle);
routes.post("/deliverymans/login", authenticateDeliverymanController.handle);

routes.post("/deliveries", ensureAuthenticatedCustomer, createDeliveryController.handle);
routes.get("/deliveries", ensureAuthenticatedCustomer, getAllAvailableController.handle)

routes.use((_, response) => {
  return response.status(404).json({
    status: 404,
    message: "Route not found!"
  });
});

export { routes };
