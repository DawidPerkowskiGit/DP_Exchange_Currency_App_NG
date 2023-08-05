import { EnvironmentPlugin} from 'webpack'

module.exports = {
    plugins: [
        new EnvironmentPlugin(['NG_API_KEY']),
    ],
};