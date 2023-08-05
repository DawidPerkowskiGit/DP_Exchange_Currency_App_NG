// declare var process: Process;

interface Process {
    env: Env;
}

interface Env {
    NG_API_KEY: string;
}

interface GlobalEnviroment {
    process: Process;
}