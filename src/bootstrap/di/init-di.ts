import "reflect-metadata";
import { DependencyContainer, container } from "tsyringe";
import initStoresDI from "~/bootstrap/di/init-stores-di";

/**
 * Serves as a central point for initializing and configuring
 *  the DI container, ensuring that all necessary dependencies
 *  are registered and available for injection throughout the application.
 */
const InitDI = (): DependencyContainer => {
  const di = container;
  initStoresDI(di);
  return di;
};

const di = InitDI();

export default di;
