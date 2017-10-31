export interface IMenu{
  label?: string;
  icon?: string;
  command?: (event?: any) => void;
  url?: string;
  routerLink?: any;
  expanded?: boolean;
  disabled?: boolean;
  visible?: boolean;
  target?: string;
}

export interface IMessage {
  severity?: string;
  summary?: string;
  detail?: string;
  id?: any;
}

export interface SelectItem {
  label: string;
  value: any;
}