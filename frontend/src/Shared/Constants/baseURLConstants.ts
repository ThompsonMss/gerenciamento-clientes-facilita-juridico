export const baseURLConstants = import.meta.env.MODE !== "production"
    ? import.meta.env.VITE_API
    : import.meta.env.VITE_API;