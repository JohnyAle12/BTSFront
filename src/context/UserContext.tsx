import { createContext } from "react";
import { ContextApp } from "../types/ContextApp";

const context: ContextApp = {}

export const UserContext = createContext(context);
