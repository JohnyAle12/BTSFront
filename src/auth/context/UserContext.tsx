import { createContext } from "react";
import { ContextApp } from "../interfaces/types";

const context: ContextApp = {}

export const UserContext = createContext(context);
