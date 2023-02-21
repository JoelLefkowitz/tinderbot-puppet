export interface Bot {
  url: string;
  loop: () => Promise<void>;
}
