import { DEV_BACKEND_URL, PRODUCTION_BACKEND_URL } from "@env"

const devEnvironmentVariable = {
    BACKEND_URL: DEV_BACKEND_URL,
}
const prodEnvironmentVariable = {
    PROUD_BACKEND_URL: PRODUCTION_BACKEND_URL,
}

export default __DEV__ ? devEnvironmentVariable : prodEnvironmentVariable