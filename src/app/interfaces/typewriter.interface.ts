export interface TypeWriterConfig {
  typeSpeed: number;
  content: Array<Array<TypeWriterLine>>;
  fontFamily: string;
}

export interface TypeWriterLine {
  color?: string;
  fontFamily?: string;
  value: string;
}
