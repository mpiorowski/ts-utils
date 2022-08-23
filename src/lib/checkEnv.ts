export const checkEnv = (envVar: string) => {
  const env = process.env[envVar];
  if (!env) {
    throw Error(`Environment not set: ${envVar}`);
  } else {
    return env;
  }
};
