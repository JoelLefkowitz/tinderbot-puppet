export function getEnv(name: string, fallback: any = null): any {
  return name in process.env ? process.env[name] : fallback;
}
